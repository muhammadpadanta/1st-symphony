"use client";
import React, { useState, useEffect } from 'react';
import Loading  from '@/components/loading';
import Layout from "@/components/layout";
import TeamPbl from '../../about/ourteam/teampbl';
import '../../../styles/globals.css';

export default function OurTeam() {
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
             <TeamPbl/>
          </Layout>
  );
}
