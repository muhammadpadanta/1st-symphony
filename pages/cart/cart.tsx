import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { toast, Toaster } from "react-hot-toast";
import Rodal from 'rodal';
import 'rodal/lib/rodal.css'; // Import Rodal styles

const ShoppingCart = () => {
    const [items, setItems] = useState(null);
    const [visible, setVisible] = useState(false);
    const [resultJson, setResultJson] = useState('');
    const [snapToken, setSnapToken] = useState('');
    const [paymentStatus, setPaymentStatus] = useState({});


    useEffect(() => {
        const token = localStorage.getItem('token'); // Retrieve token from localStorage

        fetch('http://localhost:8000/api/me', {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                setItems(data);
                // Extract the snap_token from the first order in the orders array
                if (data.orders && data.orders.length > 0) {
                    setSnapToken(data.orders[0].snap_token);
                }
            });
    }, []);

    const hideModal = () => {
        setVisible(false);
    };

    const handlePayClick = () => {
        setVisible(true); // New function to show the pay modal when the button is clicked
    };


    useEffect(() => {
        // Create a new script element
        const script = document.createElement('script');

        // Set the src attribute to the URL of the snap.js script
        script.src = 'https://app.sandbox.midtrans.com/snap/snap.js';

        // Set the data-client-key attribute to your ClientKey
        script.setAttribute('data-client-key', 'SB-Mid-client-LeAx25F5wlkzinnO');

        // Add the script element to the head of the document
        document.head.appendChild(script);

        // Remove the script element from the head of the document when the component unmounts
        return () => {
            document.head.removeChild(script);
        };
    }, []);

    useEffect(() => {
        // Check if the snap object is available
        if (window.snap) {
            // Get all the pay buttons
            const payButtons = document.querySelectorAll('[id^="pay-button-"]');
            payButtons.forEach(payButton => {
                // Add the onclick event handler to each pay button
                payButton.onclick = function() {
                    const orderId = this.getAttribute('data-order-id'); // Get the order_id from the button's data attribute
                    const snapToken = this.getAttribute('data-snap-token'); // Get the order_id from the button's data attribute
                    window.snap.pay(snapToken, {
                        onSuccess: function(result) {
                            console.log('Payment successful:', result); // Log the result of the payment
                            setResultJson(JSON.stringify(result, null, 2));



                            fetch('http://localhost:8000/api/order/success', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                                },
                                body: JSON.stringify({ order_id: orderId })
                            })
                                .then(response => {
                                    console.log('Response:', response); // Log the response
                                    return response.json();
                                })
                                .then(data => {
                                    console.log('Data:', data); // Log the data
                                    // Handle the response data
                                    window.location.href = `http://localhost:3000/cart`;
                                })
                                .catch(error => {
                                    console.log('Error:', error); // Log the error
                                    // Handle the error
                                });
                        },
                        onPending: function(result) {
                            setResultJson(JSON.stringify(result, null, 2));
                        },
                        onError: function(result) {
                            setResultJson(JSON.stringify(result, null, 2));
                        }
                    });
                };
            });
        }
    }, [snapToken]);


    return (
        <>
            <Toaster/>
            <div className="rounded-lg p-6 w-full text-white ">
                <div className="flex justify-center  space-x-5">
                    {/* Items Container */}
                    <div className="md:w-2/3 p-5 rounded-xl">
                        <h2 className="text-2xl font-bold mb-4 text-center border-b border-gray-200 p-2">Ticket Cart</h2>
                        <div className="overflow-y-auto 2xl:h-[60vh] h-[53vh]">
                            {items && items.orders.map(order => (
                                order.order_tickets && order.order_tickets.map(ticket => (
                                    <div key={ticket.order_ticket_id}
                                         className="flex justify-between items-center mb-4 p-4 border-b bg-gray-800 rounded-xl">
                                        <div>
                                            <h3 className={"text-xl"}>Item
                                                Name: {ticket.concert_ticket.ticket_type.type_name}</h3>
                                            <p className="text-gray-400">Order Date: {order.order_date}</p>
                                            <p className="text-gray-400">Total Amount: Rp{order.total_amount}</p>
                                            <p className={`${
                                                order.purchase_status === 'Success' ? 'text-green-500' : 'text-yellow-500'
                                            }`}>Purchase Status: {order.purchase_status}</p>
                                        </div>
                                        <button
                                            id={`pay-button-${order.order_id}`}
                                            data-order-id={order.order_id}
                                            data-snap-token={order.snap_token}
                                            data-payment-status={order.purchase_status}
                                            disabled={order.purchase_status === 'Success'}
                                            className={order.purchase_status === 'Success' ? "bg-gray-800 text-prime p-3 hover:opacity-80 rounded-xl w-1/3 transition-all" : "bg-green-800 text-prime p-3 hover:opacity-80 rounded-xl w-1/3 transition-all"}>
                                            {order.purchase_status === 'Success' ? 'SUCCESS' : 'PAY'}
                                        </button>
                                    </div>
                                ))
                            ))}
                        </div>
                    </div>

                    <Rodal customStyles={{background: "#1E3A45"}} visible={visible} onClose={hideModal}>

                        <div className={"space-y-5"}>
                            <p className={"text-2xl text-prime text-left"}>Proceed to checkout</p>
                            <hr className={"border-t-2 border-prime"}/>
                            <div className={""}>
                                <p className={"text-prime text-lg "}>Are you sure you want to proceed to checkout?</p>
                                <div className={"text-prime w-full space-x-3 flex justify-end absolute bottom-6 right-6"}>
                                    <button id  className={"p-2 bg-green-600 rounded-xl w-1/3 hover:opacity-70 transition-all"} >Yes
                                    </button>
                                    <button className={"p-2 bg-red-600 rounded-xl w-1/3 hover:opacity-70 transition-all"} onClick={hideModal}>No
                                    </button>
                                </div>
                            </div>

                        </div>


                    </Rodal>
                </div>
            </div>
        </>
    );
}
export default ShoppingCart;