import React from 'react';
import { NavbarMenu } from "@/components/navbar";
import Footer from "@/components/footer";
import Inventory from "@/components/inventory";

import { useState, useEffect } from 'react';
import Loading  from '@/components/loading';
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
        <main className="bg-[#0a0a0a]">

            <NavbarMenu/>

            <Inventory/>

            <Footer/>


        </main>
    );
};

export default InventoryPage;