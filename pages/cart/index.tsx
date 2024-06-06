import React from 'react';
import Cart from "./cart";
import { useState, useEffect } from 'react';
import Loading  from '@/components/loading';
import Layout from "@/components/layout";
import ShoppingCart from './cart';

const CartPage = () => {
    const [items, setItems] = useState([
        {id: "1", name: 'Item 1', price: 10, quantity: 1},
        { id: "2", name: 'Item 2', price: 20, quantity: 2 },
        { id: "3", name: 'Item 3', price: 30, quantity: 1 },
        { id: "4", name: 'Item 3', price: 30, quantity: 1 },
        { id: "5", name: 'Item 3', price: 30, quantity: 1 },
        { id: "6", name: 'Item 3', price: 30, quantity: 1 },
        { id: "7", name: 'Item 3', price: 30, quantity: 1 },
        { id: "8", name: 'Item 3', price: 30, quantity: 1 },
    ]);

    const handleRemove = (id: string) => {
        setItems(items.filter(item => item.id !== id));
    };

    const handleQuantityChange = (id: string, quantity: number) => {
        setItems(items.map(item => item.id === id ? { ...item, quantity } : item));
    };

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1400); // 2000ms delay for loading

        return () => clearTimeout(timer); // Clean up on component unmount
    }, []);

    if (isLoading) {
        return <Loading />;
    }



    return (

        <>
            <Layout>
                <div className="min-h-screen bg-[0a0a0a] flex items-center justify-center">
                    <ShoppingCart
                        items={items}
                        onRemove={handleRemove}
                        onQuantityChange={handleQuantityChange}
                    />
                </div>
            </Layout>
        </>


    );
};

export default CartPage;
