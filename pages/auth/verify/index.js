import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Verify() {
    const router = useRouter(); // Call useRouter to get the router object

    useEffect(() => {
        const { token } = router.query;

        // Make an API request to verify the token
        fetch('http://localhost:8000/api/verify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(text => {
                try {
                    return JSON.parse(text);
                } catch (err) {
                    console.log('Error parsing JSON:', err);
                    throw new Error('Invalid JSON');
                }
            })
            .then(data => {
                // Handle the response...
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }, [router.query]);


    return (
        <div className="flex items-center justify-center h-screen bg-gray-900">
            <div className="p-10 rounded-lg shadow-lg bg-gray-800 text-center">
                <p className="text-white text-2xl font-semibold">Thank you, your email has been verified!</p>
            </div>
        </div>

    );
}