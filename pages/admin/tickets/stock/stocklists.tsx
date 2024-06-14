import "../../../../styles/globals.css";
import React, {useEffect, useState} from 'react';
import Modal from "react-modal";
import {toast, Toaster} from "react-hot-toast";
import ReactLoading from "react-loading";

export default function StockList() {
    const [concertTickets, setConcertTickets] = useState([]);

    const handleDelete = async (concertTicketId) => {
        const token = localStorage.getItem('token');

        if (token) {
            const confirmation = window.confirm("Are you sure you want to delete this concert ticket?");

            if (confirmation) {
                const response = await fetch(`http://localhost:8000/api/admin/concert_tickets/${concertTicketId}`, {
                    method: 'DELETE',
                    headers: {
                        "Accept": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });

                const responseData = await response.json();

                if (response.ok) {
                    toast.success(responseData.message);
                    setConcertTickets(concertTickets.filter(ticket => ticket.concert_ticket_id !== concertTicketId));
                } else {
                    toast.error(responseData.message);
                }
            }
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            fetch("http://localhost:8000/api/admin/concert_tickets", {
                headers: {
                    "Accept": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
                .then(response => response.json())
                .then(data => {
                    setConcertTickets(data);
                })
                .catch(error => console.error(error));
        }
    }, []);

    return (
        <>
            <Toaster/>
            <div
                className="new-rocker-regular grid grid-cols-1 md:grid-cols-3 gap-5 p-6 w-[80vw] xl:max-h-[600px] 2xl:max-h-[750px] overflow-auto">
                {concertTickets.map(ticket => (
                    <div key={ticket.concert_ticket_id} className="bg-gray-800 rounded-xl flex items-center p-4 ">
                        <div className="" style={{filter: "drop-shadow(2px 2px 2px rgba(0, 0, 0, 1))"}}>
                            <h2 className="text-gray-100 font-semibold leading-7 text-3xl mb-3 p-3 ">
                              ID: {ticket.concert_ticket_id}
                            </h2>

                            <div className={"text-second text-xl mb-3 p-3"}>
                                <p className={"text-yellow-400"}>Ticket Type ID: {ticket.ticket_type_id}</p>
                                <p>Total Stock: {ticket.total_stock}</p>
                                <p>Sold Tickets: {ticket.sold_tickets}</p>
                            </div>

                            <div className="space-x-3 text-white p-3 w-full">
                                <button
                                    onClick={() => handleDelete(ticket.concert_ticket_id)}
                                    className="p-2 bg-red-400 rounded hover:bg-green-800 transition-all w-1/2"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}