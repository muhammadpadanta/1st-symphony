
import React from 'react';
import ArtistTicket from "./artistticket";
import Layout from "@/components/layout";
import { useState, useEffect } from 'react';
import Loading  from '@/components/loading';



const ArtistTicketPage = () => {

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

    <Layout>
        <ArtistTicket />
    </Layout>



  );
};

export default ArtistTicketPage;