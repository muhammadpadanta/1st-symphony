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


export function UpdateUser() {
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
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
        file_path: "",
    });

    const [image, setImage] = useState(null); // To store the selected image
    const [imagePreview, setImagePreview] = useState(""); // To display the preview of the selected image
    const [formData, setFormData] = useState(new FormData()); // To handle form data

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

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (name === "username" && /\s/.test(value)) {
            setUsernameError("username can't use spacing");
        } else {
            setUsernameError("");
        }

        if (name === "password" && value.length < 8) {
            setPasswordError("Minimal of 8 characters");
        } else {
            setPasswordError("");
        }

        let updatedValue = value;
        if (name === "birth") {
            // Create a new Date object
            const date = new Date(value);

            // Format the date to YYYY-MM-DD
            updatedValue = date.toISOString().split('T')[0];
        }

        setUserData((prevUserData) => ({
            ...prevUserData,
            [name]: updatedValue,
        }));

        // Update FormData with the new value
        formData.set(name, updatedValue);
    };

    async function editUser(e: React.FormEvent) {
        e.preventDefault(); // Prevent the default form submission behavior

        try {
            // Create a new FormData object
            const formData = new FormData();

            // Update form data fields
            formData.set("name", userData.name);
            formData.set("username", userData.username);
            formData.set("phone", userData.phone);
            formData.set("address", userData.address);
            formData.set("email", userData.email);
            formData.set("password", userData.password); // Set the password field
            formData.set("birth", userData.birth);

            const result = await fetch(`http://localhost:8000/api/updateuser/${id}?_method=PUT`, {
                method: "POST",
                body: formData,
            });

            if (!result.ok) {
                console.error('Error updating user:', result.statusText);
                alert("Failed to update user");
            } else {
                alert("User berhasil diupdate!")
                window.history.back();
            }
        } catch (error) {
            console.error('Error:', error);
            alert("Internal server error");
        }
    }

    return (
        <div className="flex justify-center items-center 2xl:h-screen bg-[#0a0a0a] w-full">
            <form className="bg-transparent rounded px-8 pt-6 pb-8 mb-4 text-white" onSubmit={editUser}>
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
                                onChange={handleInputChange}
                                className="shadow appearance-none  bg-transparent border border-gray-400 text-xl rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                type="text"

                                placeholder="Enter New Name"
                                required
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
                                onChange={handleInputChange}
                                className="shadow appearance-none  bg-transparent border border-gray-400 text-xl rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                pattern=".{1,15}"
                                type="text"
                                placeholder="Enter New Username"
                                required
                            />
                            {usernameError && <p style={{color: 'red'}}>{usernameError}</p>}
                        </div>

                        <div className="mb-4">
                            <label

                                style={{filter: "drop-shadow(2px 2px 2px rgba(180, 180, 180, 0.7))"}}
                                className="block mb-2 text-xl font-bold text-slate-200 ">Password:</label>
                            <input
                                id="pasus"
                                name="password"
                                onChange={handleInputChange}
                                className="shadow appearance-none  bg-transparent border border-gray-400 text-xl rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                type="password"
                                placeholder="Enter New Password"
                            />
                            {passwordError && <p style={{color: 'red'}}>{passwordError}</p>}
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
                                defaultValue={userData.phone}
                                onChange={handleInputChange}
                                className="shadow appearance-none  bg-transparent border border-gray-400 text-xl rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                pattern=".{1,15}"
                                type="text"
                                placeholder="Enter New Phone Number"

                            />
                        </div>

                        <div className="mb-4">
                            <label

                                style={{filter: "drop-shadow(2px 2px 2px rgba(180, 180, 180, 0.7))"}}
                                className="block mb-2 text-xl font-bold text-slate-200 ">Address:</label>
                            <input
                                id="address"
                                name="address"
                                defaultValue={userData.address}
                                onChange={handleInputChange}
                                className="shadow appearance-none  bg-transparent border border-gray-400 text-xl rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                pattern=".{1,15}"
                                placeholder="Enter New Address"

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
                                onChange={handleInputChange}
                                className="shadow appearance-none  bg-transparent border border-gray-400 text-xl rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Enter New Email"
                            />
                        </div>

                        <div className="mb-4">
                            <label

                                style={{filter: "drop-shadow(2px 2px 2px rgba(180, 180, 180, 0.7))"}}
                                className="block mb-2 text-xl font-bold text-slate-200 ">Birth Date:</label>
                            <input
                                id="birth"
                                name="birth"
                                defaultValue={userData.birth}
                                onChange={handleInputChange}
                                className="shadow appearance-none  bg-transparent border border-gray-400 text-xl rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                type="date"
                                placeholder="Enter New Name"

                            />
                        </div>

                    </div>

                    <div className="mb-4  flex flex-col p-4 rounded-xl w-2/3">

                        <div className="mb-6">
                            <label

                                style={{filter: "drop-shadow(2px 2px 2px rgba(180, 180, 180, 0.7))"}}
                                className="block mb-2 text-xl font-bold text-slate-200 ">Profile Picture:</label>
                            <div className="label">
                                <span className="label-text">Please select an Image to upload.</span>
                            </div>
                            <input
                                id="userpfp"
                                className="file-input hover:bg-gray-800 transition-all w-full bg-gray-900"
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                            {imagePreview && (
                                <Image
                                    width={500}
                                    height={500}
                                    src={imagePreview}
                                    alt="Preview"
                                    className="mt-4 rounded-lg shadow-md  mx-auto  hover:scale-105 transition-all"
                                    style={{maxWidth: "100%", maxHeight: "200px"}}
                                />
                            )}
                        </div>


                    </div>


                </div>
                <div>
                    <Button type="submit" className="btnBack bg-" href="/account/profile">
                        Back
                    </Button>
                    <Button type="submit" className="btnPrimary">
                        Submit
                    </Button>
                </div>

            </form>
        </div>
    );
}

export default UpdateUser;
