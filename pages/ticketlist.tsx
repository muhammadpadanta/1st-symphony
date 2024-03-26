import React from 'react';
import { NavbarMenu } from "@/components/navbar";
import Footer from "@/components/footer";
import { TicketList } from '@/components/ticketlist';
import {CardSliderAnimation} from "@/components/cards";
import "../styles/globals.css";
import {ArtistList} from "@/components/artistlist";
import HeroArtist from "@/components/heroartist";
const TicketListPage = () => {
  return (
      <main className="bg-[#0a0a0a]">

              <NavbarMenu/>

<HeroArtist/>
          <ArtistList/>
        <CardSliderAnimation/>

              <Footer/>


      </main>
);
};

export default TicketListPage;