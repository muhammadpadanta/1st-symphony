import {
    HiOutlineClipboardCheck,
    HiOutlineTicket,
    HiOutlineClipboard,
    HiOutlineUsers,
  } from "react-icons/hi";

import Link from 'next/link';
  
  export default function Dashboard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-24 w-[60vw] h-screen 2xl:h-[70vh]">

            <Link href="#" className="bg-gray-800 rounded-xl flex items-center cursor-pointer hover:scale-105 transition-all">
                <div style={{filter: "drop-shadow(4px 4px 2px rgba(0, 0, 0, 1))"}}>
                    <div className="p-6 bg-transparent rounded-xl flex items-center cursor-pointer hover:scale-105 transition-all">
                        <HiOutlineUsers className="text-7xl text-white"/>
                        <div className="lg:pr-8 lg:pt-4 lg:max-w-lg new-rocker-regular ml-4">
                            <h2 className="text-red-400 font-semibold leading-7 text-3xl ">
                                30 Registered Users
                            </h2>
                            <p className="mt-6 text-xl font-bold tracking-tight text-white ">
                                Click to see more details...
                            </p>
                        </div>
                    </div>
                </div>
            </Link>

            <Link href="#" className="bg-gray-800 rounded-xl flex items-center cursor-pointer hover:scale-105 transition-all">
                <div style={{filter: "drop-shadow(4px 4px 2px rgba(0, 0, 0, 1))"}}>
                    <div className="p-6 bg-transparent rounded-xl flex items-center cursor-pointer hover:scale-105 transition-all">
                        <HiOutlineClipboard className="text-7xl text-white"/>
                        <div className="lg:pr-8 lg:pt-4 lg:max-w-lg new-rocker-regular ml-4">
                            <h2 className="text-red-400 font-semibold leading-7 text-3xl ">
                                15 Pendind Transactions
                            </h2>
                            <p className="mt-6 text-xl font-bold tracking-tight text-white ">
                                Click to see more details...
                            </p>
                        </div>
                    </div>
                </div>
            </Link>

            <Link href="#" className="bg-gray-800 rounded-xl flex items-center cursor-pointer hover:scale-105 transition-all">
                <div style={{filter: "drop-shadow(4px 4px 2px rgba(0, 0, 0, 1))"}}>
                    <div className="p-6 bg-transparent rounded-xl flex items-center cursor-pointer hover:scale-105 transition-all">
                        <HiOutlineTicket className="text-7xl text-white"/>
                        <div className="lg:pr-8 lg:pt-4 lg:max-w-lg new-rocker-regular ml-4">
                            <h2 className="text-red-400 font-semibold leading-7 text-3xl ">
                                25 Ticket Created
                            </h2>
                            <p className="mt-6 text-xl font-bold tracking-tight text-white ">
                                Click to see more details...
                            </p>
                        </div>
                    </div>
                </div>
            </Link>

            <Link href="#" className="bg-gray-800 rounded-xl flex items-center cursor-pointer hover:scale-105 transition-all">
                <div style={{filter: "drop-shadow(4px 4px 2px rgba(0, 0, 0, 1))"}}><div
                        className="p-6 bg-transparent rounded-xl flex items-center cursor-pointer hover:scale-105 transition-all">
                        <HiOutlineClipboardCheck className="text-7xl text-white"/>
                        <div className="lg:pr-8 lg:pt-4 lg:max-w-lg new-rocker-regular ml-4">
                            <h2 className="text-red-400 font-semibold leading-7 text-3xl ">
                                10 Completed Transactions
                            </h2>
                            <p className="mt-6 text-xl font-bold tracking-tight text-white ">
                                Click to see more details...
                            </p>
                        </div>
                    </div>
                </div>
            </Link>


        </div>
    );
  }
  