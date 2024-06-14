"use client"

import Sidebar from "../../admin/dashboard/sidebar";
import "../../../styles/globals.css";
import ConcertManagement from "./concertmanagement";
import ProtectedRoute from '@/components/ProtectedRoute';
import { AuthProvider } from '../../../context/authContext';

export default function Home() {
    return (

        <AuthProvider>
            <ProtectedRoute>
        <div className="flex h-screen">
            <Sidebar/>
            <div className="flex-grow justify-center items-center flex">
                <ConcertManagement/>
            </div>
        </div>
            </ProtectedRoute>
        </AuthProvider>
    );
}
