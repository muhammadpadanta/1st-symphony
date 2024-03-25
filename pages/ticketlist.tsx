import React from 'react';
import { NavbarMenu } from "@/components/navbar";
import Footer from "@/components/footer";
import { TicketList } from '@/components/ticketlist';
import {CardSliderAnimation} from "@/components/cards";
import {CardSliderAnimation2} from "@/components/cards";
import "../styles/globals.css";
import {ArtistList} from "@/components/artistlist";
const TicketListPage = () => {
  return (
    <>
      
        <NavbarMenu />
     
      <div className="mt-10 bg-[#0a0a0a]">

        <ArtistList />
        <CardSliderAnimation />
          <CardSliderAnimation2 />
          <Footer />
      </div>
    </>
  );
};

export default TicketListPage;