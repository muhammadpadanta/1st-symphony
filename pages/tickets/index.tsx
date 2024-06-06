
import React from 'react';
import Herotickets from "./herotickets";
import ActiveSlider from "./artistcardlist";
import Layout from "@/components/layout";
import { useState, useEffect } from 'react';
import Loading  from '@/components/loading';
import UpcomingSlider from "./upcomingslider";
import MostPopularSlider from "./mostpopularslider";
const TicketsPage = () => {

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
        <Herotickets />
        <ActiveSlider/>
        <UpcomingSlider/>
        <div className="mt-20">
            <MostPopularSlider/>
        </div>

    </Layout>



  );
};

export default TicketsPage;