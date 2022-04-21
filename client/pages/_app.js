import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import HeaderComponent from "./common/nav";
// 공통컨텐츠는 여기에 생성 /헤더, 푸터 등등


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My Next App</title>
      </Head>
       <HeaderComponent />
      <div className="container-fluid">
          <Component {...pageProps} />
      </div>
      <footer>

      </footer>
    </>
  )
}

export default MyApp
