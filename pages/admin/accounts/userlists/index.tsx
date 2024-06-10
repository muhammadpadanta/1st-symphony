"use client"

import Sidebar from "../../../admin/dashboard/sidebar";
import "../../../../styles/globals.css";
import UserList from "./userlists";

export default function Home() {
    return (

        <div className="flex h-screen">
            <Sidebar/>
            <div className="flex-grow justify-center items-center flex">
                <UserList/>
            </div>
        </div>


    );
}
