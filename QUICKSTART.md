# 빠른 시작 가이드

## 🚀 5분 안에 Vercel에 배포하기

### 1단계: GitHub에 업로드
```bash
# Git 초기화 (아직 안했다면)
git init

# 모든 파일 추가
git add .

# 커밋
git commit -m "Initial commit: NSW Pet Platform"

# GitHub 리포지토리 생성 후 연결
git remote add origin https://github.com/YOUR_USERNAME/NSW-Pet-Platform.git

# 푸시
git push -u origin main
```

### 2단계: Vercel에 배포
1. https://vercel.com 접속 → 로그인 (GitHub 계정으로)
2. "Add New..." → "Project" 클릭
3. GitHub에서 "NSW-Pet-Platform" 선택
4. "Import" 클릭
5. **설정 확인**:
   - Framework Preset: `Other`
   - Build Command: `npm run build:web` (자동 입력됨)
   - Output Directory: `dist` (자동 입력됨)
6. "Deploy" 클릭

### 3단계: 완료! 🎉
- 2-3분 후 배포 완료
- 제공된 URL로 접속
- 예시: `https://nsw-pet-platform.vercel.app`

### 4단계: 앱처럼 사용하기 📱
**iOS (iPhone)**
1. Safari로 배포된 URL 접속
2. 하단 공유 버튼 (□↑) → "홈 화면에 추가"
3. 홈 화면에서 앱 아이콘으로 실행!

**Android**
1. Chrome으로 배포된 URL 접속
2. ⋮ 메뉴 → "홈 화면에 추가" 또는 "앱 설치"
3. 홈 화면에서 앱 아이콘으로 실행!

💡 **PWA 기능**: 주소창 없이 전체 화면으로 앱처럼 작동합니다!

---

## 💻 로컬에서 실행하기

### 개발 모드
```bash
# 의존성 설치
npm install

# 개발 서버 시작
npm start

# 웹 브라우저에서 실행
npm run web
```

### 프로덕션 빌드 테스트
```bash
# 빌드
npm run build:web

# 미리보기
npm run preview
```

---

## 📱 다른 플랫폼에서 실행

### iOS
```bash
npm run ios
```

### Android
```bash
npm run android
```

### Expo Go 앱
1. 앱스토어/플레이스토어에서 "Expo Go" 설치
2. 터미널에서 `npm start`
3. QR 코드 스캔

---

## 🔧 문제 해결

### 빌드 실패
```bash
# 캐시 삭제 후 재설치
rm -rf node_modules package-lock.json
npm install
npm run build:web
```

### 웹에서 안보임
```bash
# 웹 의존성 재설치
npx expo install react-dom react-native-web
```

### 배포 후 404 에러
- vercel.json이 프로젝트 루트에 있는지 확인
- Vercel Dashboard → Settings → Output Directory가 `dist`인지 확인

---

## 📚 더 알아보기

- [전체 README](./README.md) - 프로젝트 전체 정보
- [배포 가이드](./DEPLOYMENT.md) - 상세 배포 가이드
- [프로젝트 구조](./PROJECT_STRUCTURE.md) - 코드 구조 설명

---

## 🆘 도움이 필요하신가요?

- Vercel 문서: https://vercel.com/docs
- Expo 문서: https://docs.expo.dev
- React Navigation: https://reactnavigation.org

