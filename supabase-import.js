(() => {
  'use strict';

  const SAMPLE_IDS = new Set([
    'post-001',
    'post-002',
    'post-003',
    'post-004',
    'post-005',
    'post-006'
  ]);
  const STORAGE_BUCKET = 'mumyeong-media';
  const MAX_IMAGE_SIZE = 20 * 1024 * 1024;
  const ALLOWED_IMAGE_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/gif']);
  const MAX_PREVIEW_ITEMS = 100;
  const elements = {
    backupFile: document.getElementById('backupFile'),
    fileName: document.getElementById('fileName'),
    configState: document.getElementById('configState'),
    loadStatus: document.getElementById('loadStatus'),
    previewPanel: document.getElementById('previewPanel'),
    resultPanel: document.getElementById('resultPanel'),
    totalRecords: document.getElementById('totalRecords'),
    sampleRecords: document.getElementById('sampleRecords'),
    eligibleRecords: document.getElementById('eligibleRecords'),
    unknownRecords: document.getElementById('unknownRecords'),
    allImages: document.getElementById('allImages'),
    linkedImages: document.getElementById('linkedImages'),
    orphanImages: document.getElementById('orphanImages'),
    invalidRecords: document.getElementById('invalidRecords'),
    backupSummaryNote: document.getElementById('backupSummaryNote'),
    eligiblePreview: document.getElementById('eligiblePreview'),
    invalidPreview: document.getElementById('invalidPreview'),
    unknownPreview: document.getElementById('unknownPreview'),
    samplePreview: document.getElementById('samplePreview'),
    startImport: document.getElementById('startImport'),
    clearFile: document.getElementById('clearFile'),
    importProgress: document.getElementById('importProgress'),
    importStatus: document.getElementById('importStatus'),
    importedCount: document.getElementById('importedCount'),
    skippedCount: document.getElementById('skippedCount'),
    failedCount: document.getElementById('failedCount'),
    uploadedImageCount: document.getElementById('uploadedImageCount'),
    failedImageCount: document.getElementById('failedImageCount'),
    resultList: document.getElementById('resultList'),
    downloadReport: document.getElementById('downloadReport'),
    verificationSql: document.getElementById('verificationSql')
  };

  let parsedBackup = null;
  let importRunning = false;
  let importReport = null;

  elements.configState.textContent = hasSupabaseConfig()
    ? 'Supabase URL과 publishable key가 설정되어 있습니다. 연결·익명 인증은 이전 시작 버튼을 누른 뒤에만 시도합니다.'
    : 'supabase-config.js에서 프로젝트 URL과 publishable/anon key를 확인해 주세요. Secret key나 service_role key는 사용하지 않습니다.';
  elements.configState.dataset.state = hasSupabaseConfig() ? 'success' : 'error';
  elements.backupFile.addEventListener('change', handleFileSelection);
  elements.clearFile.addEventListener('click', clearSelection);
  elements.startImport.addEventListener('click', startImport);
  elements.downloadReport.addEventListener('click', downloadReport);

  function hasSupabaseConfig() {
    const config = window.MUMYEONG_SUPABASE_CONFIG;
    return Boolean(
      config?.url &&
      config?.anonKey &&
      /^https:\/\/[a-z0-9-]+\.supabase\.co\/?$/i.test(config.url) &&
      isPublishableKey(config.anonKey)
    );
  }

  function isPublishableKey(key) {
    if (/^sb_publishable_[A-Za-z0-9_-]+$/.test(key)) return true;
    const parts = key.split('.');
    if (parts.length !== 3) return false;
    try {
      const base64 = parts[1].replace(/-/g, '+').replace(/_/g, '/');
      const padded = base64.padEnd(base64.length + ((4 - (base64.length % 4)) % 4), '=');
      const payload = JSON.parse(atob(padded));
      return payload.role === 'anon';
    } catch {
      return false;
    }
  }

  function setStatus(element, message, state = '') {
    element.textContent = message;
    element.dataset.state = state;
  }

  function classifyRecord(record) {
    const id = String(record?.id ?? '');
    if (SAMPLE_IDS.has(id)) return 'sample';
    if (record?.localOwned === true || /^post-\d{13}$/.test(id)) return 'user';
    return 'unknown';
  }

  function codePointLength(value) {
    return Array.from(String(value ?? '')).length;
  }

  function getString(record, key) {
    return typeof record?.[key] === 'string' ? record[key].trim() : '';
  }

  function getNumeric(record, key) {
    const value = record?.[key];
    if ((typeof value !== 'number' && typeof value !== 'string') || String(value).trim() === '') return NaN;
    return Number(value);
  }

  function safeDate(value, dateOnly = false) {
    if (typeof value !== 'string' || !value.trim()) return null;
    const candidate = value.trim();
    if (dateOnly) {
      if (!/^\d{4}-\d{2}-\d{2}$/.test(candidate)) return null;
      const parsed = new Date(`${candidate}T00:00:00.000Z`);
      return Number.isNaN(parsed.getTime()) || parsed.toISOString().slice(0, 10) !== candidate ? null : candidate;
    }
    const parsed = new Date(candidate);
    return Number.isNaN(parsed.getTime()) ? null : parsed.toISOString();
  }

  function imageMapFromBackup(images) {
    const imageMap = new Map();
    const duplicateKeys = new Set();
    images.forEach((image) => {
      const key = String(image?.imageKey ?? '');
      if (!key) return;
      if (imageMap.has(key)) duplicateKeys.add(key);
      else imageMap.set(key, image);
    });
    return { imageMap, duplicateKeys };
  }

  function duplicateRecordIds(records) {
    const seen = new Set();
    const duplicates = new Set();
    records.forEach((record) => {
      const id = String(record?.id ?? '').trim();
      if (!id) return;
      if (seen.has(id)) duplicates.add(id);
      else seen.add(id);
    });
    return duplicates;
  }

  function estimateBase64Bytes(data) {
    if (typeof data !== 'string') return NaN;
    const normalized = data.replace(/\s/g, '');
    if (!normalized || normalized.length % 4 !== 0 || !/^[A-Za-z0-9+/]*={0,2}$/.test(normalized)) return NaN;
    const padding = normalized.endsWith('==') ? 2 : normalized.endsWith('=') ? 1 : 0;
    return Math.max(0, (normalized.length * 3) / 4 - padding);
  }

  function parseDataUrl(dataUrl) {
    if (typeof dataUrl !== 'string') return null;
    const match = dataUrl.match(/^data:(image\/(?:jpeg|png|webp|gif));base64,([A-Za-z0-9+/=\s]+)$/i);
    if (!match) return null;
    const mimeType = match[1].toLowerCase();
    const data = match[2].replace(/\s/g, '');
    const sizeBytes = estimateBase64Bytes(data);
    if (!Number.isFinite(sizeBytes)) return null;
    return { mimeType, data, sizeBytes, filename: `inline.${extensionFor(mimeType)}`, encoding: 'base64' };
  }

  function extensionFor(mimeType) {
    return ({ 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp', 'image/gif': 'gif' })[mimeType] || 'bin';
  }

  function safeHttpUrl(value) {
    if (typeof value !== 'string') return '';
    try {
      const url = new URL(value);
      return url.protocol === 'https:' || url.protocol === 'http:' ? url.href : '';
    } catch {
      return '';
    }
  }

  function imageInfoFor(record, imageMap, duplicateKeys) {
    const imageKey = record?.imageKey === undefined || record?.imageKey === null
      ? ''
      : String(record.imageKey);
    if (imageKey) {
      if (duplicateKeys.has(imageKey)) return { kind: 'invalid', issue: `백업에 imageKey "${imageKey}"가 중복되어 있습니다.` };
      const image = imageMap.get(imageKey);
      if (image) {
        const mimeType = String(image.mimeType || '').toLowerCase();
        const data = typeof image.data === 'string' ? image.data.replace(/\s/g, '') : '';
        const sizeBytes = estimateBase64Bytes(data);
        if (image.encoding !== 'base64' || !ALLOWED_IMAGE_TYPES.has(mimeType) || !Number.isFinite(sizeBytes)) {
          return { kind: 'invalid', issue: `사진 "${image.filename || imageKey}"의 Base64 또는 MIME 형식이 유효하지 않습니다.` };
        }
        if (Number.isFinite(Number(image.sizeBytes)) && Number(image.sizeBytes) !== sizeBytes) {
          return { kind: 'invalid', issue: `사진 "${image.filename || imageKey}"의 데이터 크기가 백업 메타데이터와 다릅니다.` };
        }
        if (sizeBytes > MAX_IMAGE_SIZE) {
          return { kind: 'invalid', issue: `사진 "${image.filename || imageKey}"이 20 MB 제한을 초과합니다.` };
        }
        return { kind: 'backup', imageKey, filename: String(image.filename || `${imageKey}.${extensionFor(mimeType)}`), mimeType, data, sizeBytes };
      }
      const externalUrl = safeHttpUrl(record.image);
      if (externalUrl) return { kind: 'external', url: externalUrl, issue: `imageKey "${imageKey}"의 백업 사진 파일이 없어 기존 HTTP 이미지 URL만 유지합니다.` };
      return { kind: 'missing', issue: `imageKey "${imageKey}"에 해당하는 사진 파일이 백업에 없습니다.` };
    }

    if (typeof record?.image === 'string' && record.image.startsWith('data:')) {
      const inline = parseDataUrl(record.image);
      if (!inline || !ALLOWED_IMAGE_TYPES.has(inline.mimeType)) {
        return { kind: 'invalid', issue: '기록에 포함된 data URL 사진 형식을 해석할 수 없습니다.' };
      }
      if (inline.sizeBytes > MAX_IMAGE_SIZE) return { kind: 'invalid', issue: '기록에 포함된 사진이 20 MB 제한을 초과합니다.' };
      return { kind: 'inline', ...inline };
    }

    const externalUrl = safeHttpUrl(record?.image);
    if (externalUrl) return { kind: 'external', url: externalUrl };
    if (record?.image) return { kind: 'invalid', issue: '사진 주소가 HTTP(S) URL이 아니며 백업 이미지 데이터도 없습니다.' };
    return { kind: 'none' };
  }

  function validateRecord(record, imageInfo, duplicateIds = new Set()) {
    const issues = [];
    if (!record || typeof record !== 'object' || Array.isArray(record)) return ['게시물 항목이 올바른 객체가 아닙니다.'];
    if (record.id === undefined || record.id === null || String(record.id).trim() === '') issues.push('원본 게시물 ID가 없습니다.');
    else if (duplicateIds.has(String(record.id))) issues.push('백업에 같은 원본 게시물 ID가 여러 번 있어 안전하게 이전할 수 없습니다.');
    if (codePointLength(getString(record, 'nickname')) < 1 || codePointLength(getString(record, 'nickname')) > 30) issues.push('작성자 닉네임은 1~30자여야 합니다.');
    if (codePointLength(getString(record, 'title')) < 1 || codePointLength(getString(record, 'title')) > 120) issues.push('제목은 1~120자여야 합니다.');
    if (codePointLength(getString(record, 'content')) < 1 || codePointLength(getString(record, 'content')) > 5000) issues.push('본문은 1~5000자여야 합니다.');
    if (!['KR', 'JP'].includes(record.country)) issues.push('국가는 KR 또는 JP여야 합니다.');
    if (codePointLength(getString(record, 'region')) < 1 || codePointLength(getString(record, 'region')) > 80) issues.push('지역은 1~80자여야 합니다.');
    if (codePointLength(getString(record, 'category')) < 1 || codePointLength(getString(record, 'category')) > 30) issues.push('카테고리는 1~30자여야 합니다.');
    const lat = getNumeric(record, 'lat');
    const lng = getNumeric(record, 'lng');
    if (!Number.isFinite(lat) || lat < -90 || lat > 90) issues.push('위도 값이 유효하지 않습니다.');
    if (!Number.isFinite(lng) || lng < -180 || lng > 180) issues.push('경도 값이 유효하지 않습니다.');
    if (record.recordDate && !safeDate(record.recordDate, true)) issues.push('기록일 형식이 YYYY-MM-DD가 아닙니다.');
    if (record.createdAt && !safeDate(record.createdAt)) issues.push('작성일(createdAt)을 해석할 수 없습니다.');
    if (imageInfo.kind === 'invalid' || imageInfo.kind === 'missing') issues.push(imageInfo.issue);
    return issues;
  }

  async function handleFileSelection() {
    if (importRunning) return;
    const file = elements.backupFile.files?.[0];
    elements.resultPanel.classList.add('hidden');
    elements.downloadReport.disabled = true;
    elements.resultList.replaceChildren();
    importReport = null;
    clearPreviewOnly();
    if (!file) return;

    elements.fileName.textContent = `${file.name} · ${formatBytes(file.size)}`;
    setStatus(elements.loadStatus, '백업 JSON을 읽고 검증하고 있습니다. 아직 Supabase에는 연결하지 않았습니다.');
    try {
      const parsed = JSON.parse(await file.text());
      if (!parsed || typeof parsed !== 'object' || !Array.isArray(parsed.records)) {
        throw new Error('records 배열이 없는 백업 JSON입니다.');
      }
      parsedBackup = {
        format: parsed.format || 'MUMYEONG local data backup',
        version: parsed.version ?? null,
        createdAt: parsed.createdAt || null,
        summary: parsed.summary && typeof parsed.summary === 'object' ? parsed.summary : {},
        records: parsed.records,
        images: Array.isArray(parsed.images) ? parsed.images : [],
        duplicateRecordIds: duplicateRecordIds(parsed.records)
      };
      renderPreview(parsedBackup);
      elements.previewPanel.classList.remove('hidden');
      const { imageMap, duplicateKeys } = imageMapFromBackup(parsedBackup.images);
      const hasImportableRecord = parsedBackup.records.some((record) => classifyRecord(record) === 'user'
        && !validateRecord(record, imageInfoFor(record, imageMap, duplicateKeys), parsedBackup.duplicateRecordIds).length);
      elements.startImport.disabled = !hasSupabaseConfig() || !hasImportableRecord;
      const unknownCount = parsedBackup.records.filter((record) => classifyRecord(record) === 'unknown').length;
      setStatus(
        elements.loadStatus,
        `백업을 읽었습니다. 실제 게시물 중 검증된 항목만 이전 대상으로 표시했고, 분류 불확실 ${unknownCount}개는 자동 제외합니다.`
      );
    } catch (error) {
      parsedBackup = null;
      elements.previewPanel.classList.add('hidden');
      setStatus(elements.loadStatus, error.message || '백업 파일을 읽지 못했습니다.', 'error');
    }
  }

  function renderPreview(backup) {
    const { imageMap, duplicateKeys } = imageMapFromBackup(backup.images);
    const sample = [];
    const eligible = [];
    const invalid = [];
    const unknown = [];
    const allRefs = new Set();
    const eligibleImageKeys = new Set();
    let invalidCount = 0;

    backup.records.forEach((record) => {
      const classification = classifyRecord(record);
      const id = String(record?.id ?? '(ID 없음)');
      if (record?.imageKey !== undefined && record?.imageKey !== null && String(record.imageKey)) {
        allRefs.add(String(record.imageKey));
      }
      const imageInfo = imageInfoFor(record, imageMap, duplicateKeys);
      const issues = validateRecord(record, imageInfo, backup.duplicateRecordIds);
      const item = { record, id, imageInfo, issues };

      if (classification === 'sample') sample.push(item);
      else if (classification === 'user') {
        if (issues.length) invalidCount += 1;
        if (issues.length) invalid.push(item);
        else {
          eligible.push(item);
          if (imageInfo.kind === 'backup') eligibleImageKeys.add(imageInfo.imageKey);
          if (imageInfo.kind === 'inline') eligibleImageKeys.add(`inline:${id}`);
        }
      } else unknown.push(item);
    });

    elements.totalRecords.textContent = String(backup.records.length);
    elements.sampleRecords.textContent = String(sample.length);
    elements.eligibleRecords.textContent = String(eligible.length);
    elements.unknownRecords.textContent = String(unknown.length);
    elements.allImages.textContent = String(backup.images.length);
    elements.linkedImages.textContent = String(eligibleImageKeys.size);
    elements.orphanImages.textContent = String(backup.images.filter((image) => !allRefs.has(String(image?.imageKey ?? ''))).length);
    elements.invalidRecords.textContent = String(invalidCount);
    elements.backupSummaryNote.textContent = [
      backup.createdAt ? `백업 생성: ${backup.createdAt}` : '백업 생성 시각 없음',
      backup.version !== null ? `형식 버전: ${backup.version}` : '버전 정보 없음',
      `연결 가능한 사진 데이터 URL: ${backup.records.filter((record) => typeof record?.image === 'string' && record.image.startsWith('data:')).length}개`,
      `댓글 ${backup.records.reduce((sum, record) => sum + (Array.isArray(record?.comments) ? record.comments.length : 0), 0)}개는 작성자 ID가 없어 이전하지 않습니다.`,
      `기존 공감수 ${backup.records.reduce((sum, record) => sum + (Number.isFinite(Number(record?.likes)) ? Number(record.likes) : 0), 0)}는 사용자별 공감 이력이 아니므로 생성하지 않습니다.`
    ].join(' · ');

    renderRecordList(elements.eligiblePreview, eligible, '이전 가능한 게시물이 없습니다.', 'eligible');
    renderRecordList(elements.invalidPreview, invalid, '검증에 실패한 실제 게시물이 없습니다.', 'invalid');
    renderRecordList(elements.unknownPreview, unknown, '분류가 불확실한 게시물이 없습니다.', 'unknown');
    renderRecordList(elements.samplePreview, sample, '제외되는 샘플 게시물이 없습니다.', 'sample');
    elements.importProgress.value = 0;
    elements.importStatus.textContent = '실제 업로드는 아직 시작되지 않았습니다.';
  }

  function renderRecordList(container, items, emptyText, kind) {
    container.replaceChildren();
    if (!items.length) {
      const empty = document.createElement('p');
      empty.className = 'empty';
      empty.textContent = emptyText;
      container.append(empty);
      return;
    }

    items.slice(0, MAX_PREVIEW_ITEMS).forEach(({ record, id, imageInfo, issues }) => {
      const card = document.createElement('article');
      card.className = 'record-card';
      const top = document.createElement('div');
      top.className = 'record-top';
      const title = document.createElement('span');
      title.className = 'record-title';
      title.textContent = getString(record, 'title') || '(제목 없음)';
      const legacyId = document.createElement('span');
      legacyId.className = 'record-id';
      legacyId.textContent = `원본 ID: ${id}`;
      top.append(title, legacyId);

      const meta = document.createElement('p');
      meta.className = 'record-meta';
      const location = [record?.country, record?.region, getString(record, 'locationLabel')].filter(Boolean).join(' · ');
      const photoLabel = imageInfo.kind === 'backup' || imageInfo.kind === 'inline'
        ? `사진 ${imageInfo.filename} (${formatBytes(imageInfo.sizeBytes)})`
        : imageInfo.kind === 'external' ? '기존 외부 사진 URL 유지 (Storage 업로드 없음)' : '사진 없음';
      const legacyCounts = `댓글 ${Array.isArray(record?.comments) ? record.comments.length : 0} · 공감 수 ${Number.isFinite(Number(record?.likes)) ? Number(record.likes) : 0} (이전 안 함)`;
      meta.textContent = [
        `${getString(record, 'nickname') || '작성자 없음'} · ${location || '지역 정보 없음'}`,
        photoLabel,
        legacyCounts
      ].join(' | ');
      card.append(top, meta);

      if (kind === 'unknown') {
        const note = document.createElement('p');
        note.className = 'record-issue';
        note.textContent = '기록 생성 여부를 확정할 수 없어 자동 이전하지 않습니다.';
        card.append(note);
      } else if (issues.length) {
        const note = document.createElement('p');
        note.className = 'record-issue';
        note.textContent = issues.join(' ');
        card.append(note);
      } else if (kind === 'eligible' && imageInfo.issue) {
        const note = document.createElement('p');
        note.className = 'record-issue';
        note.textContent = imageInfo.issue;
        card.append(note);
      }
      container.append(card);
    });

    if (items.length > MAX_PREVIEW_ITEMS) {
      const note = document.createElement('p');
      note.className = 'small';
      note.textContent = `나머지 ${items.length - MAX_PREVIEW_ITEMS}개 항목은 화면 미리보기에서 생략되지만, 이전 대상이면 처리됩니다.`;
      container.append(note);
    }
  }

  function clearPreviewOnly() {
    parsedBackup = null;
    elements.previewPanel.classList.add('hidden');
    elements.startImport.disabled = true;
    elements.loadStatus.textContent = '';
  }

  function clearSelection() {
    if (importRunning) return;
    elements.backupFile.value = '';
    elements.fileName.textContent = '선택된 파일 없음';
    elements.resultPanel.classList.add('hidden');
    importReport = null;
    clearPreviewOnly();
    setStatus(elements.loadStatus, '파일 선택을 취소했습니다. 원본 백업 파일은 변경하지 않았습니다.');
  }

  function formatBytes(bytes) {
    if (!Number.isFinite(Number(bytes)) || Number(bytes) < 0) return '크기 불명';
    if (Number(bytes) < 1024) return `${Number(bytes)} B`;
    const units = ['KB', 'MB', 'GB', 'TB'];
    let value = Number(bytes) / 1024;
    let index = 0;
    while (value >= 1024 && index < units.length - 1) {
      value /= 1024;
      index += 1;
    }
    return `${value.toFixed(1)} ${units[index]}`;
  }

  async function createClientAndGetAnonymousUser() {
    if (!hasSupabaseConfig()) throw new Error('supabase-config.js에 유효한 Supabase URL과 publishable key가 필요합니다.');
    if (!window.supabase?.createClient) throw new Error('Supabase JavaScript SDK를 불러오지 못했습니다. CDN 연결을 확인해 주세요.');

    const config = window.MUMYEONG_SUPABASE_CONFIG;
    const client = window.supabase.createClient(config.url, config.anonKey);
    const { data: sessionData, error: sessionError } = await client.auth.getSession();
    if (sessionError) throw sessionError;
    let user = sessionData.session?.user || null;

    if (!user) {
      const { data, error } = await client.auth.signInAnonymously();
      if (error) throw error;
      user = data.user;
    } else if (user.is_anonymous === false) {
      throw new Error('현재 브라우저에 비익명 Supabase 계정이 로그인되어 있습니다. 이 도구에서는 기존 계정 세션을 이용하지 않습니다.');
    }
    if (!user?.id) throw new Error('익명 인증에서 사용자 ID를 받지 못했습니다.');
    return { client, user };
  }

  async function ensureProfile(client, userId) {
    const { data: existing, error: selectError } = await client
      .from('profiles')
      .select('id')
      .eq('id', userId)
      .maybeSingle();
    if (selectError) throw new Error(`profiles 조회 실패: ${selectError.message}`);
    if (existing) return;

    const { error: insertError } = await client.from('profiles').insert({
      id: userId,
      nickname: '무명 데이터 이전'
    });
    if (!insertError) return;

    const { data: afterInsert, error: retryError } = await client
      .from('profiles')
      .select('id')
      .eq('id', userId)
      .maybeSingle();
    if (retryError || !afterInsert) {
      throw new Error(`profiles 등록 실패: ${insertError.message}`);
    }
  }

  async function stableRecordUuid(projectUrl, legacyId) {
    if (!globalThis.crypto?.subtle) throw new Error('안정적인 ID 생성을 위해 HTTPS 또는 localhost의 Web Crypto가 필요합니다.');
    const input = new TextEncoder().encode(`mumyeong-import:v1:${projectUrl}:${legacyId}`);
    const digest = new Uint8Array(await crypto.subtle.digest('SHA-256', input));
    const bytes = digest.slice(0, 16);
    bytes[6] = (bytes[6] & 0x0f) | 0x80;
    bytes[8] = (bytes[8] & 0x3f) | 0x80;
    const hex = Array.from(bytes, (byte) => byte.toString(16).padStart(2, '0')).join('');
    return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
  }

  function buildDatabaseRow(record, recordId, userId, imageUrl) {
    const row = {
      id: recordId,
      author_id: userId,
      nickname: getString(record, 'nickname'),
      title: getString(record, 'title'),
      content: getString(record, 'content'),
      image_url: imageUrl || null,
      country: record.country,
      region: getString(record, 'region'),
      location_label: getString(record, 'locationLabel') || null,
      category: getString(record, 'category'),
      lat: getNumeric(record, 'lat'),
      lng: getNumeric(record, 'lng'),
      practice_name: getString(record, 'practiceName') || null,
      record_date: safeDate(record.recordDate, true),
      locality_notes: getString(record, 'localityNotes') || null,
      community_notes: getString(record, 'communityNotes') || null,
      everyday_notes: getString(record, 'everydayNotes') || null,
      description_what: getString(record, 'descriptionWhat') || null,
      description_when_where_how: getString(record, 'descriptionWhenWhereHow') || null,
      description_participants: getString(record, 'descriptionParticipants') || null,
      description_value: getString(record, 'descriptionValue') || null,
      description_future: getString(record, 'descriptionFuture') || null,
      status: 'published'
    };
    const createdAt = safeDate(record.createdAt);
    if (createdAt) row.created_at = createdAt;
    return row;
  }

  function base64ToBlob(data, mimeType, expectedSize) {
    const normalized = data.replace(/\s/g, '');
    const binary = atob(normalized);
    if (binary.length !== expectedSize) throw new Error('사진의 실제 데이터 크기가 예상 크기와 다릅니다.');
    const bytes = new Uint8Array(binary.length);
    for (let offset = 0; offset < binary.length; offset += 64 * 1024) {
      const end = Math.min(offset + 64 * 1024, binary.length);
      for (let index = offset; index < end; index += 1) bytes[index] = binary.charCodeAt(index);
    }
    return new Blob([bytes], { type: mimeType });
  }

  async function blobDigest(blob) {
    const digest = new Uint8Array(await crypto.subtle.digest('SHA-256', await blob.arrayBuffer()));
    return Array.from(digest, (byte) => byte.toString(16).padStart(2, '0')).join('');
  }

  async function getOrUploadImage(client, userId, imageInfo, uploadedByHash, onUploaded) {
    if (imageInfo.kind === 'external') return { url: imageInfo.url, uploaded: false };
    if (imageInfo.kind === 'none') return { url: null, uploaded: false };
    const blob = base64ToBlob(imageInfo.data, imageInfo.mimeType, imageInfo.sizeBytes);
    if (blob.size > MAX_IMAGE_SIZE) throw new Error('사진이 Supabase Storage의 20 MB 제한을 초과합니다.');
    if (!ALLOWED_IMAGE_TYPES.has(blob.type)) throw new Error(`허용되지 않는 이미지 형식입니다: ${blob.type || '(없음)'}`);

    const digest = await blobDigest(blob);
    const priorUrl = uploadedByHash.get(digest);
    if (priorUrl) return { url: priorUrl, uploaded: false };

    const filename = `${digest}.${extensionFor(blob.type)}`;
    const folder = `${userId}/imports`;
    const path = `${folder}/${filename}`;
    const { error: uploadError } = await client.storage
      .from(STORAGE_BUCKET)
      .upload(path, blob, { contentType: blob.type, upsert: false });

    let uploaded = !uploadError;
    if (uploadError) {
      const { data: existingFiles, error: listError } = await client.storage
        .from(STORAGE_BUCKET)
        .list(folder, { limit: 1000, search: filename });
      const matchingFile = !listError && (existingFiles || []).some((file) => file.name === filename);
      if (!matchingFile) throw new Error(`사진 업로드 실패: ${uploadError.message}`);
    }

    const { data: publicData } = client.storage.from(STORAGE_BUCKET).getPublicUrl(path);
    if (!publicData?.publicUrl) throw new Error('사진 업로드 후 공개 URL을 만들지 못했습니다.');
    uploadedByHash.set(digest, publicData.publicUrl);
    if (uploaded) onUploaded({ filename, url: publicData.publicUrl });
    return { url: publicData.publicUrl, uploaded };
  }

  async function importOneRecord(client, user, entry, imageMap, duplicateKeys, uploadedByHash, onUploaded, onImageFailed, onProgress) {
    const record = entry.record;
    const legacyId = String(record.id);
    const config = window.MUMYEONG_SUPABASE_CONFIG;
    const recordId = await stableRecordUuid(config.url, legacyId);
    const { data: existing, error: existingError } = await client
      .from('records')
      .select('id')
      .eq('id', recordId)
      .maybeSingle();
    if (existingError) throw new Error(`중복 확인 실패: ${existingError.message}`);
    if (existing) return { state: 'skipped', legacyId, recordId, message: '같은 원본 ID에서 계산한 UUID가 이미 있어 변경하지 않았습니다.' };

    const imageInfo = imageInfoFor(record, imageMap, duplicateKeys);
    let imageResult = { url: null, uploaded: false };
    if (imageInfo.kind !== 'none') {
      onProgress(`사진 업로드 또는 기존 사진 연결 중: ${imageInfo.filename || imageInfo.kind}`);
      try {
        imageResult = await getOrUploadImage(client, user.id, imageInfo, uploadedByHash, onUploaded);
      } catch (error) {
        onImageFailed({
          legacyId,
          filename: imageInfo.filename || '(사진 주소 확인)',
          message: error.message || '사진 처리 실패'
        });
        throw error;
      }
    }

    onProgress('게시물 정보를 저장 중입니다…');
    const row = buildDatabaseRow(record, recordId, user.id, imageResult.url);
    const { error: insertError } = await client.from('records').insert(row);
    if (insertError) {
      const photoNote = imageResult.url && imageInfo.kind !== 'external'
        ? ' 사진은 업로드됐지만 게시물 등록이 실패했을 수 있습니다. 같은 파일로 재시도하면 내용 해시 경로를 확인해 덮어쓰지 않고 재사용합니다.'
        : '';
      throw new Error(`게시물 등록 실패: ${insertError.message}${photoNote}`);
    }
    return {
      state: 'imported',
      legacyId,
      recordId,
      imageUploaded: imageResult.uploaded,
      imageUrl: imageResult.url,
      message: imageInfo.kind === 'external' ? '게시물 등록 완료, 기존 외부 이미지 URL 유지' : '게시물 등록 완료'
    };
  }

  async function startImport() {
    if (importRunning || !parsedBackup || !hasSupabaseConfig()) return;
    const { imageMap, duplicateKeys } = imageMapFromBackup(parsedBackup.images);
    const entries = [];
    for (const record of parsedBackup.records) {
      if (classifyRecord(record) !== 'user') continue;
      const imageInfo = imageInfoFor(record, imageMap, duplicateKeys);
      const issues = validateRecord(record, imageInfo, parsedBackup.duplicateRecordIds);
      if (!issues.length) entries.push({ record, imageInfo });
    }
    if (!entries.length) {
      setStatus(elements.importStatus, '검증을 통과한 실제 이용자 게시물이 없어 이전을 시작하지 않았습니다.', 'error');
      return;
    }

    importRunning = true;
    elements.backupFile.disabled = true;
    elements.startImport.disabled = true;
    elements.clearFile.disabled = true;
    elements.resultPanel.classList.remove('hidden');
    elements.resultList.replaceChildren();
    elements.importProgress.value = 0;
    elements.importedCount.textContent = '0';
    elements.skippedCount.textContent = '0';
    elements.failedCount.textContent = '0';
    elements.uploadedImageCount.textContent = '0';
    elements.failedImageCount.textContent = '0';
    elements.downloadReport.disabled = true;
    elements.verificationSql.value = '';

    const report = {
      format: 'MUMYEONG Supabase import report',
      version: 1,
      startedAt: new Date().toISOString(),
      completedAt: null,
      projectUrl: window.MUMYEONG_SUPABASE_CONFIG.url,
      authUserId: null,
      sourceBackup: {
        format: parsedBackup.format,
        version: parsedBackup.version,
        createdAt: parsedBackup.createdAt,
        recordCount: parsedBackup.records.length,
        imageCount: parsedBackup.images.length
      },
      counts: {
        selected: entries.length,
        imported: 0,
        skipped: 0,
        failed: 0,
        imagesUploaded: 0,
        imagesFailed: 0,
        commentsNotMigrated: parsedBackup.records.reduce(
          (sum, record) => sum + (Array.isArray(record?.comments) ? record.comments.length : 0),
          0
        ),
        likesNotMigrated: parsedBackup.records.reduce(
          (sum, record) => sum + (Number.isFinite(Number(record?.likes)) ? Number(record.likes) : 0),
          0
        ),
        samplesExcluded: parsedBackup.records.filter((record) => classifyRecord(record) === 'sample').length,
        unclassifiedExcluded: parsedBackup.records.filter((record) => classifyRecord(record) === 'unknown').length,
        invalidExcluded: parsedBackup.records.filter((record) => classifyRecord(record) === 'user'
          && validateRecord(record, imageInfoFor(record, imageMap, duplicateKeys), parsedBackup.duplicateRecordIds).length).length
      },
      excludedRecords: getExcludedRecords(parsedBackup, imageMap, duplicateKeys),
      uploadedImages: [],
      imageFailures: [],
      records: []
    };

    try {
      setStatus(elements.importStatus, 'Supabase에 연결하고 익명 사용자를 확인 중입니다…', 'working');
      const { client, user } = await createClientAndGetAnonymousUser();
      report.authUserId = user.id;
      await ensureProfile(client, user.id);
      const uploadedByHash = new Map();
      const onUploaded = (image) => {
        report.counts.imagesUploaded += 1;
        report.uploadedImages.push(image);
        elements.uploadedImageCount.textContent = String(report.counts.imagesUploaded);
      };
      const onImageFailed = (failure) => {
        report.counts.imagesFailed += 1;
        report.imageFailures.push(failure);
        elements.failedImageCount.textContent = String(report.counts.imagesFailed);
      };

      for (let index = 0; index < entries.length; index += 1) {
        const entry = entries[index];
        const legacyId = String(entry.record.id);
        setStatus(elements.importStatus, `이전 중 ${index + 1}/${entries.length}: ${getString(entry.record, 'title') || legacyId}`, 'working');
        let result;
        try {
          result = await importOneRecord(
            client,
            user,
            entry,
            imageMap,
            duplicateKeys,
            uploadedByHash,
            onUploaded,
            onImageFailed,
            (message) => setStatus(elements.importStatus, `이전 중 ${index + 1}/${entries.length}: ${message}`, 'working')
          );
        } catch (error) {
          result = {
            state: 'failed',
            legacyId,
            recordId: await stableRecordUuid(window.MUMYEONG_SUPABASE_CONFIG.url, legacyId).catch(() => null),
            message: error.message || '알 수 없는 오류'
          };
        }

        report.records.push(result);
        if (result.state === 'imported') {
          report.counts.imported += 1;
        } else if (result.state === 'skipped') {
          report.counts.skipped += 1;
        } else {
          report.counts.failed += 1;
        }
        elements.importedCount.textContent = String(report.counts.imported);
        elements.skippedCount.textContent = String(report.counts.skipped);
        elements.failedCount.textContent = String(report.counts.failed);
        elements.uploadedImageCount.textContent = String(report.counts.imagesUploaded);
        elements.failedImageCount.textContent = String(report.counts.imagesFailed);
        elements.importProgress.value = Math.round(((index + 1) / entries.length) * 100);
        renderResultItem(result, entry.record);
      }

      report.completedAt = new Date().toISOString();
      importReport = report;
      elements.verificationSql.value = makeVerificationSql(report);
      elements.downloadReport.disabled = false;
      setStatus(
        elements.importStatus,
        `이전 완료 · 성공 ${report.counts.imported}건, 기존 항목 ${report.counts.skipped}건 건너뜀, 실패 ${report.counts.failed}건. 원본 백업과 로컬 저장 데이터는 변경하지 않았습니다.`,
        report.counts.failed ? 'error' : 'success'
      );
    } catch (error) {
      report.completedAt = new Date().toISOString();
      report.fatalError = error.message || '연결 또는 인증 실패';
      importReport = report;
      elements.downloadReport.disabled = false;
      setStatus(elements.importStatus, `이전을 시작하거나 계속할 수 없습니다: ${report.fatalError}`, 'error');
    } finally {
      importRunning = false;
      elements.backupFile.disabled = false;
      elements.startImport.disabled = !parsedBackup || !hasSupabaseConfig();
      elements.clearFile.disabled = false;
    }
  }

  function renderResultItem(result, record) {
    const item = document.createElement('li');
    item.dataset.state = result.state;
    const title = getString(record, 'title') || result.legacyId;
    const idInfo = result.recordId ? ` · DB UUID ${result.recordId}` : '';
    item.textContent = `${result.state === 'imported' ? '성공' : result.state === 'skipped' ? '건너뜀' : '실패'}: ${title} (원본 ID ${result.legacyId})${idInfo} — ${result.message}`;
    elements.resultList.append(item);
  }

  function getExcludedRecords(backup, imageMap, duplicateKeys) {
    return backup.records.flatMap((record) => {
      const classification = classifyRecord(record);
      const legacyId = String(record?.id ?? '(ID 없음)');
      if (classification === 'sample') {
        return [{ legacyId, title: getString(record, 'title'), reason: '샘플 게시물은 이전 대상에서 제외했습니다.' }];
      }
      if (classification === 'unknown') {
        return [{ legacyId, title: getString(record, 'title'), reason: '실제 이용자 기록인지 확인할 수 없어 자동 이전하지 않았습니다.' }];
      }
      const issues = validateRecord(
        record,
        imageInfoFor(record, imageMap, duplicateKeys),
        backup.duplicateRecordIds
      );
      return issues.length ? [{ legacyId, title: getString(record, 'title'), reason: issues.join(' ') }] : [];
    });
  }

  function makeVerificationSql(report) {
    const ids = report.records
      .filter((record) => record.state === 'imported' || record.state === 'skipped')
      .map((record) => record.recordId)
      .filter(Boolean);
    if (!ids.length) return '-- 성공 또는 중복 확인된 게시물이 없습니다.';
    const uuidList = ids.map((id) => `'${id}'::uuid`).join(',\n  ');
    return `SELECT id, author_id, nickname, title, country, region, location_label,\n       lat, lng, image_url, status, created_at\nFROM public.records\nWHERE id IN (\n  ${uuidList}\n)\nORDER BY created_at DESC;`;
  }

  function downloadReport() {
    if (!importReport) return;
    const blob = new Blob([JSON.stringify(importReport, null, 2)], { type: 'application/json;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const stamp = new Date(importReport.completedAt || Date.now()).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z');
    link.href = url;
    link.download = `mumyeong-supabase-import-report-${stamp}.json`;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 60_000);
  }
})();
