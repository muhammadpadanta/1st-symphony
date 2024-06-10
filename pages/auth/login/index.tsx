import React from 'react';
import Login from "./login";
import { useState, useEffect } from 'react';
import Loading  from '@/components/loading';

const LoginPage = () => {

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
        <Login/>
    );
};

export default LoginPage;