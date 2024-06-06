import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { toast, Toaster } from "react-hot-toast";

export default function Index() {
    const router = useRouter();
    const [token, setToken] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [message, setMessage] = useState('');
    const [passwordError, setPasswordError] = useState('');
    useEffect(() => {
        if (router.query.token) {
            setToken(router.query.token);
        }
    }, [router.query]);

    const resetPassword = async (e) => {
        e.preventDefault();

        if (password !== passwordConfirmation) {
            toast.error("Passwords do not match.");
            return; // Return from the function here
        } else {
            setPasswordError(''); // Clear the error message when passwords match
        }

        try {
            const response = await fetch('http://localhost:8000/api/password/reset', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token, email, password, password_confirmation: passwordConfirmation }),
            });

            const data = await response.json();

            if (!response.ok) {
                if (response.status === 422) {
                    toast.error(data.message);
                } else {
                    toast.error(data.message);
                }
            } else {
                toast.success(data.message);
            }
        } catch (error) {
            toast.error(data.message);
        }
    };

    return (
        <>
            <Toaster/>
            <div className="flex justify-center items-center min-h-screen bg-gray-900  text-white">
                <form onSubmit={resetPassword} className="bg-gray-800 p-10 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>
                    <input
                        type="hidden"
                        value={token}
                    />
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2 " htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="text-gray-200 w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="password">New Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your new password"
                            className="text-black w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2" htmlFor="passwordConfirmation">Confirm New
                            Password</label>
                        <input
                            type="password"
                            id="passwordConfirmation"
                            value={passwordConfirmation}
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                            placeholder="Confirm your new password"
                            className="text-black w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <button type="submit"
                            className="w-full p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500">Reset
                        Password
                    </button>
                    {passwordError && <p className="mt-2 text-red-500">{passwordError}</p>}
                    {message && <p className="mt-4 text-center text-green-500">{message}</p>}
                </form>
            </div>
        </>

    );
}