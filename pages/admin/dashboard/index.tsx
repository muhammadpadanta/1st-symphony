"use client"


import Sidebar from "./sidebar";
import "../../../styles/globals.css";
import Dashboard from "./dashboard";
import ProtectedRoute from '@/components/ProtectedRoute';
import { AuthProvider } from '../../../context/authContext';
import React, {useEffect, useState} from "react";
import Loading from "@/components/loading";

export default function Admin() {

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
        <AuthProvider>
        <ProtectedRoute>
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-grow justify-center items-center flex">
                <Dashboard/>
            </div>
        </div>

            </ProtectedRoute>
            </AuthProvider>

    );
}
