// context/AuthContext.js
import { createContext, useContext, useEffect, useState } from 'react';
import api from '../lib/api';
import { useRouter } from 'next/router';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const router = useRouter();

    const [loading, setLoading] = useState(true);
// context/AuthContext.js
    const loadUserFromLocalStorage = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const { data } = await api.get('/'); // Adjusted the endpoint to '/'
                console.log('User data:', data);
                setUser(data);

                // Redirect user based on role
                if (data.role === 'admin') {
                    router.push('/admin/dashboard');
                } else if (data.role === 'user') {
                    router.push('/');
                }

                setLoading(false);
                console.log('Loading state:', loading);

            } catch (error) {
                console.error('Failed to fetch user', error);
                setLoading(false);
            }
        } else {
            setLoading(false);
        }
    };;

    // Add this useEffect hook
    useEffect(() => {
        loadUserFromLocalStorage();
    }, []);

    const login = async (email, password) => {
        try {
            const { data } = await api.post('/login', { email, password });
            localStorage.setItem('token', data.token);
            setUser(data.user);
            router.push(data.user.role === 'admin' ? '/admin/dashboard' : '/');
        } catch (error) {
            console.error('Login failed', error);
            throw error;
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        router.push('/');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loadUserFromLocalStorage, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);