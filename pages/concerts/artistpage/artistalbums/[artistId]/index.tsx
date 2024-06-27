
import React from 'react';
import Layout from "@/components/layout";
import { useState, useEffect } from 'react';
import Loading  from '@/components/loading';
import YouTubePlayer from "./artistalbums";
import ArtistBanner from "./artistbanner";

const ArtistPage = () => {

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
        <ArtistBanner/>
        <YouTubePlayer />
    </Layout>



  );
};

export default ArtistPage;