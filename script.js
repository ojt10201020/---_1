const STORAGE_KEY = 'mumyeong-records-v1';

const translations = {
  ko: {
    pageTitle: '무명 | 우리의 일상, 내일의 유산',
    pageDescription: '한국과 일본의 생활문화와 공동체의 기억을 기록하고 나누는 시민 참여형 아카이브',
    navLabel: '주요 메뉴',
    navHome: '홈',
    navArchive: '기록 아카이브',
    navMap: '지도',
    navMonthly: '이달의 무명',
    navWrite: '기록하기',
    eyebrow: '무명 · 미래유산 아카이브',
    heroTitle: '오늘의 일상을,<br /><span>내일의 유산으로.</span>',
    heroText: '매일 반복되는 식사와 인사, 손으로 익힌 기술과 이웃의 기억. 오늘의 생활문화가 내일의 무형유산이 될 수 있도록 함께 기록합니다.',
    archiveHeading: '문화 기록',
    purposeKicker: '무명이 기록하는 것',
    purposeTitle: '지정된 유산이 아니라, 지금 살아가는 문화',
    purposeIntro: '무명은 이미 이름 붙여진 문화유산을 소개하는 데 그치지 않습니다. 평범한 일상에 깃든 생활문화와 공동체의 기억을 발견하고, 다음 세대와 나누기 위해 기록합니다.',
    localityTitle: '지역성',
    localityDescription: '이 문화는 이곳의 환경과 역사, 장소의 특성과 어떻게 이어져 있나요? 이 지역만의 생활방식과 정체성이 담겨 있나요?',
    communityTitle: '공동체성',
    communityDescription: '누구와 함께 나누고 이어가나요? 사람들의 관계, 세대 간 전승, 공동체의 소속감과 연결되어 있나요?',
    everydayTitle: '생활성',
    everydayDescription: '사람들의 일상에서 어떻게 실천되나요? 지금도 반복되는 습관, 기술, 음식, 놀이 또는 의례인가요?',
    criteriaNote: '세 기준이 모두 똑같이 드러날 필요는 없습니다. 지금 기록하고 싶은 문화와 가장 가까운 요소를 골라, 그 이유를 들려주세요.',
    archiveKicker: '아카이브',
    archiveTitle: '기록 아카이브',
    mapKicker: '지도',
    mapTitle: '문화 지도',
    monthlyKicker: 'MUMYEONG of the Month',
    monthlyTitle: '이달의 무명',
    monthlyIntroQuestion: '우리가 함께 기록하고, 함께 기억하고 싶은 일상은 무엇인가요?',
    monthlyIntroText: '매월 무명의 기록 중 미래에 남기고 싶은 일상문화를 함께 선정합니다.',
    monthlyCandidatesTitle: '이번 달의 후보 기록',
    monthlyArchiveTitle: '지난달의 무명',
    monthlyCommunityNotice: '이용자 투표로 선정되는 무명 커뮤니티의 기록입니다. 국가나 공식 기관이 지정한 무형문화유산이 아닙니다.',
    monthlyLocalNotice: '후보 기록은 볼 수 있지만 공동 투표는 아직 사용할 수 없습니다. 실제 투표에는 Supabase 연결과 월간 투표 데이터베이스 설정이 필요합니다.',
    monthlySchemaNotice: '월간 투표 데이터베이스가 아직 준비되지 않았습니다. Supabase에서 monthly-voting-migration.sql을 실행해 주세요.',
    monthlyNoPeriod: '이번 달 투표 기간이 아직 설정되지 않았습니다. 후보 기록은 확인할 수 있습니다.',
    monthlyVotingOpen: '투표 진행 중 · {end}에 마감합니다. 한 사람당 한 표를 남길 수 있습니다.',
    monthlyVotingNotOpen: '이번 달 투표 기간이 아닙니다.',
    monthlyVotingClosed: '투표가 마감되었습니다. 최종 결과를 확인하고 있습니다.',
    monthlyFinalized: '이번 달의 선정 기록이 확정되었습니다.',
    monthlyNoCandidates: '아직 후보로 볼 수 있는 기록이 없습니다.',
    monthlyNoArchive: '아직 선정이 확정된 월간 기록이 없습니다.',
    monthlyVotes: '표',
    monthlyVotesUnavailable: '공동 투표 연결 후 표시',
    monthlyRank: '위',
    monthlyVote: '이 기록에 투표',
    monthlyVoteUnavailable: '공동 투표 준비 중',
    monthlyVoted: '내가 투표한 기록',
    monthlyVoteClosed: '투표 마감',
    monthlyVoteDone: '이번 달 투표 완료',
    monthlyVoteNotOpen: '투표 기간 외',
    monthlyVoteInProgress: '투표 저장 중…',
    monthlyVotingError: '투표를 저장하지 못했습니다. 연결 상태를 확인한 뒤 다시 시도해 주세요.',
    monthlyAlreadyVoted: '이번 달 투표는 이미 완료했습니다. 같은 달에는 한 번만 투표할 수 있습니다.',
    monthlyVoteSaved: '투표를 저장했습니다. 함께 기억할 일상을 골라 주셔서 고맙습니다.',
    monthlySelected: '커뮤니티 선정 기록',
    monthlyFinalVotes: '최종 득표',
    monthlyOpenRecord: '기록 자세히 보기',
    monthlyNoReason: '이 기준에 대한 설명은 아직 없습니다.',
    footerText: '우리의 일상, 내일의 유산.',
    footerMeta: '한국과 일본의 생활문화 기록',
    searchPlaceholder: '기록을 검색해 보세요',
    allCountries: '모든 국가',
    allCategories: '모든 카테고리',
    categoryFood: '음식',
    categoryPlace: '장소',
    categoryTradition: '전통',
    categoryDaily: '일상',
    categoryCommunity: '공동체',
    categoryTravel: '여행',
    countryKR: '한국',
    countryJP: '일본',
    writeKicker: '기록하기',
    writeTitle: '일상의 문화 기록',
    basicInfoTitle: '기본 정보',
    basicInfoHelp: '기록하고 싶은 문화와 그곳의 이야기를 소개해 주세요.',
    nicknameLabel: '기록자 닉네임',
    countryLabel: '국가',
    titleLabel: '기록 제목',
    titlePlaceholder: '예: 시장 골목에서 이어지는 아침 인사',
    regionLabel: '지역 및 장소',
    regionPlaceholder: '예: 부산광역시 · 자갈치시장',
    categoryLabel: '카테고리',
    practiceNameLabel: '기록 대상 또는 문화의 이름',
    practiceNamePlaceholder: '예: 이웃과 나누는 시장의 아침 인사',
    recordDateLabel: '기록 날짜',
    imageLabel: '사진',
    imageUploadHelp: 'JPG, PNG, WebP, GIF · 최대 20MB',
    imagePreviewAlt: '선택한 사진 미리보기',
    removeSelectedImage: '사진 선택 취소',
    removeSavedImage: '기존 사진 삭제',
    writeMapLabel: '기록 위치 선택 지도',
    locationSectionTitle: '기록할 장소',
    locationSectionHelp: '주소나 장소명을 검색한 뒤 지도에서 위치를 확인해 주세요.',
    locationSearchLabel: '주소 또는 장소명 검색',
    locationSearchPlaceholder: '주소, 시설명, 동네 이름을 입력하세요',
    searchLocation: '검색',
    locationResultsLabel: '장소 검색 결과',
    geocodingAttribution: '장소 검색 데이터 © OpenStreetMap 기여자',
    locationNotSelected: '위치를 검색하거나 지도에서 선택해 주세요.',
    locationSearchPrompt: '주소나 장소명을 입력해 주세요.',
    locationSearching: '한국과 일본의 장소를 검색하고 있습니다…',
    locationNoResults: '장소를 찾지 못했습니다. 검색어를 바꾸거나 지도에서 직접 선택해 주세요.',
    locationSearchError: '장소 검색에 실패했습니다. 잠시 후 다시 시도해 주세요.',
    locationSelected: '선택한 위치',
    locationAddressFallback: '지도에서 선택한 위치',
    mapPinInstructions: '지도를 확대하거나 이동해 보세요. 지점을 누르거나 핀을 끌어 위치를 지정할 수 있습니다.',
    startRecord: '내 주변의 문화를 기록하기',
    newRecord: '새로운 기록 등록',
    wizardProgressLabel: '기록 작성 단계',
    stepBasics: '기본 정보',
    stepLocation: '위치 등록',
    stepCriteria: '기록 기준',
    stepStory: '기록 내용',
    stepReview: '최종 확인',
    reviewTitle: '등록 전에 내용을 확인해 주세요',
    reviewHelp: '이 기록은 다른 방문자와 공유됩니다. 빠진 내용이 없는지 살펴봐 주세요.',
    previousStep: '이전',
    nextStep: '다음',
    selectLocation: '장소 선택',
    recordSavedLocal: '이 브라우저에만 임시 저장했습니다. 여러 사람과 공유하려면 Supabase 설정이 필요합니다.',
    recordSavedRemote: '기록이 Supabase에 등록되었습니다.',
    recordUpdatedLocal: '기록과 사진을 이 브라우저에 저장했습니다.',
    recordUpdatedRemote: '기록이 Supabase에서 수정되었습니다.',
    recordSaveError: '기록을 저장하지 못했습니다. 입력 내용과 Supabase 설정을 확인해 주세요.',
    recordUpdateError: '기록을 수정하지 못했습니다. 기존 기록은 변경되지 않았습니다.',
    imageCleanupWarning: '기록은 저장했지만 이전 사진 파일 정리에 실패했습니다. 운영자에게 알려 주세요.',
    editRecord: '기록 수정',
    updateRecord: '기록 수정 내용 저장',
    backendLocalStatus: '현재 이 브라우저에만 저장됩니다 · Supabase 미연결',
    backendRemoteStatus: 'Supabase 공용 아카이브에 연결되었습니다.',
    backendSetupStatus: 'Supabase 연결 설정이 없어 이 브라우저에만 저장됩니다.',
    backendAuthError: 'Supabase 익명 로그인을 시작하지 못했습니다. 설정과 Anonymous Sign-ins 사용 여부를 확인해 주세요.',
    backendConnectError: 'Supabase 연결에 실패했습니다. URL, 키, 데이터베이스 정책을 확인해 주세요.',
    interactionError: '요청을 처리하지 못했습니다. 잠시 후 다시 시도해 주세요.',
    locationRequired: '검색 결과를 선택하거나 지도에서 위치를 지정해 주세요.',
    locationCountryMismatch: '선택한 위치가 선택한 국가와 다른 것 같습니다. 위치와 국가를 확인해 주세요.',
    photoTooLarge: '사진은 20MB 이하만 등록할 수 있습니다.',
    photoTypeInvalid: 'JPG, PNG, WebP 또는 GIF 이미지를 선택해 주세요.',
    imageInvalid: '이미지 파일을 읽을 수 없습니다. 다른 사진을 선택해 주세요.',
    imageStoredLocally: '사진을 이 브라우저의 IndexedDB에 저장했습니다. 같은 브라우저에서 다시 방문하면 확인할 수 있습니다.',
    localImageStorageError: '저장된 사진을 불러오지 못했습니다. 브라우저 저장 공간을 확인해 주세요.',
    reviewBasics: '기본 정보',
    reviewLocation: '위치',
    reviewCriteria: '선택한 기록 기준',
    reviewStory: '문화의 이야기',
    reviewImage: '사진이 첨부되었습니다.',
    reviewExistingImage: '기존 사진을 유지합니다.',
    reviewNoImage: '첨부 사진 없음',
    saveInProgress: '기록을 저장하고 있습니다…',
    locationAddress: '주소',
    openMap: '지도에서 위치 열기',
    latitudeLabel: '위도',
    longitudeLabel: '경도',
    criteriaFormTitle: '이 문화와 맞닿은 기준',
    criteriaFormHelp: '가장 가까운 요소를 골라, 어떤 점에서 그런지 짧게 들려주세요. 모두 고를 필요는 없습니다.',
    criteriaLegend: '문화 기록 기준 선택과 이유',
    localityQuestion: '지역의 환경, 역사, 장소와 어떤 관계가 있나요?',
    communityQuestion: '누가 함께 나누고, 어떤 방식으로 이어가나요?',
    everydayQuestion: '일상에서 언제, 어떻게 실천되나요?',
    localityPlaceholder: '이 지역의 풍경이나 역사와 연결되는 점을 적어주세요.',
    communityPlaceholder: '함께하는 사람들과 전해지는 방식을 적어주세요.',
    everydayPlaceholder: '일상에서 실제로 하는 모습을 적어주세요.',
    storyFormTitle: '문화의 이야기를 들려주세요',
    storyFormHelp: '짧은 문장이나 키워드로 적어도 괜찮습니다. 모두 길게 쓸 필요는 없어요.',
    whatLabel: '이 문화는 무엇인가요?',
    whatPlaceholder: '무엇을 기록하고 싶은지 간단히 소개해 주세요.',
    whenWhereHowLabel: '언제, 어디서, 어떤 방식으로 이루어지나요?',
    whenWhereHowPlaceholder: '시간과 장소, 구체적인 모습을 적어주세요.',
    participantsLabel: '누가 참여하고 어떻게 이어가나요?',
    participantsPlaceholder: '참여하는 사람과 이어지는 방식을 적어주세요.',
    meaningLabel: '현재 이 문화가 지닌 의미와 가치는 무엇인가요?',
    meaningPlaceholder: '당신과 주변 사람들에게 어떤 의미인지 적어주세요.',
    futureLabel: '미래 세대에 전하고 싶은 이유가 있나요?',
    futurePlaceholder: '앞으로도 기억되길 바라는 이유를 적어주세요.',
    recordContentTitle: '기록을 한 문단으로 정리해 주세요',
    recordContentHelp: '아카이브 미리보기에 함께 표시됩니다.',
    contentLabel: '기록 이야기',
    contentPlaceholder: '눈앞의 풍경과 기억을 자유롭게 들려주세요.',
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
    sampleRecord: '샘플 기록',
    sampleReadOnly: '열람용 샘플 기록입니다. 공감과 댓글은 실제 이용자 참여로 집계되지 않습니다.',
    monthLabel: '월간 기록',
    noResults: '검색 결과가 없습니다.',
    closeLabel: '닫기',
    languageLabel: '언어 선택',
    countryCountAll: '전체',
    mapLoadErrorTitle: '지도 로딩 실패',
    mapLoadErrorText: 'Leaflet 로딩에 실패했습니다. 인터넷 연결 상태를 확인해 주세요.',
    mapUnavailableTitle: '지도 정보를 불러오지 못했습니다.',
    mapUnavailableText: '기록 목록은 계속 확인할 수 있습니다.',
    mapTileErrorTitle: '지도 타일 로딩 실패',
    mapTileErrorText: '외부 지도 서버 연결이 원활하지 않아 지도 대신 안내 메시지를 표시합니다.',
    writeMapUnavailableTitle: '지도 기능을 사용할 수 없습니다.',
    writeMapUnavailableText: '네트워크 상태를 확인한 뒤 다시 시도해 주세요.',
    mapEmpty: '아직 등록된 기록이 없습니다.',
    countryEmpty: '{country}에는 아직 등록된 기록이 없습니다.',
    noComments: '아직 댓글이 없습니다.',
    commentNickname: '익명',
    requiredFields: '필수 항목을 입력해 주세요.',
    selectCriterion: '문화와 가장 가까운 기록 기준을 하나 이상 선택해 주세요.',
    criterionReasonRequired: '선택한 기준마다 그 이유를 짧게 적어 주세요.',
    detailBasics: '기본 정보',
    detailStory: '기록 내용',
    detailCriteria: '문화 기록 기준',
    detailReasons: '이 기준을 고른 이유',
    detailNoCriteria: '이전 방식으로 등록된 기록입니다. 기록 기준을 별도로 입력하지 않았습니다.',
    detailNoReasons: '선택한 기준의 설명이 아직 없습니다.',
    detailWhat: '이 문화는 무엇인가요?',
    detailWhenWhereHow: '언제, 어디서, 어떤 방식으로 이루어지나요?',
    detailParticipants: '누가 참여하고 어떻게 이어가나요?',
    detailMeaning: '현재 이 문화가 지닌 의미와 가치는 무엇인가요?',
    detailFuture: '미래 세대에 전하고 싶은 이유',
    recordDateDetail: '기록 날짜',
    practiceNameDetail: '기록 대상',
    imageFallbackAlt: '문화 기록 사진',
    writerLabel: '기록자'
  },
  ja: {
    pageTitle: '無名 | 今日の暮らしを、明日の遺産へ',
    pageDescription: '韓国と日本の生活文化や共同体の記憶を記録し、分かち合う市民参加型アーカイブ',
    navLabel: 'メインメニュー',
    navHome: 'ホーム',
    navArchive: '記録アーカイブ',
    navMap: '地図',
    navMonthly: '今月の無名',
    navWrite: '記録する',
    eyebrow: '無名 · 未来遺産アーカイブ',
    heroTitle: '今日の暮らしを、<br /><span>明日の遺産へ。</span>',
    heroText: '毎日の食事や挨拶、手から手へ伝わる技、近所の人々の記憶。今日の暮らしの文化が明日の無形遺産となるよう、一緒に記録します。',
    archiveHeading: '文化記録',
    purposeKicker: '無名が記録するもの',
    purposeTitle: '指定された遺産ではなく、今を生きる文化',
    purposeIntro: '無名は、すでに文化遺産として名づけられたものを紹介するだけの場所ではありません。何気ない日常に息づく生活文化や共同体の記憶を見つけ、次の世代へ伝えるために記録します。',
    localityTitle: '地域性',
    localityDescription: 'この文化は、その土地の環境や歴史、場所の特徴とどう結びついていますか？地域ならではの暮らし方やアイデンティティが表れていますか？',
    communityTitle: '共同体性',
    communityDescription: '誰と分かち合い、受け継いでいますか？人々のつながりや世代を超えた継承、共同体への帰属意識と結びついていますか？',
    everydayTitle: '生活性',
    everydayDescription: '人々の日常の中で、どのように実践されていますか？今も繰り返されている習慣、技、食、遊び、儀礼ですか？',
    criteriaNote: '三つの要素がすべて同じように表れている必要はありません。記録したい文化に最も近い視点を選び、その理由を聞かせてください。',
    archiveKicker: 'アーカイブ',
    archiveTitle: '記録アーカイブ',
    mapKicker: '地図',
    mapTitle: '文化地図',
    monthlyKicker: 'MUMYEONG of the Month',
    monthlyTitle: '今月の無名',
    monthlyIntroQuestion: '一緒に記録し、これからも一緒に覚えていたい日常は何でしょうか？',
    monthlyIntroText: '毎月、無名に寄せられた記録から、未来に残したい暮らしの文化をみんなで選びます。',
    monthlyCandidatesTitle: '今月の候補記録',
    monthlyArchiveTitle: 'これまでの選定記録',
    monthlyCommunityNotice: '利用者の投票で選ばれる、無名コミュニティによる記録です。国や公的機関が指定する無形文化遺産ではありません。',
    monthlyLocalNotice: '候補記録はご覧いただけますが、共同投票はまだ利用できません。実際の投票にはSupabase接続と月間投票データベースの設定が必要です。',
    monthlySchemaNotice: '月間投票のデータベースがまだ準備されていません。Supabaseでmonthly-voting-migration.sqlを実行してください。',
    monthlyNoPeriod: '今月の投票期間はまだ設定されていません。候補記録はご覧いただけます。',
    monthlyVotingOpen: '投票受付中 · {end}に締め切ります。一人一票を投じられます。',
    monthlyVotingNotOpen: '現在は今月の投票期間ではありません。',
    monthlyVotingClosed: '投票を締め切りました。最終結果を確認しています。',
    monthlyFinalized: '今月の選定記録が確定しました。',
    monthlyNoCandidates: '候補として表示できる記録はまだありません。',
    monthlyNoArchive: '選定が確定した月間記録はまだありません。',
    monthlyVotes: '票',
    monthlyVotesUnavailable: '共同投票の接続後に表示',
    monthlyRank: '位',
    monthlyVote: 'この記録に投票',
    monthlyVoteUnavailable: '共同投票の準備中',
    monthlyVoted: '投票した記録',
    monthlyVoteClosed: '投票終了',
    monthlyVoteDone: '今月の投票は完了',
    monthlyVoteNotOpen: '投票期間外',
    monthlyVoteInProgress: '投票を保存しています…',
    monthlyVotingError: '投票を保存できませんでした。接続を確認して、もう一度お試しください。',
    monthlyAlreadyVoted: '今月の投票は完了しています。同じ月に投票できるのは一度だけです。',
    monthlyVoteSaved: '投票を保存しました。一緒に覚えていたい日常を選んでくださり、ありがとうございます。',
    monthlySelected: 'コミュニティ選定記録',
    monthlyFinalVotes: '最終得票数',
    monthlyOpenRecord: '記録の詳細を見る',
    monthlyNoReason: 'この視点についての説明はまだありません。',
    footerText: '私たちの日常、明日の遺産。',
    footerMeta: '韓国と日本の暮らしの文化を記録',
    searchPlaceholder: '記録を検索',
    allCountries: 'すべての国',
    allCategories: 'すべてのカテゴリ',
    categoryFood: '食べ物',
    categoryPlace: '場所',
    categoryTradition: '伝統',
    categoryDaily: '日常',
    categoryCommunity: '共同体',
    categoryTravel: '旅行',
    countryKR: '韓国',
    countryJP: '日本',
    writeKicker: '記録する',
    writeTitle: '日々の文化を記録する',
    basicInfoTitle: '基本情報',
    basicInfoHelp: '記録したい文化と、その場所の物語を紹介してください。',
    nicknameLabel: '記録者のニックネーム',
    countryLabel: '国',
    titleLabel: '記録のタイトル',
    titlePlaceholder: '例：市場の路地で交わす朝の挨拶',
    regionLabel: '地域・場所',
    regionPlaceholder: '例：釜山広域市・チャガルチ市場',
    categoryLabel: 'カテゴリ',
    practiceNameLabel: '記録する文化・営みの名前',
    practiceNamePlaceholder: '例：近所の人と交わす市場の朝の挨拶',
    recordDateLabel: '記録した日',
    imageLabel: '写真',
    imageUploadHelp: 'JPG、PNG、WebP、GIF · 20MBまで',
    imagePreviewAlt: '選択した写真のプレビュー',
    removeSelectedImage: '写真の選択を取り消す',
    removeSavedImage: '保存済みの写真を削除',
    writeMapLabel: '記録する場所を選ぶ地図',
    locationSectionTitle: '記録する場所',
    locationSectionHelp: '住所や場所の名前を検索し、地図で位置を確認してください。',
    locationSearchLabel: '住所・場所の名前を検索',
    locationSearchPlaceholder: '住所、施設名、町の名前を入力',
    searchLocation: '検索',
    locationResultsLabel: '場所の検索結果',
    geocodingAttribution: '場所検索データ © OpenStreetMap contributors',
    locationNotSelected: '住所を検索するか、地図上で場所を選んでください。',
    locationSearchPrompt: '住所または場所の名前を入力してください。',
    locationSearching: '韓国と日本の場所を検索しています…',
    locationNoResults: '場所が見つかりません。検索語を変えるか、地図上で直接選んでください。',
    locationSearchError: '場所を検索できませんでした。しばらくしてからもう一度お試しください。',
    locationSelected: '選択した場所',
    locationAddressFallback: '地図上で選択した場所',
    mapPinInstructions: '地図を拡大・移動できます。地図をクリックするか、ピンをドラッグして場所を指定してください。',
    startRecord: '身近な文化を記録する',
    newRecord: '新しい記録を登録',
    wizardProgressLabel: '記録作成のステップ',
    stepBasics: '基本情報',
    stepLocation: '場所',
    stepCriteria: '記録の視点',
    stepStory: '文化の物語',
    stepReview: '最終確認',
    reviewTitle: '登録前に内容をご確認ください',
    reviewHelp: 'この記録はほかの訪問者にも公開されます。内容をご確認ください。',
    previousStep: '戻る',
    nextStep: '次へ',
    selectLocation: 'この場所を選ぶ',
    recordSavedLocal: 'このブラウザーにのみ保存しました。ほかの人と共有するにはSupabaseの設定が必要です。',
    recordSavedRemote: '記録をSupabaseに登録しました。',
    recordUpdatedLocal: '記録と写真をこのブラウザーに保存しました。',
    recordUpdatedRemote: '記録をSupabaseで更新しました。',
    recordSaveError: '記録を保存できませんでした。入力内容とSupabaseの設定をご確認ください。',
    recordUpdateError: '記録を更新できませんでした。保存済みの記録は変更されていません。',
    imageCleanupWarning: '記録は保存されましたが、以前の写真ファイルを削除できませんでした。管理者にお知らせください。',
    editRecord: '記録を編集',
    updateRecord: '編集内容を保存',
    backendLocalStatus: 'このブラウザーにのみ保存されます · Supabase未接続',
    backendRemoteStatus: 'Supabaseの共有アーカイブに接続しています。',
    backendSetupStatus: 'Supabaseの接続設定がないため、このブラウザーにのみ保存されます。',
    backendAuthError: 'Supabaseの匿名ログインを開始できません。設定とAnonymous Sign-insを確認してください。',
    backendConnectError: 'Supabaseに接続できません。URL、キー、データベースのポリシーをご確認ください。',
    interactionError: '処理に失敗しました。しばらくしてからもう一度お試しください。',
    locationRequired: '検索結果を選ぶか、地図上で場所を指定してください。',
    locationCountryMismatch: '選んだ場所が選択中の国と異なる可能性があります。国と場所をご確認ください。',
    photoTooLarge: '写真は20MB以下のものを選んでください。',
    photoTypeInvalid: 'JPG、PNG、WebP、GIF形式の画像を選んでください。',
    imageInvalid: '画像ファイルを読み込めません。別の写真を選んでください。',
    imageStoredLocally: '写真をこのブラウザーのIndexedDBに保存しました。同じブラウザーで再度アクセスすると表示されます。',
    localImageStorageError: '保存した写真を読み込めませんでした。ブラウザーの保存領域をご確認ください。',
    reviewBasics: '基本情報',
    reviewLocation: '場所',
    reviewCriteria: '選んだ記録の視点',
    reviewStory: '文化の物語',
    reviewImage: '写真を添付しました。',
    reviewExistingImage: '既存の写真をそのまま使います。',
    reviewNoImage: '写真なし',
    saveInProgress: '記録を保存しています…',
    locationAddress: '住所',
    openMap: '地図で場所を開く',
    latitudeLabel: '緯度',
    longitudeLabel: '経度',
    criteriaFormTitle: 'この文化に近い視点',
    criteriaFormHelp: '最も近い要素を選び、どんな点でそう感じるのかを短く教えてください。すべて選ぶ必要はありません。',
    criteriaLegend: '文化を記録する視点とその理由',
    localityQuestion: '地域の環境や歴史、場所とどのような関係がありますか？',
    communityQuestion: '誰が分かち合い、どのように受け継いでいますか？',
    everydayQuestion: '日常の中で、いつ、どのように行われていますか？',
    localityPlaceholder: '土地の風景や歴史とのつながりを書いてください。',
    communityPlaceholder: '一緒に行う人々や受け継ぎ方を書いてください。',
    everydayPlaceholder: '日常の中で実際に行われている様子を書いてください。',
    storyFormTitle: '文化の物語を聞かせてください',
    storyFormHelp: '短い文やキーワードでも大丈夫です。すべて詳しく書く必要はありません。',
    whatLabel: 'この文化はどのようなものですか？',
    whatPlaceholder: '何を記録したいのか、簡単に紹介してください。',
    whenWhereHowLabel: 'いつ、どこで、どのように行われますか？',
    whenWhereHowPlaceholder: '時期や場所、具体的な様子を書いてください。',
    participantsLabel: '誰が参加し、どのように続いていますか？',
    participantsPlaceholder: '参加する人々や受け継がれ方を書いてください。',
    meaningLabel: '今、この文化が持つ意味や価値は何ですか？',
    meaningPlaceholder: 'あなたや周りの人々にとっての意味を書いてください。',
    futureLabel: '未来の世代に伝えたいと思う理由はありますか？',
    futurePlaceholder: 'これからも覚えていてほしい理由を書いてください。',
    recordContentTitle: '記録をひとつの文章にまとめましょう',
    recordContentHelp: 'アーカイブの一覧にも表示されます。',
    contentLabel: '記録の本文',
    contentPlaceholder: '目の前の風景や思い出を自由に聞かせてください。',
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
    sampleRecord: 'サンプル記録',
    sampleReadOnly: '閲覧用のサンプル記録です。共感やコメントは実際の利用者参加として集計されません。',
    monthLabel: '月間記録',
    noResults: '検索結果がありません。',
    closeLabel: '閉じる',
    languageLabel: '言語を選択',
    countryCountAll: 'すべて',
    mapLoadErrorTitle: '地図を読み込めませんでした',
    mapLoadErrorText: 'Leafletを読み込めません。インターネット接続をご確認ください。',
    mapUnavailableTitle: '地図の情報を読み込めませんでした。',
    mapUnavailableText: '記録の一覧は引き続きご覧いただけます。',
    mapTileErrorTitle: '地図タイルを読み込めませんでした',
    mapTileErrorText: '地図サーバーに接続できないため、案内を表示しています。',
    writeMapUnavailableTitle: '地図機能を利用できません。',
    writeMapUnavailableText: 'ネットワーク接続を確認して、もう一度お試しください。',
    mapEmpty: 'まだ記録はありません。',
    countryEmpty: '{country}の記録はまだありません。',
    noComments: 'コメントはまだありません。',
    commentNickname: '匿名',
    requiredFields: '必須項目を入力してください。',
    selectCriterion: 'この文化に最も近い記録の視点を一つ以上選んでください。',
    criterionReasonRequired: '選んだ視点ごとに、その理由を短く書いてください。',
    detailBasics: '基本情報',
    detailStory: '記録の内容',
    detailCriteria: '文化を記録する視点',
    detailReasons: 'この視点を選んだ理由',
    detailNoCriteria: '以前の形式で登録された記録です。記録の視点は個別に入力されていません。',
    detailNoReasons: '選んだ視点についての説明はまだありません。',
    detailWhat: 'この文化はどのようなものですか？',
    detailWhenWhereHow: 'いつ、どこで、どのように行われますか？',
    detailParticipants: '誰が参加し、どのように続いていますか？',
    detailMeaning: '今、この文化が持つ意味や価値',
    detailFuture: '未来の世代に伝えたい理由',
    recordDateDetail: '記録日',
    practiceNameDetail: '記録する文化',
    imageFallbackAlt: '文化記録の写真',
    writerLabel: '記録者'
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

const SAMPLE_POST_IDS = new Set(seedData.map((post) => post.id));

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
  mapMarkers: null,
  activeMapCountry: 'all',
  writeMap: null,
  writeMarker: null,
  wizardStep: 0,
  selectedLocationLabel: '',
  selectedImagePreviewUrl: null,
  editingPostId: null,
  removeExistingImage: false,
  lastGeocodeRequestAt: 0,
  geocodeQueue: Promise.resolve(),
  locationRequestId: 0,
  supabase: null,
  publishedRecordIds: new Set(),
  detailMap: null,
  backendMode: 'local',
  userId: null,
  likedRecordIds: new Set(),
  monthlyVoting: {
    periods: [],
    tallies: {},
    userVotes: {},
    schemaReady: false,
    loadError: false,
    submitting: false
  }
};

const GEOCODING_ENDPOINT = 'https://nominatim.openstreetmap.org';
const STORAGE_BUCKET = 'mumyeong-media';
const MAX_IMAGE_SIZE = 20 * 1024 * 1024;
const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
const IMAGE_DATABASE_NAME = 'mumyeong-image-store-v1';
const IMAGE_OBJECT_STORE = 'images';
const imageObjectUrls = new Map();
let imageDatabasePromise;

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

function hasRecordPhoto(post) {
  return Boolean(post.imageKey || (post.image && !post.image.includes('photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80')));
}

function setImageRemoveButtonLabel(key) {
  const button = document.getElementById('removeSelectedImageBtn');
  button.dataset.i18n = key;
  button.textContent = getText(key);
}

function showExistingImagePreview(post) {
  document.getElementById('imagePreview').src = getRecordImage(post);
  document.getElementById('imagePreviewName').textContent = getText('reviewExistingImage');
  document.getElementById('imagePreviewPanel').classList.remove('hidden');
  setImageRemoveButtonLabel('removeSavedImage');
}

let records = loadRecords();

function saveRecords(sourceRecords = records) {
  const persistentRecords = sourceRecords.map((record) => {
    const saved = { ...record };
    if (saved.image?.startsWith('blob:') || saved.image?.startsWith('data:')) delete saved.image;
    return saved;
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(persistentRecords));
}

function openImageDatabase() {
  if (!('indexedDB' in window)) {
    return Promise.reject(new Error('This browser does not support persistent local image storage.'));
  }
  if (!imageDatabasePromise) {
    imageDatabasePromise = new Promise((resolve, reject) => {
      const request = indexedDB.open(IMAGE_DATABASE_NAME, 1);
      request.onupgradeneeded = () => {
        const database = request.result;
        if (!database.objectStoreNames.contains(IMAGE_OBJECT_STORE)) {
          database.createObjectStore(IMAGE_OBJECT_STORE, { keyPath: 'id' });
        }
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error || new Error('Unable to open local image storage.'));
      request.onblocked = () => reject(new Error('Local image storage upgrade is blocked by another tab.'));
    });
  }
  return imageDatabasePromise;
}

async function storeLocalImage(blob, imageKey = `image-${window.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`}`) {
  const database = await openImageDatabase();
  await new Promise((resolve, reject) => {
    const transaction = database.transaction(IMAGE_OBJECT_STORE, 'readwrite');
    transaction.objectStore(IMAGE_OBJECT_STORE).put({
      id: imageKey,
      blob,
      type: blob.type || 'application/octet-stream',
      updatedAt: new Date().toISOString()
    });
    transaction.oncomplete = resolve;
    transaction.onerror = () => reject(transaction.error || new Error('Unable to save the image.'));
    transaction.onabort = () => reject(transaction.error || new Error('Image save was cancelled.'));
  });
  return imageKey;
}

async function loadLocalImage(imageKey) {
  const database = await openImageDatabase();
  const entry = await new Promise((resolve, reject) => {
    const request = database.transaction(IMAGE_OBJECT_STORE, 'readonly').objectStore(IMAGE_OBJECT_STORE).get(imageKey);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error('Unable to load the saved image.'));
  });
  return entry?.blob || null;
}

async function deleteLocalImage(imageKey) {
  if (!imageKey) return;
  const database = await openImageDatabase();
  await new Promise((resolve, reject) => {
    const transaction = database.transaction(IMAGE_OBJECT_STORE, 'readwrite');
    transaction.objectStore(IMAGE_OBJECT_STORE).delete(imageKey);
    transaction.oncomplete = resolve;
    transaction.onerror = () => reject(transaction.error || new Error('Unable to remove the saved image.'));
    transaction.onabort = () => reject(transaction.error || new Error('Image removal was cancelled.'));
  });
  const objectUrl = imageObjectUrls.get(imageKey);
  if (objectUrl) URL.revokeObjectURL(objectUrl);
  imageObjectUrls.delete(imageKey);
}

function dataUrlToBlob(dataUrl) {
  const [header, encoded] = dataUrl.split(',', 2);
  const mimeType = header.match(/data:([^;]+)/)?.[1] || 'application/octet-stream';
  const binary = atob(encoded);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) bytes[index] = binary.charCodeAt(index);
  return new Blob([bytes], { type: mimeType });
}

async function hydrateLocalImages() {
  let migrated = false;
  for (const record of records) {
    if (record.imageKey) {
      const blob = await loadLocalImage(record.imageKey);
      if (blob) {
        const existingUrl = imageObjectUrls.get(record.imageKey);
        if (existingUrl) URL.revokeObjectURL(existingUrl);
        record.image = URL.createObjectURL(blob);
        imageObjectUrls.set(record.imageKey, record.image);
      } else {
        console.error(`Saved image is missing from local storage: ${record.imageKey}`);
      }
    } else if (record.image?.startsWith('data:')) {
      const imageKey = await storeLocalImage(dataUrlToBlob(record.image));
      record.imageKey = imageKey;
      const objectUrl = URL.createObjectURL(await loadLocalImage(imageKey));
      imageObjectUrls.set(imageKey, objectUrl);
      record.image = objectUrl;
      migrated = true;
    }
  }
  if (migrated) saveRecords();
}

function setStorageStatus(text, state = 'local') {
  const status = document.getElementById('storageStatus');
  if (!status) return;
  status.textContent = text;
  status.dataset.state = state;
}

function showNotice(text, state = 'success') {
  const notice = document.getElementById('appNotice');
  if (!notice) return;
  notice.textContent = text;
  notice.dataset.state = state;
  notice.classList.add('visible');
  clearTimeout(showNotice.timer);
  showNotice.timer = setTimeout(() => notice.classList.remove('visible'), 5000);
}

function mapDatabaseRecord(row, comments = [], likes = []) {
  return {
    id: row.id,
    nickname: row.nickname || '',
    title: row.title || '',
    content: row.content || '',
    country: row.country || 'KR',
    region: row.region || '',
    category: row.category || '',
    practiceName: row.practice_name || '',
    locationLabel: row.location_label || '',
    recordDate: row.record_date || '',
    criteria: ['locality', 'community', 'everyday'].filter((key) => row[`${key}_notes`]),
    localityNotes: row.locality_notes || '',
    communityNotes: row.community_notes || '',
    everydayNotes: row.everyday_notes || '',
    descriptionWhat: row.description_what || '',
    descriptionWhenWhereHow: row.description_when_where_how || '',
    descriptionParticipants: row.description_participants || '',
    descriptionValue: row.description_value || '',
    descriptionFuture: row.description_future || '',
    image: row.image_url || '',
    lat: Number(row.lat),
    lng: Number(row.lng),
    createdAt: row.created_at || new Date().toISOString(),
    authorId: row.author_id,
    likes: likes.filter((like) => like.record_id === row.id).length,
    comments: comments.filter((comment) => comment.record_id === row.id).map((comment) => ({
      id: comment.id,
      nickname: comment.nickname || getText('commentNickname'),
      text: comment.content || '',
      createdAt: comment.created_at
    }))
  };
}

async function initializeBackend() {
  const config = window.MUMYEONG_SUPABASE_CONFIG;
  if (!config?.url || !config?.anonKey) {
    appState.backendMode = 'local';
    setStorageStatus(getText('backendLocalStatus'), 'local');
    return;
  }

  if (!window.supabase?.createClient) {
    appState.backendMode = 'error';
    setStorageStatus(getText('backendConnectError'), 'error');
    showNotice(getText('backendConnectError'), 'error');
    return;
  }

  appState.backendMode = 'connecting';
  appState.supabase = window.supabase.createClient(config.url, config.anonKey);

  try {
    const { data: sessionData, error: sessionError } = await appState.supabase.auth.getSession();
    if (sessionError) throw sessionError;

    let user = sessionData.session?.user;
    if (!user) {
      const { data, error } = await appState.supabase.auth.signInAnonymously();
      if (error) throw error;
      user = data.user;
    }

    if (!user?.id) throw new Error('Anonymous auth returned no user identifier.');
    appState.userId = user.id;

    const [{ data: rows, error: recordsError }, { data: comments, error: commentsError }, { data: likes, error: likesError }] = await Promise.all([
      appState.supabase.from('records').select('*').eq('status', 'published').order('created_at', { ascending: false }),
      appState.supabase.from('comments').select('id,record_id,nickname,content,created_at'),
      appState.supabase.from('likes').select('record_id,user_id')
    ]);

    if (recordsError) throw recordsError;
    if (commentsError) throw commentsError;
    if (likesError) throw likesError;

    const databaseRecords = (rows || []).map((row) => mapDatabaseRecord(row, comments || [], likes || []));
    appState.publishedRecordIds = new Set(
      databaseRecords.filter((post) => !isSampleRecord(post)).map((post) => post.id)
    );
    records = mergeSampleRecords(databaseRecords);
    appState.likedRecordIds = new Set((likes || []).filter((like) => like.user_id === user.id).map((like) => like.record_id));
    appState.backendMode = 'remote';
    setStorageStatus(getText('backendRemoteStatus'), 'remote');
    await loadMonthlyVotingData();
    renderAll();
  } catch (error) {
    console.error('Supabase initialization failed:', error);
    appState.backendMode = 'error';
    setStorageStatus(getText('backendConnectError'), 'error');
    showNotice(getText('backendConnectError'), 'error');
  }
}

function getCurrentMonthKey(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-01`;
}

async function loadMonthlyVotingData() {
  const voting = appState.monthlyVoting;
  voting.periods = [];
  voting.tallies = {};
  voting.userVotes = {};
  voting.schemaReady = false;
  voting.loadError = false;

  if (appState.backendMode !== 'remote') return;

  try {
    const fetchPeriods = async () => {
      const { data, error } = await appState.supabase
        .from('monthly_vote_periods')
        .select('month_start,opens_at,closes_at,selected_record_id,finalized_at')
        .order('month_start', { ascending: false });
      if (error) throw error;
      return data || [];
    };

    voting.periods = await fetchPeriods();
    let finalizedPeriod = false;
    for (const period of voting.periods) {
      if (!period.finalized_at && Date.now() >= new Date(period.closes_at).getTime()) {
        const { error } = await appState.supabase.rpc('finalize_monthly_vote', {
          p_month_start: period.month_start
        });
        if (error) throw error;
        finalizedPeriod = true;
      }
    }
    if (finalizedPeriod) voting.periods = await fetchPeriods();

    const tallyResults = await Promise.all(voting.periods.map(async (period) => {
      const { data, error } = await appState.supabase.rpc('get_monthly_vote_tallies', {
        p_month_start: period.month_start
      });
      if (error) throw error;
      return [period.month_start, Object.fromEntries((data || []).map((row) => [row.record_id, Number(row.vote_count)]))];
    }));
    voting.tallies = Object.fromEntries(tallyResults);

    const currentPeriod = voting.periods.find((period) => period.month_start === getCurrentMonthKey());
    if (currentPeriod) {
      const { data, error } = await appState.supabase.rpc('get_my_monthly_vote', {
        p_month_start: currentPeriod.month_start
      });
      if (error) throw error;
      if (data) voting.userVotes[currentPeriod.month_start] = data;
    }
    voting.schemaReady = true;
  } catch (error) {
    console.error('Monthly voting data could not be loaded:', error);
    voting.loadError = true;
  }
}

function getText(key) {
  return translations[appState.lang]?.[key] || translations.ko[key] || key;
}

const seededJapaneseText = {
  'post-001': {
    nickname: 'オ・ジョンテク',
    title: '大田・儒城温泉で過ごす家族の週末',
    region: '大田広域市・西区',
    content: '大田の儒城温泉で湯につかり、家族と温かいクッパを食べる週末の朝を記録したい。儒城温泉は、地域の人々が長い間、入浴や休息に訪れてきた身近な場所だ。温泉のあとに近くの食堂で食事をする風景も自然に続いてきた。家族と過ごす時間を通して、地域の暮らしが受け継がれる場所だと感じる。'
  },
  'post-002': {
    nickname: 'キム・ドンイン',
    title: '市場の昼と夜をつなぐ麗水の屋台文化',
    region: '全羅南道・麗水市',
    content: '麗水の橋洞市場では、昼は干物が売買され、夜は屋台を囲んで人々の語らいが続く。市場の昼と夜がつながる風景から、長く続いてきた暮らしの文化が見えてくる。漁師や商人、住民、旅人が同じ場所を行き交い、一日を分かち合うところに麗水の共同体らしさを感じる。'
  },
  'post-004': {
    nickname: 'ハジュン',
    title: '大阪の路地市場の夕暮れ',
    region: '大阪府・大阪市',
    content: '大阪の路地市場は、夕方になると静かな通りが活気に満ちていく。小さな店が開き、人々は言葉を交わしながら食材を選ぶ。観光地のような華やかさはないけれど、そこでは昔からの暮らし方が今も息づいている。'
  },
  'post-005': {
    nickname: 'ナヒョン',
    title: '済州のオルムに映る季節の風景',
    region: '済州特別自治道・済州市',
    content: '済州島のオルムの近くの村では、夕暮れになると畑に風が吹き、人々が集まってお茶を飲みながら一日を終える。外から見ると観光地のように華やかだが、日々の営みこそが大切だ。何気ない風景の中に、残していく価値のある暮らしがある。'
  },
  'post-006': {
    nickname: 'ユウト',
    title: '京都の寺町に訪れる静かな朝',
    region: '京都府・京都市',
    content: '京都の寺町は、朝早くには人通りが少なく、寺の鐘の音が響く。行き交う人は多くないが、この静かな時間が一日の町の空気をつくる。そんな日常の静けさも、社会や文化を知るための大切な記録になる。'
  }
};

const seededJapaneseComments = {
  'c-1': '温泉のあとに食べるクッパ、とても魅力的ですね。',
  'c-2': '家族で過ごす何気ない時間こそ、未来に残したい文化だと感じます。',
  'c-3': 'この風景には、長く記録しておく価値がありますね。',
  'c-4': '夜の市場の様子が目に浮かぶようです。',
  'c-5': '観光だけではなく、地域の暮らしそのものが伝わってきます。',
  'c-6': '朝の通勤風景がよく伝わってきます。',
  'c-7': '市場の文化をこうして記録するのは素敵ですね。',
  'c-8': 'オルムと村の暮らしが一緒に感じられます。'
};

const seededJapaneseCommentNames = {
  'c-1': 'ミンジ',
  'c-2': 'カンウ',
  'c-3': 'ユンソ',
  'c-4': 'セヨン',
  'c-5': 'ミンス',
  'c-7': 'リナ',
  'c-8': 'ソラ'
};

function getRecordText(post, field) {
  if (appState.lang === 'ja' && seededJapaneseText[post.id]?.[field]) {
    return seededJapaneseText[post.id][field];
  }
  return post[field] || '';
}

function isSampleRecord(post) {
  return SAMPLE_POST_IDS.has(post.id);
}

function mergeSampleRecords(databaseRecords) {
  const merged = new Map(seedData.map((post) => [post.id, { ...post }]));
  databaseRecords.forEach((post) => {
    if (!isSampleRecord(post)) merged.set(post.id, post);
  });
  return [...merged.values()];
}

function getRecordImage(post) {
  if (post.id === 'post-001' && post.image.includes('photo-1542314831-068e97d3c3b4')) {
    return 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80';
  }
  return post.image;
}

function getCommentText(comment) {
  return appState.lang === 'ja' && seededJapaneseComments[comment.id]
    ? seededJapaneseComments[comment.id]
    : comment.text;
}

function getCommentNickname(comment) {
  return appState.lang === 'ja' && seededJapaneseCommentNames[comment.id]
    ? seededJapaneseCommentNames[comment.id]
    : comment.nickname;
}

function formatDate(dateString) {
  const d = new Date(dateString);
  if (Number.isNaN(d.getTime())) return dateString;
  return `${d.getFullYear()}. ${String(d.getMonth() + 1).padStart(2, '0')}. ${String(d.getDate()).padStart(2, '0')}.`;
}

function formatMonth(monthString) {
  const date = new Date(`${monthString}-01T00:00:00`);
  return new Intl.DateTimeFormat(appState.lang === 'ja' ? 'ja-JP' : 'ko-KR', {
    year: 'numeric',
    month: 'long'
  }).format(date);
}

function getCountryLabel(code) {
  return code === 'KR' ? getText('countryKR') : code === 'JP' ? getText('countryJP') : code;
}

function getCategoryLabel(category) {
  const keys = {
    '음식': 'categoryFood',
    '장소': 'categoryPlace',
    '전통': 'categoryTradition',
    '일상': 'categoryDaily',
    '공동체': 'categoryCommunity',
    '여행': 'categoryTravel'
  };
  return keys[category] ? getText(keys[category]) : category;
}

function escapeHtml(value = '') {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[character]);
}

function getRecordCriteria(post) {
  if (Array.isArray(post.criteria)) return post.criteria;
  return ['locality', 'community', 'everyday'].filter((criterion) => post[`${criterion}Notes`]);
}

function getCriterionLabel(criterion) {
  const keys = { locality: 'localityTitle', community: 'communityTitle', everyday: 'everydayTitle' };
  return keys[criterion] ? getText(keys[criterion]) : criterion;
}

function getFilteredRecords() {
  const search = appState.filters.search.trim().toLowerCase();
  return records.filter((item) => {
    const matchesCountry = appState.filters.country === 'all' || item.country === appState.filters.country;
    const matchesCategory = appState.filters.category === 'all' || item.category === appState.filters.category;
    const searchText = [getRecordText(item, 'title'), getRecordText(item, 'content'), getRecordText(item, 'region'), getRecordText(item, 'nickname')].join(' ').toLowerCase();
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
  const recentRecords = records
    .filter((post) => !isSampleRecord(post))
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 2);
  const featuredRecords = [...records.filter(isSampleRecord), ...recentRecords];
  container.innerHTML = featuredRecords.map((post) => `
    <article class="feature-card archive-card" data-post-id="${post.id}">
      <div class="card-image">
        <img src="${escapeHtml(getRecordImage(post))}" alt="${escapeHtml(getRecordText(post, 'title'))}" />
        <span class="country-chip">${getCountryLabel(post.country)}</span>
      </div>
      <div class="card-body">
        <div class="meta-row">
          ${isSampleRecord(post) ? `<span class="sample-badge">${getText('sampleRecord')}</span>` : ''}
          <span class="location">📍 ${escapeHtml(getRecordText(post, 'region'))}</span>
        </div>
        <h3 class="card-title">${escapeHtml(getRecordText(post, 'title'))}</h3>
        <p class="card-summary">${escapeHtml(getRecordText(post, 'content'))}</p>
        <div class="byline">
          <span>${escapeHtml(getRecordText(post, 'nickname'))}</span>
          <span>·</span>
          <span>${formatDate(post.createdAt)}</span>
        </div>
        ${isSampleRecord(post)
          ? `<div class="card-actions"><button class="save-btn open-detail" type="button" data-post-id="${post.id}">${getText('viewMore')}</button></div>`
          : `<div class="card-actions">
              <div class="action-group">
                <button class="action-btn like-post" type="button" data-post-id="${post.id}"><span class="icon">♥</span> ${getText('likeBtn')} ${post.likes}</button>
                <button class="action-btn open-detail" type="button" data-post-id="${post.id}"><span class="icon">💬</span> ${post.comments.length}</button>
              </div>
              <button class="save-btn" type="button" data-post-id="${post.id}">${getText('viewMore')}</button>
            </div>`}
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
        <img src="${escapeHtml(getRecordImage(post))}" alt="${escapeHtml(getRecordText(post, 'title'))}" />
        <span class="country-chip">${getCountryLabel(post.country)}</span>
      </div>
      <div class="card-body">
        <div class="meta-row">
          ${isSampleRecord(post) ? `<span class="sample-badge">${getText('sampleRecord')}</span>` : ''}
          <span class="location">📍 ${escapeHtml(getRecordText(post, 'region'))}</span>
        </div>
        <h3 class="card-title">${escapeHtml(getRecordText(post, 'title'))}</h3>
        <p class="card-summary">${escapeHtml(getRecordText(post, 'content'))}</p>
        <div class="byline">
          <span>${escapeHtml(getRecordText(post, 'nickname'))}</span>
          <span>·</span>
          <span>${formatDate(post.createdAt)}</span>
        </div>
        ${isSampleRecord(post)
          ? `<div class="card-actions"><button class="save-btn open-detail" type="button" data-post-id="${post.id}">${getText('viewMore')}</button></div>`
          : `<div class="card-actions">
              <div class="action-group">
                <button class="action-btn like-post" type="button" data-post-id="${post.id}"><span class="icon">♥</span> ${post.likes}</button>
                <button class="action-btn open-detail" type="button" data-post-id="${post.id}"><span class="icon">💬</span> ${post.comments.length}</button>
              </div>
              <button class="save-btn open-detail" type="button" data-post-id="${post.id}">${getText('viewMore')}</button>
            </div>`}
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

async function toggleLike(postId) {
  const target = records.find((item) => item.id === postId);
  if (!target || isSampleRecord(target)) return;
  if (appState.backendMode === 'remote') {
    const alreadyLiked = appState.likedRecordIds.has(postId);
    try {
      if (alreadyLiked) {
        const { error } = await appState.supabase.from('likes').delete()
          .eq('record_id', postId).eq('user_id', appState.userId);
        if (error) throw error;
        appState.likedRecordIds.delete(postId);
        target.likes = Math.max(0, target.likes - 1);
      } else {
        const { error } = await appState.supabase.from('likes').insert({
          record_id: postId,
          user_id: appState.userId
        });
        if (error) throw error;
        appState.likedRecordIds.add(postId);
        target.likes += 1;
      }
      renderAll();
      if (document.getElementById('detailModal').classList.contains('visible')) openDetail(postId);
    } catch (error) {
      console.error('Like update failed:', error);
      showNotice(getText('interactionError'), 'error');
    }
    return;
  }
  target.likes += 1;
  saveRecords();
  renderAll();
}

function renderMonthly() {
  const container = document.getElementById('monthlyGrid');
  const archive = document.getElementById('monthlyArchiveGrid');
  const status = document.getElementById('monthlyStatus');
  const winnerContainer = document.getElementById('monthlyWinner');
  if (!container || !archive || !status || !winnerContainer) return;

  const monthStart = getCurrentMonthKey();
  const period = appState.monthlyVoting.periods.find((item) => item.month_start === monthStart);
  const now = Date.now();
  const isOpen = Boolean(period
    && !period.finalized_at
    && now >= new Date(period.opens_at).getTime()
    && now < new Date(period.closes_at).getTime());
  const hasVoted = Boolean(period && appState.monthlyVoting.userVotes[monthStart]);
  const dbReady = appState.backendMode === 'remote' && appState.monthlyVoting.schemaReady;
  const tallies = period && dbReady ? appState.monthlyVoting.tallies[monthStart] || {} : {};
  const candidates = records.filter((post) => appState.publishedRecordIds.has(post.id)).sort((a, b) => {
    const voteDifference = (tallies[b.id] || 0) - (tallies[a.id] || 0);
    return voteDifference || new Date(a.createdAt) - new Date(b.createdAt);
  });
  const rankedIds = new Map(candidates.map((post, index) => [post.id, index + 1]));

  let statusMessage = getText('monthlyNoPeriod');
  if (appState.backendMode !== 'remote') statusMessage = getText('monthlyLocalNotice');
  else if (appState.monthlyVoting.loadError) statusMessage = getText('monthlySchemaNotice');
  else if (period?.finalized_at) statusMessage = getText('monthlyFinalized');
  else if (isOpen) {
    const closingDate = new Intl.DateTimeFormat(appState.lang === 'ja' ? 'ja-JP' : 'ko-KR', {
      dateStyle: 'medium',
      timeZone: 'Asia/Seoul'
    }).format(new Date(period.closes_at));
    statusMessage = getText('monthlyVotingOpen').replace('{end}', closingDate);
  } else if (period && now >= new Date(period.closes_at).getTime()) statusMessage = getText('monthlyVotingClosed');
  else if (period) statusMessage = getText('monthlyVotingNotOpen');

  status.innerHTML = `<p>${escapeHtml(getText('monthlyCommunityNotice'))}</p><p>${escapeHtml(statusMessage)}</p>`;

  const currentWinner = period?.finalized_at
    ? candidates.find((post) => post.id === period.selected_record_id)
    : null;
  winnerContainer.innerHTML = currentWinner
    ? `<article class="monthly-winner-card">
        <img src="${escapeHtml(getRecordImage(currentWinner))}" alt="${escapeHtml(getRecordText(currentWinner, 'title'))}" />
        <div>
          <span class="month-label">${escapeHtml(getText('monthlySelected'))} · ${escapeHtml(formatMonth(monthStart.slice(0, 7)))}</span>
          <h3>${escapeHtml(getRecordText(currentWinner, 'title'))}</h3>
          <p>${escapeHtml(getRecordText(currentWinner, 'content'))}</p>
          <span class="monthly-final-votes">${escapeHtml(getText('monthlyFinalVotes'))}: ${Number(tallies[currentWinner.id] || 0).toLocaleString(appState.lang === 'ja' ? 'ja-JP' : 'ko-KR')} ${escapeHtml(getText('monthlyVotes'))}</span>
          <button class="secondary-btn monthly-open-record" type="button" data-post-id="${escapeHtml(currentWinner.id)}">${escapeHtml(getText('monthlyOpenRecord'))}</button>
        </div>
      </article>`
    : '';

  if (!candidates.length) {
    container.innerHTML = `<div class="empty-state">${escapeHtml(getText('monthlyNoCandidates'))}</div>`;
  } else {
    container.innerHTML = candidates.map((post) => {
      const selectedByUser = period && appState.monthlyVoting.userVotes[monthStart] === post.id;
      const voteButtonEnabled = isOpen && dbReady && !hasVoted && !appState.monthlyVoting.submitting;
      let buttonText = getText('monthlyVote');
      if (!dbReady) buttonText = getText('monthlyVoteUnavailable');
      else if (appState.monthlyVoting.submitting) buttonText = getText('monthlyVoteInProgress');
      else if (hasVoted) buttonText = selectedByUser ? getText('monthlyVoted') : getText('monthlyVoteDone');
      else if (!period) buttonText = getText('monthlyVoteUnavailable');
      else if (period.finalized_at || now >= new Date(period.closes_at).getTime()) buttonText = getText('monthlyVoteClosed');
      else if (!isOpen) buttonText = getText('monthlyVoteNotOpen');

      const reasons = ['locality', 'community', 'everyday'].map((criterion) => {
        const note = post[`${criterion}Notes`];
        return `<div class="monthly-criterion ${criterion}">
          <strong>${escapeHtml(getCriterionLabel(criterion))}</strong>
          <p>${escapeHtml(note || getText('monthlyNoReason'))}</p>
        </div>`;
      }).join('');
      const voteInfo = dbReady && period
        ? `<span class="monthly-vote-count">${Number(tallies[post.id] || 0).toLocaleString(appState.lang === 'ja' ? 'ja-JP' : 'ko-KR')} ${escapeHtml(getText('monthlyVotes'))}</span>
          <span class="monthly-rank">${escapeHtml(String(rankedIds.get(post.id)))}${escapeHtml(getText('monthlyRank'))}</span>`
        : `<span class="monthly-vote-count">${escapeHtml(getText('monthlyVotesUnavailable'))}</span>`;

      return `<article class="monthly-vote-card" data-post-id="${escapeHtml(post.id)}">
        <button class="monthly-record-open" type="button" data-post-id="${escapeHtml(post.id)}" aria-label="${escapeHtml(getText('monthlyOpenRecord'))}: ${escapeHtml(getRecordText(post, 'title'))}">
          <img src="${escapeHtml(getRecordImage(post))}" alt="${escapeHtml(getRecordText(post, 'title'))}" />
          <span>${escapeHtml(getText('monthlyOpenRecord'))}</span>
        </button>
        <div class="monthly-vote-body">
          <div class="monthly-vote-meta"><span>${escapeHtml(getCountryLabel(post.country))}</span><span>📍 ${escapeHtml(post.locationLabel || getRecordText(post, 'region'))}</span></div>
          <button class="monthly-record-title monthly-open-record" type="button" data-post-id="${escapeHtml(post.id)}">${escapeHtml(getRecordText(post, 'title'))}</button>
          <div class="byline"><span>${escapeHtml(getText('writerLabel'))}: ${escapeHtml(getRecordText(post, 'nickname'))}</span><span>·</span><span>${formatDate(post.recordDate || post.createdAt)}</span></div>
          <p class="monthly-description">${escapeHtml(post.descriptionWhat || getRecordText(post, 'content'))}</p>
          <div class="monthly-criteria-list">${reasons}</div>
          <div class="monthly-vote-footer">
            <div class="monthly-tally">${voteInfo}</div>
            <button class="primary-btn monthly-vote-btn" type="button" data-month="${escapeHtml(monthStart)}" data-post-id="${escapeHtml(post.id)}" ${voteButtonEnabled ? '' : 'disabled'}>${escapeHtml(buttonText)}</button>
          </div>
        </div>
      </article>`;
    }).join('');
  }

  const archivedPeriods = appState.monthlyVoting.periods.filter((item) => item.finalized_at);
  archive.innerHTML = archivedPeriods.length
    ? archivedPeriods.map((archivedPeriod) => {
      const selected = records.find((post) => post.id === archivedPeriod.selected_record_id
        && appState.publishedRecordIds.has(post.id));
      if (!selected) return '';
      const archivedTallies = appState.monthlyVoting.tallies[archivedPeriod.month_start] || {};
      return `<article class="monthly-archive-card">
        <span class="month-label">${escapeHtml(formatMonth(archivedPeriod.month_start.slice(0, 7)))}</span>
        <button class="monthly-record-open monthly-archive-open" type="button" data-post-id="${escapeHtml(selected.id)}">
          <img src="${escapeHtml(getRecordImage(selected))}" alt="${escapeHtml(getRecordText(selected, 'title'))}" />
          <span>${escapeHtml(getText('monthlySelected'))}</span>
        </button>
        <div class="monthly-archive-copy">
          <h4>${escapeHtml(getRecordText(selected, 'title'))}</h4>
          <p>${escapeHtml(getRecordText(selected, 'region'))}</p>
          <span>${escapeHtml(getText('monthlyFinalVotes'))}: ${Number(archivedTallies[selected.id] || 0).toLocaleString(appState.lang === 'ja' ? 'ja-JP' : 'ko-KR')} ${escapeHtml(getText('monthlyVotes'))}</span>
        </div>
      </article>`;
    }).join('') || `<div class="empty-state">${escapeHtml(getText('monthlyNoArchive'))}</div>`
    : `<div class="empty-state">${escapeHtml(getText('monthlyNoArchive'))}</div>`;

  container.querySelectorAll('.monthly-open-record').forEach((button) => {
    button.addEventListener('click', () => openDetail(button.dataset.postId));
  });
  container.querySelectorAll('.monthly-vote-card').forEach((card) => {
    card.addEventListener('click', (event) => {
      if (event.target.closest('button')) return;
      openDetail(card.dataset.postId);
    });
  });
  archive.querySelectorAll('.monthly-archive-open').forEach((button) => {
    button.addEventListener('click', () => openDetail(button.dataset.postId));
  });
  container.querySelectorAll('.monthly-vote-btn').forEach((button) => {
    button.addEventListener('click', () => castMonthlyVote(button.dataset.month, button.dataset.postId));
  });
  winnerContainer.querySelector('.monthly-open-record')?.addEventListener('click', (event) => {
    openDetail(event.currentTarget.dataset.postId);
  });
}

async function castMonthlyVote(monthStart, postId) {
  const voting = appState.monthlyVoting;
  if (appState.backendMode !== 'remote' || !voting.schemaReady || voting.submitting) return;
  if (!appState.publishedRecordIds.has(postId)) return;
  if (voting.userVotes[monthStart]) {
    showNotice(getText('monthlyAlreadyVoted'), 'error');
    return;
  }

  voting.submitting = true;
  renderMonthly();
  try {
    const { error } = await appState.supabase.rpc('cast_monthly_vote', {
      p_month_start: monthStart,
      p_record_id: postId
    });
    if (error) {
      if (error.code === '23505') {
        await loadMonthlyVotingData();
        showNotice(getText('monthlyAlreadyVoted'), 'error');
        renderMonthly();
        return;
      }
      throw error;
    }
    await loadMonthlyVotingData();
    showNotice(getText('monthlyVoteSaved'));
  } catch (error) {
    console.error('Monthly vote could not be saved:', error);
    showNotice(getText('monthlyVotingError'), 'error');
  } finally {
    voting.submitting = false;
    renderMonthly();
  }
}

function showMapFallback(message) {
  const mapElement = document.getElementById('map');
  if (!mapElement) return;

  let fallback = mapElement.querySelector('.map-fallback');
  if (!fallback) {
    fallback = document.createElement('div');
    fallback.className = 'map-fallback';
    mapElement.append(fallback);
  }
  fallback.innerHTML = `
      <div>
        <strong>${escapeHtml(message.title || getText('mapLoadErrorTitle'))}</strong>
        <small>${escapeHtml(message.text || getText('mapLoadErrorText'))}</small>
      </div>
  `;
}

function getMapCountryList() {
  return [
    { code: 'all', label: getText('countryCountAll') },
    { code: 'KR', label: getCountryLabel('KR') },
    { code: 'JP', label: getCountryLabel('JP') }
  ];
}

function renderMap() {
  const mapElement = document.getElementById('map');
  const sidebar = document.getElementById('mapSidebar');

  if (!mapElement) return;

  if (!window.L) {
    showMapFallback({
      title: getText('mapLoadErrorTitle'),
      text: getText('mapLoadErrorText')
    });
    if (sidebar) {
      sidebar.innerHTML = `
        <div class="map-entry">
          <h4>${getText('mapUnavailableTitle')}</h4>
          <p>${getText('mapUnavailableText')}</p>
        </div>
      `;
    }
    return;
  }

  mapElement.querySelector('.map-fallback')?.remove();

  const countryRecords = records.filter((post) => post.country === 'KR' || post.country === 'JP');
  const countryCounts = {
    all: countryRecords.length,
    KR: countryRecords.filter((post) => post.country === 'KR').length,
    JP: countryRecords.filter((post) => post.country === 'JP').length
  };

  let map = appState.mapInstance;
  if (!map) {
    map = L.map(mapElement, {
      zoomControl: true,
      attributionControl: true,
      scrollWheelZoom: true,
      touchZoom: true,
      dragging: true,
      doubleClickZoom: true,
      minZoom: 3,
      maxZoom: 19,
      maxBounds: [[22, 112], [52, 158]],
      maxBoundsViscosity: 0.8,
      zoomSnap: 0.25,
      wheelPxPerZoomLevel: 80
    }).setView([36.5, 133.5], 5);

    const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors'
    });

    tileLayer.on('tileerror', () => {
      showMapFallback({
        title: getText('mapTileErrorTitle'),
        text: getText('mapTileErrorText')
      });
    });

    tileLayer.addTo(map);
    appState.mapInstance = map;
    appState.mapMarkers = typeof L.markerClusterGroup === 'function'
      ? L.markerClusterGroup({ showCoverageOnHover: false, maxClusterRadius: 48, spiderfyOnMaxZoom: true })
      : L.layerGroup();
    appState.mapMarkers.addTo(map);
  } else {
    map.stop();
    appState.mapMarkers.clearLayers();
  }

  const activeCountry = appState.activeMapCountry || 'all';
  const visiblePosts = activeCountry === 'all'
    ? countryRecords
    : countryRecords.filter((post) => post.country === activeCountry);
  const recordIcon = L.divIcon({
    className: 'mumyeong-map-marker',
    html: '<span></span>',
    iconSize: [24, 24],
    iconAnchor: [12, 12]
  });

  if (visiblePosts.length) {
    visiblePosts.forEach((post) => {
      if (!Number.isFinite(post.lat) || !Number.isFinite(post.lng)) return;
      const marker = L.marker([post.lat, post.lng], { icon: recordIcon }).addTo(appState.mapMarkers);
      marker.bindPopup(`
        <div style="min-width:180px;">
          <img src="${escapeHtml(getRecordImage(post))}" alt="${escapeHtml(getRecordText(post, 'title'))}" style="width:100%;height:110px;object-fit:cover;border-radius:8px;margin-bottom:8px;" />
          ${isSampleRecord(post) ? `<span class="sample-badge">${getText('sampleRecord')}</span><br>` : ''}
          <strong>${escapeHtml(getRecordText(post, 'title'))}</strong><br>
          <span>${escapeHtml(getRecordText(post, 'region'))}</span>
          <p style="margin:6px 0;max-height:3.2em;overflow:hidden;">${escapeHtml(getRecordText(post, 'content'))}</p>
          <button type="button" class="map-popup-open" data-post-id="${escapeHtml(post.id)}">${getText('viewMore')}</button>
        </div>
      `);
      marker.on('popupopen', (event) => {
        event.popup.getElement()?.querySelector('.map-popup-open')?.addEventListener('click', () => openDetail(post.id));
      });
    });

    const mappedPosts = visiblePosts.filter((post) => Number.isFinite(post.lat) && Number.isFinite(post.lng));
    const bounds = L.latLngBounds(mappedPosts.map((post) => [post.lat, post.lng]));
    map.fitBounds(bounds.pad(0.35), { maxZoom: 6, animate: false });
  } else {
    map.setView([36.5, 133.5], 5, { animate: false });
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
            ${isSampleRecord(post) ? `<span class="sample-badge">${getText('sampleRecord')}</span>` : ''}
            <h4>${escapeHtml(getRecordText(post, 'title'))}</h4>
            <p>${getCountryLabel(post.country)} · ${escapeHtml(getRecordText(post, 'region'))}</p>
            <button class="primary-btn" type="button" data-post-id="${post.id}">${getText('viewMore')}</button>
          </div>
        `).join('')
      : `<div class="empty-state">${activeCountry === 'all' ? getText('mapEmpty') : getText('countryEmpty').replace('{country}', getCountryLabel(activeCountry))}</div>`;

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

function canEditRecord(post) {
  if (appState.backendMode === 'remote') return post.authorId === appState.userId;
  if (appState.backendMode !== 'local') return false;
  return !isSampleRecord(post);
}

function openDetail(postId, preservedComment = '') {
  appState.selectedPostId = postId;
  const post = records.find((item) => item.id === postId);
  if (!post) return;
  if (appState.detailMap) {
    appState.detailMap.remove();
    appState.detailMap = null;
  }

  const modal = document.getElementById('detailModal');
  modal.classList.remove('hidden');
  modal.classList.add('visible');
  modal.setAttribute('aria-hidden', 'false');

  const content = document.getElementById('detailContent');
  const criteria = getRecordCriteria(post);
  const valueFields = [
    ['detailWhat', post.descriptionWhat],
    ['detailWhenWhereHow', post.descriptionWhenWhereHow],
    ['detailParticipants', post.descriptionParticipants],
    ['detailMeaning', post.descriptionValue],
    ['detailFuture', post.descriptionFuture]
  ].filter(([, value]) => value);
  const criterionReasons = criteria.map((criterion) => ({
    criterion,
    reason: post[`${criterion}Notes`]
  }));
  const basicInfo = [
    [getText('practiceNameDetail'), post.practiceName],
    [getText('countryLabel'), getCountryLabel(post.country)],
    [getText('regionLabel'), getRecordText(post, 'region')],
    [getText('locationAddress'), post.locationLabel],
    [getText('categoryLabel'), getCategoryLabel(post.category)],
    [getText('writerLabel'), getRecordText(post, 'nickname')],
    [getText('recordDateDetail'), post.recordDate || post.createdAt]
  ].filter(([, value]) => value);

  content.innerHTML = `
    <div class="modal-lang-switcher detail-lang-switcher" aria-label="${getText('languageLabel')}">
      <button class="lang-btn ${appState.lang === 'ko' ? 'active' : ''}" type="button" data-lang="ko">KR</button>
      <button class="lang-btn ${appState.lang === 'ja' ? 'active' : ''}" type="button" data-lang="ja">JP</button>
    </div>
    <div class="detail-header">
      <img class="detail-image" src="${escapeHtml(getRecordImage(post))}" alt="${escapeHtml(getRecordText(post, 'title') || getText('imageFallbackAlt'))}" />
      <div>
        <h3 class="detail-title">${escapeHtml(getRecordText(post, 'title'))}</h3>
        <div class="detail-meta">
          ${isSampleRecord(post) ? `<span class="sample-badge">${getText('sampleRecord')}</span>` : ''}
          <span>${getCountryLabel(post.country)}</span>
          <span>•</span>
          <span>${escapeHtml(getRecordText(post, 'region'))}</span>
          <span>•</span>
          <span>${escapeHtml(getCategoryLabel(post.category))}</span>
          <span>•</span>
          <span>${escapeHtml(getRecordText(post, 'nickname'))}</span>
          <span>•</span>
          <span>${escapeHtml(formatDate(post.recordDate || post.createdAt))}</span>
        </div>
      </div>
    </div>

    <section class="detail-section">
      <h4>${getText('detailBasics')}</h4>
      <dl>${basicInfo.map(([label, value]) => `<dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd>`).join('')}</dl>
      ${Number.isFinite(Number(post.lat)) && Number.isFinite(Number(post.lng))
        ? `<div id="detailLocationMap" class="detail-location-map" aria-label="${getText('locationAddress')}"></div>
          <a class="detail-map-link" href="https://www.openstreetmap.org/?mlat=${Number(post.lat)}&mlon=${Number(post.lng)}#map=17/${Number(post.lat)}/${Number(post.lng)}" target="_blank" rel="noopener noreferrer">${getText('openMap')}</a>`
        : ''}
    </section>

    <section class="detail-section">
      <h4>${getText('detailCriteria')}</h4>
      ${criteria.length
        ? `<div class="detail-criteria">${criteria.map((criterion) => `<span class="criterion-tag ${escapeHtml(criterion)}">${escapeHtml(getCriterionLabel(criterion))}</span>`).join('')}</div>
          <h4>${getText('detailReasons')}</h4>
          ${criterionReasons.map(({ criterion, reason }) => reason
            ? `<p class="detail-reason ${escapeHtml(criterion)}"><strong>${escapeHtml(getCriterionLabel(criterion))}</strong><br>${escapeHtml(reason)}</p>`
            : '').join('') || `<p class="detail-body">${getText('detailNoReasons')}</p>`}`
        : `<p class="detail-body">${getText('detailNoCriteria')}</p>`}
    </section>

    <section class="detail-section">
      <h4>${getText('detailStory')}</h4>
      ${valueFields.length
        ? `<dl>${valueFields.map(([key, value]) => `<dt>${getText(key)}</dt><dd>${escapeHtml(value)}</dd>`).join('')}</dl>`
        : ''}
      <div class="detail-body">${escapeHtml(getRecordText(post, 'content'))}</div>
    </section>

    ${isSampleRecord(post)
      ? `<div class="sample-readonly-note">${getText('sampleReadOnly')}</div>`
      : `<div class="detail-actions">
          <button class="action-btn like-post" type="button" data-post-id="${post.id}"><span class="icon">♥</span> ${getText('likeBtn')} ${post.likes}</button>
          ${canEditRecord(post) ? `<button class="action-btn edit-record" type="button" data-post-id="${escapeHtml(post.id)}">${getText('editRecord')}</button>` : ''}
        </div>

        <div class="comment-list">
          <h4>${getText('commentsTitle')}</h4>
          ${post.comments.length ? post.comments.map((comment) => `
            <div class="comment-item">
              <strong>${escapeHtml(getCommentNickname(comment))}</strong>
              <div>${escapeHtml(getCommentText(comment))}</div>
            </div>
          `).join('') : `<div class="comment-item">${getText('noComments')}</div>`}
        </div>

        <div class="comment-form">
          <input id="commentInput" type="text" placeholder="${getText('commentPlaceholder')}" maxlength="120" value="${escapeHtml(preservedComment)}" />
          <button class="primary-btn" id="submitCommentBtn" type="button">${getText('commentSubmit')}</button>
        </div>`}
  `;

  modal.classList.add('visible');
  modal.setAttribute('aria-hidden', 'false');
  renderDetailLocationMap(post);

  const submitCommentBtn = content.querySelector('#submitCommentBtn');
  const commentInput = content.querySelector('#commentInput');

  submitCommentBtn?.addEventListener('click', async () => {
    const value = commentInput.value.trim();
    if (!value) return;
    const target = records.find((item) => item.id === postId);
    if (!target) return;
    try {
      if (appState.backendMode === 'remote') {
        const { data, error } = await appState.supabase.from('comments').insert({
          record_id: postId,
          author_id: appState.userId,
          nickname: getText('commentNickname'),
          content: value
        }).select('id,record_id,nickname,content,created_at').single();
        if (error) throw error;
        target.comments.push({ id: data.id, nickname: data.nickname, text: data.content, createdAt: data.created_at });
      } else {
        target.comments.push({
          id: `comment-${Date.now()}`,
          nickname: getText('commentNickname'),
          text: value,
          createdAt: new Date().toISOString()
        });
        saveRecords();
      }
      openDetail(postId);
    } catch (error) {
      console.error('Comment submission failed:', error);
      showNotice(getText('interactionError'), 'error');
    }
  });

  content.querySelector('.like-post')?.addEventListener('click', () => toggleLike(postId));
  content.querySelector('.edit-record')?.addEventListener('click', () => openRecordEditor(postId));
}

function openRecordEditor(postId) {
  const post = records.find((item) => item.id === postId);
  if (!post || !canEditRecord(post)) return;
  const form = document.getElementById('recordForm');
  form.reset();
  clearImagePreview();
  appState.editingPostId = postId;
  appState.removeExistingImage = false;
  appState.selectedLocationLabel = post.locationLabel || '';

  for (const [field, value] of Object.entries({
    nickname: post.nickname,
    title: post.title,
    content: post.content,
    region: post.region,
    country: post.country,
    category: post.category,
    practiceName: post.practiceName || '',
    recordDate: post.recordDate || '',
    localityNotes: post.localityNotes || '',
    communityNotes: post.communityNotes || '',
    everydayNotes: post.everydayNotes || '',
    descriptionWhat: post.descriptionWhat || '',
    descriptionWhenWhereHow: post.descriptionWhenWhereHow || '',
    descriptionParticipants: post.descriptionParticipants || '',
    descriptionValue: post.descriptionValue || '',
    descriptionFuture: post.descriptionFuture || ''
  })) {
    if (form.elements[field]) form.elements[field].value = value;
  }
  for (const criterion of getRecordCriteria(post)) {
    const checkbox = form.querySelector(`[name="criteria"][value="${criterion}"]`);
    if (checkbox) checkbox.checked = true;
  }

  document.getElementById('latInput').value = Number.isFinite(Number(post.lat)) ? post.lat : '';
  document.getElementById('lngInput').value = Number.isFinite(Number(post.lng)) ? post.lng : '';
  document.getElementById('selectedLocation').textContent = post.locationLabel
    ? `${getText('locationSelected')}: ${post.locationLabel}`
    : getText('locationNotSelected');

  if (hasRecordPhoto(post)) showExistingImagePreview(post);
  else setImageRemoveButtonLabel('removeSelectedImage');

  closeModal('detailModal');
  openWriteModal();
}

function renderDetailLocationMap(post) {
  const mapElement = document.getElementById('detailLocationMap');
  if (!mapElement || !window.L) return;
  const latitude = Number(post.lat);
  const longitude = Number(post.lng);
  if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) return;

  appState.detailMap = L.map(mapElement, {
    zoomControl: true,
    scrollWheelZoom: false,
    dragging: false,
    doubleClickZoom: false,
    touchZoom: false,
    attributionControl: true
  }).setView([latitude, longitude], 16);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(appState.detailMap);
  L.marker([latitude, longitude]).addTo(appState.detailMap)
    .bindPopup(escapeHtml(post.locationLabel || post.region)).openPopup();
  setTimeout(() => appState.detailMap?.invalidateSize(), 120);
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  if (modalId === 'writeModal' && appState.editingPostId) resetRecordForm();
  if (modalId === 'detailModal' && appState.detailMap) {
    appState.detailMap.remove();
    appState.detailMap = null;
  }
  modal.classList.remove('visible');
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
}

function getCountryValue() {
  return document.querySelector('#recordForm [name="country"]')?.value || 'KR';
}

function setSelectedLocation(lat, lng, label, zoom = 15) {
  const latInput = document.getElementById('latInput');
  const lngInput = document.getElementById('lngInput');
  if (!latInput || !lngInput) return;

  latInput.value = lat.toFixed(6);
  lngInput.value = lng.toFixed(6);
  appState.selectedLocationLabel = label || `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
  const selectedLocation = document.getElementById('selectedLocation');
  if (selectedLocation) {
    selectedLocation.textContent = `${getText('locationSelected')}: ${appState.selectedLocationLabel}`;
  }

  if (window.L && appState.writeMap) {
    if (!appState.writeMarker) {
      appState.writeMarker = L.marker([lat, lng], { draggable: true }).addTo(appState.writeMap);
      appState.writeMarker.on('dragend', () => {
        const point = appState.writeMarker.getLatLng();
        if (!isLocationInSelectedCountry(point.lat, point.lng)) {
          document.getElementById('locationSearchStatus').textContent = getText('locationCountryMismatch');
          appState.writeMarker.setLatLng([
            Number(document.getElementById('latInput').value),
            Number(document.getElementById('lngInput').value)
          ]);
          return;
        }
        setSelectedLocation(point.lat, point.lng, '', 15);
        reverseGeocode(point.lat, point.lng);
      });
    } else {
      appState.writeMarker.setLatLng([lat, lng]);
    }
    appState.writeMarker.bindPopup(escapeHtml(appState.selectedLocationLabel));
    appState.writeMap.setView([lat, lng], Math.max(appState.writeMap.getZoom(), zoom), { animate: true });
  }
}

function clearSelectedLocation() {
  appState.locationRequestId += 1;
  appState.selectedLocationLabel = '';
  document.getElementById('latInput').value = '';
  document.getElementById('lngInput').value = '';
  document.getElementById('selectedLocation').textContent = getText('locationNotSelected');
  document.getElementById('locationResults').replaceChildren();
  if (appState.writeMarker && appState.writeMap) {
    appState.writeMap.removeLayer(appState.writeMarker);
    appState.writeMarker = null;
  }
}

function isLocationInSelectedCountry(lat, lng) {
  const country = getCountryValue();
  if (country === 'KR') return lat >= 33 && lat <= 39.5 && lng >= 124 && lng <= 132.5;
  return lat >= 24 && lat <= 46.5 && lng >= 122 && lng <= 147;
}

async function nominatimRequest(path, params) {
  const request = appState.geocodeQueue.then(async () => {
    const wait = Math.max(0, 1100 - (Date.now() - appState.lastGeocodeRequestAt));
    if (wait) await new Promise((resolve) => setTimeout(resolve, wait));
    appState.lastGeocodeRequestAt = Date.now();
    const query = new URLSearchParams(params);
    const response = await fetch(`${GEOCODING_ENDPOINT}${path}?${query}`);
    if (!response.ok) throw new Error(`Geocoding request failed (${response.status}).`);
    return response.json();
  });
  appState.geocodeQueue = request.catch(() => {});
  return request;
}

function getLocationSearchCountry() {
  return getCountryValue() === 'KR' ? 'kr' : 'jp';
}

async function searchLocation() {
  const input = document.getElementById('locationSearchInput');
  const status = document.getElementById('locationSearchStatus');
  const resultsNode = document.getElementById('locationResults');
  const query = input?.value.trim();
  if (!query) {
    status.textContent = getText('locationSearchPrompt');
    return;
  }
  clearSelectedLocation();
  status.textContent = getText('locationSearching');
  const requestId = ++appState.locationRequestId;

  try {
    const results = await nominatimRequest('/search', {
      q: query,
      format: 'jsonv2',
      addressdetails: '1',
      limit: '6',
      countrycodes: getLocationSearchCountry()
    });
    if (requestId !== appState.locationRequestId) return;
    appState.locationResults = results;
    if (!results.length) {
      status.textContent = getText('locationNoResults');
      return;
    }
    status.textContent = '';
    resultsNode.innerHTML = results.map((item, index) => `
      <button type="button" class="location-result" role="option" data-location-index="${index}">
        <strong>${escapeHtml(item.name || item.display_name.split(',')[0])}</strong>
        <span>${escapeHtml(item.display_name)}</span>
      </button>
    `).join('');
    resultsNode.querySelectorAll('[data-location-index]').forEach((button) => {
      button.addEventListener('click', () => {
        const result = appState.locationResults[Number(button.dataset.locationIndex)];
        const lat = Number(result.lat);
        const lng = Number(result.lon);
        if (!isLocationInSelectedCountry(lat, lng)) {
          status.textContent = getText('locationCountryMismatch');
          return;
        }
        setSelectedLocation(lat, lng, result.display_name, 16);
        const regionInput = document.querySelector('#recordForm [name="region"]');
        if (regionInput && !regionInput.value.trim()) regionInput.value = result.name || result.display_name.split(',')[0];
        status.textContent = '';
        resultsNode.replaceChildren();
      });
    });
  } catch (error) {
    if (requestId !== appState.locationRequestId) return;
    console.error('Location search failed:', error);
    status.textContent = getText('locationSearchError');
  }
}

async function reverseGeocode(lat, lng) {
  const status = document.getElementById('locationSearchStatus');
  const requestId = ++appState.locationRequestId;
  try {
    const result = await nominatimRequest('/reverse', {
      lat: String(lat),
      lon: String(lng),
      format: 'jsonv2',
      zoom: '18',
      addressdetails: '1'
    });
    if (requestId !== appState.locationRequestId) return;
    if (result?.display_name) setSelectedLocation(lat, lng, result.display_name, 15);
  } catch (error) {
    if (requestId !== appState.locationRequestId) return;
    console.error('Reverse geocoding failed:', error);
    if (status) status.textContent = getText('locationSearchError');
  }
}

function validateWizardStep(step) {
  const form = document.getElementById('recordForm');
  if (step === 0) {
    const required = ['nickname', 'country', 'title', 'region', 'category'];
    const invalid = required.find((name) => !form.elements[name].value.trim());
    if (invalid) {
      form.elements[invalid].focus();
      showNotice(getText('requiredFields'), 'error');
      return false;
    }
  } else if (step === 1) {
    const lat = Number(document.getElementById('latInput').value);
    const lng = Number(document.getElementById('lngInput').value);
    if (!appState.selectedLocationLabel || !Number.isFinite(lat) || !Number.isFinite(lng)) {
      showNotice(getText('locationRequired'), 'error');
      return false;
    }
    if (!isLocationInSelectedCountry(lat, lng)) {
      showNotice(getText('locationCountryMismatch'), 'error');
      return false;
    }
  } else if (step === 2) {
    const criteria = [...form.querySelectorAll('[name="criteria"]:checked')].map((input) => input.value);
    if (!criteria.length) {
      showNotice(getText('selectCriterion'), 'error');
      return false;
    }
    if (criteria.some((criterion) => !form.elements[`${criterion}Notes`].value.trim())) {
      showNotice(getText('criterionReasonRequired'), 'error');
      return false;
    }
  } else if (step === 3) {
    const required = ['descriptionWhat', 'descriptionFuture', 'content'];
    const invalid = required.find((name) => !form.elements[name].value.trim());
    if (invalid) {
      form.elements[invalid].focus();
      showNotice(getText('requiredFields'), 'error');
      return false;
    }
  }
  return true;
}

function renderRecordReview() {
  const form = document.getElementById('recordForm');
  const data = new FormData(form);
  const criteria = data.getAll('criteria').map((item) => item.toString());
  const criteriaMarkup = criteria.map((criterion) => `
    <li><strong>${getText(`${criterion}Title`)}</strong><p>${escapeHtml(data.get(`${criterion}Notes`) || '')}</p></li>
  `).join('');
  const image = data.get('image');
  const editedRecord = appState.editingPostId
    ? records.find((record) => record.id === appState.editingPostId)
    : null;
  const imageMarkup = image?.size
    ? `<p>${getText('reviewImage')} ${escapeHtml(image.name)}</p>`
    : editedRecord && hasRecordPhoto(editedRecord) && !appState.removeExistingImage
      ? `<p>${getText('reviewExistingImage')}</p>`
      : `<p>${getText('reviewNoImage')}</p>`;
  const rows = [
    [getText('nicknameLabel'), data.get('nickname')],
    [getText('countryLabel'), getCountryLabel(data.get('country'))],
    [getText('titleLabel'), data.get('title')],
    [getText('practiceNameLabel'), data.get('practiceName')],
    [getText('regionLabel'), data.get('region')],
    [getText('categoryLabel'), getCategoryLabel(data.get('category'))],
    [getText('recordDateLabel'), data.get('recordDate')],
    [getText('locationAddress'), appState.selectedLocationLabel],
    [getText('contentLabel'), data.get('content')]
  ].filter(([, value]) => value);

  document.getElementById('recordReview').innerHTML = `
    <section><h5>${getText('reviewBasics')}</h5><dl>${rows.map(([label, value]) => `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(String(value))}</dd></div>`).join('')}</dl>${imageMarkup}</section>
    <section><h5>${getText('reviewCriteria')}</h5><ul>${criteriaMarkup}</ul></section>
    <section><h5>${getText('reviewStory')}</h5><p>${escapeHtml(data.get('descriptionWhat') || '')}</p><p>${escapeHtml(data.get('descriptionWhenWhereHow') || '')}</p><p>${escapeHtml(data.get('descriptionParticipants') || '')}</p><p>${escapeHtml(data.get('descriptionValue') || '')}</p><p>${escapeHtml(data.get('descriptionFuture') || '')}</p></section>
  `;
}

function setWizardStep(step) {
  appState.wizardStep = Math.max(0, Math.min(4, step));
  document.querySelectorAll('[data-wizard-step]').forEach((section) => {
    section.classList.toggle('active', Number(section.dataset.wizardStep) === appState.wizardStep);
  });
  document.querySelectorAll('[data-step-indicator]').forEach((indicator) => {
    const index = Number(indicator.dataset.stepIndicator);
    indicator.classList.toggle('active', index === appState.wizardStep);
    indicator.classList.toggle('complete', index < appState.wizardStep);
  });
  const progress = document.getElementById('wizardProgressBar');
  if (progress) progress.style.width = `${appState.wizardStep * 25}%`;
  document.getElementById('wizardBackBtn').disabled = appState.wizardStep === 0;
  document.getElementById('wizardNextBtn').classList.toggle('hidden', appState.wizardStep === 4);
  const submitButton = document.getElementById('wizardSubmitBtn');
  submitButton.classList.toggle('hidden', appState.wizardStep !== 4);
  submitButton.dataset.i18n = appState.editingPostId ? 'updateRecord' : 'submitBtn';
  submitButton.textContent = getText(submitButton.dataset.i18n);
  if (appState.wizardStep === 4) renderRecordReview();
  if (appState.wizardStep === 1 && appState.writeMap) {
    setTimeout(() => appState.writeMap.invalidateSize(), 120);
  }
}

function openWriteModal() {
  const modal = document.getElementById('writeModal');
  const recordDateInput = document.getElementById('recordDateInput');
  if (recordDateInput && !recordDateInput.value) {
    recordDateInput.value = new Date().toISOString().slice(0, 10);
  }
  modal.classList.remove('hidden');
  modal.classList.add('visible');
  modal.setAttribute('aria-hidden', 'false');
  document.getElementById('recordForm').noValidate = true;
  setWizardStep(0);

  if (!window.L) {
    const writeMapNode = document.getElementById('writeMap');
    if (writeMapNode) {
      writeMapNode.innerHTML = `
        <div class="map-fallback" style="min-height: 220px;">
          <div>
            <strong>${getText('writeMapUnavailableTitle')}</strong>
            <small>${getText('writeMapUnavailableText')}</small>
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
      scrollWheelZoom: true,
      touchZoom: true,
      dragging: true,
      doubleClickZoom: true,
      minZoom: 3,
      maxZoom: 19,
      maxBounds: [[22, 112], [52, 158]],
      maxBoundsViscosity: 0.8,
      zoomSnap: 0.25,
      wheelPxPerZoomLevel: 80
    }).setView([36.5, 133.5], 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(appState.writeMap);

    appState.writeMap.on('click', (event) => {
      const { lat, lng } = event.latlng;
      if (!isLocationInSelectedCountry(lat, lng)) {
        document.getElementById('locationSearchStatus').textContent = getText('locationCountryMismatch');
        return;
      }
      setSelectedLocation(lat, lng, '', 15);
      reverseGeocode(lat, lng);
    });
  }

  const lat = Number(document.getElementById('latInput').value);
  const lng = Number(document.getElementById('lngInput').value);
  if (appState.selectedLocationLabel && Number.isFinite(lat) && Number.isFinite(lng)) {
    setSelectedLocation(lat, lng, appState.selectedLocationLabel);
  }

  setTimeout(() => {
    if (appState.writeMap) {
      appState.writeMap.invalidateSize();
    }
  }, 100);
}

function clearImagePreview() {
  const fileInput = document.getElementById('imageInput');
  if (fileInput) fileInput.value = '';
  if (appState.selectedImagePreviewUrl) URL.revokeObjectURL(appState.selectedImagePreviewUrl);
  appState.selectedImagePreviewUrl = null;
  document.getElementById('imagePreview').removeAttribute('src');
  document.getElementById('imagePreviewName').textContent = '';
  document.getElementById('imagePreviewPanel').classList.add('hidden');
}

function verifyImageFile(file) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    const objectUrl = URL.createObjectURL(file);
    const release = () => URL.revokeObjectURL(objectUrl);
    image.onload = () => {
      release();
      if (image.naturalWidth && image.naturalHeight) resolve();
      else reject(new Error(getText('imageInvalid')));
    };
    image.onerror = () => {
      release();
      reject(new Error(getText('imageInvalid')));
    };
    image.src = objectUrl;
  });
}

async function handleImageSelection(event) {
  const [file] = event.target.files || [];
  if (!file) {
    clearImagePreview();
    return;
  }
  if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
    clearImagePreview();
    appState.removeExistingImage = false;
    const existing = records.find((record) => record.id === appState.editingPostId);
    if (existing && hasRecordPhoto(existing)) showExistingImagePreview(existing);
    showNotice(getText('photoTypeInvalid'), 'error');
    return;
  }
  if (file.size > MAX_IMAGE_SIZE) {
    clearImagePreview();
    appState.removeExistingImage = false;
    const existing = records.find((record) => record.id === appState.editingPostId);
    if (existing && hasRecordPhoto(existing)) showExistingImagePreview(existing);
    showNotice(getText('photoTooLarge'), 'error');
    return;
  }
  try {
    await verifyImageFile(file);
  } catch (error) {
    clearImagePreview();
    appState.removeExistingImage = false;
    const existing = records.find((record) => record.id === appState.editingPostId);
    if (existing && hasRecordPhoto(existing)) showExistingImagePreview(existing);
    showNotice(getText('imageInvalid'), 'error');
    return;
  }
  if (event.target.files?.[0] !== file) return;
  if (appState.selectedImagePreviewUrl) URL.revokeObjectURL(appState.selectedImagePreviewUrl);
  appState.selectedImagePreviewUrl = URL.createObjectURL(file);
  appState.removeExistingImage = false;
  document.getElementById('imagePreview').src = appState.selectedImagePreviewUrl;
  document.getElementById('imagePreviewName').textContent = `${file.name} · ${(file.size / (1024 * 1024)).toFixed(2)} MB`;
  document.getElementById('imagePreviewPanel').classList.remove('hidden');
  setImageRemoveButtonLabel('removeSelectedImage');
}

function removeImageFromDraft() {
  const fileInput = document.getElementById('imageInput');
  const editingRecord = appState.editingPostId
    ? records.find((record) => record.id === appState.editingPostId)
    : null;
  if (hasRecordPhoto(editingRecord || {}) && fileInput.files.length) {
    clearImagePreview();
    appState.removeExistingImage = false;
    showExistingImagePreview(editingRecord);
    return;
  }
  if (hasRecordPhoto(editingRecord || {})) {
    appState.removeExistingImage = true;
  }
  clearImagePreview();
  setImageRemoveButtonLabel('removeSelectedImage');
}

function getStorageObjectPath(imageUrl) {
  if (!imageUrl) return null;
  const marker = `/storage/v1/object/public/${STORAGE_BUCKET}/`;
  const index = imageUrl.indexOf(marker);
  if (index < 0) return null;
  return decodeURIComponent(imageUrl.slice(index + marker.length));
}

async function storeRemoteRecord(values, existingRecord = null) {
  const { data: profile, error: profileError } = await appState.supabase
    .from('profiles')
    .upsert({ id: appState.userId, nickname: values.nickname }, { onConflict: 'id' })
    .select('id')
    .single();
  if (profileError) throw profileError;

  let imageUrl = values.removeExistingImage ? null : (existingRecord?.image || null);
  let uploadedPath = null;
  if (values.file?.size) {
    const extension = ({ 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp', 'image/gif': 'gif' })[values.file.type];
    uploadedPath = `${appState.userId}/${Date.now()}-${Math.random().toString(36).slice(2)}.${extension}`;
    const { error: uploadError } = await appState.supabase.storage
      .from(STORAGE_BUCKET)
      .upload(uploadedPath, values.file, { contentType: values.file.type, upsert: false });
    if (uploadError) throw uploadError;
    const { data: publicUrl } = appState.supabase.storage.from(STORAGE_BUCKET).getPublicUrl(uploadedPath);
    imageUrl = publicUrl.publicUrl;
  }

  const row = {
    author_id: profile.id,
    nickname: values.nickname,
    title: values.title,
    content: values.content,
    image_url: imageUrl,
    country: values.country,
    region: values.region,
    location_label: appState.selectedLocationLabel,
    category: values.category,
    lat: values.lat,
    lng: values.lng,
    practice_name: values.practiceName || null,
    record_date: values.recordDate || new Date().toISOString().slice(0, 10),
    locality_notes: values.localityNotes || null,
    community_notes: values.communityNotes || null,
    everyday_notes: values.everydayNotes || null,
    description_what: values.descriptionWhat,
    description_when_where_how: values.descriptionWhenWhereHow || null,
    description_participants: values.descriptionParticipants || null,
    description_value: values.descriptionValue || null,
    description_future: values.descriptionFuture
  };
  const query = existingRecord
    ? appState.supabase.from('records').update(row).eq('id', existingRecord.id).eq('author_id', appState.userId)
    : appState.supabase.from('records').insert(row);
  const { data, error } = await query.select('*').single();
  if (error) {
    if (uploadedPath) {
      const { error: cleanupError } = await appState.supabase.storage.from(STORAGE_BUCKET).remove([uploadedPath]);
      if (cleanupError) console.error('Uploaded image cleanup failed:', cleanupError);
    }
    throw error;
  }
  let imageCleanupWarning = false;
  if (existingRecord && (values.file || values.removeExistingImage)) {
    const oldPath = getStorageObjectPath(existingRecord.image);
    if (oldPath) {
      const { error: cleanupError } = await appState.supabase.storage.from(STORAGE_BUCKET).remove([oldPath]);
      if (cleanupError) {
        console.error('Replaced image cleanup failed:', cleanupError);
        imageCleanupWarning = true;
      }
    }
  }
  return { row: data, imageCleanupWarning };
}

function resetRecordForm() {
  const form = document.getElementById('recordForm');
  form.reset();
  clearImagePreview();
  document.getElementById('latInput').value = '';
  document.getElementById('lngInput').value = '';
  document.getElementById('locationSearchStatus').textContent = '';
  document.getElementById('locationResults').replaceChildren();
  document.getElementById('selectedLocation').textContent = getText('locationNotSelected');
  appState.selectedLocationLabel = '';
  appState.locationResults = [];
  appState.editingPostId = null;
  appState.removeExistingImage = false;
  setImageRemoveButtonLabel('removeSelectedImage');
  if (appState.writeMarker && appState.writeMap) {
    appState.writeMap.removeLayer(appState.writeMarker);
    appState.writeMarker = null;
  }
  if (!form.elements.recordDate.value) form.elements.recordDate.value = new Date().toISOString().slice(0, 10);
  setWizardStep(0);
}

async function handleFormSubmit(event) {
  event.preventDefault();
  if (appState.wizardStep !== 4) {
    if (validateWizardStep(appState.wizardStep)) setWizardStep(appState.wizardStep + 1);
    return;
  }

  const form = event.target;
  const data = new FormData(form);
  const file = data.get('image');
  if (file?.size > MAX_IMAGE_SIZE) {
    showNotice(getText('photoTooLarge'), 'error');
    setWizardStep(0);
    return;
  }
  if (file?.size && !ALLOWED_IMAGE_TYPES.includes(file.type)) {
    showNotice(getText('photoTypeInvalid'), 'error');
    setWizardStep(0);
    return;
  }
  if (file?.size) {
    try {
      await verifyImageFile(file);
    } catch (error) {
      showNotice(getText('imageInvalid'), 'error');
      setWizardStep(0);
      return;
    }
  }
  const lat = Number(document.getElementById('latInput').value);
  const lng = Number(document.getElementById('lngInput').value);
  if (!Number.isFinite(lat) || !Number.isFinite(lng) || !appState.selectedLocationLabel) {
    showNotice(getText('locationRequired'), 'error');
    setWizardStep(1);
    return;
  }

  const values = {
    nickname: data.get('nickname').trim(),
    title: data.get('title').trim(),
    content: data.get('content').trim(),
    region: data.get('region').trim(),
    country: data.get('country'),
    category: data.get('category'),
    practiceName: data.get('practiceName').trim(),
    recordDate: data.get('recordDate'),
    criteria: data.getAll('criteria'),
    localityNotes: data.get('localityNotes').trim(),
    communityNotes: data.get('communityNotes').trim(),
    everydayNotes: data.get('everydayNotes').trim(),
    descriptionWhat: data.get('descriptionWhat').trim(),
    descriptionWhenWhereHow: data.get('descriptionWhenWhereHow').trim(),
    descriptionParticipants: data.get('descriptionParticipants').trim(),
    descriptionValue: data.get('descriptionValue').trim(),
    descriptionFuture: data.get('descriptionFuture').trim(),
    file: file?.size ? file : null,
    removeExistingImage: appState.removeExistingImage,
    lat,
    lng
  };
  const editingIndex = appState.editingPostId
    ? records.findIndex((record) => record.id === appState.editingPostId)
    : -1;
  const existingRecord = editingIndex >= 0 ? records[editingIndex] : null;

  const submitButton = document.getElementById('wizardSubmitBtn');
  submitButton.disabled = true;
  showNotice(getText('saveInProgress'), 'working');
  try {
    if (appState.backendMode === 'remote') {
      const { row, imageCleanupWarning } = await storeRemoteRecord(values, existingRecord);
      const savedRecord = mapDatabaseRecord(row);
      if (existingRecord) {
        savedRecord.likes = existingRecord.likes;
        savedRecord.comments = existingRecord.comments;
        records[editingIndex] = savedRecord;
      } else {
        records.unshift(savedRecord);
      }
      appState.publishedRecordIds.add(savedRecord.id);
      setStorageStatus(getText('backendRemoteStatus'), 'remote');
      showNotice(imageCleanupWarning
        ? getText('imageCleanupWarning')
        : existingRecord ? getText('recordUpdatedRemote') : getText('recordSavedRemote'),
      imageCleanupWarning ? 'error' : 'success');
    } else if (appState.backendMode === 'local') {
      const newImageKey = values.file ? await storeLocalImage(values.file) : null;
      const imageKey = newImageKey || (values.removeExistingImage ? null : existingRecord?.imageKey || null);
      const image = newImageKey
        ? URL.createObjectURL(values.file)
        : values.removeExistingImage
          ? 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80'
          : existingRecord?.image || 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80';
      const recordValues = { ...values };
      delete recordValues.file;
      delete recordValues.removeExistingImage;
      const savedRecord = {
          ...(existingRecord || {}),
          id: existingRecord?.id || `post-${Date.now()}`,
          ...recordValues,
        imageKey,
        locationLabel: appState.selectedLocationLabel,
        recordDate: values.recordDate || new Date().toISOString().slice(0, 10),
        image,
        createdAt: existingRecord?.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        likes: existingRecord?.likes || 0,
        comments: existingRecord?.comments || [],
        localOwned: true
      };
      if (newImageKey) imageObjectUrls.set(newImageKey, image);
      const updatedRecords = [...records];
      if (existingRecord) updatedRecords[editingIndex] = savedRecord;
      else updatedRecords.unshift(savedRecord);
      try {
        saveRecords(updatedRecords);
      } catch (error) {
        if (newImageKey) {
          await deleteLocalImage(newImageKey);
          URL.revokeObjectURL(image);
        }
        throw error;
      }
      records = updatedRecords;
      let imageCleanupWarning = false;
      if (existingRecord?.imageKey && existingRecord.imageKey !== imageKey) {
        try {
          await deleteLocalImage(existingRecord.imageKey);
        } catch (error) {
          console.error('Replaced local image cleanup failed:', error);
          imageCleanupWarning = true;
        }
      }
      setStorageStatus(getText('backendLocalStatus'), 'local');
      showNotice(imageCleanupWarning
        ? getText('imageCleanupWarning')
        : existingRecord
          ? getText('recordUpdatedLocal')
          : values.file
            ? `${getText('recordSavedLocal')} ${getText('imageStoredLocally')}`
            : getText('recordSavedLocal'), imageCleanupWarning ? 'error' : 'local');
    } else {
      throw new Error('Supabase is configured but is not connected.');
    }
    resetRecordForm();
    closeModal('writeModal');
    renderAll();
    setActiveView('archive');
  } catch (error) {
    console.error('Record save failed:', error);
    const message = existingRecord ? getText('recordUpdateError') : getText('recordSaveError');
    showNotice(`${message} ${error.message || ''}`.trim(), 'error');
  } finally {
    submitButton.disabled = false;
  }
}

function applyLanguage(lang) {
  appState.lang = lang;
  document.documentElement.lang = lang === 'ja' ? 'ja' : 'ko';
  document.title = getText('pageTitle');
  document.getElementById('pageDescription')?.setAttribute('content', getText('pageDescription'));
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.dataset.i18n;
    if (translations[lang][key] !== undefined) {
      node.innerHTML = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    if (translations[lang][key] !== undefined) {
      node.setAttribute('placeholder', translations[lang][key]);
    }
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach((node) => {
    const key = node.dataset.i18nAriaLabel;
    if (translations[lang][key] !== undefined) {
      node.setAttribute('aria-label', translations[lang][key]);
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

  const selectedLocation = document.getElementById('selectedLocation');
  if (selectedLocation) {
    selectedLocation.textContent = appState.selectedLocationLabel
      ? `${getText('locationSelected')}: ${appState.selectedLocationLabel}`
      : getText('locationNotSelected');
  }
  if (appState.backendMode === 'remote') setStorageStatus(getText('backendRemoteStatus'), 'remote');
  else if (appState.backendMode === 'error') setStorageStatus(getText('backendConnectError'), 'error');
  else setStorageStatus(getText('backendLocalStatus'), 'local');

  renderAll();
  if (appState.wizardStep === 4 && document.getElementById('writeModal').classList.contains('visible')) {
    renderRecordReview();
  }

  const detailModal = document.getElementById('detailModal');
  if (appState.selectedPostId && detailModal.classList.contains('visible')) {
    const commentInput = document.getElementById('commentInput');
    openDetail(appState.selectedPostId, commentInput?.value || '');
  }
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

  document.querySelectorAll('#openWriteBtn, [data-open-write]').forEach((button) => {
    button.addEventListener('click', openWriteModal);
  });

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
  document.getElementById('imageInput').addEventListener('change', handleImageSelection);
  document.getElementById('removeSelectedImageBtn').addEventListener('click', removeImageFromDraft);
  document.getElementById('wizardNextBtn').addEventListener('click', () => {
    if (validateWizardStep(appState.wizardStep)) setWizardStep(appState.wizardStep + 1);
  });
  document.getElementById('wizardBackBtn').addEventListener('click', () => setWizardStep(appState.wizardStep - 1));
  document.getElementById('locationSearchBtn').addEventListener('click', searchLocation);
  document.getElementById('locationSearchInput').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      searchLocation();
    }
  });
  document.querySelector('#recordForm [name="country"]').addEventListener('change', () => {
    clearSelectedLocation();
    document.getElementById('locationSearchStatus').textContent = '';
  });

  document.querySelectorAll('[data-close-modal]').forEach((button) => {
    button.addEventListener('click', () => closeModal(button.dataset.closeModal));
  });

  document.addEventListener('click', (event) => {
    const languageButton = event.target.closest('.lang-btn');
    if (languageButton) applyLanguage(languageButton.dataset.lang);
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  bindGlobalEvents();
  setActiveView('home');
  const recordDateInput = document.getElementById('recordDateInput');
  if (recordDateInput && !recordDateInput.value) {
    recordDateInput.value = new Date().toISOString().slice(0, 10);
  }
  applyLanguage('ko');
  setStorageStatus(getText('backendLocalStatus'), 'local');
  renderAll();
  const config = window.MUMYEONG_SUPABASE_CONFIG;
  if (!config?.url || !config?.anonKey) {
    try {
      await hydrateLocalImages();
      renderAll();
    } catch (error) {
      console.error('Local image hydration failed:', error);
      setStorageStatus(getText('localImageStorageError'), 'error');
      showNotice(getText('localImageStorageError'), 'error');
    }
  }
  initializeBackend();
});

window.addEventListener('resize', () => {
  if (appState.writeMap) {
    appState.writeMap.invalidateSize();
  }
  if (appState.mapInstance) {
    appState.mapInstance.invalidateSize();
  }
});
