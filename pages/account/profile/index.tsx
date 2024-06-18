import React from 'react';
import Layout from "@/components/layout";
import { useState, useEffect } from 'react';
import Loading  from '@/components/loading';
import Profile from "./accountinfo";
import { AuthCheckProvider } from '../../../context/authCheck';

const ProfilePage = () => {

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
        <div className="svgwave">
            <Layout>
                <AuthCheckProvider>
                <Profile/>
                </AuthCheckProvider>
            </Layout>
        </div>

    );
};

export default ProfilePage;