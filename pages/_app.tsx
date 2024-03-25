import React from 'react';
import { AppProps } from 'next/app';
import "../styles/globals.css";
import 'tailwindcss/tailwind.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
<Head>
        <link rel="stylesheet" href="/tailwind.css" />
      </Head>
   
      <Component {...pageProps} />
      </>
  );
}

export default MyApp;