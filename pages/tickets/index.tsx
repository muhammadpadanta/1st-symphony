
import React from 'react';
import { NavbarMenu } from "@/components/navbar";
import Footer from "@/components/footer";
import {TicketCards} from "@/components/ticketcards";
import {ArtistList} from "@/components/artistlist";
import HeroArtist from "@/components/heroartist";

import { useState, useEffect } from 'react';
import Loading  from '@/components/loading';
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
      <main className="bg-[#0a0a0a]">

              <NavbarMenu/>

<HeroArtist/>
          <ArtistList/>
        <TicketCards/>

              <Footer/>


      </main>
);
};

export default TicketsPage;