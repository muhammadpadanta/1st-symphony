import React from 'react';
import EmailVerificationSent from "./notverified";
import { useState, useEffect } from 'react';
import Loading  from '@/components/loading';
const NotVerifiedPage = () => {

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
        <EmailVerificationSent/>
    );
};

export default NotVerifiedPage;