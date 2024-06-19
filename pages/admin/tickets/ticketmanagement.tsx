import React, {useEffect, useState} from "react";
import Link from "next/link";
import Modal from "react-modal";
import "../../../styles/twclass.css"
import ReactLoading from 'react-loading';
import { toast, Toaster } from "react-hot-toast";


export default function TypeLists() {
    const [ticketModalIsOpen, setTicketModalIsOpen] = useState(false);
    const [concerts, setConcerts] = useState([]);
    const [ticketTypes, setTicketTypes] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [totalConcertTickets, setTotalConcertTickets] = useState(0);
    const [totalTicketTypes, setTotalTicketTypes] = useState(0);
    const [formData, setFormData] = useState({
        concert_id: '',
        type_name: '',
        price: '',
    });

    const [ticketFormData, setTicketFormData] = useState({
        ticket_type_id: '',
        total_stock: '',
        sold_tickets: '',
    });


    const handleTicketFormSubmit = async (event) => {
        event.preventDefault();

        setIsLoading(true); // Start loading

        const token = localStorage.getItem('token');

        if (token) {
            const data = new FormData();
            Object.keys(ticketFormData).forEach(key => {
                const value = key === 'ticket_type_id' ? parseInt(ticketFormData[key]) : ticketFormData[key];
                data.append(key, value);
            });


            const response = await fetch("http://localhost:8000/api/admin/concert_tickets", {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: data
            });

            const responseData = await response.json();

            if (response.ok) {
                toast.success(responseData.message);
                setConcerts([...concerts, responseData]);
                setTicketModalIsOpen(false);

                // Reset the form
                setTicketFormData({
                    ticket_type_id: '',
                    total_stock: '',
                    sold_tickets: '',
                });
            } else {
                toast.error(responseData.message);
            }

            setIsLoading(false); // End loading
        }
    };



    const handleTicketInputChange = (event) => {
        const { name, value } = event.target;

        setTicketFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        setIsLoading(true); // Start loading

        const token = localStorage.getItem('token');

        if (token) {
            const data = new FormData();
            Object.keys(formData).forEach(key => {
                // Parse concert_id to integer before appending
                const value = key === 'concert_id' ? parseInt(formData[key]) : formData[key];
                data.append(key, value);
            });

            console.log(formData);

            const response = await fetch("http://localhost:8000/api/admin/ticket_types", {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: data
            });

            const responseData = await response.json();

            if (response.ok) {
                toast.success(responseData.message);
                setConcerts([...concerts, responseData]);
                setModalIsOpen(false);

                // Reset the form
                setFormData({
                    concert_id: '',
                    type_name: '',
                    price: '',
                });

                // Reload the page
                location.reload();
            } else {
                toast.error(responseData.message);
            }

            setIsLoading(false); // End loading
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log(`name: ${name}, value: ${value}`); // Add this line

        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    useEffect(() => {
        const token = localStorage.getItem('token'); // Fetch the token from local storage

        if (token) {
            fetch("http://localhost:8000/api/admin/concerts", {
                headers: {
                    "Accept": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
                .then(response => response.json())
                .then(data => {
                    setConcerts(data);
                })
                .catch(error => console.error(error));
        }
    }, []);

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
            <Toaster
            />
            <div className=" w-2/3 text-white grid grid-cols-2 gap-4 p-10">

                    <div onClick={() => setTicketModalIsOpen(true)}
                         className="border-2 bg-gray-800 p-10 rounded-lg cursor-pointer hover:bg-green-800 hover:scale-105 transition-all">
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="text-4xl font-bold mb-5">Create New Concert Ticket</h1>
                            <a className="text-2xl text-second">To manage stock of Ticket Type</a>
                        </div>
                    </div>


                <div onClick={() => setModalIsOpen(true)}
                     className="border-2 bg-gray-800 p-10 rounded-lg cursor-pointer hover:bg-green-800 hover:scale-105 transition-all">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-4xl font-bold mb-5">Create New Ticket Type</h1>
                        <a className="text-2xl text-second">To manage ticket type in Concert</a>
                    </div>
                </div>

                <Link href="/admin/tickets/stock" legacyBehavior>
                    <div
                        className="border-2 bg-gray-800 p-10 rounded-lg cursor-pointer hover:bg-green-800 hover:scale-105 transition-all">
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="text-4xl font-bold mb-5">Manage Ticket Stock</h1>
                        </div>
                    </div>
                </Link>

                <Link href="/admin/tickets/type" legacyBehavior>
                    <div
                        className="border-2 bg-gray-800 p-10 rounded-lg cursor-pointer hover:bg-green-800 hover:scale-105 transition-all">
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="text-4xl font-bold mb-5">Manage Ticket Type</h1>
                        </div>
                    </div>
                </Link>

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
                       }}>
                    <h1 className={"text-prime text-center text-2xl text-yellow-300 "}>CREATE NEW TICKET TYPE</h1>
                    <form onSubmit={handleFormSubmit}
                          className="rounded overflow-y-auto h-[40vh] p-5 w-full text-prime">
                        <label className="block mb-2">
                            <span className="">Select Concert:</span>
                            <select name="concert_id" value={formData.concert_id} onChange={handleInputChange} required
                                    className="inputBox">
                                <option value="">- Select a Concert -</option>
                                {concerts.map(concert => (
                                    <option key={concert.concert_id} value={concert.concert_id}>
                                        {concert.concert_name}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <label className="block mb-2">
                            <span className="">Ticket Type name:</span>
                            <input type="text" name="type_name" value={formData.type_name}
                                   onChange={handleInputChange} required
                                   className="inputBox"/>
                        </label>

                        <label className="block mb-2">
                            <span className="">Price:</span>
                            <input type="text" name="price" value={formData.price} onChange={handleInputChange} required
                                   className="inputBox"/>
                        </label>
                        <button type="submit"
                                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                            {isLoading ?
                                <ReactLoading type={"spin"} className="mx-auto" color={"#ffffff"} height={20}
                                              width={20}/> : 'Submit'}
                        </button>
                    </form>
                </Modal>

                <Modal isOpen={ticketModalIsOpen} onRequestClose={() => setTicketModalIsOpen(false)}
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
                       }}>
                    <h1 className={"text-prime text-center text-2xl text-yellow-300 "}>CREATE CONCERT TICKET</h1>
                    <form onSubmit={handleTicketFormSubmit}
                          className="rounded overflow-y-auto h-[40vh] p-5 w-full text-prime">

                        <label className="block mb-2">
                            <span className="">Select Ticket Type:</span>
                            <select name="ticket_type_id" value={ticketFormData.ticket_type_id}
                                    onChange={handleTicketInputChange} required
                                    className="inputBox">
                                <option value="">- Select Ticket Type -</option>
                                {ticketTypes.map(ticketType => (
                                    <option key={ticketType.ticket_type_id} value={ticketType.ticket_type_id}>
                                        {ticketType.type_name}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <label className="block mb-2">
                            <span className="">Total stock:</span>
                            <input type="text" name="total_stock" value={ticketFormData.total_stock}
                                   onChange={handleTicketInputChange} required
                                   className="inputBox"/>
                        </label>
                        <label className="block mb-2">
                            <span className="">sold_tickets:</span>
                            <input type="text" name="sold_tickets" value={ticketFormData.sold_tickets} onChange={handleTicketInputChange} required
                                   className="inputBox"/>
                        </label>
                        <button type="submit"
                                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                            {isLoading ?
                                <ReactLoading type={"spin"} className="mx-auto" color={"#ffffff"} height={20}
                                              width={20}/> : 'Submit'}
                        </button>
                    </form>
                </Modal>

            </div>
        </>

    );
}