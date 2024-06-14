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
                    <script src="https://app.sandbox.midtrans.com/snap/snap.js"
                            data-client-key="SB-Mid-client-LeAx25F5wlkzinnO"></script>

                </Head>

                <Main/>
                <NextScript/>

            </Html>
        )
    }
}

export default MyDocument