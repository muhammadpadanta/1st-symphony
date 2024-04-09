import React from 'react';
import TicketAlbums from "./ticketalbums";
import TicketArtist from "./ticketartist";
import { useState, useEffect } from 'react';
import Loading  from '@/components/loading';
import Layout from "@/components/layout";
import Middletext from "./middletext";

const TicketListPage = () => {

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
            <TicketAlbums/>

            <TicketArtist />
        </Layout>
    );
};

export default TicketListPage;