import React from 'react';
import Inventory from "./inventory";
import Layout from "@/components/layout";
import { useState, useEffect } from 'react';
import Loading  from '@/components/loading';
import { AuthCheckProvider } from '../../context/authCheck';

const InventoryPage = () => {

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
        <Layout >
            <AuthCheckProvider>
            <Inventory/>
            </AuthCheckProvider>
        </Layout>
    );
};

export default InventoryPage;