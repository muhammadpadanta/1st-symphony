import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from "react";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head>

                </Head>
                <body className="bg-[#0a0a0a]">
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument