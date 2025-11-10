# NSW Pet Platform

반려동물을 위한 종합 플랫폼 앱 (React Native/Expo)

## 📱 기능

### 현재 구현된 기능
- ✅ 4개 탭 바 (홈, 검색, 스토어, 마이페이지)
- ✅ 홈 화면 배너
- ✅ 6개 대분류 카테고리
  - 🍖 펫푸드
  - 🐾 펫용품
  - 💊 펫서비스
  - 🏠 펫라이프스타일
  - 🎉 펫 엔터
  - 💝 펫 장례
- ✅ 카테고리 상세 화면 (중분류 준비됨)

### 추후 구현 예정
- ⏳ 중분류 카테고리
- ⏳ 검색 기능
- ⏳ 스토어 기능
- ⏳ 마이페이지 기능

## 🚀 실행 방법

### 사전 요구사항
- Node.js 설치
- Expo CLI 설치
- iOS 시뮬레이터 또는 Android 에뮬레이터

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 시작
npm start

# iOS에서 실행
npm run ios

# Android에서 실행
npm run android

# 웹 브라우저에서 실행
npm run web
```

### Expo Go 앱으로 실행
1. 모바일 기기에 Expo Go 앱 설치
2. `npm start` 실행
3. QR 코드 스캔

## 🌐 Vercel 배포

### 빠른 배포
```bash
# 웹 빌드 생성
npm run build:web

# 미리보기
npm run preview
```

### Vercel에 배포하기
1. **GitHub에 푸시**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin [your-repo-url]
   git push -u origin main
   ```

2. **Vercel Dashboard**
   - https://vercel.com 접속
   - "New Project" 클릭
   - GitHub 리포지토리 연결
   - 자동 배포 시작!

3. **자동 설정**
   - `vercel.json` 파일이 자동으로 설정을 적용
   - 빌드 완료 후 URL 제공

📖 자세한 배포 가이드는 [DEPLOYMENT.md](./DEPLOYMENT.md) 참고

## 📱 PWA - 앱처럼 사용하기

이 프로젝트는 **PWA (Progressive Web App)** 로 설정되어 있어서 웹 브라우저에서도 네이티브 앱처럼 사용할 수 있습니다!

### iOS에서 홈 화면에 추가
1. Safari로 웹사이트 접속
2. 하단 **공유 버튼** (□↑) 탭
3. **"홈 화면에 추가"** 선택
4. 홈 화면에 앱 아이콘 생성! 🎉

### Android에서 앱 설치
1. Chrome으로 웹사이트 접속
2. **⋮** 메뉴 → **"홈 화면에 추가"** 또는 **"앱 설치"**
3. 홈 화면에 앱 아이콘 생성! 🎉

### PWA 기능
- ✅ 전체 화면 모드 (주소창 없음)
- ✅ 홈 화면 아이콘
- ✅ 앱 전환기에 표시
- ✅ 네이티브 앱과 동일한 UX

📱 자세한 PWA 가이드는 [PWA_GUIDE.md](./PWA_GUIDE.md) 참고

## 📂 프로젝트 구조

```
├── App.tsx                           # 앱 진입점 및 네비게이션 설정
├── navigation/
│   └── TabNavigator.tsx             # 하단 탭 네비게이션
├── screens/
│   ├── HomeScreen.tsx               # 홈 화면
│   ├── SearchScreen.tsx             # 검색 화면
│   ├── StoreScreen.tsx              # 스토어 화면
│   ├── MyPageScreen.tsx             # 마이페이지 화면
│   └── CategoryDetailScreen.tsx    # 카테고리 상세 화면
├── types/
│   ├── navigation.ts                # 네비게이션 타입 정의
│   └── models.ts                    # 데이터 모델 및 카테고리 정의
└── package.json
```

## 🛠 기술 스택

- **Framework**: React Native (Expo)
- **Language**: TypeScript
- **Navigation**: React Navigation 6
  - Bottom Tabs Navigator
  - Native Stack Navigator
- **UI**: React Native 내장 컴포넌트

## 📱 화면 구조

```
MainTabs
├── 홈 탭
│   └── HomeScreen
│       ├── 헤더 (로고, 알림)
│       ├── 배너
│       ├── 카테고리 그리드 (6개)
│       └── 추천 상품 섹션
│
├── 검색 탭 → SearchScreen
├── 스토어 탭 → StoreScreen
└── 마이 탭 → MyPageScreen

카테고리 카드 클릭 시
└── CategoryDetailScreen (중분류 표시 예정)
```

## 🎨 디자인 가이드

### 색상 팔레트
- Primary: `#4CAF50` (Green)
- 카테고리별 색상:
  - 펫푸드: `#FF9800` (Orange)
  - 펫용품: `#2196F3` (Blue)
  - 펫서비스: `#4CAF50` (Green)
  - 펫라이프스타일: `#9C27B0` (Purple)
  - 펫 엔터: `#E91E63` (Pink)
  - 펫 장례: `#757575` (Grey)

### 레이아웃
- 카테고리 그리드: 3열 레이아웃
- 카드 스타일: 둥근 모서리 (16px)
- 아이콘 크기: 32px (이모지 사용)

## 📝 개발 상태

현재는 **UI 구조만 구현된 깡통 앱**입니다. 
- 실제 데이터 연동 없음
- 백엔드 API 미연결
- 중분류 카테고리 미구현

향후 백엔드 연동 및 실제 기능이 추가될 예정입니다.

## 🔧 다음 단계

1. **중분류 구현**: `types/models.ts`에 중분류 데이터 추가
2. **API 연동**: 백엔드 서비스 구축 및 연결
3. **검색/스토어/마이페이지 기능** 구현
4. **상태 관리**: Redux 또는 Context API 도입
5. **인증 시스템**: 로그인/회원가입 기능

## 📄 라이선스

MIT

