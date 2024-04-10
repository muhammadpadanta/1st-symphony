import React from 'react';
import UpdateUser from "./editaccount";
import Layout from "@/components/layout";
import { useState, useEffect } from 'react';
import Loading  from '@/components/loading';


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
        <body className="svgwave">
        <Layout>
            <UpdateUser/>
        </Layout>
        </body>

    );
};

export default EditProfilePage;