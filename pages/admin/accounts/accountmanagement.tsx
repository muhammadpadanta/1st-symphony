import React, {useEffect, useState} from "react";
import Link from "next/link";
import Modal from "react-modal";
import "../../../styles/twclass.css"
import ReactLoading from 'react-loading';
import { toast, Toaster } from "react-hot-toast";


export default function Accountmanagement() {
    const [users, setUsers] = useState<User[]>([]);
    const [totalUsers, setTotalUsers] = useState(0);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        gender: '',
        birth: '',
        phone: '',
        address: '',
        pfp_path: '' as File | string,
        role: '',
    });

    interface User {
        name: string;
        username: string;
        email: string;
    }



    const handleFormSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        setIsLoading(true); // Start loading

        const token = localStorage.getItem('token');

        if (token) {
            const data = new FormData();
            Object.keys(formData).forEach((key: string) => {
                const typedKey = key as keyof typeof formData;
                if (typedKey === 'pfp_path' && (formData[typedKey] as any) instanceof Blob) {
                    let fileName = (formData[typedKey] as any) instanceof File ? ((formData[typedKey] as unknown) as File).name : '';
                    data.append(typedKey, (formData[typedKey] as unknown) as Blob, fileName);
                } else {
                    data.append(typedKey, formData[typedKey]);
                }
            });

            const response = await fetch("http://localhost:8000/api/admin/users", {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: data
            });

            const responseData = await response.json();

            if (response.ok) {
                toast.success(responseData.message, {
                    style: {
                        border: '1px solid #31ff00',
                        padding: '16px',
                        background: '#333',
                        color: '#fff',
                    },
                    iconTheme: {
                        primary: '#31ff00',
                        secondary: '#FFFFFF',
                    },
                });
                setUsers([...users, responseData]);
                setTotalUsers(totalUsers + 1);
                setModalIsOpen(false);

                // Reset the form
                setFormData({
                    name: '',
                    username: '',
                    email: '',
                    password: '',
                    gender: '',
                    birth: '',
                    phone: '',
                    address: '',
                    pfp_path: '',
                    role: '',
                });
            } else {
                toast.error(responseData.message, {
                    style: {
                        border: '1px solid #f44336',
                        padding: '16px',
                        background: '#333',
                        color: '#fff',
                    },
                    iconTheme: {
                        primary: '#f44336',
                        secondary: '#FFFAEE',
                    },
                });
            }

            setIsLoading(false); // End loading
        }
    }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.item(0);
        if (file) {
            setFormData(prevState => ({
                ...prevState,
                pfp_path: file
            }));
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLElement>) => {
        const target = event.target as HTMLInputElement;
        setFormData({
            ...formData,
            [target.name]: target.value
        });
    };

    useEffect(() => {
        const token = localStorage.getItem('token'); // Fetch the token from local storage

        if (token) {
            fetch("http://localhost:8000/api/admin/users", {
                headers: {
                    "Accept": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
                .then(response => response.json())
                .then(data => {
                    setUsers(data);
                    setTotalUsers(data.length); // Set the total number of users
                })
                .catch(error => console.error(error));
        }
    }, []);


    return (
        <>
            <Toaster
            />
            <div className=" w-2/3 text-white grid grid-cols-2 gap-4 p-10">
                <Link href="/admin/accounts/userlists" legacyBehavior>
                    <div
                        className="border-2 bg-gray-800 p-10 rounded-lg cursor-pointer hover:bg-green-800 hover:scale-105 transition-all">
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="text-4xl font-bold mb-5">Show List of Users</h1>
                            <p className="text-2xl text-second ">Total Registered Users: {totalUsers} Users </p>
                        </div>
                    </div>
                </Link>

                <div onClick={() => setModalIsOpen(true)}
                     className="border-2 bg-gray-800 p-10 rounded-lg cursor-pointer hover:bg-green-800 hover:scale-105 transition-all">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-4xl font-bold mb-5">Create New User</h1>
                        <a className="text-2xl text-second">Create a New User</a>
                    </div>
                </div>

                <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
                       className={{
                           base: 'animate-modal',
                           afterOpen: 'animate-modal-after-open',
                           beforeClose: 'animate-modal-before-close'
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
                               flexDirection: 'column',
                               alignItems: 'center',
                               justifyContent: 'center',
                               border: '1px solid #FFFFFF',
                               borderRadius: '10px',
                               width: '50%',
                               height: '50%',
                               top: '0',
                               left: '0',
                               right: '0',
                               bottom: '0',
                               margin: 'auto',
                               backgroundColor: '#0a0a0a',
                               padding: '20px',
                               color: 'white',
                           },
                       }}>
                    <h1 className={"text-prime text-center text-2xl text-yellow-300 "}>CREATE NEW USER</h1>
                    <form onSubmit={handleFormSubmit}
                          className="rounded overflow-y-auto h-[40vh] p-5 w-full text-prime">
                        <label className="block mb-2">
                            <span className="">Name:</span>
                            <input type="text" name="name" value={formData.name} onChange={handleInputChange} required
                                   className="inputBox"/>
                        </label>
                        <label className="block mb-2">
                            <span className="">Username:</span>
                            <input type="text" name="username" value={formData.username} onChange={handleInputChange}
                                   required className="inputBox"/>
                        </label>
                        <label className="block mb-2">
                            <span className="">Email:</span>
                            <input type="email" name="email" value={formData.email} onChange={handleInputChange}
                                   required className="inputBox"/>
                        </label>
                        <label className="block mb-2">
                            <span className="">Password:</span>
                            <input type="password" name="password" value={formData.password}
                                   onChange={handleInputChange} required className="inputBox"/>
                        </label>
                        <label className="block mb-2">
                            <span className="">Gender:</span>
                            <select name="gender" value={formData.gender} onChange={handleInputChange} required
                                    className="inputBox">
                                <option value="">Select...</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </label>
                        <label className="block mb-2">
                            <span className="">Birth:</span>
                            <input type="date" name="birth" value={formData.birth} onChange={handleInputChange} required
                                   className="inputBox"/>
                        </label>
                        <label className="block mb-2">
                            <span className="">Phone:</span>
                            <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required
                                   className="inputBox"/>
                        </label>
                        <label className="block mb-2">
                            <span className="">Address:</span>
                            <input type="text" name="address" value={formData.address} onChange={handleInputChange}
                                   required className="inputBox"/>
                        </label>
                        <label className="block mb-2">
                            <span className="">Profile Picture:</span>
                            <input type="file" name="pfp_path" onChange={handleFileChange} className="inputBox"/>
                        </label>
                        <label className="block mb-2">
                            <span className="">Role:</span>
                            <select name="role" value={formData.role} onChange={handleInputChange} required
                                    className="inputBox">
                                <option value="">Select...</option>
                                <option value="user">user</option>
                                <option value="admin">admin</option>
                            </select>
                        </label>
                        <button type="submit"
                                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                            {isLoading ?
                                <ReactLoading type={"spin"} className="mx-auto" color={"#ffffff"} height={20}
                                              width={20}/> : 'Submit'}
                        </button>
                    </form>
                </Modal>
            </div>
        </>

    );
}