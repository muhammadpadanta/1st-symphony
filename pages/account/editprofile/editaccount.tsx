import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Image from "next/image";
import Button from "@/components/btn";
import '../../../styles/twclass.css'

export function UpdateUser() {

    const { id } = useParams();
    console.log("Item ID:", id);

    const [userData, setUserData] = useState({
        username: "",
        phone: "",
        address: "",
        email: "",
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
                setImagePreview(`http://localhost:8000/${data.file_path}`);
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

        setUserData((prevUserData) => ({
            ...prevUserData,
            [name]: value,
        }));

        // Update FormData with the new value

    };

    async function editUser() {
        try {
            // Update other form data fields
            formData.set("username", userData.username);
            formData.set("email", userData.email);

            const result = await fetch(`http://localhost:8000/api/updateuser/${id}?_method=PUT`, {
                method: "POST",
                body: formData,
            });

            if (result.ok) {
                alert("User berhasil diupdate!")
                window.history.back();

            } else {
                alert("Failed to update user");
            }
        } catch (error) {
            console.error("Error updating User:", error);
            alert("Internal server error");
        }
    }
    return (
        <div className="flex justify-center items-center 2xl:h-screen bg-[#0a0a0a] bg-opacity-90 backdrop-blur-md w-full">
            <form className="bg-transparent rounded px-8 pt-6 pb-8 mb-4 w-2/4 text-white">

                <div className="mb-4">
                    <label className="block mb-2 text-xl ">Username</label>
                    <input
                        id="username"
                        name="username"
                        defaultValue={userData.username}
                        onChange={handleInputChange}
                        className="shadow appearance-none bg-gray-700 text-xl rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                        pattern=".{1,15}"
                        type="text"
                        placeholder="Enter New Username"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block  mb-2  text-xl">Email</label>
                    <input
                        id="email"
                        name="email"
                        defaultValue={userData.email}
                        onChange={handleInputChange}
                        className="shadow appearance-none bg-gray-700 text-xl rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Enter New Email"
                    />
                </div>

                <div className="mb-4">
                    <label className="block  mb-2  text-xl">Phone</label>
                    <input
                        id="phone"
                        name="phone"
                        defaultValue={userData.phone}
                        onChange={handleInputChange}
                        className="shadow appearance-none bg-gray-700 text-xl rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                        pattern=".{1,15}"
                        type="text"
                        placeholder="Enter New Phone Number"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block  mb-2  text-xl">Address</label>
                    <input
                        id="address"
                        name="address"
                        defaultValue={userData.address}
                        onChange={handleInputChange}
                        className="shadow appearance-none bg-gray-700 text-xl rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                        pattern=".{1,15}"
                        type="text"
                        placeholder="Enter New Address"
                        required
                    />
                </div>


                <div className="mb-4">
                    <label className="block  mb-2  text-xl">Password</label>
                    <input
                        id="pasus"
                        name="password"
                        onChange={handleInputChange}
                        className="shadow appearance-none bg-gray-700 text-xl rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                        type="password"
                        placeholder="Enter New Password"
                    />
                </div>


                <div className="mb-6">
                    <label className="block  mb-2 text-xl">Profile Picture</label>
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
                            className="mt-4 rounded-lg shadow-md border-2 mx-auto border-white hover:scale-105 transition-all"
                            style={{maxWidth: "100%", maxHeight: "200px"}}
                        />
                    )}
                </div>

                    <Button type="submit" className="btnBack bg-" href="/account/profile">
                        Back
                    </Button>
                    <Button type="submit" className="btnPrimary">
                        Submit
                    </Button>

            </form>
        </div>
    );
}

export default UpdateUser;
