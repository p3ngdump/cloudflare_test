# 테토/에겐 연애 성향 테스트 (Vite + React + Tailwind)

## 개발 서버
```bash
npm i
npm run dev
```

## 빌드
```bash
npm run build
```

## Cloudflare Pages 배포(깃 연동)
- Build command: `npm run build`
- Build output directory: `dist`

## 수동 배포(옵션)
```bash
npm run build
npx wrangler pages deploy dist --project-name=teto-egen-test
```
