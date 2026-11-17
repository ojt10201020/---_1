(() => {
  'use strict';

  const RECORDS_KEY = 'mumyeong-records-v1';
  const IMAGE_DATABASE_NAME = 'mumyeong-image-store-v1';
  const IMAGE_OBJECT_STORE = 'images';
  const SAMPLE_IDS = new Set([
    'post-001',
    'post-002',
    'post-003',
    'post-004',
    'post-005',
    'post-006'
  ]);
  const MIME_EXTENSIONS = {
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/webp': 'webp',
    'image/gif': 'gif'
  };
  const elements = {
    recordCount: document.getElementById('recordCount'),
    sampleCount: document.getElementById('sampleCount'),
    userRecordCount: document.getElementById('userRecordCount'),
    unknownRecordCount: document.getElementById('unknownRecordCount'),
    imageCount: document.getElementById('imageCount'),
    unlinkedImageCount: document.getElementById('unlinkedImageCount'),
    missingImageCount: document.getElementById('missingImageCount'),
    backupStatus: document.getElementById('backupStatus'),
    backupDetails: document.getElementById('backupDetails'),
    downloadButton: document.getElementById('downloadButton'),
    rescanButton: document.getElementById('rescanButton')
  };

  let scannedData = null;
  let isBusy = false;

  document.getElementById('originValue').textContent = window.location.origin;
  elements.rescanButton.addEventListener('click', scanLocalData);
  elements.downloadButton.addEventListener('click', downloadBackup);
  scanLocalData();

  function setStatus(message, state = '') {
    elements.backupStatus.textContent = message;
    elements.backupStatus.dataset.state = state;
  }

  function formatBytes(bytes) {
    if (!Number.isFinite(bytes) || bytes < 0) return '크기 알 수 없음';
    if (bytes < 1024) return `${bytes} B`;
    const units = ['KB', 'MB', 'GB', 'TB'];
    let value = bytes / 1024;
    let unitIndex = 0;
    while (value >= 1024 && unitIndex < units.length - 1) {
      value /= 1024;
      unitIndex += 1;
    }
    return `${value.toFixed(1)} ${units[unitIndex]}`;
  }

  function readLocalRecords() {
    let raw;
    try {
      raw = localStorage.getItem(RECORDS_KEY);
    } catch (error) {
      throw new Error(`localStorage를 읽을 수 없습니다: ${error.message}`);
    }
    if (raw === null) return [];

    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch (error) {
      throw new Error(`게시물 JSON을 해석할 수 없습니다: ${error.message}`);
    }
    if (!Array.isArray(parsed)) {
      throw new Error('mumyeong-records-v1 값이 게시물 배열이 아닙니다.');
    }
    return parsed;
  }

  async function readIndexedDbImages() {
    if (!('indexedDB' in window) || typeof indexedDB.databases !== 'function') {
      throw new Error('이 브라우저는 IndexedDB 데이터베이스 목록 조회를 지원하지 않습니다. 데이터를 생성하지 않기 위해 백업을 중단했습니다.');
    }

    const databases = await indexedDB.databases();
    if (!databases.some((database) => database.name === IMAGE_DATABASE_NAME)) return [];

    return new Promise((resolve, reject) => {
      let settled = false;
      const request = indexedDB.open(IMAGE_DATABASE_NAME);
      const rejectOnce = (error) => {
        if (settled) return;
        settled = true;
        reject(error);
      };

      request.onupgradeneeded = () => {
        request.transaction?.abort();
        rejectOnce(new Error('IndexedDB가 열리는 동안 데이터베이스가 사라졌습니다. 새 데이터베이스는 만들지 않았습니다.'));
      };
      request.onerror = () => rejectOnce(request.error || new Error('IndexedDB를 열 수 없습니다.'));
      request.onblocked = () => rejectOnce(new Error('다른 탭이 IndexedDB 열기를 막고 있습니다.'));
      request.onsuccess = () => {
        const database = request.result;
        if (!database.objectStoreNames.contains(IMAGE_OBJECT_STORE)) {
          database.close();
          rejectOnce(new Error('이미지 저장소를 찾을 수 없어 백업을 중단했습니다.'));
          return;
        }

        let entries;
        let transaction;
        try {
          transaction = database.transaction(IMAGE_OBJECT_STORE, 'readonly');
          const imageRequest = transaction.objectStore(IMAGE_OBJECT_STORE).getAll();
          imageRequest.onsuccess = () => {
            entries = imageRequest.result || [];
          };
          imageRequest.onerror = () => {
            transaction.abort();
            rejectOnce(imageRequest.error || new Error('IndexedDB 사진 목록을 읽을 수 없습니다.'));
          };
          transaction.oncomplete = () => {
            database.close();
            if (settled) return;
            settled = true;
            resolve(entries || []);
          };
          transaction.onerror = () => {
            database.close();
            rejectOnce(transaction.error || new Error('IndexedDB 읽기 전용 작업에 실패했습니다.'));
          };
          transaction.onabort = () => {
            database.close();
            rejectOnce(transaction.error || new Error('IndexedDB 읽기 전용 작업이 중단되었습니다.'));
          };
        } catch (error) {
          database.close();
          rejectOnce(error);
        }
      };
    });
  }

  function classifyRecord(record) {
    const id = String(record?.id ?? '');
    if (SAMPLE_IDS.has(id)) return 'sample';
    if (record?.localOwned === true || /^post-\d{13}$/.test(id)) return 'user';
    return 'unknown';
  }

  function getImageKeyReferences(records) {
    const references = new Map();
    const inlineImages = records.filter((record) => typeof record?.image === 'string' && record.image.startsWith('data:')).length;

    records.forEach((record) => {
      if (record?.imageKey === undefined || record?.imageKey === null || record.imageKey === '') return;
      const key = String(record.imageKey);
      if (!references.has(key)) references.set(key, []);
      references.get(key).push(record.id ?? null);
    });

    return { references, inlineImages };
  }

  function renderScan(data) {
    elements.recordCount.textContent = String(data.summary.recordCount);
    elements.sampleCount.textContent = String(data.summary.sampleRecordCount);
    elements.userRecordCount.textContent = String(data.summary.userCreatedRecordCount);
    elements.unknownRecordCount.textContent = String(data.summary.unclassifiedRecordCount);
    elements.imageCount.textContent = String(data.summary.imageFileCount);
    elements.unlinkedImageCount.textContent = String(data.summary.unlinkedImageCount);
    elements.missingImageCount.textContent = String(data.summary.missingImageReferenceCount);
    elements.backupDetails.textContent = [
      '샘플 판별: script.js의 post-001~post-006 ID',
      '실제 작성 판별: localOwned=true 또는 현재 코드의 post-밀리초 ID 형식',
      `분류 불확실: ${data.summary.unclassifiedRecordCount}개`,
      `localStorage 게시물 안의 data URL 사진: ${data.summary.inlineImageCount}개 (원본 게시물 데이터에 포함)`,
      'IndexedDB에 원래 파일명이 저장되지 않아, 백업 파일명은 imageKey와 MIME 형식으로 생성됩니다.'
    ].join(' · ');
    elements.downloadButton.disabled = false;
    scannedData = data;
  }

  async function scanLocalData() {
    if (isBusy) return;
    isBusy = true;
    scannedData = null;
    elements.downloadButton.disabled = true;
    elements.rescanButton.disabled = true;
    setStatus('저장 데이터를 읽고 있습니다. 데이터는 변경되지 않습니다…');

    try {
      const records = readLocalRecords();
      const imageEntries = await readIndexedDbImages();
      const { references, inlineImages } = getImageKeyReferences(records);
      const imageKeys = new Set(imageEntries.map((entry) => String(entry?.id ?? '')));
      const missingImageReferenceCount = [...references.keys()].filter((key) => !imageKeys.has(key)).length;
      const sampleRecordCount = records.filter((record) => classifyRecord(record) === 'sample').length;
      const userCreatedRecordCount = records.filter((record) => classifyRecord(record) === 'user').length;
      const unclassifiedRecordCount = records.length - sampleRecordCount - userCreatedRecordCount;
      const unlinkedImageCount = imageEntries.filter((entry) => !references.has(String(entry?.id ?? ''))).length;
      const createdAt = new Date().toISOString();
      const images = imageEntries.map((entry) => {
        if (!(entry?.blob instanceof Blob)) {
          throw new Error(`IndexedDB 항목 "${String(entry?.id ?? '(ID 없음)')}"에 유효한 Blob이 없습니다.`);
        }
        const imageKey = String(entry.id);
        const mimeType = entry.type || entry.blob.type || 'application/octet-stream';
        const extension = MIME_EXTENSIONS[mimeType] || 'bin';
        const safeKey = imageKey.replace(/[^a-zA-Z0-9._-]/g, '_') || 'image';
        return {
          imageKey,
          filename: `${safeKey}.${extension}`,
          mimeType,
          sizeBytes: entry.blob.size,
          updatedAt: entry.updatedAt || null,
          referencedByRecordIds: references.get(imageKey) || [],
          blob: entry.blob
        };
      });

      const summary = {
        recordCount: records.length,
        sampleRecordCount,
        userCreatedRecordCount,
        unclassifiedRecordCount,
        imageFileCount: images.length,
        unlinkedImageCount,
        missingImageReferenceCount,
        inlineImageCount: inlineImages,
        totalImageBytes: images.reduce((total, image) => total + image.sizeBytes, 0)
      };

      const data = { format: 'MUMYEONG local data backup', version: 1, createdAt, summary, records, images };
      renderScan(data);
      setStatus(`읽기 완료: 게시물 ${summary.recordCount}개, IndexedDB 사진 ${summary.imageFileCount}개. 원본 데이터는 변경하지 않았습니다.`, 'success');
    } catch (error) {
      console.error('Local backup scan failed:', error);
      elements.backupDetails.textContent = '';
      setStatus(error.message || '백업 데이터를 읽지 못했습니다.', 'error');
    } finally {
      isBusy = false;
      elements.rescanButton.disabled = false;
    }
  }

  function waitForStreamCapacity(controller) {
    if (controller.desiredSize === null || controller.desiredSize > 0) return Promise.resolve();
    return new Promise((resolve) => setTimeout(resolve, 0));
  }

  async function enqueueText(controller, encoder, text) {
    await waitForStreamCapacity(controller);
    controller.enqueue(encoder.encode(text));
  }

  async function encodeCompleteBytes(bytes, controller, encoder) {
    const safeChunkSize = 30 * 1024;
    for (let offset = 0; offset < bytes.length; offset += safeChunkSize) {
      const chunk = bytes.subarray(offset, Math.min(offset + safeChunkSize, bytes.length));
      let binary = '';
      for (let index = 0; index < chunk.length; index += 0x8000) {
        binary += String.fromCharCode(...chunk.subarray(index, Math.min(index + 0x8000, chunk.length)));
      }
      await enqueueText(controller, encoder, btoa(binary));
    }
  }

  async function streamBlobAsBase64(blob, controller, encoder) {
    let remainder = new Uint8Array(0);
    const consumeBytes = async (value) => {
      const combined = new Uint8Array(remainder.length + value.length);
      combined.set(remainder);
      combined.set(value, remainder.length);
      const completeLength = combined.length - (combined.length % 3);
      if (completeLength) await encodeCompleteBytes(combined.subarray(0, completeLength), controller, encoder);
      remainder = combined.slice(completeLength);
    };

    if (typeof blob.stream === 'function') {
      const reader = blob.stream().getReader();
      try {
        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          await consumeBytes(value);
        }
      } finally {
        reader.releaseLock();
      }
    } else {
      const bytes = new Uint8Array(await blob.arrayBuffer());
      const sourceChunkSize = 1024 * 1024;
      for (let offset = 0; offset < bytes.length; offset += sourceChunkSize) {
        await consumeBytes(bytes.subarray(offset, Math.min(offset + sourceChunkSize, bytes.length)));
      }
    }

    if (remainder.length) {
      let binary = '';
      for (const byte of remainder) binary += String.fromCharCode(byte);
      await enqueueText(controller, encoder, btoa(binary));
    }
  }

  function createBackupStream(data) {
    const encoder = new TextEncoder();
    let stage = 'header';
    let recordIndex = 0;
    let imageIndex = 0;
    let currentImage = 0;

    return new ReadableStream({
      async pull(controller) {
        try {
          if (stage === 'header') {
            const header = {
              format: data.format,
              version: data.version,
              createdAt: data.createdAt,
              summary: data.summary
            };
            const serialized = JSON.stringify(header);
            await enqueueText(controller, encoder, `${serialized.slice(0, -1)},"records":[`);
            stage = 'records';
            return;
          }

          if (stage === 'records') {
            if (recordIndex < data.records.length) {
              const prefix = recordIndex === 0 ? '' : ',';
              await enqueueText(controller, encoder, `${prefix}${JSON.stringify(data.records[recordIndex])}`);
              recordIndex += 1;
              return;
            }
            await enqueueText(controller, encoder, '],"images":[');
            stage = 'images';
            return;
          }

          if (stage === 'images') {
            if (imageIndex < data.images.length) {
              const image = data.images[imageIndex];
              const prefix = imageIndex === 0 ? '' : ',';
              const imageMetadata = {
                imageKey: image.imageKey,
                filename: image.filename,
                mimeType: image.mimeType,
                sizeBytes: image.sizeBytes,
                encoding: 'base64',
                updatedAt: image.updatedAt,
                referencedByRecordIds: image.referencedByRecordIds
              };
              await enqueueText(controller, encoder, `${prefix}${JSON.stringify(imageMetadata).slice(0, -1)},"data":"`);
              currentImage = imageIndex + 1;
              setStatus(`백업 JSON 생성 중: 사진 ${currentImage}/${data.images.length} 처리 중…`);
              await streamBlobAsBase64(image.blob, controller, encoder);
              await enqueueText(controller, encoder, '"}');
              imageIndex += 1;
              return;
            }
            await enqueueText(controller, encoder, ']}');
            stage = 'done';
            controller.close();
            return;
          }

          controller.close();
        } catch (error) {
          controller.error(error);
        }
      }
    }, { highWaterMark: 1 });
  }

  function makeBackupFilename(date) {
    const stamp = date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z');
    return `mumyeong-local-backup-${stamp}.json`;
  }

  async function downloadBackup() {
    if (!scannedData || isBusy) return;
    isBusy = true;
    elements.downloadButton.disabled = true;
    elements.rescanButton.disabled = true;
    setStatus('JSON 백업 파일을 만들고 있습니다. 사진 용량에 따라 시간이 걸릴 수 있습니다…');

    try {
      const stream = createBackupStream(scannedData);
      const response = new Response(stream, {
        headers: { 'Content-Type': 'application/json; charset=utf-8' }
      });
      const backupBlob = await response.blob();
      const downloadUrl = URL.createObjectURL(backupBlob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = makeBackupFilename(new Date(scannedData.createdAt));
      link.click();
      setTimeout(() => URL.revokeObjectURL(downloadUrl), 60_000);
      setStatus(`백업 다운로드를 시작했습니다. 파일 크기: ${formatBytes(backupBlob.size)}. 게시물과 IndexedDB 사진은 변경하지 않았습니다.`, 'success');
    } catch (error) {
      console.error('Backup file creation failed:', error);
      setStatus(`백업 파일을 만들지 못했습니다: ${error.message || '알 수 없는 오류'}`, 'error');
    } finally {
      isBusy = false;
      elements.downloadButton.disabled = !scannedData;
      elements.rescanButton.disabled = false;
    }
  }
})();
