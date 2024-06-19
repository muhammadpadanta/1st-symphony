
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/ticket-list";
import {purchasedTickets} from "@/constants";
import '../../styles/twclass.css';
import {useEffect, useState} from "react";
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';


export default function Inventory() {
    const [userData, setUserData] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [ticketLink, setTicketLink] = useState(null);

    const showTicket = (order) => {
        setTicketLink(`http://localhost:8000/${order.user_ticket[0].ticket_link}`);
        setModalVisible(true);
    };

    const hideTicket = () => {
        setModalVisible(false);
        setTicketLink(null);
    };

    useEffect(() => {
        const fetchUserData = async () => {
            const response = await fetch('http://localhost:8000/api/me', {
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
            <div>
                <p className="inventoryContainer">Purchased Tickets</p>
            </div>
            <div className="w-2/3 mx-auto h-[70vh] overflow-y-auto">
                <div
                    className=""
                    style={{filter: "drop-shadow(8px 8px 2px rgba(0, 0, 0, 1))"}}
                >
                    <div className="grid grid-cols-3 gap-4">
                        {userData && userData.orders.filter(order => order.purchase_status === 'Success').map((order, index) => (
                            <div key={index} className="bg-gray-800 rounded-xl  p-3 ">
                                <div className="text-prime">
                                    <p className="">Order ID: {order.order_id}</p>
                                    <p className="">Order Date: {order.order_date}</p>
                                    <p className="">Total Amount: Rp{order.total_amount}</p>
                                    <p className={`${
                                        order.purchase_status === 'Success' ? 'text-green-500' : 'text-yellow-500'
                                    }`}>Purchase Status: {order.purchase_status}</p>
                                    {order.order_tickets.map((ticket, index) => (
                                        <div key={index}>
                                            <p className="">Quantity: {ticket.quantity} Ticket</p>
                                            <p className="">Ticket
                                                name: {ticket.concert_ticket.ticket_type.type_name}</p>
                                        </div>
                                    ))}
                                </div>
                                <button
                                    className="p-3 bg-green-600 rounded-xl hover:opacity-80 transition-all text-white mt-3"
                                    onClick={() => showTicket(order)}
                                >
                                    Check ticket
                                </button>

                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <Rodal customStyles={{ background: "#1E3A45" }} visible={modalVisible} onClose={hideTicket}>
                <div>
                    <h2 className="mx-auto text-prime">Ticket Information</h2>
                    <hr />

                    {ticketLink && (
                        <a href={ticketLink} target="_blank" rel="noopener noreferrer" className={"text-blue-400 hover:text-blue-600"}> Click here to view your Ticket Link
                        </a>
                    )}
                </div>
            </Rodal>
        </>
    )
}