// 기업 슬라이드 스타일 데이터
const CORPORATE_STYLES = {
  samsung: {
    name: "삼성",
    nameEn: "Samsung",
    logo: "🔵",
    colors: {
      primary: "#1428A0",
      secondary: "#000000",
      accent: "#0689D8",
      background: "#FFFFFF",
      text: "#000000"
    },
    prompt: `슬라이드 스타일 지침 - 삼성(Samsung) 스타일:

[전체 톤 & 분위기]
- 글로벌 테크 리더의 프리미엄 미니멀리즘
- 절제된 디자인, 불필요한 장식 요소 완전 배제
- 넓은 여백(White Space)으로 고급스럽고 시원한 인상
- 제품/기술력을 전면에 내세우는 대담한 비주얼

[색상 체계]
- 주 색상: Samsung Blue(#1428A0, PMS 286C) — 제목, 강조 요소, 헤더
- 보조 색상: 블랙(#000000) — 본문 텍스트, 제목 대안
- 그레이: Rolling Stone(#75787B) — 보조 텍스트, 캡션
- 배경: 순백색(#FFFFFF) 기본, Samsung Blue(#1428A0) 또는 블랙 배경 교차 사용
- 확장 팔레트: Cerulean Blue(#0689D8), Light Blue(#00A9E0), Teal(#009CA6) — 차트/인포그래픽 보조색
- 액센트(제한적 사용): Supernova Yellow(#FFC600), Blaze Orange(#FF6900) — 핵심 수치 강조
- 차트 색상 순서: #1428A0, #0689D8, #00A9E0, #009CA6, #75787B, #FFC600

[타이포그래피]
- 제목: Samsung Sharp Sans Bold (산세리프, 날카롭고 현대적) — 간결하게 한 줄
- 부제목: Samsung Sharp Sans Medium
- 본문: SamsungOne Regular (5가지 웨이트: Thin/Light/Regular/Medium/Bold)
- 폴백: Arial, Helvetica Neue
- 텍스트 양 최소화, 키워드 중심 구성
- 핵심 숫자/데이터는 Samsung Sharp Sans Bold 대형으로 강조

[레이아웃]
- 16:9, 슬라이드 가장자리에서 5~8% 여백
- 표지: Samsung Blue 또는 블랙 전면 배경 + 화이트 텍스트, 중앙 또는 좌측 정렬
- 콘텐츠: 화이트 배경 기본, 상단 좌측에 제목, 하단에 출처/페이지 번호
- 그리드 기반 정렬, 좌측 정렬 기본
- 한 슬라이드에 하나의 핵심 메시지
- 로고: 하단 우측 또는 상단 좌측, 로고 'S' 높이만큼 여백 확보

[시각 요소]
- 고해상도 제품/기술 이미지 풀블리드 활용
- 아이콘은 단색 라인 스타일 (#75787B 또는 화이트)
- 차트는 플랫, 3D 효과 제거, Samsung Blue 톤 중심
- 배경에 블루→블랙 그라데이션 허용 (제한적)
- 인포그래픽은 플랫 디자인, 확장 팔레트 활용`
  },

  sk: {
    name: "SK",
    nameEn: "SK Group",
    logo: "🔴",
    colors: {
      primary: "#EA002C",
      secondary: "#F47725",
      accent: "#EA002C",
      background: "#FFFFFF",
      text: "#333333"
    },
    prompt: `슬라이드 스타일 지침 - SK 스타일:

[전체 톤 & 분위기]
- "행복(Happiness)"을 핵심 가치로 — 따뜻하고 에너지 넘치는 느낌
- 사람 중심, 따뜻한 감성과 전문성의 균형
- 행복날개 그라디언트(레드→오렌지)가 상징하는 역동성
- 밝고 긍정적인 분위기

[색상 체계]
- 주 색상: SK Red(#EA002C) — 제목, 핵심 강조, 헤더 바, 행복날개 좌측
- 보조 색상: SK Orange(#F47725) — 그라디언트 우측, 보조 강조
- 행복날개 그라디언트: SK Red(#EA002C) → SK Orange(#F47725) 좌→우 방향 (엄격 준수)
- 텍스트: 다크 그레이(#333333) 기본, 미디엄 그레이(#666666) 보조
- 배경: 화이트(#FFFFFF) 기본, 라이트 그레이(#F0F0F0) 섹션 구분
- 로고 사용: SK Red 바탕에 화이트 로고, 또는 화이트 바탕에 SK Red 로고만 허용

[타이포그래피]
- 제목: Bold 고딕체(24~36pt), SK Red 또는 블랙
- 본문: Regular 고딕체(12~16pt), 줄높이 1.5배
- 폴백 서체: Noto Sans KR, Pretendard, 맑은 고딕(한글) / Arial(영문)
- 핵심 키워드에 SK Red 또는 오렌지 색상 강조
- 스토리텔링 방식의 텍스트 구성

[레이아웃]
- 16:9, 상단 또는 하단에 SK Red 액센트 바
- 표지: SK Red 배경 + 화이트 텍스트, 또는 화이트 배경 + 행복날개 그라디언트 포인트
- 부드러운 곡선 요소 활용 (라운드 모서리 박스)
- 로고 여백: 날개 요소 너비 1배 이상
- 여유로운 간격과 정돈된 구성

[시각 요소]
- 사람 중심의 따뜻한 사진 활용
- 라운드형 아이콘, SK Red/Orange 톤
- 차트 색상: #EA002C, #F47725, #333333, #666666, #F0F0F0 순서
- 행복날개 그라디언트를 장식 요소/구분선에 포인트로 활용`
  },

  lg: {
    name: "LG",
    nameEn: "LG Corporation",
    logo: "🔴",
    colors: {
      primary: "#A50034",
      secondary: "#6B6B6B",
      accent: "#C30046",
      background: "#FFFFFF",
      text: "#333333"
    },
    prompt: `슬라이드 스타일 지침 - LG 스타일:

[전체 톤 & 분위기]
- "Life's Good" — 삶을 풍요롭게 하는 기술
- 세련되고 모던한 프리미엄 감성
- LG Red를 절제하여 포인트로만 사용 — 과다 사용 금지
- 깔끔하고 직관적인 정보 전달, 대형 비주얼 활용

[색상 체계]
- 주 색상: LG Magenta Red(#A50034) — 제목 강조, 헤더 바/라인, 로고
- 보조 레드: Active Red(#C30046) — 디지털 강조, 인터랙티브 포인트
- 다크 그레이(#333333) — 본문 텍스트
- 미디엄 그레이(#6B6B6B) — 보조 텍스트, 캡션
- 라이트 그레이(#E6E6E6) — 구분선, 보더
- 웜 그레이(#B2A99E) — 보조 배경 요소
- 배경: 순백색(#FFFFFF) 기본
- LG Red는 포인트 용도로 절제하여 사용 (얇은 스트라이프 또는 헤더 바)

[타이포그래피]
- 제목: LG Smart Bold (28~40pt), LG Red 또는 블랙
- 부제목: LG Smart Regular (18~24pt)
- 본문: LG Smart Regular/Light (12~16pt), 줄간격 1.5~1.6배
- 영문: LG Smart Latin, 폴백 Helvetica Neue
- 한글 폴백: Noto Sans KR, 맑은 고딕
- 문장은 짧고 명확하게, 불릿포인트 활용

[레이아웃]
- 16:9, 깔끔한 그리드 시스템
- 이미지와 텍스트의 명확한 영역 분리
- 한 슬라이드 하나의 메시지 원칙
- 하단에 LG Red 얇은 라인 포인트
- 로고: LG Red 바탕에 화이트, 화이트 바탕에 LG Red, 또는 그레이스케일만 허용
- 로고 여백: 원형 마크 지름의 0.5배 이상

[시각 요소]
- 라이프스타일+제품 고품질 이미지
- 아이콘: 그레이(#6B6B6B) 또는 LG Red 단색 라인
- 차트: LG Red(#A50034) + 그레이(#6B6B6B, #E6E6E6) 조합
- 제품 목업/실사 이미지 적극 활용`
  },

  hyundai: {
    name: "현대자동차",
    nameEn: "Hyundai Motor",
    logo: "🚗",
    colors: {
      primary: "#002C5F",
      secondary: "#00AAD2",
      accent: "#394553",
      background: "#FFFFFF",
      text: "#394553"
    },
    prompt: `슬라이드 스타일 지침 - 현대자동차(Hyundai) 스타일:

[전체 톤 & 분위기]
- "Progress for Humanity" — 미래지향적이고 혁신적인 모빌리티 기업
- 다이내믹하면서도 신뢰감 있는 톤
- 모빌리티/기술 혁신을 연상시키는 현대적 디자인
- 대담한 비주얼과 깔끔한 텍스트의 조화

[색상 체계]
- 주 색상: Hyundai Blue(#002C5F) — 제목, 헤더, 강조 배경
- 보조 색상: Active Blue(#00AAD2) — 아이콘, 링크, 인터랙티브 강조
- 텍스트: Dark Grey(#394553) — 본문 기본, Medium Grey(#828B96) — 보조 텍스트
- 배경: 화이트(#FFFFFF) 기본, Hyundai Sand(#F6F3F2) 따뜻한 중성 배경
- 구분선/보더: Light Grey(#E4DCD3)
- 다크 배경 교차: Hyundai Blue(#002C5F) 배경 + 화이트 텍스트
- 그라데이션: Hyundai Blue → Active Blue 방향 허용

[타이포그래피]
- 제목: Hyundai Sans Head Bold — 임팩트 있는 크기(28~40pt)
- 부제목: Hyundai Sans Head Medium — 섹션 헤더(20~24pt)
- 본문: Hyundai Sans Text Regular — 가독성 중시(14~16pt), 줄높이 1.4~1.6배
- 한국어: Hyundai Sans Text KR
- 폴백: Arial, Helvetica Neue
- 슬로건/키 메시지는 대형 타이포로 강조

[레이아웃]
- 16:9, 슬라이드 가장자리 5~8% 여백
- 풀 블리드(Full-bleed) 이미지 적극 활용
- 슬라이드 분할: 50:50 또는 60:40 이미지+텍스트
- 역동적 구도 허용 (대각선 컷, 곡선 마스크)
- 로고: Hyundai Blue 바탕에 화이트, 또는 화이트 바탕에 Hyundai Blue
- 로고 여백: H 심볼 높이의 0.5배 이상

[시각 요소]
- 자동차/모빌리티 고품질 사진, 곡선형 유선 모티프
- 차트: Active Blue(#00AAD2) + Hyundai Blue(#002C5F) 2톤 기본
- 아이콘: Active Blue 라인 스타일
- 미래 기술 표현에 추상적 그래픽/파티클 효과 허용`
  },

  naver: {
    name: "네이버",
    nameEn: "NAVER",
    logo: "🟢",
    colors: {
      primary: "#03C75A",
      secondary: "#222222",
      accent: "#09AA5C",
      background: "#FFFFFF",
      text: "#222222"
    },
    prompt: `슬라이드 스타일 지침 - 네이버(NAVER) 스타일:

[전체 톤 & 분위기]
- 테크 기업다운 깔끔하고 모던한 느낌
- 데이터와 기술력을 강조하는 스마트한 톤
- 심플하면서도 디테일이 살아있는 디자인
- 플랫 디자인 기반의 현대적 UI 감성

[색상 체계]
- 주 색상: NAVER Green(#03C75A) — CTA, 핵심 강조, 로고 배경 (포인트 용도로 절제)
- 보조 그린: Dark Green(#09AA5C) — 호버/인터랙티브 상태
- 텍스트: 블랙(#000000) 제목, 다크 그레이(#222222) 본문
- 그레이 스케일: #666666 보조, #999999 캡션, #CCCCCC 구분선, #F5F5F5 배경
- 배경: 순백색(#FFFFFF) 기본, 라이트 그레이(#F5F5F5) 섹션 구분
- NAVER Green은 포인트로만 절제하여 사용 — 과다 사용 금지
- 로고: NAVER Green(#03C75A) 배경 + 화이트 로고가 표준 조합

[타이포그래피]
- 제목: Pretendard Bold / Noto Sans KR Bold — 볼드 산세리프
- 본문: Pretendard Regular (400/500) — 줄간격 1.6~1.8배
- 영문: Noto Sans
- 코드/기술 용어는 모노스페이스 표현
- 텍스트는 최소화, 비주얼로 설명
- 로고 최소 크기: 디지털 24px 높이, N 글자 높이만큼 사방 여백

[레이아웃]
- 16:9, 넓은 여백 + 카드 UI 기반 구성
- 모바일 앱 UI처럼 깔끔한 정보 계층
- 좌측 정렬 기본, 그리드 시스템 준수
- 한 슬라이드에 한 가지 핵심 정보
- 표지: 화이트 배경 + NAVER Green 포인트, 또는 NAVER Green 전면 배경

[시각 요소]
- 플랫 디자인 일러스트레이션
- 라인 아이콘: 모노톤(#222222) 기본, NAVER Green 포인트
- 차트 색상: #03C75A, #09AA5C, #222222, #666666, #CCCCCC 순서
- 스크린샷/UI 목업으로 서비스 설명`
  },

  kb: {
    name: "KB금융",
    nameEn: "KB Financial Group",
    logo: "⭐",
    colors: {
      primary: "#FFBC00",
      secondary: "#60584C",
      accent: "#F38530",
      background: "#FFFFFF",
      text: "#000000"
    },
    prompt: `슬라이드 스타일 지침 - KB금융(KB Financial) 스타일:

[전체 톤 & 분위기]
- KB금융그룹 공식 프레젠테이션 스타일
- KB 옐로를 핵심 아이덴티티로 활용한 신뢰감 있는 금융 톤
- 정돈된 정보 계층 구조(LV1→LV2→LV3)로 명확한 전달
- 데이터 중심, 표와 차트를 적극 활용하는 금융 보고서 스타일

[색상 체계]
- 주 색상: KB Yellow(#FFBC00) — 표지 배경, 제목 바, 표 헤더, 섹션 구분, 프레임 테두리
- 보조 옐로: KB Yellow Negative(#FFCC00) — 섹션 구분 슬라이드 그라디언트
- KB Gray(#60584C) — 보조 텍스트, 중간 강조
- KB Dark Gray(#545045) — 짙은 보조색, 배경 요소
- 오렌지(#F38530) — 강조 포인트 텍스트, 아이콘, 다이어그램 핵심 강조
- 본문 텍스트: 블랙(#000000), 보조 텍스트: 다크그레이(#404041)
- 배경: 화이트(#FFFFFF) 기본
- 차트 색상 순서: #FFBC00 → #F38530 → #C1550B → #C4BBA6 → #756D63 → #E3E3E3
- 표 일반 행: #F2EEEA, 표 강조 행: #FFF2CC

[타이포그래피]
- 제목(LV1): 굵은 고딕체 Bold, 14pt, 블랙 — 대분류 항목 제목, 슬라이드 제목
- 본문(LV2): 고딕체 Medium, 12pt, 블랙 — 중분류 본문 내용
- 세부(LV3): 고딕체 Light, 9~11pt, 블랙 — 소분류 세부 내용, 주석
- 차트 세부: 고딕체 Medium, 10pt — 차트 내 수치/라벨
- 소형 라벨: 고딕체 Light, 8pt — 아이콘 설명, 최소 라벨, 페이지 번호
- 오렌지(#EA8530)로 인포그래픽 강조 라벨, 콜아웃 텍스트 처리

[레이아웃]
- 16:9 비율, Motif 기본형
- 표지: KB Yellow(#FFBC00) 전면 배경, 좌측 정렬 제목, 좌상단 로고
- 섹션 구분: KB Yellow → KB Yellow Negative 좌→우 그라디언트, 중앙 좌측 정렬 텍스트
- 콘텐츠 슬라이드: 흰 배경 + 상단에 KB Yellow(#FFBC00) 제목 바(높이 약 28pt, 전체 폭)
- 목차 슬라이드: 흰 배경 + KB Yellow(#FFBC00) 테두리 둥근 사각형 프레임(모서리 반경 8pt)
- 하단 우측에 페이지 번호(Light, 8pt, #404041)

[표(Table) 스타일]
- 헤더 행: KB Yellow(#FFBC00) 배경, Bold, 9pt, 블랙 텍스트
- 홀수 행: #F2EEEA 배경, 짝수 행: 흰 배경
- 강조 행: #FFF2CC 배경
- 합계 행: KB Yellow(#FFBC00) 배경, Bold
- 테두리: #CCCCCC, 0.5pt

[차트 스타일]
- KB Yellow(#FFBC00) 테두리 둥근 사각형 프레임(1pt)
- 흰 배경
- 차트 색상 순서: #FFBC00, #F38530, #C1550B, #C4BBA6, #756D63, #E3E3E3
- 데이터 라벨: Medium, 8pt

[시각 요소]
- 오렌지(#F38530) 아이콘으로 핵심 포인트 강조
- KB Gray(#60584C) 톤의 보조 아이콘
- 둥근 사각형 프레임으로 콘텐츠 영역 구분
- 인포그래픽에 오렌지 강조 라벨 활용`
  },

  shinhan: {
    name: "신한금융",
    nameEn: "Shinhan Financial Group",
    logo: "🔵",
    colors: {
      primary: "#0046FF",
      secondary: "#1A1F71",
      accent: "#4D8AFF",
      background: "#FFFFFF",
      text: "#333333"
    },
    prompt: `슬라이드 스타일 지침 - 신한금융(Shinhan Financial) 스타일:

[전체 톤 & 분위기]
- 디지털 혁신과 전통 금융의 균형
- 2022~2023 리브랜딩 이후 밝고 진취적인 Shinhan Blue 톤
- 깔끔하고 신뢰감 있는 프로페셔널한 느낌
- 데이터 기반의 논리적 정보 전달

[색상 체계]
- 주 색상: Shinhan Blue(#0046FF) — 제목, 주요 강조, 헤더
- 보조 색상: Deep Navy(#1A1F71) — 다크 배경, 서브 텍스트
- 레거시 블루: #003DA5 (구 CI, 일부 문서에서 사용)
- 틴트 팔레트: Light Blue(#4D8AFF), Pale Blue(#80B0FF) — 그라데이션/차트 보조
- 텍스트: 다크 그레이(#333333) 기본, Warm Gray(#8C8C8C) 보조
- 배경: 화이트(#FFFFFF) 기본, Deep Navy(#1A1F71) 배경 교차
- 블루 그라데이션: Shinhan Blue(#0046FF) → Light Blue(#4D8AFF) 포인트 활용

[타이포그래피]
- 제목: 신한산스(Shinhan Sans) Bold — 18~24pt, Shinhan Blue
- 본문: 신한산스 Regular/Medium — 10~12pt, 다크 그레이
- 웨이트: Light, Regular, Medium, Bold 4종
- 폴백: Noto Sans KR(본고딕), Arial, Helvetica Neue
- 핵심 수치는 대형 폰트 + Shinhan Blue로 강조

[레이아웃]
- 16:9, 넓은 여백
- 표지: Shinhan Blue 또는 Deep Navy 배경 + 화이트 텍스트
- 콘텐츠: 화이트 배경, 블루 강조 요소
- 좌측 네이비 사이드바 + 우측 콘텐츠 구조 활용 가능
- 로고: 좌상단 또는 우하단, 심볼마크 높이 1배 여백

[시각 요소]
- 블루 그라데이션 배경 요소
- 대시보드 스타일 데이터 시각화
- 차트 색상: #0046FF, #4D8AFF, #80B0FF, #1A1F71, #8C8C8C 순서
- 라인 아이콘 (Shinhan Blue/시안 톤)
- 디지털/핀테크 느낌의 추상 그래픽`
  },

  kakao: {
    name: "카카오",
    nameEn: "Kakao",
    logo: "💛",
    colors: {
      primary: "#FEE500",
      secondary: "#3C1E1E",
      accent: "#000000",
      background: "#FFFFFF",
      text: "#3C1E1E"
    },
    prompt: `슬라이드 스타일 지침 - 카카오(Kakao) 스타일:

[전체 톤 & 분위기]
- 친근하고 유쾌한 브랜드 감성
- 사용자 친화적이고 따뜻한 톤
- 복잡한 기술도 쉽고 재미있게 전달
- 카카오톡의 친숙한 옐로+브라운 감성 유지

[색상 체계]
- 주 색상: Kakao Yellow(#FEE500) — 배경 강조, 헤더, 버튼, 로고 배경
- 텍스트: Kakao Brown(#3C1E1E) — 옐로 배경 위 텍스트 (공식 조합)
- 보조 텍스트: 블랙(#000000) — 화이트 배경 위 제목/본문
- 보조 그레이: #B3B3B3 — 캡션, 비활성 텍스트
- 배경: 화이트(#FFFFFF) 기본, Kakao Yellow(#FEE500) 포인트 슬라이드 교차
- 로고: Kakao Yellow 배경 + Kakao Brown(#3C1E1E) 텍스트가 표준 조합
- 로고 여백: 말풍선 꼬리 높이만큼 확보, 최소 18px
- 로고 변형(늘이기, 회전, 재색상) 금지

[타이포그래피]
- 제목: Bold 라운드 고딕 느낌 — 부드럽고 친근
- 본문: Regular 고딕, 여유로운 줄간격
- 폴백: Pretendard, 맑은 고딕(한글) / Roboto(영문)
- 대화체/스토리텔링 방식의 텍스트
- 핵심 키워드에 Kakao Yellow 하이라이트 효과

[레이아웃]
- 16:9, 라운드 모서리, 부드러운 곡선 기반
- 표지: Kakao Yellow 전면 배경 + Kakao Brown 텍스트
- 콘텐츠: 화이트 배경, 옐로 포인트 요소
- 카드형 UI 레이아웃, 풍부한 여백
- 이미지/일러스트와 텍스트 50:50 비율

[시각 요소]
- 카카오프렌즈 캐릭터 활용 가능
- 라운드형 아이콘 (옐로/브라운 톤)
- 차트: 라운드 바, 도넛 차트 등 소프트하게
- 차트 색상: #FEE500, #3C1E1E, #000000, #B3B3B3 순서
- 말풍선 모티프를 장식/인용 요소로 활용`
  },

  hana: {
    name: "하나금융",
    nameEn: "Hana Financial Group",
    logo: "🟢",
    colors: {
      primary: "#008C73",
      secondary: "#006B5E",
      accent: "#4DB8A4",
      background: "#FFFFFF",
      text: "#333333"
    },
    prompt: `슬라이드 스타일 지침 - 하나금융(Hana Financial) 스타일:

[전체 톤 & 분위기]
- "함께 성장하는 금융" — 따뜻하고 신선한 느낌
- Hana Green(틸 그린)으로 성장, 지속가능성, 신뢰를 표현
- 친근하면서도 전문적인 금융 이미지
- ESG/지속가능경영 가치를 반영하는 자연 친화적 톤

[색상 체계]
- 주 색상: Hana Green(#008C73) — 제목, 핵심 강조, 헤더 바/타이틀 바
- 보조 색상: Deep Teal(#006B5E) — 다크 배경, 서브 강조
- 틴트: Light Green(#4DB8A4) — 차트 보조, 아이콘
- 프리미엄 골드: Warm Gold(#C9A96E) — 자산관리/1Q 프리미엄 브랜딩 포인트(제한적)
- 텍스트: 다크 그레이(#333333) 기본, 미디엄 그레이(#666666) 보조
- 배경: 화이트(#FFFFFF) 기본
- 그린 계열 그라데이션: Hana Green → Light Green 포인트 활용

[타이포그래피]
- 제목: 하나글꼴(Hana Font) Bold — 20~28pt, Hana Green 또는 블랙
- 본문: 하나글꼴 Regular — 10~12pt, 다크 그레이
- 폴백: Noto Sans KR, 맑은 고딕(한글) / Helvetica Neue, Arial(영문)
- 핵심 수치(수익률, 성장률)는 대형 Bold + Hana Green 강조

[레이아웃]
- 16:9, 여유 있는 여백
- 표지: Hana Green 배경 + 화이트 텍스트, 또는 화이트 배경 + 그린 포인트
- 콘텐츠: 화이트 배경, 상단 그린 타이틀 바 또는 좌측 그린 사이드 라인
- 로고: 좌상단, 원형 심볼 너비만큼 여백 확보
- 카드형 레이아웃, 라운드 모서리 박스로 정보 그룹핑

[시각 요소]
- 차트 색상: #008C73, #4DB8A4, #006B5E, #C9A96E, #666666 순서
- 라운드형 아이콘 (Hana Green 라인)
- 그린 그라데이션 장식 요소
- 자연/성장/사람 관련 사진 활용`
  },

  woori: {
    name: "우리금융",
    nameEn: "Woori Financial Group",
    logo: "🔵",
    colors: {
      primary: "#0066B3",
      secondary: "#003366",
      accent: "#F26522",
      background: "#FFFFFF",
      text: "#333333"
    },
    prompt: `슬라이드 스타일 지침 - 우리금융(Woori Financial) 스타일:

[전체 톤 & 분위기]
- "우리"라는 이름처럼 포용적이고 안정적인 느낌
- 전통 있는 금융기관의 신뢰감과 안정성
- 보수적이면서도 깔끔한 비즈니스 톤
- 한국적 정서를 담은 안정적인 블루

[색상 체계]
- 주 색상: Woori Blue(#0066B3) — 제목, 헤더 바, 강조 요소
- 보조 색상: Dark Navy(#003366) — 다크 배경, 중후한 톤
- 라이트 블루: #3399CC, #66B2E0 — 차트 보조, 아이콘
- 액센트: 코랄/오렌지(#F26522) — 핵심 수치 강조 포인트(제한적 사용)
- 텍스트: 다크 그레이(#333333) 기본, 미디엄 그레이(#999999) 보조
- 배경: 화이트(#FFFFFF) 기본, 연한 블루그레이 박스 보조

[타이포그래피]
- 제목: 우리체(Woori Font) Bold — 18~28pt, Woori Blue 또는 블랙
- 본문: 우리체 Regular — 10~12pt, 다크 그레이
- 폴백: Noto Sans KR, 맑은 고딕(한글) / Arial(영문)
- 수치 데이터는 Woori Blue 대형 Bold로 강조
- 문장은 명확하고 정중한 어조

[레이아웃]
- 16:9, 전통적 비즈니스 프레젠테이션 구조
- 표지: Woori Blue 배경 + 화이트 텍스트
- 콘텐츠: 화이트 배경, 상단 Woori Blue 헤더 바 또는 좌측 블루 액센트 스트립
- 정형화된 2~3단 컬럼 구성
- 로고: 좌상단, 심볼마크 높이만큼 여백
- 표와 차트를 활용한 데이터 중심 레이아웃

[시각 요소]
- 차트 색상: #0066B3, #3399CC, #66B2E0, #003366, #F26522, #999999 순서
- 심플한 라인 아이콘 (Woori Blue 톤)
- 테이블과 차트 중심의 데이터 시각화
- 블루 톤 그라데이션 배경 포인트(제한적)`
  },

  lotte: {
    name: "롯데",
    nameEn: "LOTTE Group",
    logo: "🔴",
    colors: {
      primary: "#E60012",
      secondary: "#231F20",
      accent: "#C8102E",
      background: "#FFFFFF",
      text: "#231F20"
    },
    prompt: `슬라이드 스타일 지침 - 롯데(LOTTE) 스타일:

[전체 톤 & 분위기]
- "Lifetime Value Creator" — 생활 밀착형 프리미엄
- 유통/식품/관광 등 라이프스타일 전반을 아우르는 친숙한 톤
- 밝고 활기찬 에너지와 신뢰감의 균형
- 강렬한 LOTTE Red로 브랜드 존재감 확보

[색상 체계]
- 주 색상: LOTTE Red(#E60012, Pantone 485C) — 제목, 핵심 강조, 헤더 바
- 보조 레드: Deep Red(#C8102E) — 차트 보조, 서브 강조
- 텍스트: LOTTE Black(#231F20) 기본, Grey(#58585A) 보조
- 배경: 화이트(#FFFFFF) 기본
- 로고: LOTTE Red 바탕에 화이트, 또는 화이트 바탕에 LOTTE Red만 허용
- 로고 여백: 로고 높이의 1/4 이상 사방 확보

[타이포그래피]
- 제목: Bold 고딕체, LOTTE Red 또는 블랙
- 본문: Regular 고딕체, LOTTE Black(#231F20)
- 폴백: 맑은 고딕, Noto Sans KR(한글) / Helvetica Neue, Arial(영문)
- 브랜드/사업부명은 LOTTE Red로 강조
- 핵심 숫자(매출, 성장률)를 대형 Bold로 부각

[레이아웃]
- 16:9, 상단 LOTTE Red 바 + 흰 배경의 클래식 구조
- 표지: LOTTE Red 전면 배경 + 화이트 텍스트, 또는 화이트 + 레드 포인트
- 깔끔한 2단 또는 3단 그리드
- 사업 영역별 섹션을 명확히 구분

[시각 요소]
- 유통/F&B/호텔 등 라이프스타일 사진
- 차트 색상: #E60012, #C8102E, #231F20, #58585A, #CCCCCC 순서
- 깔끔한 단색 아이콘 (LOTTE Red 또는 Grey)
- LOTTE 워드마크는 전용 서체 — 재현하지 않고 이미지로만 사용`
  },

  shinsegae: {
    name: "신세계",
    nameEn: "Shinsegae Group",
    logo: "🟤",
    colors: {
      primary: "#C9A96E",
      secondary: "#000000",
      accent: "#B8860B",
      background: "#FFFFFF",
      text: "#000000"
    },
    prompt: `슬라이드 스타일 지침 - 신세계(Shinsegae) 스타일:

[전체 톤 & 분위기]
- 프리미엄 리테일의 격조와 품격
- 백화점/럭셔리 브랜드를 연상시키는 고급스러운 톤
- 절제된 우아함, 세련된 여백의 미학
- 클래식하면서도 현대적인 감각

[색상 체계]
- 주 색상: Shinsegae Gold(#C9A96E) — 강조 라인, 장식 요소, 아이콘 포인트
- 보조 골드: Deep Gold(#B8860B) — 제목 강조, 헤더 라인
- 텍스트: 블랙(#000000) 제목, 다크 그레이(#333333) 본문
- 배경: 순백색(#FFFFFF) 기본, 아이보리(#FAF8F5) 프리미엄 배경
- 골드+블랙+화이트의 럭셔리 3톤 구성
- 로고 여백: S 글자 높이만큼 확보
- (이마트 계열: E-Mart Yellow #FFD100 + 블랙 — 별도 스타일)

[타이포그래피]
- 제목: 세리프 또는 라이트 고딕체 — 우아하고 절제된 느낌
- 본문: Noto Sans KR Light~Regular, 또는 Noto Serif KR(프리미엄 감성)
- 영문: 대문자 레터스페이싱 활용으로 럭셔리 톤
- 텍스트 양 최소화, 핵심 메시지만 전달
- 폴백: 맑은 고딕, Apple SD Gothic Neo

[레이아웃]
- 16:9, 넓고 여유로운 여백 (럭셔리 브랜드 감성)
- 표지: 화이트 또는 아이보리 배경, 골드 라인 장식 + 블랙 텍스트
- 중앙 정렬 기반의 대칭적 구성
- 섹션 구분에 가는 골드 라인(1pt) 활용
- 한 슬라이드에 하나의 비주얼 포커스

[시각 요소]
- 고급스러운 공간/인테리어/제품 사진
- 가는 라인의 골드(#C9A96E) 아이콘
- 차트: 미니멀, Gold(#C9A96E) + Deep Gold(#B8860B) + 블랙 + 그레이
- 장식은 얇은 골드 선과 기하학적 패턴으로 절제`
  }
};

// 스타일 키 목록
const STYLE_KEYS = Object.keys(CORPORATE_STYLES);
