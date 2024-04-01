"use client";
import { NavbarMenu } from "@/components/navbar";
import {HeroHome} from "@/components/herohome";
import { HomeParallaxEffect } from "@/components/homeparallax";
import Footer from '../components/footer';
import {FaqMenu} from "@/components/faq";
import '../../styles/globals.css';
import React, { useState, useEffect } from 'react';
import Loading  from '@/components/loading';



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

    <main className="bg-[#0a0a0a]">
      <NavbarMenu />
      <HeroHome />
      <HomeParallaxEffect/>
      <FaqMenu />
      <Footer />

    </main>
  );
}
