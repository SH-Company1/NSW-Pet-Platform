# 배포 가이드

## Vercel 배포

NSW Pet Platform 앱을 Vercel에 웹 버전으로 배포하는 가이드입니다.

## 📋 사전 준비

1. **GitHub 리포지토리 생성**
   - GitHub에 새 리포지토리 생성
   - 프로젝트를 해당 리포지토리에 푸시

2. **Vercel 계정**
   - [Vercel](https://vercel.com) 계정 생성
   - GitHub 계정 연동

## 🚀 배포 방법

### 방법 1: Vercel Dashboard (권장)

1. **Vercel Dashboard 접속**
   - https://vercel.com/dashboard 접속
   - "Add New..." → "Project" 클릭

2. **GitHub 리포지토리 연결**
   - "Import Git Repository" 선택
   - NSW-Pet-Platform 리포지토리 선택
   - "Import" 클릭

3. **프로젝트 설정**
   ```
   Project Name: nsw-pet-platform
   Framework Preset: Other
   Root Directory: ./
   Build Command: npm run build:web
   Output Directory: dist
   Install Command: npm install
   ```

4. **환경 변수 설정** (필요시)
   - "Environment Variables" 섹션에서 추가

5. **Deploy 클릭**
   - 자동으로 빌드 및 배포 시작
   - 완료 후 URL 제공

### 방법 2: Vercel CLI

1. **Vercel CLI 설치**
   ```bash
   npm install -g vercel
   ```

2. **로그인**
   ```bash
   vercel login
   ```

3. **프로젝트 배포**
   ```bash
   # 프로젝트 디렉토리에서 실행
   cd /Users/kyungmin/coding/projects/NSW-Pet-Platform
   
   # 첫 배포 (설정)
   vercel
   
   # 프로덕션 배포
   vercel --prod
   ```

4. **설정 확인**
   - 프롬프트에 따라 설정 진행
   - vercel.json 설정이 자동으로 적용됨

## 📦 로컬 빌드 테스트

배포 전에 로컬에서 빌드를 테스트할 수 있습니다:

```bash
# 웹 빌드 생성
npm run build:web

# 빌드 결과물 미리보기
npm run preview
```

브라우저에서 http://localhost:3000 접속하여 확인

## 🔧 자동 배포 설정

GitHub에 푸시할 때마다 자동으로 배포되도록 설정:

1. **Vercel Dashboard에서 프로젝트 선택**
2. **Settings → Git 탭**
3. **자동 배포 브랜치 설정**
   - Production Branch: `main` 또는 `master`
   - Preview Branches: 모든 브랜치 (선택사항)

4. **GitHub에 푸시**
   ```bash
   git add .
   git commit -m "Deploy to Vercel"
   git push origin main
   ```

5. **자동으로 빌드 & 배포 시작**

## 🌐 배포 URL

배포 완료 후 다음과 같은 URL을 받게 됩니다:

- **프로덕션**: `https://nsw-pet-platform.vercel.app`
- **프리뷰**: `https://nsw-pet-platform-[branch]-[user].vercel.app`

## 📱 모바일 지원

Vercel에 배포된 웹 앱은 다음 환경에서 접근 가능:

- ✅ 데스크톱 브라우저 (Chrome, Safari, Firefox, Edge)
- ✅ 모바일 브라우저 (iOS Safari, Chrome Mobile)
- ✅ 태블릿
- ✅ PWA (Progressive Web App) 지원

## 🔒 보안 및 성능

Vercel이 자동으로 제공하는 기능:

- ✅ HTTPS/SSL 인증서 (자동)
- ✅ CDN (전 세계 엣지 네트워크)
- ✅ 자동 캐싱
- ✅ Gzip/Brotli 압축
- ✅ DDoS 보호

## 🐛 문제 해결

### 빌드 실패 시

1. **로컬에서 빌드 테스트**
   ```bash
   npm run build:web
   ```

2. **의존성 확인**
   ```bash
   npm install
   ```

3. **캐시 삭제**
   ```bash
   rm -rf node_modules
   npm install
   ```

### 배포 후 빈 화면

1. **vercel.json 설정 확인**
   - `outputDirectory`가 `dist`로 설정되어 있는지 확인

2. **index.html 경로 확인**
   - `dist/index.html`이 생성되었는지 확인

### 라우팅 에러 (404)

- vercel.json의 rewrites 설정이 있는지 확인
- 모든 경로를 index.html로 리다이렉트 필요

## 📊 모니터링

Vercel Dashboard에서 확인 가능한 정보:

- **배포 상태**: 성공/실패
- **빌드 로그**: 상세 로그
- **Analytics**: 방문자 통계 (Pro 플랜)
- **성능 지표**: Core Web Vitals

## 🔄 업데이트 배포

코드 변경 후 배포:

```bash
# 변경사항 커밋
git add .
git commit -m "Update: 기능 추가"

# GitHub에 푸시 (자동 배포)
git push origin main

# 또는 Vercel CLI로 직접 배포
vercel --prod
```

## 💡 팁

1. **프리뷰 배포 활용**
   - 새 브랜치에서 작업 후 푸시하면 프리뷰 URL 생성
   - 프로덕션 배포 전 테스트 가능

2. **환경별 설정**
   - Development, Preview, Production 각각 다른 환경 변수 설정 가능

3. **커스텀 도메인**
   - Vercel Dashboard에서 커스텀 도메인 연결 가능
   - DNS 설정만 하면 자동으로 SSL 적용

## 📝 체크리스트

배포 전 확인사항:

- [ ] `npm run build:web` 로컬 빌드 성공
- [ ] `npm run preview` 미리보기 확인
- [ ] GitHub 리포지토리 생성 및 푸시
- [ ] Vercel 계정 생성 및 로그인
- [ ] vercel.json 파일 확인
- [ ] .gitignore에 dist/, .vercel/ 포함
- [ ] app.json에 웹 설정 포함

## 🎉 배포 완료!

배포가 완료되면 제공된 URL로 접속하여 앱을 확인할 수 있습니다!

```
🌐 https://nsw-pet-platform.vercel.app
```

## 📚 참고 자료

- [Vercel 공식 문서](https://vercel.com/docs)
- [Expo Web 가이드](https://docs.expo.dev/workflow/web/)
- [React Navigation Web](https://reactnavigation.org/docs/web-support/)

