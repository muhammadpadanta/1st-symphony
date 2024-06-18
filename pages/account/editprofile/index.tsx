import React from 'react';
import UpdateUser from "./editaccount";
import Layout from "@/components/layout";
import { useState, useEffect } from 'react';
import Loading  from '@/components/loading';
import { AuthCheckProvider } from '../../../context/authCheck';

const EditProfilePage = () => {

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
            <UpdateUser/>
            </AuthCheckProvider>
        </Layout>
        </div>

    );
};

export default EditProfilePage;