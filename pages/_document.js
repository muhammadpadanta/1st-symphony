import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from "react";


export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
          <Head>
              <link
                  href="https://fonts.googleapis.com/css2?family=New+Rocker&family=Pacifico&family=Permanent+Marker&family=Honk&family=Merienda:wght@300..900&family=Dancing+Script:wght@400..700&display=swap"
                  rel="stylesheet"/>
          </Head>
          <body>
          <Main/>
          <NextScript/>

          </body>
      </Html>
    );
  }
}