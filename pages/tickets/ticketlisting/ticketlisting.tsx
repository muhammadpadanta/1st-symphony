// src/components/TicketList.js
import React, { useState } from 'react';
import Image from 'next/image';
import {
    CalendarDaysIcon,
    CurrencyDollarIcon,
    MapPinIcon,
} from "@heroicons/react/20/solid";

const upcomingEvent = [
    {
        name: 'Concert 1',
        featuredArtist: 'Artist 1',
        location: 'Jakarta, Indonesia, BSD City',
        date: '15 FEB',
        price: 'Rp 200.000 - Rp 500.000',
        image: '/images/artistList1.webp',
        id: '1',
    },
    {
        name: 'Concert 2',
        featuredArtist: 'Artist 2',
        location: 'Bandung, Indonesia',
        date: '20 MAR',
        price: 'Rp 150.000 - Rp 400.000',
        image: '/images/artistList1.webp',
        id: '2',
    },
    {
        name: 'Concert 3',
        featuredArtist: 'Artist 3',
        location: 'Surabaya, Indonesia',
        date: '25 APR',
        price: 'Rp 100.000 - Rp 300.000',
        image: '/images/artistList1.webp',
        id: '3',
    },
];

const mostPopular = [
    {
        name: 'Concert 4',
        featuredArtist: 'Artist 1',
        location: 'Jakarta, Indonesia, BSD City',
        date: '15 FEB',
        price: 'Rp 200.000 - Rp 500.000',
        image: '/images/artistList1.webp',
        id: '4',
    },
    {
        name: 'Concert 5',
        featuredArtist: 'Artist 2',
        location: 'Bandung, Indonesia',
        date: '20 MAR',
        price: 'Rp 150.000 - Rp 400.000',
        image: '/images/artistList1.webp',
        id: '5',
    },
    {
        name: 'Concert 6',
        featuredArtist: 'Artist 3',
        location: 'Surabaya, Indonesia',
        date: '25 APR',
        price: 'Rp 100.000 - Rp 300.000',
        image: '/images/artistList1.webp',
        id: '6',
    },
    {
        name: 'Concert 7',
        featuredArtist: 'Artist 3',
        location: 'Surabaya, Indonesia',
        date: '25 APR',
        price: 'Rp 100.000 - Rp 300.000',
        image: '/images/artistList1.webp',
        id: '7',
    },
];

const allEvents = [...upcomingEvent, ...mostPopular];

interface Details {
    name: string;
    featuredArtist: string;
    location: string;
    date: string;
    price: string;
    image: string;
    id: string;
}

const TicketDetailsItem = ({ details }: { details: Details }) => {
    const { name, featuredArtist, location, date, price, image } = details;

    return (
        <div
            className="bg-gray-800 p-5 rounded-lg shadow-lg flex flex-row items-start mb-4 border border-2 border-gray-500 hover:bg-green-900 transition-all">
            <div className="flex-1 flex flex-col justify-between ">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">{name}</h2>
                    <p className="text-lg font-medium mb-2 text-gray-400">{featuredArtist}</p>
                    <div className="flex items-center mb-2">
                        <MapPinIcon className="w-6 h-6 text-red-400 mr-2"/>
                        <p>{location}</p>
                    </div>
                    <div className="flex items-center mb-2">
                        <CalendarDaysIcon className="w-6 h-6 text-red-400 mr-2"/>
                        <p>{date}</p>
                    </div>
                    <div className="flex items-center mb-4">
                        <CurrencyDollarIcon className="w-6 h-6 text-red-400 mr-2"/>
                        <p>{price}</p>
                    </div>
                </div>
                <button
                    className="bg-green-800 hover:bg-green-900 transition-all text-white font-bold py-2 px-4 rounded mt-auto">
                    Check Tickets
                </button>
            </div>
            <div className="relative w-32 h-32 ml-4">
                <Image
                    src={image}
                    alt={name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
            </div>
        </div>
    );
};

const TicketListing = () => {
    const [currentCategory, setCurrentCategory] = useState('upcomingEvent');
    const ticketDetails = currentCategory === 'upcomingEvent'
        ? upcomingEvent
        : currentCategory === 'mostPopular'
            ? mostPopular
            : allEvents;

    return (
        <div className="min-h-screen text-white p-5 w-2/3 mx-auto">
            <h1 className="text-5xl text-[#FFC107] font-bold mb-5 text-center">Available Tickets</h1>
            <div className="flex justify-center mb-5">
                <button
                    className={`mx-2 text-xl font-semibold ${currentCategory === 'allEvents' ? 'underline' : ''}`}
                    onClick={() => setCurrentCategory('allEvents')}
                >
                    All Events
                </button>
                <button
                    className={`mx-2 text-xl font-semibold ${currentCategory === 'upcomingEvent' ? 'underline' : ''}`}
                    onClick={() => setCurrentCategory('upcomingEvent')}
                >
                    Upcoming Event
                </button>
                <button
                    className={`mx-2 text-xl font-semibold ${currentCategory === 'mostPopular' ? 'underline' : ''}`}
                    onClick={() => setCurrentCategory('mostPopular')}
                >
                    Most Popular
                </button>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {ticketDetails.map((details) => (
                    <TicketDetailsItem key={details.id} details={details}/>
                ))}
            </div>
        </div>
    );
};

export default TicketListing;
