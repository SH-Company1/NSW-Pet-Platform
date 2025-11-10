# NSW Pet Platform - 프로젝트 구조

## 📱 앱 개요
반려동물을 위한 종합 플랫폼 앱 (React Native/Expo 기반)

## 🏗️ 아키텍처

### 네비게이션 구조
```
App.tsx (RootStack)
├── MainTabs (Bottom Tab Navigator)
│   ├── Home Tab → HomeScreen
│   ├── Search Tab → SearchScreen
│   ├── Store Tab → StoreScreen
│   └── MyPage Tab → MyPageScreen
│
└── CategoryDetail (Stack Screen)
    └── CategoryDetailScreen
```

### 화면 플로우
```
시작
 ↓
App.tsx (NavigationContainer)
 ↓
MainTabs (하단 탭바, 기본: Home 탭)
 ↓
HomeScreen
 ├── 헤더 (로고, 알림)
 ├── 배너 영역
 ├── 6개 대분류 카테고리 그리드
 │   ├── 펫푸드
 │   ├── 펫용품
 │   ├── 펫서비스
 │   ├── 펫라이프스타일
 │   ├── 펫 엔터
 │   └── 펫 장례
 └── 추천 상품 섹션 (준비 중)
 
카테고리 선택 시
 ↓
CategoryDetailScreen (중분류 표시 예정)
```

## 📂 파일 구조

```
NSW-Pet-Platform/
├── App.tsx                           # 앱 진입점, RootStack 설정
│   ├── NavigationContainer
│   └── Stack.Navigator
│       ├── MainTabs
│       └── CategoryDetail
│
├── navigation/
│   └── TabNavigator.tsx             # 하단 탭 네비게이션
│       ├── Tab.Navigator (4개 탭)
│       └── TabIcon 컴포넌트
│
├── screens/
│   ├── HomeScreen.tsx               # 홈 화면
│   │   ├── Header (로고, 알림)
│   │   ├── Banner (배너)
│   │   ├── CategoryGrid (카테고리 그리드)
│   │   └── BottomSection (추천 상품)
│   │
│   ├── SearchScreen.tsx             # 검색 화면 (준비 중)
│   ├── StoreScreen.tsx              # 스토어 화면 (준비 중)
│   ├── MyPageScreen.tsx             # 마이페이지 (준비 중)
│   └── CategoryDetailScreen.tsx    # 카테고리 상세 화면
│       ├── CustomHeader (뒤로가기)
│       └── Content (중분류 표시 예정)
│
├── types/
│   ├── navigation.ts                # 네비게이션 타입 정의
│   │   ├── RootTabParamList
│   │   └── RootStackParamList
│   │
│   └── models.ts                    # 데이터 모델
│       ├── Category 인터페이스
│       └── MAIN_CATEGORIES (6개 대분류)
│
├── package.json
├── tsconfig.json
├── app.json
└── README.md
```

## 🎨 컴포넌트 구조

### HomeScreen
```tsx
HomeScreen
├── SafeAreaView
└── ScrollView
    ├── Header
    │   ├── Logo (Text: "NSW Pet")
    │   └── Notification (Icon)
    │
    ├── Banner
    │   ├── BannerContent
    │   │   ├── Subtitle
    │   │   └── Title
    │   └── BannerButton
    │
    ├── CategoriesContainer (Grid)
    │   └── CategoryCard × 6
    │       ├── IconContainer
    │       │   └── Icon (Emoji)
    │       └── CategoryName
    │
    └── BottomSection
        ├── SectionTitle
        └── Placeholder
```

### TabNavigator
```tsx
TabNavigator
└── Tab.Navigator
    ├── Home Tab
    ├── Search Tab
    ├── Store Tab
    └── MyPage Tab
```

## 🔄 데이터 모델

### Category
```typescript
interface Category {
  id: string;          // 카테고리 ID
  name: string;        // 카테고리 이름
  icon: string;        // 이모지 아이콘
  color: string;       // 브랜드 컬러
}
```

### 대분류 카테고리 (6개)
```typescript
MAIN_CATEGORIES = [
  { id: 'pet_food', name: '펫푸드', icon: '🍖', color: '#FF9800' },
  { id: 'pet_supplies', name: '펫용품', icon: '🐾', color: '#2196F3' },
  { id: 'pet_service', name: '펫서비스', icon: '💊', color: '#4CAF50' },
  { id: 'pet_lifestyle', name: '펫라이프스타일', icon: '🏠', color: '#9C27B0' },
  { id: 'pet_entertainment', name: '펫 엔터', icon: '🎉', color: '#E91E63' },
  { id: 'pet_funeral', name: '펫 장례', icon: '💝', color: '#757575' },
]
```

## 🎨 디자인 시스템

### 색상
- **Primary**: `#4CAF50` (Green)
- **Background**: `#FFFFFF` (White)
- **Text Primary**: `#212121`
- **Text Secondary**: `#616161`
- **Text Disabled**: `#9E9E9E`
- **Placeholder**: `#BDBDBD`

### 타이포그래피
- **Logo**: 24px, Bold
- **Banner Title**: 28px, Bold
- **Banner Subtitle**: 16px
- **Section Title**: 20px, Bold
- **Category Name**: 12px, SemiBold
- **Tab Label**: 12px

### 간격 (Spacing)
- Container Padding: 16px
- Card Gap: 16px
- Banner Height: 180px
- Category Card Size: 화면 너비 기준 3등분

### 둥근 모서리 (Border Radius)
- Banner: 20px
- Category Card: 16px
- Icon Container: 28px (원형)
- Button: 20px

## 🚀 네비게이션 플로우

### Tab Navigation (하단 탭)
```
홈 ⟷ 검색 ⟷ 스토어 ⟷ 마이
```

### Stack Navigation (화면 전환)
```
HomeScreen
    ↓ (카테고리 카드 탭)
CategoryDetailScreen
    ↓ (뒤로가기)
HomeScreen
```

## ⚙️ 상태 관리

현재: 로컬 상태 (useState)
- TabNavigator: 현재 선택된 탭
- 각 화면: 독립적인 로컬 상태

향후: Redux, Context API, 또는 Zustand 도입 예정

## 📱 반응형 디자인

- **카테고리 그리드**: 3열 고정
- **카드 크기**: `(screenWidth - 64) / 3`
- **SafeAreaView**: 노치/상태바 대응
- **ScrollView**: 세로 스크롤 가능

## 🔧 향후 작업

### Phase 1: 중분류 구현
- [ ] 중분류 데이터 모델 추가
- [ ] CategoryDetailScreen에 중분류 그리드 구현
- [ ] 중분류 → 소분류 네비게이션

### Phase 2: 기능 구현
- [ ] 검색 기능 (SearchScreen)
- [ ] 스토어 기능 (StoreScreen)
- [ ] 마이페이지 (MyPageScreen)
  - [ ] 프로필
  - [ ] 찜 목록
  - [ ] 주문 내역

### Phase 3: API 연동
- [ ] API 클라이언트 구축
- [ ] 카테고리 데이터 동적 로드
- [ ] 상품 목록/상세
- [ ] 사용자 인증

### Phase 4: 고급 기능
- [ ] 푸시 알림
- [ ] 결제 시스템
- [ ] 리뷰/평점
- [ ] 소셜 기능

## 📦 주요 패키지

```json
{
  "dependencies": {
    "react": "^18.x",
    "react-native": "^0.76.x",
    "expo": "~52.x",
    "@react-navigation/native": "^6.x",
    "@react-navigation/bottom-tabs": "^6.x",
    "@react-navigation/native-stack": "^6.x",
    "react-native-screens": "^3.x",
    "react-native-safe-area-context": "^4.x"
  }
}
```

## 💡 참고사항

- **현재 상태**: UI 구조만 구현 (깡통 앱)
- **데이터**: 하드코딩된 목 데이터
- **준비 중 화면**: 플레이스홀더 표시
- **TypeScript**: 타입 안정성 확보
- **Expo**: 빠른 개발 및 테스트

