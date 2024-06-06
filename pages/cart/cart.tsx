import React, {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { toast, Toaster } from "react-hot-toast";
import Rodal from 'rodal';
import 'rodal/lib/rodal.css'; // Import Rodal styles
interface Item {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

interface ShoppingCartProps {
    items: Item[];
    onRemove: (id: string) => void;
    onQuantityChange: (id: string, quantity: number) => void;
}

function ShoppingCart({ items, onRemove, onQuantityChange }: ShoppingCartProps) {
    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    // State variable for controlling the visibility of the Rodal modal
    const [visible, setVisible] = useState(false);

    // Function to show the modal
    const showModal = () => {
        setVisible(true);
    };

    // Function to hide the modal
    const hideModal = () => {
        setVisible(false);
    };


    return (

        <>
        <Toaster/>
        <div className="rounded-lg p-6 w-3/4 w-full text-white ">
            <div className="flex flex-col md:flex-row justify-between space-x-5">
                {/* Items Container */}
                <div className="md:w-2/3 p-5 rounded-xl">
                    <h2 className="text-2xl font-bold mb-4 text-center border-b border-gray-200 p-2">Ticket Cart</h2>
                    <div className="overflow-y-auto 2xl:h-[60vh] h-[53vh]">
                        {items.map(item => (
                            <div key={item.id} className="flex justify-between items-center mb-4 p-4 border-b bg-gray-800 rounded-xl">
                                {/* Image Container */}
                                <div className="w-16 h-16 bg-gray-200 mr-4 flex-shrink-0 rounded-xl bg-white">
                                    <Image
                                        src="/images/artistList1.webp"
                                        alt={item.name}
                                        width={64} // specify the width
                                        height={64} // specify the height
                                        className="object-cover rounded"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-xl">{item.name}</h3>
                                    <p className="text-gray-400">${item.price.toFixed(2)}</p>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        type="number"
                                        className="border w-16 text-center mr-4 text-black"
                                        value={item.quantity}
                                        onChange={(e) => onQuantityChange(item.id, parseInt(e.target.value))}
                                        min="1"
                                    />
                                    <button
                                        onClick={() => onRemove(item.id)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Order Summary */}
                <div className="md:w-1/3 md:pl-8 bg-gray-800 p-5 rounded-xl my-auto" style={{filter: "drop-shadow(4px 4px 2px rgba(199, 199, 199, 0.5))"}}>
                    <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
                    <div className="border-t pt-4">
                        <div className="flex justify-between mb-2">
                            <span className="text-gray-600">Subtotal</span>
                            <span className="font-bold">${subtotal.toFixed(2)}</span>
                        </div>

                        <button onClick={showModal}
                                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700">
                            Proceed to Checkout
                        </button>




                    </div>
                </div>
            </div>

        </div>
            <Rodal visible={visible} onClose={hideModal}>
                <div>
                    {/* Content of the modal goes here */}
                    <h2>Checkout</h2>
                    <p>Proceed to checkout?</p>
                    <button onClick={hideModal}>Yes</button>
                    <button onClick={hideModal}>No</button>
                </div>
            </Rodal>
        </>
    );
}

export default ShoppingCart;