import React from 'react';
import { AppProps } from 'next/app';
import "../styles/globals.css";
import { useState, useEffect } from 'react';
import Loading  from '@/components/loading';
import Head from 'next/head';


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
        <div className="flex flex-col min-h-screen">
            <Head>
                <title>1st Symphony</title>
            </Head>
            <Component {...pageProps} />

        </div>
    );
}

export default MyApp;