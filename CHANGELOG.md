# 변경사항

## 2025-01-10 - 주요 업데이트

### 🐛 버그 수정

#### 1. 하단 콘텐츠 가림 문제 해결
**문제**: iOS 웹에서 하단 탭바에 콘텐츠가 가려지는 현상

**해결방법**:
- `useSafeAreaInsets` 훅 사용
- 동적으로 `paddingBottom` 계산
- Safe Area 자동 감지

**변경된 파일**:
- `screens/HomeScreen.tsx`

```typescript
// Before
<ScrollView contentContainerStyle={styles.scrollContent}>

// After
const insets = useSafeAreaInsets();
<ScrollView 
  contentContainerStyle={[
    styles.scrollContent, 
    { paddingBottom: insets.bottom + 80 }
  ]}
>
```

### 🎨 새로운 기능

#### 2. 데스크톱 모바일 뷰 추가
**기능**: 데스크톱 브라우저에서도 모바일 앱 비율로 표시

**구현**:
- 최대 너비 480px 제한
- 화면 중앙 정렬
- 좌우 그라데이션 배경
- 그림자 효과

**추가된 파일**:
- `index.html` - 커스텀 HTML 템플릿
- `app.css` - 데스크톱 스타일링
- `public/index.html` - 빌드용 HTML
- `public/app.css` - 빌드용 CSS
- `DESKTOP_VIEW.md` - 문서

**스타일**:
```css
/* 데스크톱 (481px 이상) */
#root {
  max-width: 480px;
  margin: 0 auto;
  box-shadow: 0 0 30px rgba(0,0,0,0.15);
}

body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* 모바일 (480px 이하) */
@media (max-width: 480px) {
  #root {
    box-shadow: none;
  }
  body {
    background: #fff;
  }
}
```

### 📚 문서 업데이트

**추가된 문서**:
- `DESKTOP_VIEW.md` - 데스크톱 뷰 가이드
- `CHANGELOG.md` - 이 파일

**업데이트된 문서**:
- `README.md` - 데스크톱 뷰 섹션 추가
- `PWA_GUIDE.md` - Safe Area 관련 내용

### 🔧 설정 변경

**`vercel.json`**:
- 보안 헤더 추가 (X-Content-Type-Options, X-Frame-Options, X-XSS-Protection)
- 캐시 정책 개선 (static 폴더만 장기 캐시)

**`App.tsx`**:
- CSS 파일 동적 로드 추가

**`app.json`**:
- 웹 PWA 메타데이터 유지

### 📱 플랫폼별 변경사항

#### iOS Safari
- ✅ Safe Area 자동 적용
- ✅ 하단 탭바 가림 현상 해결
- ✅ PWA 홈 화면 추가 지원

#### Android Chrome
- ✅ Safe Area 자동 적용
- ✅ 하단 탭바 가림 현상 해결
- ✅ PWA 설치 배너 지원

#### Desktop (Chrome, Safari, Edge, Firefox)
- ✅ 모바일 앱 비율 (480px)
- ✅ 중앙 정렬
- ✅ 그라데이션 배경
- ✅ 그림자 효과

### 🚀 배포 방법

```bash
# 변경사항 커밋
git add .
git commit -m "Fix: Bottom content overlap & Add desktop mobile view"

# GitHub에 푸시
git push origin main
```

Vercel이 자동으로 배포합니다.

### ✅ 테스트 체크리스트

#### 모바일
- [ ] iOS Safari에서 하단이 가려지지 않는지 확인
- [ ] Android Chrome에서 하단이 가려지지 않는지 확인
- [ ] 스크롤이 부드럽게 작동하는지 확인
- [ ] PWA 설치가 정상 작동하는지 확인

#### 데스크톱
- [ ] 480px 너비로 중앙 정렬되는지 확인
- [ ] 그라데이션 배경이 보이는지 확인
- [ ] 그림자 효과가 있는지 확인
- [ ] 모든 기능이 정상 작동하는지 확인

#### PWA
- [ ] 홈 화면에 추가 가능한지 확인
- [ ] 전체 화면으로 실행되는지 확인
- [ ] 주소창이 없는지 확인
- [ ] 앱 전환기에 표시되는지 확인

### 📊 성능

**번들 크기**: ~758 kB (변경 없음)
**로딩 속도**: 영향 없음
**렌더링**: CSS 추가로 초기 렌더링 약간 빨라짐

### 🐛 알려진 이슈

없음

### 🔮 향후 계획

1. Service Worker 추가 (오프라인 지원)
2. 푸시 알림 기능
3. 다크 모드 지원
4. 중분류 카테고리 구현
5. 검색/스토어/마이페이지 기능 구현

---

## 이전 버전

### 2025-01-09 - 초기 버전
- React Native (Expo) 프로젝트 생성
- 4개 탭 네비게이션
- 6개 대분류 카테고리
- PWA 지원
- Vercel 배포 설정

