import React from 'react';

const EmailVerificationSent = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="bg-gray-800 rounded-xl p-5 ">
                <h1 className="text-2xl font-bold mb-4 text-center">Email Verification Sent</h1>
                <p className="text-center">We have sent a verification link to your email address. Please check your
                    inbox and click the link to verify your account.</p>
            </div>

        </div>
    );
};

export default EmailVerificationSent;