import React from 'react';
import Link from 'next/link';
function ShoppingCart({ items, onRemove, onQuantityChange }) {
    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
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
                                    <img src="/images/artistList1.webp" alt={item.name}
                                         className="w-full h-full object-cover rounded" />
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

                        <Link href="/payment" legacyBehavior>
                            <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700">
                                Proceed to Checkout
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;