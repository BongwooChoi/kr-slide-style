# 한국 기업 슬라이드 스타일

> **⚠️ 비공식 서드파티 도구 · Unofficial 3rd-party tool**
> 본 확장은 언급된 어떠한 기업과도 제휴, 승인, 후원 관계가 없습니다.
> 기업명과 스타일 설명은 오직 **식별 목적(nominative use)**으로만 사용됩니다.

NotebookLM 슬라이드 생성 시 한국 주요 기업의 스타일 지침을 자동으로 입력해주는 Chrome/Edge 확장 프로그램입니다.

## 주요 기능

- NotebookLM 슬라이드 생성 다이얼로그에 **"한국 기업 스타일"** 버튼 자동 삽입
- 버튼 클릭 한 번으로 선택한 기업의 스타일 지침을 텍스트 영역에 자동 입력
- 브라우저 툴바 팝업에서도 동일 기능 제공

## 지원 기업 (12개)

시총 순 정렬: 삼성 · SK · LG · 현대자동차 · 네이버 · KB금융 · 신한금융 · 카카오 · 하나금융 · 우리금융 · 롯데 · 신세계

## 설치 방법

### 1. Chrome 웹 스토어 (예정)
스토어 심사 통과 후 링크 제공 예정.

### 2. 개발자 모드로 로드 (로컬)
1. 본 저장소 clone 또는 ZIP 다운로드
2. Chrome/Edge에서 `chrome://extensions` 접속
3. "개발자 모드" 켜기
4. "압축해제된 확장 프로그램을 로드합니다" → `extension/` 폴더 선택

## 사용 방법

1. NotebookLM에서 노트북을 열고 **슬라이드 자료 생성** 클릭
2. 다이얼로그 하단에 표시된 **🎨 한국 기업 스타일** 버튼 클릭
3. 원하는 기업 선택
4. 슬라이드 지침 필드에 자동 입력 완료
5. **생성** 버튼으로 진행

## 프로젝트 구조

```
├── extension/           Chrome/Edge 확장 프로그램 본체
│   ├── manifest.json
│   ├── styles.js        기업 스타일 데이터
│   ├── popup.*          툴바 팝업 UI
│   ├── content.*        NotebookLM 페이지 주입 스크립트
│   └── icons/
└── privacy-policy/      개인정보 처리방침 페이지 (GitHub Pages)
```

## 개인정보 처리방침

https://bongwoochoi.github.io/kr-slide-style/privacy-policy/

## 면책 조항 (Disclaimer)

본 확장 프로그램은 **Google LLC 및 각 기업(삼성, SK, LG, 현대자동차, 네이버, KB금융, 신한금융, 카카오, 하나금융, 우리금융, 롯데, 신세계 등)과 어떠한 제휴·승인·후원 관계도 없는 비공식 서드파티 도구**입니다.

- 각 기업명은 해당 기업의 슬라이드 스타일을 식별하기 위한 **참고적 사용(nominative use)**으로만 표기됩니다.
- 어떠한 기업의 공식 로고 이미지도 본 확장에 포함하지 않습니다.
- 색상, 서체 명칭, 레이아웃 설명은 공개된 브랜드 가이드라인을 요약한 것이며, 본 확장을 통해 생성되는 결과물은 해당 기업의 공식 자료가 아닙니다.
- 본 확장으로 생성된 자료를 외부에 공식 자료처럼 배포하는 행위는 사용자의 책임입니다.

## 상표 및 저작권 안내 (Trademark & Copyright Notice)

언급된 모든 상표·서비스마크·상호는 해당 소유자의 등록 상표입니다.
This tool uses third-party company names strictly under the doctrine of nominative fair use. All trademarks, service marks, and trade names mentioned are the property of their respective owners.

### 삭제 요청 (Takedown Policy)

상표권자 또는 정당한 권리자가 특정 항목의 삭제를 요청할 경우, 접수 후 **48시간 이내**에 해당 기업 관련 스타일을 본 확장 프로그램에서 제거하고 업데이트를 배포합니다.

- 연락처: **bongwoo2219@gmail.com**
- 요청 시 포함: 권리자 확인 정보, 문제가 되는 구체적 항목, 연락처

## 라이선스

MIT License
