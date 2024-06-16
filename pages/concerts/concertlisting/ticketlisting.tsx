import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
    CalendarDaysIcon,
    CurrencyDollarIcon,
    MapPinIcon,
} from "@heroicons/react/20/solid";
import Modal from 'react-modal';
import { toast, Toaster } from "react-hot-toast";
import ReactLoading from "react-loading";

const API_URL = 'http://localhost:8000/api/concerts';

const TicketListing = () => {
    const [concerts, setConcerts] = useState([]);
    const [selectedConcert, setSelectedConcert] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [quantity, setQuantity] = useState({});
    const [isLoading, setIsLoading] = useState({});

    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => setConcerts(data));
    }, []);

    const handleCheckTickets = (concert) => {
        setSelectedConcert(concert);
        setModalIsOpen(true);

    };

    const handleBuyTicket = async (concert_ticket_id, quantity) => {
        const token = localStorage.getItem('token');

        setIsLoading(prevLoading => ({...prevLoading, [concert_ticket_id]: true}));
        const formData = new FormData();


        formData.append('concert_ticket_id', concert_ticket_id.toString());
        formData.append('quantity', quantity.toString());

        try {
            const response = await fetch('http://localhost:8000/api/orders', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: formData
            });

            const data = await response.json();

            // Handle the response
            if (response.ok) {
                toast.success(data.message, {
                    style: {
                        border: '1px solid #31ff00',
                        padding: '16px',
                        background: '#333',
                        color: '#fff',
                    },
                    iconTheme: {
                        primary: '#31ff00',
                        secondary: '#FFFFFF',
                    },
                });
            } else {
                toast.error(data.message, {
                    style: {
                        border: '1px solid #f44336',
                        padding: '16px',
                        background: '#333',
                        color: '#fff',
                    },
                    iconTheme: {
                        primary: '#f44336',
                        secondary: '#FFFAEE',
                    },
                });
            }
        } finally {
            setIsLoading(prevLoading => ({...prevLoading, [concert_ticket_id]: false}));
        }
    };

    return (
        <>
            <Toaster/>
            <div className="min-h-screen text-white p-5 w-2/3 mx-auto">
                <h1 className="text-5xl text-[#FFC107] font-bold mb-5 text-center">Available Concerts</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                    {concerts.map((concert) => (
                        <div key={concert.concert_name}
                             className={"bg-gray-800 p-3 rounded-xl flex hover:bg-green-900 transition-all"}>
                            <div>
                                <h2 className="text-2xl font-semibold mb-2">{concert.concert_name}</h2>
                                <p className="text-lg font-medium mb-2 text-gray-400">{concert.venue}</p>
                                <div className="flex items-center mb-2">
                                    <p>{concert.description}</p>
                                </div>
                                <div className="flex items-center mb-2">
                                    <CalendarDaysIcon className="w-6 h-6 text-red-400 mr-2"/>
                                    <p>{concert.date}</p>
                                </div>
                                <button
                                    onClick={() => handleCheckTickets(concert)}
                                    className="bg-green-800 hover:bg-green-700 transition-all text-white font-bold py-2 px-4 rounded mt-auto w-full">
                                    Check Tickets
                                </button>
                            </div>
                            <div className=" border border-2 rounded-full w-24 h-24 overflow-hidden mx-auto">
                                <Image
                                    src={concert.concert_photo ? `http://localhost:8000/${concert.concert_photo}` : '/images/default.png'}
                                    alt={concert.concert_name}
                                    width={100}
                                    height={100}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
                       className={{
                           base: 'animate-modal',
                           afterOpen: 'animate-modal-after-open',
                           beforeClose: 'animate-modal-before-close'
                       }}
                       style={{
                           overlay: {
                               display: 'flex',
                               alignItems: 'center',
                               justifyContent: 'center',
                               zIndex: 1000,
                               backgroundColor: 'rgba(0, 0, 0, 0.5)',
                               backdropFilter: 'blur(3px)',
                           },
                           content: {
                               display: 'flex',
                               flexDirection: 'column',
                               alignItems: 'center',
                               justifyContent: 'center',
                               border: '1px solid #FFFFFF',
                               borderRadius: '10px',
                               width: '50%',
                               height: '50%',
                               top: '0',
                               left: '0',
                               right: '0',
                               bottom: '0',
                               margin: 'auto',
                               backgroundColor: '#0a0a0a',
                               padding: '20px',
                               color: 'white',
                           },
                       }}
                >
                    {selectedConcert && (
                        <div className={" h-full w-full "}>
                            <h1 className={"text-2xl text-yellow-400 text-center mb-5"}>AVAILABLE TICKETS</h1>
                            <div className={"space-y-2 xl:h-[30vh] 2xl:h=[60vh] overflow-y-auto"}>
                                {selectedConcert.ticket_types.map(ticketType => (
                                    ticketType.concert_tickets.map(concertTicket => (
                                        <div key={concertTicket.concert_ticket_id}
                                             className={"bg-gray-800 p-3 rounded-xl space-y-2"}>
                                            <p className={"text-yellow-300 p-3 bg-gray-900 rounded-xl"}>
                                                Ticket Type: {ticketType.type_name}
                                            </p>
                                            <div className={"p-3  "}>
                                                <p className={"text-second"}>Price: Rp{ticketType.price}</p>
                                                <p className={"text-second"}>Sold: {concertTicket.sold_tickets}</p>
                                                <p className={"text-second"}>STOCK: {concertTicket.total_stock}</p>
                                                <button className={"w-7 h-7 rounded-full bg-gray-600 "}
                                                        onClick={() => setQuantity(prevQuantity => ({
                                                            ...prevQuantity,
                                                            [concertTicket.concert_ticket_id]: (prevQuantity[concertTicket.concert_ticket_id] || 1) - 1
                                                        }))}
                                                        disabled={quantity[concertTicket.concert_ticket_id] === 1}>
                                                    -
                                                </button>
                                                <input type="number"
                                                       value={quantity[concertTicket.concert_ticket_id] || 1}
                                                       readOnly
                                                       className={"bg-transparent w-12 text-center"}/>
                                                <button className={"w-7 h-7 rounded-full bg-gray-600"}
                                                        onClick={() => setQuantity(prevQuantity => ({
                                                            ...prevQuantity,
                                                            [concertTicket.concert_ticket_id]: (prevQuantity[concertTicket.concert_ticket_id] || 1) + 1
                                                        }))}>
                                                    +
                                                </button>
                                            </div>
                                            <button
                                                onClick={() => handleBuyTicket(concertTicket.concert_ticket_id, parseInt(quantity[concertTicket.concert_ticket_id] || 1))}
                                                className={"p-2 rounded-xl bg-green-800 w-full mt-5 hover:opacity-80 transition-all"}>
                                                {isLoading[concertTicket.concert_ticket_id] ?
                                                    <ReactLoading type={"spin"} className="mx-auto" color={"#ffffff"}
                                                                  height={20}
                                                                  width={20}/> : 'Add to cart'}
                                            </button>
                                        </div>
                                    ))
                                ))}
                            </div>

                        </div>
                    )}
                </Modal>
            </div>
        </>

    );
};

export default TicketListing;