import React from 'react';
import { NavbarMenu } from "@/components/navbar";
import Footer from "@/components/footer";
import "../styles/globals.css";
import Ticketing from "@/components/ticketing";
import TicketingList from "@/components/ticketinglist";
const Tickets = () => {
    return (
        <main className="bg-[#0a0a0a]">
<div className="py-10 ">
    <NavbarMenu/>
</div>


            <Ticketing/>
            <TicketingList />

            <Footer/>


        </main>
    );
};

export default Tickets;