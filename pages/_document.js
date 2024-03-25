import Document, { Html, Head, Main, NextScript } from 'next/document';


export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
         
          <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Honk&family=Permanent+Marker&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Merienda:wght@300..900&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
          
        </body>
      </Html>
    );
  }
}