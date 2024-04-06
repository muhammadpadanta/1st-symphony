import React from 'react';
import { AppProps } from 'next/app';
import "../styles/globals.css";
import { useState, useEffect } from 'react';
import Loading  from '@/components/loading';
import Head from 'next/head';
import 'tailwindcss/tailwind.css'


function MyApp({ Component, pageProps }: AppProps) {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1400); // 2000ms delay for loading

        return () => clearTimeout(timer); // Clean up on component unmount
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <>
            <Head>
                <title>1st Symphony</title>
            </Head>
       <body>
       <Component {...pageProps} />
       </body>

        </>


    );
}

export default MyApp;