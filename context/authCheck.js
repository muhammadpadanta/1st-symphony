// context/AuthCheckProvider.js
import { createContext, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

const AuthCheckContext = createContext();

export const AuthCheckProvider = ({ children }) => {
    const router = useRouter();

    const checkUserAndRedirect = () => {
        const token = localStorage.getItem('token');
        if (!token) {
            // If there's no token, redirect the user back to the previous page
            router.back();
        }
    };

    // Call the function once when the component is mounted
    useEffect(checkUserAndRedirect, []);

    return (
        <AuthCheckContext.Provider value={checkUserAndRedirect}>
            {children}
        </AuthCheckContext.Provider>
    );
};

export const useAuthCheck = () => useContext(AuthCheckContext);