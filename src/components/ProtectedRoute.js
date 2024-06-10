// components/ProtectedRoute.js
import { useEffect } from 'react';
import { useAuth } from '../../context/authContext';
import { useRouter } from 'next/router';


const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth(); // Add loading here
    const router = useRouter();

    useEffect(() => {
        if (!loading) { // Add this line
            if (!user) {
                router.push('/');
            } else if (user.role !== 'admin') {
                router.push('/');
            }
        }
    }, [user, router, loading]); // Add loading here

    if (loading || !user || user.role !== 'admin') { // Add loading here
        return null; // or a loading spinner
    }

    return children;
};

export default ProtectedRoute;
