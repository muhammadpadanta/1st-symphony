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



const OrderListing = () => {
    const [userData, setUserData] = useState(null);
    const [visible, setVisible] = useState(false);
    const hideModal = () => {
        setVisible(false);
    };
    const [currentOrders, setCurrentOrders] = useState([]);
    useEffect(() => {
        const fetchUserData = async () => {
            const response = await fetch('http://localhost:8000/api/admin/users', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}` // Assuming the token is stored in local storage
                }
            });

            const data = await response.json();

            setUserData(data);
        };

        fetchUserData();
    }, []);



    return (
        <>
            <Toaster/>
            <Modal isOpen={visible} onRequestClose={hideModal}
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
                <div className={"h-[40vh] overflow-y-auto space-y-3 p-3 w-full"}>
                    {currentOrders.map((order, index) => (
                        <div key={index} className={"text-prime bg-gray-900 rounded-xl p-5 "}>
                            <div className={""}>
                                <p>Order ID: {order.order_id}</p>
                                <p>Order Date: {order.order_date}</p>
                                <p>Total Amount: Rp{order.total_amount}</p>
                                <p className={`${
                                    order.purchase_status === 'Success' ? 'text-green-500' : 'text-yellow-500'
                                }`}>Purchase Status: {order.purchase_status}</p>
                                {order.order_tickets.map((ticket, ticketIndex) => (
                                    <div key={ticketIndex}>
                                        <p>Quantity: {ticket.quantity} Ticket</p>
                                        <p>Ticket name: {ticket.concert_ticket.ticket_type.type_name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </Modal>


            <div className={"h-[80vh]  overflow-y-auto"}>
                <div
                    className=" p-6 h-[70vh] 2xl:h-[60vh]"
                    style={{filter: "drop-shadow(8px 8px 2px rgba(0, 0, 0, 1))"}}
                >
                    <div className=" gap-x-8 gap-y-8 lg:mx-0  grid grid-cols-3 gap-4">
                        {userData ? userData.map((user, userIndex) => (
                            <div key={userIndex} className=" bg-gray-800 hover:bg-gray-900 transition-all p-3 rounded-xl space-y-4">
                                <div>
                                    <p className="text-yellow-300">User ID: {user.user_id}</p>
                                    <p className="text-yellow-300">Name: {user.name}</p>
                                    <p className="text-second">Total Orders: {user.orders.length}</p>
                                    <button onClick={() => {
                                        setCurrentOrders(user.orders);
                                        setVisible(true);
                                    }} className={"bg-green-600 w-full text-white p-2 mt-2 rounded-xl transition-all hover:bg-green-700"}>View Orders
                                    </button>
                                </div>
                            </div>
                        )) : null}
                    </div>
                </div>
            </div>
        </>
    );
}

export default OrderListing;