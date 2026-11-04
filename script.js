const STORAGE_KEY = 'mumyeong-records-v1';

const translations = {
  ko: {
    eyebrow: '무명 · 미래유산 아카이브',
    heroTitle: '오늘의 일상을,<br /><span>내일의 유산으로.</span>',
    heroText: '미래에도 남기고 싶은 문화, 함께 이어 갈 이야기. 한국과 일본의 일상에서 미래유산을 발견하고 기록합니다.',
    archiveHeading: '문화 기록',
    archiveKicker: '아카이브',
    archiveTitle: '기록 아카이브',
    mapKicker: '지도',
    mapTitle: '문화 지도',
    monthlyKicker: '이달의 기록',
    monthlyTitle: '월간 아카이브',
    footerText: '우리의 일상, 내일의 유산.',
    footerMeta: '한국과 일본의 미래유산 기록',
    searchPlaceholder: '기록을 검색해 보세요',
    allCountries: '모든 국가',
    allCategories: '모든 카테고리',
    categoryFood: '음식',
    categoryPlace: '장소',
    categoryTradition: '전통',
    categoryDaily: '일상',
    categoryCommunity: '공동체',
    categoryTravel: '여행',
    writeKicker: '기록하기',
    writeTitle: '새 문화 기록',
    nicknameLabel: '닉네임',
    countryLabel: '국가',
    titleLabel: '제목',
    regionLabel: '지역',
    categoryLabel: '카테고리',
    imageLabel: '사진',
    latitudeLabel: '위도',
    longitudeLabel: '경도',
    contentLabel: '본문',
    cancelBtn: '취소',
    submitBtn: '기록 등록',
    commentsTitle: '댓글',
    likeBtn: '공감',
    saveBtn: '저장',
    commentPlaceholder: '댓글을 남겨주세요',
    commentSubmit: '등록',
    homeTitle: '최근 기록',
    latestEmpty: '아직 기록이 없습니다.',
    viewMore: '더 보기',
    monthLabel: '월간 기록',
    noResults: '검색 결과가 없습니다.'
  },
  ja: {
    eyebrow: '無名 · 未来遺産アーカイブ',
    heroTitle: '今日の暮らしを、<br /><span>明日の遺産へ。</span>',
    heroText: '未来まで残したい文化、共に続けていく物語。韓国と日本の日常から未来遺産を見つけ、記録します。',
    archiveHeading: '文化記録',
    archiveKicker: 'アーカイブ',
    archiveTitle: '記録アーカイブ',
    mapKicker: '地図',
    mapTitle: '文化地図',
    monthlyKicker: '今月の記録',
    monthlyTitle: '月間アーカイブ',
    footerText: '私たちの日常、明日の遺産。',
    footerMeta: '韓国と日本の未来遺産記録',
    searchPlaceholder: '記録を検索',
    allCountries: 'すべての国',
    allCategories: 'すべてのカテゴリ',
    categoryFood: '食べ物',
    categoryPlace: '場所',
    categoryTradition: '伝統',
    categoryDaily: '日常',
    categoryCommunity: '共同体',
    categoryTravel: '旅行',
    writeKicker: '記録する',
    writeTitle: '新しい文化記録',
    nicknameLabel: 'ニックネーム',
    countryLabel: '国',
    titleLabel: 'タイトル',
    regionLabel: '地域',
    categoryLabel: 'カテゴリ',
    imageLabel: '写真',
    latitudeLabel: '緯度',
    longitudeLabel: '経度',
    contentLabel: '本文',
    cancelBtn: 'キャンセル',
    submitBtn: '記録を登録',
    commentsTitle: 'コメント',
    likeBtn: '共感',
    saveBtn: '保存',
    commentPlaceholder: 'コメントを残してください',
    commentSubmit: '登録',
    homeTitle: '最近の記録',
    latestEmpty: 'まだ記録がありません。',
    viewMore: 'もっと見る',
    monthLabel: '月間記録',
    noResults: '検索結果がありません。'
  }
};

const seedData = [
  {
    id: 'post-001',
    nickname: '오정택',
    title: '대전 유성온천 문화',
    content: '대전 유성온천에서 목욕을 하고 가족과 함께 따뜻한 국밥을 먹는 주말 아침의 풍경을 기록하고 싶다. 유성온천은 오랫동안 대전 지역 주민들이 목욕과 휴식을 위해 찾던 익숙한 공간이고, 온천을 이용한 뒤 주변 식당에서 식사를 하는 모습도 자연스럽게 이어져 왔다. 가족과 함께 시간을 보내며 지역의 삶이 이어지는 공간이라는 점이 특별하다.',
    country: 'KR',
    region: '대전광역시 · 서구',
    category: '장소',
    image: 'https://images.unsplash.com/photo-1542314831-068e97d3c3b4?auto=format&fit=crop&w=1200&q=80',
    lat: 36.3565,
    lng: 127.345,
    createdAt: '2026-10-07',
    likes: 2,
    comments: [
      { id: 'c-1', nickname: '민지', text: '온천 후 국밥이 정말 매력적이네요.', createdAt: '2026-10-08' },
      { id: 'c-2', nickname: '강우', text: '가족이 함께하는 소소한 일상이 진짜 미래유산 같아요.', createdAt: '2026-10-10' },
      { id: 'c-3', nickname: '윤서', text: '이 풍경은 정말 오래 남길 가치가 있습니다.', createdAt: '2026-10-12' }
    ]
  },
  {
    id: 'post-002',
    nickname: '김동인',
    title: '시장의 낮과 밤을 잇는 여수 포차 문화',
    content: '여수 교동시장은 낮에는 건어물을 거래하고 밤에는 포장마차와 함께 사람들의 이야기가 이어지는 곳이다. 시장의 낮과 밤이 서로 연결되어 있는 풍경은 오랜 생활문화를 보여준다. 어민과 상인, 주민, 여행객이 같은 자리를 오가며 하루를 공유한다는 점에서 여수의 공동체성이 느껴진다.',
    country: 'KR',
    region: '전라남도 · 여수시',
    category: '음식',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    lat: 34.7604,
    lng: 127.6622,
    createdAt: '2026-10-02',
    likes: 5,
    comments: [
      { id: 'c-4', nickname: '세연', text: '야시장 풍경이 너무 생생해서 좋아요.', createdAt: '2026-10-03' },
      { id: 'c-5', nickname: '민수', text: '이건 단순 관광지가 아니라 생활문화네요.', createdAt: '2026-10-04' }
    ]
  },
  {
    id: 'post-003',
    nickname: 'Ayaka',
    title: '東京の朝の屋台と喫茶店の時間',
    content: '東京の駅前では、早朝に小さな屋台が開いて、通勤する人たちがコーヒーと軽食を買って手早く一日の始まりを迎える。朝の静けさと人の動きが重なり、町の生活リズムが見えてくる。こうした場所は大きな記念碑より、毎日の暮らしそのものが未来の文化になっていくと感じる。',
    country: 'JP',
    region: '東京都 · 新宿',
    category: '일상',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
    lat: 35.6895,
    lng: 139.6917,
    createdAt: '2026-09-28',
    likes: 4,
    comments: [
      { id: 'c-6', nickname: 'Mika', text: '朝の通勤風景がすごく伝わります。', createdAt: '2026-09-29' }
    ]
  },
  {
    id: 'post-004',
    nickname: '하준',
    title: '오사카의 골목시장 풍경',
    content: '오사카의 골목시장은 저녁이 되면 조용하던 길이 활기로 변한다. 작은 가게들이 문을 열고, 사람들은 서로 이야기를 나누며 식재료를 고른다. 이런 시장은 관광지처럼 화려하지 않지만, 그 속에서 오래된 생활 방식이 살아 움직이고 있다.',
    country: 'JP',
    region: '大阪府 · 大阪市',
    category: '공동체',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
    lat: 34.6937,
    lng: 135.5023,
    createdAt: '2026-09-15',
    likes: 7,
    comments: [
      { id: 'c-7', nickname: '리나', text: '시장 문화를 이렇게 기록하는 게 좋아요.', createdAt: '2026-09-16' }
    ]
  },
  {
    id: 'post-005',
    nickname: '나현',
    title: '제주 오름 위의 계절 풍경',
    content: '제주도 오름 근처 마을에서는 해질녘에 텃밭 아래로 바람이 불고, 사람들이 함께 나와 차를 마시며 하루를 정리한다. 바깥은 관광지처럼 화려하지만, 실제로는 매일의 반복이 가장 중요하다. 작은 풍경 속에 보존될 만한 삶의 가치가 숨어 있다.',
    country: 'KR',
    region: '제주특별자치도 · 제주시',
    category: '여행',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
    lat: 33.4996,
    lng: 126.5312,
    createdAt: '2026-08-19',
    likes: 8,
    comments: [
      { id: 'c-8', nickname: '소라', text: '오름과 마을이 함께 느껴져요.', createdAt: '2026-08-21' }
    ]
  },
  {
    id: 'post-006',
    nickname: 'Yuto',
    title: '京都の寺町と静かな朝',
    content: '京都의 사찰골목은 아침 일찍부터 사람의 발길이 적고, 사찰의 종소리가 울린다. 지나가는 사람은 많지 않지만, 이 조용한 시간은 오늘의 분위기를 형성한다. 그런 일상의 조용함은 사회와 문화를 이해하는 데 중요한 기록이 된다.',
    country: 'JP',
    region: '京都府 · 京都市',
    category: '전통',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
    lat: 35.0116,
    lng: 135.7681,
    createdAt: '2026-08-05',
    likes: 3,
    comments: []
  }
];

const appState = {
  lang: 'ko',
  activeView: 'home',
  filters: {
    country: 'all',
    category: 'all',
    search: ''
  },
  selectedPostId: null,
  mapInstance: null,
  activeMapCountry: 'all',
  writeMap: null,
  writeMarker: null
};

function loadRecords() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seedData));
    return [...seedData];
  }

  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length ? parsed : [...seedData];
  } catch (error) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seedData));
    return [...seedData];
  }
}

let records = loadRecords();

function saveRecords() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
}

function getText(key) {
  return translations[appState.lang]?.[key] || translations.ko[key] || key;
}

function formatDate(dateString) {
  const d = new Date(dateString);
  if (Number.isNaN(d.getTime())) return dateString;
  return `${d.getFullYear()}. ${String(d.getMonth() + 1).padStart(2, '0')}. ${String(d.getDate()).padStart(2, '0')}.`;
}

function getCountryLabel(code) {
  return code === 'KR' ? '한국' : code === 'JP' ? '일본' : code;
}

function getFilteredRecords() {
  const search = appState.filters.search.trim().toLowerCase();
  return records.filter((item) => {
    const matchesCountry = appState.filters.country === 'all' || item.country === appState.filters.country;
    const matchesCategory = appState.filters.category === 'all' || item.category === appState.filters.category;
    const searchText = [item.title, item.content, item.region, item.nickname].join(' ').toLowerCase();
    const matchesSearch = !search || searchText.includes(search);
    return matchesCountry && matchesCategory && matchesSearch;
  });
}

function setActiveView(view) {
  appState.activeView = view;
  document.querySelectorAll('.page').forEach((page) => {
    page.classList.toggle('active', page.id === `${view}Page`);
  });
  document.querySelectorAll('.nav-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.view === view);
  });

  if (view === 'map' && appState.mapInstance) {
    setTimeout(() => {
      appState.mapInstance.invalidateSize();
    }, 120);
  }
}

function renderHome() {
  const container = document.getElementById('featuredGrid');
  const recent = [...records].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 2);
  container.innerHTML = recent.map((post) => `
    <article class="feature-card archive-card" data-post-id="${post.id}">
      <div class="card-image">
        <img src="${post.image}" alt="${post.title}" />
        <span class="country-chip">${getCountryLabel(post.country)}</span>
      </div>
      <div class="card-body">
        <div class="meta-row">
          <span class="location">📍 ${post.region}</span>
        </div>
        <h3 class="card-title">${post.title}</h3>
        <p class="card-summary">${post.content}</p>
        <div class="byline">
          <span>${post.nickname}</span>
          <span>·</span>
          <span>${formatDate(post.createdAt)}</span>
        </div>
        <div class="card-actions">
          <div class="action-group">
            <button class="action-btn like-post" type="button" data-post-id="${post.id}"><span class="icon">♥</span> ${getText('likeBtn')} ${post.likes}</button>
            <button class="action-btn" type="button" data-post-id="${post.id}"><span class="icon">💬</span> ${post.comments.length}</button>
          </div>
          <button class="save-btn" type="button" data-post-id="${post.id}">${getText('viewMore')}</button>
        </div>
      </div>
    </article>
  `).join('');

  document.getElementById('homeCount').textContent = String(records.length);
  bindCardActions();
}

function renderArchive() {
  const container = document.getElementById('archiveGrid');
  const filtered = getFilteredRecords();

  if (!filtered.length) {
    container.innerHTML = `<div class="empty-state">${getText('noResults')}</div>`;
    return;
  }

  container.innerHTML = filtered.map((post) => `
    <article class="archive-card" data-post-id="${post.id}">
      <div class="card-image">
        <img src="${post.image}" alt="${post.title}" />
        <span class="country-chip">${getCountryLabel(post.country)}</span>
      </div>
      <div class="card-body">
        <div class="meta-row">
          <span class="location">📍 ${post.region}</span>
        </div>
        <h3 class="card-title">${post.title}</h3>
        <p class="card-summary">${post.content}</p>
        <div class="byline">
          <span>${post.nickname}</span>
          <span>·</span>
          <span>${formatDate(post.createdAt)}</span>
        </div>
        <div class="card-actions">
          <div class="action-group">
            <button class="action-btn like-post" type="button" data-post-id="${post.id}"><span class="icon">♥</span> ${post.likes}</button>
            <button class="action-btn open-detail" type="button" data-post-id="${post.id}"><span class="icon">💬</span> ${post.comments.length}</button>
          </div>
          <button class="save-btn open-detail" type="button" data-post-id="${post.id}">${getText('viewMore')}</button>
        </div>
      </div>
    </article>
  `).join('');

  bindCardActions();
}

function bindCardActions() {
  document.querySelectorAll('[data-post-id]').forEach((card) => {
    card.addEventListener('click', (event) => {
      const button = event.target.closest('button');
      const postId = card.dataset.postId || button?.dataset.postId;
      if (!postId) return;

      if (button && button.classList.contains('like-post')) {
        event.stopPropagation();
        toggleLike(postId);
        return;
      }

      if (button && button.classList.contains('open-detail')) {
        event.stopPropagation();
        openDetail(postId);
        return;
      }

      if (card.classList.contains('archive-card') || card.classList.contains('feature-card')) {
        openDetail(postId);
      }
    });
  });
}

function toggleLike(postId) {
  const target = records.find((item) => item.id === postId);
  if (!target) return;
  target.likes += 1;
  saveRecords();
  renderAll();
}

function renderMonthly() {
  const container = document.getElementById('monthlyGrid');
  const months = {};

  records.forEach((item) => {
    const month = new Date(item.createdAt).toISOString().slice(0, 7);
    if (!months[month]) months[month] = [];
    months[month].push(item);
  });

  const entries = Object.entries(months).reverse().slice(0, 4);

  if (!entries.length) {
    container.innerHTML = `<div class="empty-state">${getText('latestEmpty')}</div>`;
    return;
  }

  container.innerHTML = entries.map(([month, items]) => {
    const highlight = items[0];
    return `
      <article class="monthly-card">
        <span class="month-label">${month.replace('-', '년 ')}월</span>
        <h3>${highlight.title}</h3>
        <p>${highlight.content.slice(0, 140)}${highlight.content.length > 140 ? '…' : ''}</p>
        <div class="byline">
          <span>${highlight.nickname}</span>
          <span>·</span>
          <span>${getCountryLabel(highlight.country)}</span>
        </div>
      </article>
    `;
  }).join('');
}

function showMapFallback(message) {
  const mapElement = document.getElementById('map');
  if (!mapElement) return;

  mapElement.innerHTML = `
    <div class="map-fallback">
      <div>
        <strong>${message.title || '지도를 불러오지 못했습니다.'}</strong>
        <small>${message.text || '지도를 표시할 수 없습니다. 잠시 후 다시 시도해 주세요.'}</small>
      </div>
    </div>
  `;
}

function getMapCountryList() {
  return [
    { code: 'all', label: '전체' },
    { code: 'KR', label: '한국' },
    { code: 'JP', label: '일본' }
  ];
}

function renderMap() {
  const mapElement = document.getElementById('map');
  const sidebar = document.getElementById('mapSidebar');

  if (!mapElement) return;

  if (!window.L) {
    showMapFallback({
      title: '지도 로딩 실패',
      text: 'Leaflet 로딩에 실패했습니다. 인터넷 연결 상태를 확인해 주세요.'
    });
    if (sidebar) {
      sidebar.innerHTML = `
        <div class="map-entry">
          <h4>지도 정보를 불러오지 못했습니다.</h4>
          <p>기록 목록은 계속 확인할 수 있습니다.</p>
        </div>
      `;
    }
    return;
  }

  if (!L.Icon.Default.imagePath) {
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png'
    });
  }

  if (appState.mapInstance) {
    appState.mapInstance.remove();
    appState.mapInstance = null;
  }

  const countryRecords = records.filter((post) => post.country === 'KR' || post.country === 'JP');
  const countryCounts = {
    all: countryRecords.length,
    KR: countryRecords.filter((post) => post.country === 'KR').length,
    JP: countryRecords.filter((post) => post.country === 'JP').length
  };

  const map = L.map(mapElement, {
    zoomControl: true,
    attributionControl: true,
    minZoom: 4,
    maxZoom: 7,
    maxBounds: [[28, 120], [46, 150]],
    maxBoundsViscosity: 1.0,
    zoomSnap: 0.5
  }).setView([36.5, 133.5], 5);

  const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
  });

  tileLayer.on('tileerror', () => {
    showMapFallback({
      title: '지도 타일 로딩 실패',
      text: '외부 지도 서버 연결이 원활하지 않아 지도 대신 안내 메시지를 표시합니다.'
    });
  });

  tileLayer.addTo(map);
  appState.mapInstance = map;

  const activeCountry = appState.activeMapCountry || 'all';
  const visiblePosts = activeCountry === 'all'
    ? countryRecords
    : countryRecords.filter((post) => post.country === activeCountry);

  if (visiblePosts.length) {
    visiblePosts.forEach((post) => {
      const marker = L.marker([post.lat, post.lng]).addTo(map);
      marker.bindPopup(`
        <div style="min-width:180px;">
          <img src="${post.image}" alt="${post.title}" style="width:100%;height:110px;object-fit:cover;border-radius:8px;margin-bottom:8px;" />
          <strong>${post.title}</strong><br>
          <span>${post.region}</span>
        </div>
      `);
      marker.on('click', () => openDetail(post.id));
    });

    const bounds = L.latLngBounds(visiblePosts.map((post) => [post.lat, post.lng]));
    map.fitBounds(bounds.pad(0.35), { maxZoom: 6 });
  } else {
    map.setView([36.5, 133.5], 5);
  }

  if (sidebar) {
    const countryButtons = getMapCountryList();
    const countryControls = countryButtons.map(({ code, label }) => `
      <button type="button" class="map-country-btn ${activeCountry === code ? 'active' : ''}" data-map-country="${code}">
        ${label} (${countryCounts[code] || 0})
      </button>
    `).join('');

    const entries = visiblePosts.length
      ? visiblePosts.map((post) => `
          <div class="map-entry" data-map-post-id="${post.id}">
            <h4>${post.title}</h4>
            <p>${getCountryLabel(post.country)} · ${post.region}</p>
            <button class="primary-btn" type="button" data-post-id="${post.id}">${getText('viewMore')}</button>
          </div>
        `).join('')
      : `<div class="empty-state">${activeCountry === 'all' ? '아직 등록된 기록이 없습니다.' : `${getCountryLabel(activeCountry)}에는 아직 등록된 기록이 없습니다.`}</div>`;

    sidebar.innerHTML = `
      <div class="map-country-controls">${countryControls}</div>
      ${entries}
    `;

    sidebar.querySelectorAll('[data-map-country]').forEach((button) => {
      button.addEventListener('click', () => {
        appState.activeMapCountry = button.dataset.mapCountry;
        renderMap();
      });
    });

    sidebar.querySelectorAll('[data-post-id]').forEach((button) => {
      button.addEventListener('click', () => openDetail(button.dataset.postId));
    });
  }

  setTimeout(() => map.invalidateSize(), 180);
}

function openDetail(postId) {
  appState.selectedPostId = postId;
  const post = records.find((item) => item.id === postId);
  if (!post) return;

  const modal = document.getElementById('detailModal');
  modal.classList.remove('hidden');
  modal.classList.add('visible');
  modal.setAttribute('aria-hidden', 'false');

  const content = document.getElementById('detailContent');
  content.innerHTML = `
    <div class="detail-header">
      <img class="detail-image" src="${post.image}" alt="${post.title}" />
      <div>
        <h3 class="detail-title">${post.title}</h3>
        <div class="detail-meta">
          <span>${getCountryLabel(post.country)}</span>
          <span>•</span>
          <span>${post.region}</span>
          <span>•</span>
          <span>${post.category}</span>
          <span>•</span>
          <span>${post.nickname}</span>
          <span>•</span>
          <span>${formatDate(post.createdAt)}</span>
        </div>
      </div>
    </div>

    <div class="detail-actions">
      <button class="action-btn like-post" type="button" data-post-id="${post.id}"><span class="icon">♥</span> ${getText('likeBtn')} ${post.likes}</button>
    </div>

    <div class="detail-body">${post.content}</div>

    <div class="comment-list">
      <h4>${getText('commentsTitle')}</h4>
      ${post.comments.length ? post.comments.map((comment) => `
        <div class="comment-item">
          <strong>${comment.nickname}</strong>
          <div>${comment.text}</div>
        </div>
      `).join('') : '<div class="comment-item">아직 댓글이 없습니다.</div>'}
    </div>

    <div class="comment-form">
      <input id="commentInput" type="text" placeholder="${getText('commentPlaceholder')}" maxlength="120" />
      <button class="primary-btn" id="submitCommentBtn" type="button">${getText('commentSubmit')}</button>
    </div>
  `;

  modal.classList.add('visible');
  modal.setAttribute('aria-hidden', 'false');

  const submitCommentBtn = document.getElementById('submitCommentBtn');
  const commentInput = document.getElementById('commentInput');

  submitCommentBtn.addEventListener('click', () => {
    const value = commentInput.value.trim();
    if (!value) return;
    const target = records.find((item) => item.id === postId);
    if (!target) return;
    target.comments.push({
      id: `comment-${Date.now()}`,
      nickname: '익명',
      text: value,
      createdAt: new Date().toISOString()
    });
    saveRecords();
    openDetail(postId);
  });

  content.querySelector('.like-post')?.addEventListener('click', () => toggleLike(postId));
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.remove('visible');
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
}

function openWriteModal() {
  const modal = document.getElementById('writeModal');
  modal.classList.remove('hidden');
  modal.classList.add('visible');
  modal.setAttribute('aria-hidden', 'false');

  if (!window.L) {
    const writeMapNode = document.getElementById('writeMap');
    if (writeMapNode) {
      writeMapNode.innerHTML = `
        <div class="map-fallback" style="min-height: 220px;">
          <div>
            <strong>지도 기능을 사용할 수 없습니다.</strong>
            <small>네트워크 상태를 확인한 뒤 다시 시도해 주세요.</small>
          </div>
        </div>
      `;
    }
    return;
  }

  if (!appState.writeMap) {
    appState.writeMap = L.map('writeMap', {
      zoomControl: true,
      attributionControl: true,
      minZoom: 4,
      maxZoom: 7,
      maxBounds: [[28, 120], [46, 150]],
      maxBoundsViscosity: 1.0,
      zoomSnap: 0.5
    }).setView([36.5, 133.5], 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(appState.writeMap);

    appState.writeMap.on('click', (event) => {
      const { lat, lng } = event.latlng;
      const latInput = document.getElementById('latInput');
      const lngInput = document.getElementById('lngInput');
      latInput.value = lat.toFixed(5);
      lngInput.value = lng.toFixed(5);

      if (appState.writeMarker) {
        appState.writeMap.removeLayer(appState.writeMarker);
      }

      appState.writeMarker = L.marker([lat, lng]).addTo(appState.writeMap);
    });
  }

  setTimeout(() => {
    if (appState.writeMap) {
      appState.writeMap.invalidateSize();
    }
  }, 100);
}

function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  const nickname = (data.get('nickname') || '').toString().trim();
  const title = (data.get('title') || '').toString().trim();
  const content = (data.get('content') || '').toString().trim();
  const region = (data.get('region') || '').toString().trim();
  const country = data.get('country');
  const category = data.get('category');
  const file = data.get('image');
  const latInputValue = (data.get('lat') || '').toString().trim();
  const lngInputValue = (data.get('lng') || '').toString().trim();
  const lat = latInputValue ? Number(latInputValue) : NaN;
  const lng = lngInputValue ? Number(lngInputValue) : NaN;

  if (!nickname || !title || !content || !region || !country || !category) {
    alert('필수 항목을 모두 입력해 주세요.');
    return;
  }

  let imageUrl = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80';

  if (file && file.size > 0) {
    const reader = new FileReader();
    reader.onload = function () {
      imageUrl = reader.result;
      finalizeSave(imageUrl, { nickname, title, content, region, country, category, lat, lng });
    };
    reader.readAsDataURL(file);
    return;
  }

  finalizeSave(imageUrl, { nickname, title, content, region, country, category, lat, lng });
}

function finalizeSave(imageUrl, values) {
  const newPost = {
    id: `post-${Date.now()}`,
    nickname: values.nickname,
    title: values.title,
    content: values.content,
    country: values.country,
    region: values.region,
    category: values.category,
    image: imageUrl,
    lat: Number.isFinite(values.lat) ? values.lat : 36.5,
    lng: Number.isFinite(values.lng) ? values.lng : 127.8,
    createdAt: new Date().toISOString(),
    likes: 0,
    comments: []
  };

  records.unshift(newPost);
  saveRecords();

  const form = document.getElementById('recordForm');
  form.reset();
  document.getElementById('latInput').value = '';
  document.getElementById('lngInput').value = '';
  closeModal('writeModal');
  renderAll();
  setActiveView('archive');
}

function applyLanguage(lang) {
  appState.lang = lang;
  document.documentElement.lang = lang === 'ja' ? 'ja' : 'ko';
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.dataset.i18n;
    if (translations[lang][key]) {
      node.innerHTML = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    if (translations[lang][key]) {
      node.setAttribute('placeholder', translations[lang][key]);
    }
  });

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  document.querySelectorAll('.nav-btn').forEach((btn) => {
    if (btn.dataset.view === appState.activeView) {
      btn.classList.add('active');
    }
  });

  renderAll();
}

function renderAll() {
  renderHome();
  renderArchive();
  renderMonthly();
  renderMap();
}

function bindGlobalEvents() {
  document.querySelectorAll('.nav-btn[data-view]').forEach((button) => {
    button.addEventListener('click', () => {
      const view = button.dataset.view;
      if (view === 'home' || view === 'archive' || view === 'map' || view === 'monthly') {
        setActiveView(view);
      }
    });
  });

  document.getElementById('openWriteBtn').addEventListener('click', openWriteModal);

  document.getElementById('searchInput').addEventListener('input', (event) => {
    appState.filters.search = event.target.value;
    renderArchive();
  });

  document.getElementById('countryFilter').addEventListener('change', (event) => {
    appState.filters.country = event.target.value;
    renderArchive();
  });

  document.getElementById('categoryFilter').addEventListener('change', (event) => {
    appState.filters.category = event.target.value;
    renderArchive();
  });

  document.getElementById('recordForm').addEventListener('submit', handleFormSubmit);

  document.querySelectorAll('[data-close-modal]').forEach((button) => {
    button.addEventListener('click', () => closeModal(button.dataset.closeModal));
  });

  document.querySelectorAll('.lang-btn').forEach((button) => {
    button.addEventListener('click', () => applyLanguage(button.dataset.lang));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  bindGlobalEvents();
  setActiveView('home');
  applyLanguage('ko');
  renderAll();
});

window.addEventListener('resize', () => {
  if (appState.writeMap) {
    appState.writeMap.invalidateSize();
  }
  if (appState.mapInstance) {
    appState.mapInstance.invalidateSize();
  }
});
