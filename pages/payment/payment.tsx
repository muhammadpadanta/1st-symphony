import React, { useState } from 'react';

function PaymentPage() {
    const [paymentMethods] = useState([
        { id: 1, name: 'BCA', accountNumber: '12345678' },
        { id: 2, name: 'BRI', accountNumber: '87654321' },
        { id: 3, name: 'Mandiri', accountNumber: '56781234' },
        { id: 4, name: 'BNI', accountNumber: '43218765' },
        { id: 5, name: 'CIMB Niaga', accountNumber: '87654321' }
    ]);

    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    const handlePaymentMethodClick = (method) => {
        setSelectedPaymentMethod(method);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-2xl font-semibold mb-4">Choose Payment Method</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {paymentMethods.map(method => (
                    <div
                        key={method.id}
                        className={`border p-4 cursor-pointer ${selectedPaymentMethod === method.name ? 'border-blue-500' : 'border-gray-200'}`}
                        onClick={() => handlePaymentMethodClick(method.name)}
                    >
                        <h2 className="text-lg font-semibold">{method.name}</h2>
                        <p>{method.accountNumber}</p>
                    </div>
                ))}
            </div>
            <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Upload Payment Proof</h2>
                <input
                    type="file"
                    onChange={handleFileChange}
                    accept="image/*"
                    className="mb-4"
                />
                {selectedFile && (
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Preview</h3>
                        <img src={URL.createObjectURL(selectedFile)} alt="Payment Proof" className="max-w-full h-auto mb-4" />
                    </div>
                )}
            </div>
        </div>
    );
}

export default PaymentPage;
