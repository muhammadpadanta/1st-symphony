import {ticketDetails} from "@/constants";
import {CalendarDaysIcon} from "@heroicons/react/20/solid";
import React from "react";
import '../../styles/twclass.css'

export default function TicketArtist() {
    return (
        <div className="svgwave2 ticketArtistScreen">
            <p className=" font-semibold 2xl:text-8xl xl:text-6xl flex justify-center items-center bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent ">
                Get your Ticket Now!
            </p>
            <div className="ticketArtistMainContainer ">
                <div className="ticketArtistCardContainer "
                     style={{filter: "drop-shadow(2px 2px 5px rgba(180, 180, 180, 0.7))"}}
                >
                    <p style={{filter: "drop-shadow(8px 8px 2px rgba(0, 0, 0, 0.6))"}}
                       className="ticketArtistTitle ">Available
                        Tickets</p>
                    <p style={{filter: "drop-shadow(8px 8px 2px rgba(0, 0, 0, 1))"}}
                       className="ticketArtistSubtitle">(Artist:
                        Tulus)</p>
                    <div className="ticketArtistContentContainer" style={{maxHeight: '30rem'}}>
                        <div className="ticketArtistTextContainer">

                            <div className="ticketArtistDetailsContainer">

                                <dl className="space-y-8 text-base leading-7 text-gray-600 lg:max-w-none gap-4">
                                    {ticketDetails.map((ticketDetails) => (
                                        <div key={ticketDetails.name} className="ticketArtistDetailsItem">
                                            <dt className="inline ">
                                                <div className="ticketArtistDetailsTitle">
                                                    <div className="flex items-center">
                                                        <CalendarDaysIcon className="ticketArtistDetailsIcon"/>
                                                        <span className="w-[1rem] text-center flex">
                                                    {ticketDetails.name}
                                                </span>
                                                    </div>
                                                    <div>
                                                        <div className="ticketArtistDetailsText">
                                                            <div className="text-red-400">
                                                                {ticketDetails.icon1}
                                                            </div>
                                                            {ticketDetails.location}
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center space-x-10 ">
                                                        <div className="ticketArtistDetailsText">
                                                            <div className="text-red-400">
                                                                {ticketDetails.icon2}
                                                            </div>
                                                            {ticketDetails.date}
                                                        </div>
                                                        <div className="ticketArtistDetailsText">
                                                            <div className="text-red-400">
                                                                {ticketDetails.icon3}
                                                            </div>
                                                            {ticketDetails.price}
                                                        </div>
                                                        <div
                                                            className="flex items-center space-x-10 hover:scale-105 hover:opacity-80 hover:rounded-sm hover:text-white transition-all cursor-pointer">
                                                            <button className="ticketArtistDetailsButton">Get Ticket
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </dt>
                                            {' '}
                                            <dd className="block text-white"></dd>
                                            <hr className="w-full border-t border-red-400 "/>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}
