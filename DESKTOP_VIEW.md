# 데스크톱 모바일 뷰 가이드

## 📱 데스크톱에서도 모바일 앱처럼 보이게

NSW Pet Platform은 데스크톱 브라우저에서 접속해도 모바일 앱 비율로 보입니다!

## 🖥️ 데스크톱 뷰 특징

### 최대 너비 제한
- 최대 너비: **480px** (모바일 크기)
- 중앙 정렬
- 좌우 여백에 그라데이션 배경

### 시각적 효과
```
┌─────────────────────────────────────────────────┐
│                                                 │
│   (그라데이션 배경)                              │
│                                                 │
│        ┌───────────────────┐                   │
│        │                   │                   │
│        │   NSW Pet App     │ ← 480px 고정     │
│        │   (모바일 뷰)      │                   │
│        │                   │                   │
│        └───────────────────┘                   │
│                                                 │
│   (그라데이션 배경)                              │
│                                                 │
└─────────────────────────────────────────────────┘
```

## 🎨 스타일링

### CSS 설정
```css
#root {
  max-width: 480px;        /* 모바일 너비 */
  margin: 0 auto;          /* 중앙 정렬 */
  background-color: #fff;  /* 흰 배경 */
  box-shadow: 0 0 30px rgba(0,0,0,0.15);  /* 그림자 */
}

/* 배경 그라데이션 */
body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### 반응형 처리
```css
/* 모바일 (480px 이하): 전체 화면 */
@media (max-width: 480px) {
  #root {
    box-shadow: none;  /* 그림자 제거 */
  }
  body {
    background: #fff;  /* 흰 배경 */
  }
}

/* 데스크톱 (481px 이상): 중앙 정렬 */
@media (min-width: 481px) {
  #root {
    box-shadow: 0 0 30px rgba(0,0,0,0.15);
  }
  body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }
}
```

## 📱 iOS Safe Area 처리

### 하단 탭바 가림 문제 해결
```typescript
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  
  return (
    <ScrollView 
      contentContainerStyle={{
        paddingBottom: insets.bottom + 80  // Safe Area + 탭바 높이
      }}
    >
      {/* 콘텐츠 */}
    </ScrollView>
  );
}
```

### HTML Meta 태그
```html
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
```

## 🌐 플랫폼별 뷰

### 1. 모바일 브라우저 (iOS Safari, Chrome Mobile)
- **너비**: 전체 화면
- **배경**: 흰색
- **그림자**: 없음
- **Safe Area**: 자동 적용

### 2. 데스크톱 브라우저 (Chrome, Safari, Edge)
- **너비**: 최대 480px
- **배경**: 그라데이션 (보라색)
- **그림자**: 있음
- **위치**: 중앙 정렬

### 3. PWA 설치 (홈 화면에 추가)
- **너비**: 전체 화면
- **배경**: 흰색
- **상태바**: 앱 색상 (#4CAF50)
- **모드**: standalone (주소창 없음)

## 🎯 사용자 경험

### 데스크톱에서
```
1. 브라우저로 접속
   ↓
2. 중앙에 모바일 크기로 표시
   ↓
3. 좌우는 그라데이션 배경
   ↓
4. 마치 모바일 시뮬레이터처럼 보임
```

### 모바일에서
```
1. 브라우저로 접속
   ↓
2. 전체 화면으로 표시
   ↓
3. "홈 화면에 추가"
   ↓
4. 앱처럼 전체 화면 실행
```

## 🔧 커스터마이징

### 최대 너비 변경
```css
/* app.css */
#root {
  max-width: 390px;  /* iPhone 14 크기 */
  /* 또는 */
  max-width: 428px;  /* iPhone 14 Pro Max 크기 */
}
```

### 배경 색상 변경
```css
body {
  /* 단색 */
  background-color: #f5f5f5;
  
  /* 또는 그라데이션 */
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  
  /* 또는 이미지 */
  background: url('/background.jpg') center/cover;
}
```

### 그림자 효과 조정
```css
#root {
  /* 강한 그림자 */
  box-shadow: 0 10px 50px rgba(0,0,0,0.3);
  
  /* 부드러운 그림자 */
  box-shadow: 0 0 20px rgba(0,0,0,0.1);
  
  /* 그림자 없음 */
  box-shadow: none;
}
```

## 📊 화면 크기별 비교

| 디바이스 | 너비 | 표시 방식 |
|---------|-----|----------|
| iPhone SE | 375px | 전체 화면 |
| iPhone 14 | 390px | 전체 화면 |
| iPhone 14 Pro Max | 428px | 전체 화면 |
| iPad | 768px | 중앙 480px |
| Desktop | 1920px | 중앙 480px |

## 💡 장점

### 1. 일관된 경험
- 모든 디바이스에서 동일한 레이아웃
- 모바일 최적화 유지

### 2. 개발 편의성
- 모바일 사이즈만 디자인
- 데스크톱은 자동 처리

### 3. 시각적 효과
- 데스크톱에서 세련된 느낌
- 모바일 앱처럼 보임

### 4. 사용자 친화적
- 데스크톱에서도 쉬운 네비게이션
- 큰 화면에서 텍스트가 너무 늘어나지 않음

## 🔍 브라우저별 테스트

### Chrome (Desktop)
✅ 중앙 정렬
✅ 그라데이션 배경
✅ 그림자 효과

### Safari (Mac)
✅ 중앙 정렬
✅ 그라데이션 배경
✅ 그림자 효과

### Edge (Windows)
✅ 중앙 정렬
✅ 그라데이션 배경
✅ 그림자 효과

### Firefox
✅ 중앙 정렬
✅ 그라데이션 배경
✅ 그림자 효과

## 🚀 배포 후 확인

1. **모바일 브라우저**
   - 전체 화면으로 표시되는지
   - 하단이 가려지지 않는지

2. **데스크톱 브라우저**
   - 중앙에 480px로 표시되는지
   - 배경 그라데이션이 보이는지
   - 그림자가 있는지

3. **PWA 설치 (홈 화면에 추가)**
   - 전체 화면으로 실행되는지
   - 주소창이 없는지
   - 앱 전환기에 표시되는지

---

**데스크톱에서도 모바일 앱 경험을 그대로!** 🎨💻📱

