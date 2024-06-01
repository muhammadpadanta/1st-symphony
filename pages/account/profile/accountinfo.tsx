import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Image from "next/image";
import Button from "@/components/btn";
import '../../../styles/twclass.css'

function getUserIdFromLocalStorage() {
    // Get the 'user-info' item from local storage
    const userInfo = localStorage.getItem('user-info');

    // Check if the 'user-info' item exists
    if (userInfo) {
        // Parse the 'user-info' item as JSON to convert it back into an object
        const parsedUserInfo = JSON.parse(userInfo);

        // Return the 'id' property of the object
        return parsedUserInfo.id;
    }

    // If the 'user-info' item does not exist, return null
    return null;
}


export default function Profile() {

    const id=  getUserIdFromLocalStorage()
    console.log("Item ID:", id);

    const [userData, setUserData] = useState({
        name: "",
        username: "",
        phone: "",
        address: "",
        email: "",
        birth: "",
        password: "",
        gender: "",
        pfp_path: "",
    });


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/cariuser/${id}`);
                const data = await response.json();
                setUserData(data);
                // setImagePreview(`http://localhost:8000/${data.file_path}`);
            } catch (error) {
                console.error("Error fetching data:", error);
                // Handle error as needed
            }
        };

        fetchData();
    }, [id]);


    return (
        <div className="flex justify-center items-center 2xl:h-screen bg-[#0a0a0a] w-full">
            <form className="bg-transparent rounded px-8 pt-6 pb-8 mb-4 text-white">
                <p className="block mb-4 text-6xl font-bold flex justify-center items-center">Account Center</p>
                <div className="flex space-x-10 w-full bg-gray-900 bg-opacity-60 p-10">
                    <div className="mb-4 flex flex-col p-4 rounded-xl w-2/3">
                        <div className="mb-4">
                            <label

                                style={{filter: "drop-shadow(2px 2px 2px rgba(180, 180, 180, 0.7))"}}
                                className="block mb-2 text-xl font-bold text-slate-200 ">Full Name:</label>
                            <input
                                id="name"
                                name="name"
                                defaultValue={userData.name}
                                className="shadow appearance-none bg-transparent text-xl rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Enter New Name"
                                readOnly
                            />
                        </div>

                        <div className="mb-4">
                            <label

                                style={{filter: "drop-shadow(2px 2px 2px rgba(180, 180, 180, 0.7))"}}
                                className="block mb-2 text-xl font-bold text-slate-200 ">Username:</label>
                            <input
                                id="username"
                                name="username"
                                defaultValue={userData.username}
                                className="shadow appearance-none  bg-transparent text-xl rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                pattern=".{1,15}"
                                type="text"
                                placeholder="Enter New Username"
                                readOnly
                            />
                        </div>

                        <div className="mb-4">
                            <label

                                style={{filter: "drop-shadow(2px 2px 2px rgba(180, 180, 180, 0.7))"}}
                                className="block mb-2 text-xl font-bold text-slate-200 ">Password:</label>
                            <input
                                id="pasus"
                                name="password"
                                className="shadow appearance-none  bg-transparent  text-xl rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                type="password"
                                placeholder="*******"
                                readOnly
                            />
                        </div>

                        <div className="mb-4">
                            <label

                                style={{filter: "drop-shadow(2px 2px 2px rgba(180, 180, 180, 0.7))"}}
                                className="block mb-2 text-xl font-bold text-slate-200 ">Gender:</label>
                            <input
                                id="gender"
                                name="gender"
                                className="shadow appearance-none  bg-transparent  text-xl rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                defaultValue={userData.gender !== null && userData.gender !== undefined ? userData.gender : "Empty"}
                                readOnly
                            />
                        </div>


                    </div>

                    <div className="mb-4 flex flex-col p-4 rounded-xl w-2/3">

                        <div className="mb-4">
                            <label

                                style={{filter: "drop-shadow(2px 2px 2px rgba(180, 180, 180, 0.7))"}}
                                className="block mb-2 text-xl font-bold text-slate-200 ">Phone Number:</label>
                            <input
                                id="phone"
                                name="phone"
                                defaultValue={userData.phone !== null && userData.phone !== undefined ? userData.phone : "Empty"}
                                className="shadow appearance-none  bg-transparent  text-xl rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Enter New Phone Number"
                                readOnly
                            />
                        </div>

                        <div className="mb-4">
                            <label

                                style={{filter: "drop-shadow(2px 2px 2px rgba(180, 180, 180, 0.7))"}}
                                className="block mb-2 text-xl font-bold text-slate-200 ">Address:</label>
                            <textarea
                                id="address"
                                name="address"
                                defaultValue={userData.address !== null && userData.address !== undefined ? userData.address : "Empty"}
                                className="shadow appearance-none  bg-transparent  text-xl rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter New Address"
                                readOnly
                            />
                        </div>

                        <div className="mb-4">
                            <label

                                style={{filter: "drop-shadow(2px 2px 2px rgba(180, 180, 180, 0.7))"}}
                                className="block mb-2 text-xl font-bold text-slate-200 ">Email Address:</label>
                            <input
                                id="email"
                                name="email"
                                defaultValue={userData.email}
                                className="shadow appearance-none  bg-transparent  text-xl rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Enter New Email"
                                readOnly
                            />
                        </div>

                        <div className="mb-4">
                            <label

                                style={{filter: "drop-shadow(2px 2px 2px rgba(180, 180, 180, 0.7))"}}
                                className="block mb-2 text-xl font-bold text-slate-200 ">Birth Date:</label>
                            <input
                                id="birth"
                                name="birth"
                                defaultValue={userData.birth !== null && userData.birth !== undefined ? userData.birth : "yyyy-mm-dd"}
                                className="shadow appearance-none  bg-transparent  text-xl rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                type="date"
                                placeholder="Enter New Name"
                                readOnly
                            />
                        </div>

                    </div>

                    <div className="mb-4  flex flex-col p-4 rounded-xl w-2/3">

                        <div className="mb-6">
                            <label

                                style={{filter: "drop-shadow(2px 2px 2px rgba(180, 180, 180, 0.7))"}}
                                className="block mb-2 text-xl font-bold text-slate-200 text-center ">Profile Picture:</label>

                                <Image
                                    width={500}
                                    height={500}
                                    src={userData.pfp_path ? `http://localhost:8000/${userData.pfp_path}` : `/images/defaultAvatar.webp`}
                                    alt="Preview"
                                    className="mt-4 rounded-lg shadow-md  mx-auto  hover:scale-105 transition-all"
                                    style={{maxWidth: "100%", maxHeight: "200px"}}
                                />

                        </div>


                    </div>


                </div>
                <div>
                    <Button type="submit" className="btnBack bg-" href="/">
                        Back
                    </Button>
                    <Button type="submit" className="btnPrimary" href="/account/editprofile">
                        Edit Profile
                    </Button>
                </div>

            </form>
        </div>
    );
}


