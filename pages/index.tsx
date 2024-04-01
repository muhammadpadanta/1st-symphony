"use client";
import {HeroHome} from "./home/herohome";
import { HomeParallaxEffect } from "./home/homeparallax";
import {FaqMenu} from "./home/faq";
import '../styles/globals.css';
import React, { useState, useEffect } from 'react';
import Loading  from '@/components/loading';
import Layout from "@/components/layout";


export default function Home() {
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

      <HeroHome />
      <HomeParallaxEffect/>
      <FaqMenu />

    </Layout>
  );
}
