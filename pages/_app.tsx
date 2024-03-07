import React from 'react';
import { AppProps } from 'next/app';
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="app-background overflow-x-hidden">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;