
import "../../../styles/globals.css";
import Image from "next/image";
import { HiMapPin, HiMiniCalendarDays, HiClock } from "react-icons/hi2";
import React, { useState } from 'react';
import Modal from "react-modal";

export default function TicketList() {
    const users = [
        { id: 1, name: 'User 1', email: 'user1@example.com' },
        { id: 2, name: 'User 2', email: 'user2@example.com' },
        { id: 3, name: 'User 3', email: 'user3@example.com' },
        { id: 4, name: 'User 4', email: 'user1@example.com' },
        { id: 5, name: 'User 5', email: 'user2@example.com' },
        { id: 6, name: 'User 6', email: 'user3@example.com' },
        { id: 7, name: 'User 7', email: 'user1@example.com' },
        { id: 8, name: 'User 8', email: 'user2@example.com' },
        { id: 9, name: 'User 9', email: 'user3@example.com' },

        { id: 10, name: 'User 10', email: 'user1@example.com' },
        { id: 11, name: 'User 11', email: 'user2@example.com' },
        { id: 12, name: 'User 12', email: 'user3@example.com' },

        // ...more users
    ];

    const [selectedValue, setSelectedValue] = useState('');

    const items = [
        { cat: 'Regular', stock: 10, price: 'Rp200.000' },
        { cat: 'VIP I', stock: 20, price: 'Rp400.000' },
        { cat: 'VIP II', stock: 30, price: 'Rp600.000' },
        // ...more items
    ];

    const [showModal, setShowModal] = useState(false);
    const handleButtonClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const [userData, setUserData] = useState({
        username: "",
        datetime: "",
        price: "",
        stock: "",
        phone: "",
        type: "",
        address: "",
        email: "",
        password: "",
        file_path: "",
    });

    const [image, setImage] = useState(null); // To store the selected image
    const [imagePreview, setImagePreview] = useState(""); // To display the preview of the selected image
    const [formData, setFormData] = useState(new FormData()); // To handle form data

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setUserData((prevUserData) => ({
            ...prevUserData,
            [name]: value,
        }));

        // Update FormData with the new value

    };

    const handleFileChange = (e: any) => {
        const file = e.target.files[0];

        if (file) {
            // Set the selected image and preview
            setImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                if (typeof reader.result === 'string') {
                    setImagePreview(reader.result);
                }
            };
            reader.readAsDataURL(file);

            // Update FormData with the new file
            formData.set("file", file);
        }
    };


    return (
        <div className="new-rocker-regular">

            <div
                className=" grid grid-cols-1 md:grid-cols-3 gap-5 p-6 w-[80vw] xl:max-h-[500px] 2xl:max-h-[750px] overflow-auto">

                {users.map(user => (
                    <div key={user.id} className="bg-gray-800 rounded-xl flex items-center p-4">
                        <div className="space-y-5 " style={{filter: "drop-shadow(2px 2px 2px rgba(0, 0, 0, 1))"}}>
                            <div className="flex justify-center items-center pt-10">
                                <div className="text-white ">

                                    <div className="flex flex-col justify-center items-center space-x-5 space-y-5">

                                        <div
                                            className="w-[300px] h-[260px] flex justify-center items-center object-cover">
                                            <Image
                                                priority={true}
                                                src="https://lastfm.freetls.fastly.net/i/u/770x0/60c1b7adbcee4324c389676fa5c59ac6.jpg#60c1b7adbcee4324c389676fa5c59ac6"
                                                alt="hero tickets image"
                                                className="object-contain text-white w-full h-full "
                                                width={1920}
                                                height={1080}
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                style={{
                                                    filter: "drop-shadow(12px 12px 4px rgba(0, 0, 0, 0.6))",
                                                }}
                                            />
                                        </div>

                                        <div>
                                            <div className="text-red-400">
                                                <div className="flex flex-row items-center">
                                                    <HiMapPin className="w-7 h-7"/>
                                                    <p className="py-1 2xl:text-2xl xl:text-xl text-left">
                                                        Jakarta, Indonesia, BSD City
                                                    </p>
                                                </div>

                                                <div className="flex flex-row items-center">
                                                    <HiMiniCalendarDays className="w-7 h-7"/>
                                                    <p className="py-1 2xl:text-2xl xl:text-xl text-left">
                                                        15 FEB
                                                    </p>
                                                </div>

                                                <div className="flex flex-row items-center">
                                                    <HiClock className="w-7 h-7"/>
                                                    <p className="py-1 2xl:text-2xl xl:text-xl text-left">
                                                        07:00 PM - 11:00 PM
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="space-y-5">

                                                <div className="space-x-5 ">
                                                    <select className="bg-gray-700 p-2 rounded"
                                                            value={selectedValue}
                                                            onChange={(e) => setSelectedValue(e.target.value)}>
                                                        {items.map((item, index) => (
                                                            <option key={index} value={item.cat}>
                                                                {`${item.cat}, Stock: ${item.stock}, Price: ${item.price}`}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="space-x-3 text-white">
                                                    <button
                                                        className="p-2 bg-gray-500 rounded hover:scale-105 transition-all transform"
                                                        onClick={handleButtonClick}>Edit
                                                    </button>
                                                    <button
                                                        className="p-2 bg-red-400 rounded hover:scale-110 transition-all transform">Delete
                                                    </button>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                ))}

                <Modal
                    ariaHideApp={false}
                    isOpen={showModal}
                    onRequestClose={handleCloseModal}
                    contentLabel="TicketModal"
                    className={{
                        base: 'animate-modal',
                        afterOpen: 'animate-modal-after-open',
                        beforeClose: 'animate-modal'
                    }}
                    style={{
                        overlay: {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 1000,
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            backdropFilter: 'blur(3px)',
                        },
                        content: {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid #FFFFFF',
                            borderRadius: '10px',
                            width: '80%',
                            height: '80%',
                            top: '0',
                            left: '0',
                            right: '0',
                            bottom: '0',
                            margin: 'auto',
                            backgroundColor: '#0a0a0a',
                            padding: '20px', // Add some padding to prevent the form from touching the edges of the modal
                        },
                    }}
                >
                    <div
                        className="flex justify-center items-center 2xl:h-screen w-full new-rocker-regular">
                        <form
                            className="rounded px-8 mb-4 w-full  text-white overflow-auto 2xl:h-[660px]  xl:h-[480px] ">

                            <div className="mb-6">

                                {imagePreview && (
                                    <Image
                                        width={500}
                                        height={500}
                                        src={imagePreview}
                                        alt="Preview"
                                        className="mt-4 rounded-lg shadow-md border-2 mx-auto border-white hover:scale-105 transition-all"
                                        style={{maxWidth: "100%", maxHeight: "200px"}}
                                    />
                                )}
                            </div>
                            <label className="block  mb-2 text-xl">Ticket Picture</label>
                            <div className="label">
                                <span className="label-text">Please select an Image to upload.</span>
                            </div>
                            <input
                                id="userpfp"
                                className="mb-3 file-input hover:bg-gray-800 transition-all w-full bg-gray-900"
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                            />


                            <div className="mb-4">
                                <label className="block mb-2 text-xl ">Ticket Title</label>
                                <input
                                    id="username"
                                    name="username"
                                    defaultValue={userData.username}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none bg-gray-700 text-xl rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                    pattern=".{1,15}"
                                    type="text"
                                    placeholder="Enter New Ticket Name"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block  mb-2  text-xl">Description</label>
                                <input
                                    id="email"
                                    name="email"
                                    defaultValue={userData.email}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none bg-gray-700 text-xl rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                        placeholder="Enter New Description"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block  mb-2  text-xl">Location</label>
                                <input
                                    id="phone"
                                    name="phone"
                                    defaultValue={userData.phone}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none bg-gray-700 text-xl rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                    pattern=".{1,15}"
                                    type="text"
                                    placeholder="Enter New Ticket Location"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block  mb-2  text-xl">Date Time</label>
                                <input
                                    id="datetime"
                                    name="datetime"
                                    defaultValue={userData.datetime}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none bg-gray-700 text-xl rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                    pattern=".{1,15}"
                                    type="text"
                                    placeholder="Enter New Date time"
                                    required
                                />
                            </div>

                            <div className="flex items-center justify-between ">
                                <div>
                                    <label className="mb-2 text-xl">Ticket Type</label>
                                    <select
                                        className="bg-gray-700 p-2 rounded w-full"
                                        value={userData.type}
                                        onChange={(e) => setUserData({...userData, type: e.target.value})}
                                    >
                                        <option value="1">General</option>
                                        <option value="2">VIP</option>
                                        <option value="3">VVIP</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="mb-2 text-xl">Stock</label>
                                    <input
                                        id="stock"
                                        name="stock"
                                        defaultValue={userData.stock}
                                        onChange={handleInputChange}
                                        className=" shadow appearance-none bg-gray-700 text-xl rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                        pattern=".{1,15}"
                                        type="text"
                                        placeholder="Enter New Stock"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 text-xl">Price</label>
                                    <input
                                        id="price"
                                        name="price"
                                        defaultValue={userData.price}
                                        onChange={handleInputChange}
                                        className="shadow appearance-none bg-gray-700 text-xl rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                        pattern=".{1,15}"
                                        type="text"
                                        placeholder="Enter New Price"
                                        required
                                    />
                                </div>

                            </div>


                            <div className="justify-center flex mt-4 space-x-3 ">
                                <button className="p-3 bg-gray-800 rounded-md hover:opacity-80 transition-all w-full">
                                    Cancel
                                </button>
                                <button className="p-3 bg-teal-600  rounded-md hover:opacity-80 transition-all w-full">
                                    Add Ticket
                                </button>
                            </div>


                        </form>
                    </div>
                </Modal>


            </div>
            <button
                className="text-white w-full p-2 mt-3 bg-teal-600 rounded hover:opacity-80  transition-all transform"
                onClick={handleButtonClick}>
                Add New Ticket

            </button>
        </div>

    );
}
