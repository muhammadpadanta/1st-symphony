import React from 'react';
import { NavbarMenu } from "@/components/navbar";
import { TicketList } from '@/components/ticketlist';
import "../styles/globals.css";

const TicketListPage = () => {
  return (
    <>
      
        <NavbarMenu />
     
      <div className="mt-10"> {/* Adjust this value based on the height of your navbar */}
        <TicketList />
      </div>
    </>
  );
};

export default TicketListPage;