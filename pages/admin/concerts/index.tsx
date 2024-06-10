"use client"

import Sidebar from "../../admin/dashboard/sidebar";
import "../../../styles/globals.css";
import ConcertManagement from "./concertmanagement";

export default function Home() {
    return (

        <div className="flex h-screen">
            <Sidebar/>
            <div className="flex-grow justify-center items-center flex">
                <ConcertManagement/>
            </div>
        </div>


    );
}
