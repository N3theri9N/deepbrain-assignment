## 실행하기
- Client : ./client/ 경로에서 yarn dev
    - port : 3000
- Server : ./server/ 경로에서 yarn start 
    - port : 4000
    
실제 서비스할땐 next 일 경우는 next build 한 다음 next start 한다. 

## lib 구성
- Client
    - Bootstrap : css 프레임워크
    - react / react-dom / react-bootstrap : 뷰 라이브러리
    - next : node js 기반 프레임 워크
    - axios : 비동기 호출 라이브러리
- Server
    - cors : cors 화이트리스트 대응
    - express : node js 기반 프레임 워크
    - mongoose : mongoDB crud 지원 라이브러리
    - nodemon : node 기반 소스코드 자동갱신
    
## 서버에 들어간 내용
- 2018년도 예술의 전당 공연, 입장 수 ( 1173 rows ) 
- server/contents/csv/SeoulArtCenter2018.csv


---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

