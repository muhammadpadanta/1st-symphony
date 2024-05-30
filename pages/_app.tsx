import React, { useState, useEffect } from 'react';
import { AppProps } from 'next/app';
import "../styles/globals.css";
import Loading  from '@/components/loading';
import Head from 'next/head';
import 'tailwindcss/tailwind.css'
import Modal from 'react-modal';
import UserContext from './UserContext'; // Import UserContext

function MyApp({ Component, pageProps }: AppProps) {
    Modal.setAppElement('#__next')
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Add this line

    const checkUserLoggedIn = () => {
        const userInfo = localStorage.getItem('user-info');
        return userInfo !== null;
    };

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
            <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn, checkUserLoggedIn }}> {/* Wrap your application with UserContext.Provider */}
                <div>
                    <Component {...pageProps} />
                </div>
            </UserContext.Provider>
        </>
    );
}

export default MyApp;