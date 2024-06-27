"use client"
import SongList from "./songmanagement";
import Sidebar from "../../admin/dashboard/sidebar";
import "../../../styles/globals.css";
import ProtectedRoute from '@/components/ProtectedRoute';
import { AuthProvider } from '../../../context/authContext';

export default function Home() {
    return (

        <AuthProvider>
            <ProtectedRoute>
                <div className="flex h-screen">
                    <Sidebar/>
                    <div className="flex-grow justify-center items-center flex">
                        <SongList/>
                    </div>
                </div>
            </ProtectedRoute>
        </AuthProvider>

    );
}
