import "../../../../styles/globals.css";
import React, {useEffect, useState} from 'react';
import Modal from "react-modal";
import {toast, Toaster} from "react-hot-toast";
import ReactLoading from "react-loading";

export default function TicketTypeList() {
    const [ticketTypes, setTicketTypes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleDelete = async (ticketTypeId) => {
        const token = localStorage.getItem('token');

        if (token) {
            const confirmation = window.confirm("Are you sure you want to delete this ticket type?");

            if (confirmation) {
                const response = await fetch(`http://localhost:8000/api/admin/ticket_types/${ticketTypeId}`, {
                    method: 'DELETE',
                    headers: {
                        "Accept": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });

                const responseData = await response.json();

                if (response.ok) {
                    toast.success(responseData.message);
                    setTicketTypes(ticketTypes.filter(ticketType => ticketType.ticket_type_id !== ticketTypeId));
                } else {
                    toast.error(responseData.message);
                }
            }
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            fetch("http://localhost:8000/api/admin/ticket_types", {
                headers: {
                    "Accept": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
                .then(response => response.json())
                .then(data => {
                    setTicketTypes(data);
                })
                .catch(error => console.error(error));
        }
    }, []);

    return (
        <>
            <Toaster/>
            <div
                className="new-rocker-regular grid grid-cols-1 md:grid-cols-3 gap-5 p-6 w-[80vw] xl:max-h-[600px] 2xl:max-h-[750px] overflow-auto">
                {ticketTypes.map(ticketType => (
                    <div key={ticketType.ticket_type_id} className="bg-gray-800 rounded-xl flex items-center p-4 ">
                        <div className="" style={{filter: "drop-shadow(2px 2px 2px rgba(0, 0, 0, 1))"}}>
                            <h2 className="text-gray-100 font-semibold leading-7 text-3xl mb-3 p-3 ">
                                {ticketType.type_name}
                            </h2>

                            <div className={"text-second text-xl mb-3 p-3"}>
                                <p className={"text-yellow-400"}>Ticket Type id: {ticketType.ticket_type_id}</p>
                                <p>Concert id: {ticketType.concert_id}</p>
                                <p>Price: {ticketType.price}</p>
                            </div>

                            <div className="space-x-3 text-white p-3 w-full">
                                <button
                                    onClick={() => handleDelete(ticketType.ticket_type_id)}
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