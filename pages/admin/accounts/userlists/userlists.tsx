import React, { useEffect, useState } from "react";
import "../../../../styles/globals.css";
import Modal from "react-modal";
import Image from "next/image";
import { toast, Toaster } from "react-hot-toast";
import ReactLoading from "react-loading";

export default function UserList() {
    const [users, setUsers] = useState<User[]>([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [userId, setUserId] = useState<number | null>(null);
    const [formData, setFormData] = useState({
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

    interface User {
        user_id: number;
        name: string;
        email: string;
        username: string;
        password: string;
        gender: string;
        birth: string;
        phone: number;
        address: string;
        pfp_path: string;
        role: string;
        email_verified_at: string;
        id: number;
    }



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
                .then(data => setUsers(data))
                .catch(error => console.error(error));
        }
    }, []);

    const deleteUser = (user_id: number) => {
        const token = localStorage.getItem('token'); // Fetch the token from local storage

        if (token) {
            if (window.confirm('Are you sure you want to delete this user?')) {
                fetch(`http://localhost:8000/api/admin/users/${user_id}`, {
                    method: 'DELETE',
                    headers: {
                        "Accept": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then(data => {
                        toast.success(data.message, {
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
                        setUsers(users.filter(user => user.user_id !== user_id));
                    })
                    .catch(error => {
                        toast.error(error.message, {
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
                    });
            }
        }
    }



    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleFormSubmit(userId);
    };

    const handleFormSubmit = async (userId: number | null) => {
        if (userId === null) {
            // handle the case when userId is null
            return;
        }
        setIsLoading(true); // Start loading

        const token = localStorage.getItem('token');

        if (token) {
            const data = new FormData();
            Object.keys(formData).forEach(key => {
                if (key === 'password' && formData[key] === '') {
                    // Skip the password if it's not provided
                    return;
                }

                if (key === 'pfp_path' && ((formData[key] as unknown) as File) instanceof File) {
                    data.append(key, (formData[key] as unknown) as File, ((formData[key] as unknown) as File).name);
                } else {
                    data.append(key, formData[key]);
                }
            });

            const response = await fetch(`http://localhost:8000/api/admin/users/${userId}?_method=PUT`, {
                method: 'POST',
                headers: {
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
                fetchUsers(); // Fetch the updated list of users
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
    };


    const fetchUsers = () => {
        const token = localStorage.getItem('token'); // Fetch the token from local storage

        if (token) {
            fetch("http://localhost:8000/api/admin/users", {
                headers: {
                    "Accept": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
                .then(response => response.json())
                .then(data => setUsers(data))
                .catch(error => console.error(error));
        }
    };

// Call fetchUsers in the useEffect hook
    useEffect(() => {
        fetchUsers();
    }, []);

    const handleFileChange = (event) => {
        if (event.target.files[0]) {
            setFormData({
                ...formData,
                pfp_path: event.target.files[0]
            });
        }
    };

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const editUser = (user) => {
        setUserId(user.user_id);
        setFormData({
            name: user.name,
            username: user.username,
            email: user.email,
            password: '', // password should not be retrieved for security reasons
            gender: user.gender,
            birth: user.birth,
            phone: user.phone,
            address: user.address,
            pfp_path: '', // profile picture path should not be retrieved as it's a file input
            role: user.role,
        });
        setModalIsOpen(true); // open the modal
    };

    return (
        <>
            <Toaster/>
            <div
                className="new-rocker-regular grid grid-cols-1 md:grid-cols-3 gap-5 p-6 w-[80vw] xl:max-h-[600px] 2xl:max-h-[750px] overflow-auto">
                {users.map(user => (
                    <div key={user.id} className="bg-gray-800 rounded-xl flex items-center p-4 ">
                        <div className="" style={{filter: "drop-shadow(2px 2px 2px rgba(0, 0, 0, 1))"}}>
                            <h2 className="text-gray-100 font-semibold leading-7 text-3xl mb-3 p-3 ">
                                {user.name}
                            </h2>
                            <div className=" border border-2 rounded-full w-24 h-24 overflow-hidden">
                                <Image
                                    src={user.pfp_path ? `http://localhost:8000/${user.pfp_path}` : '/images/default.png'}
                                    alt={user.name}
                                    width={100}
                                    height={100}
                                    className="object-cover"
                                />
                            </div>
                            <div className={"text-second text-xl mb-3 p-3"}>
                                <p className={"text-yellow-400"}>User id: {user.user_id}</p>
                                <p>Username: {user.username}</p>
                                <p>Email: {user.email}</p>
                                <p>Role: {user.role}</p>
                                <p>Gender: {user.gender}</p>
                                <p>Birth: {user.birth}</p>
                                <p>Phone: {user.phone}</p>
                                <p>Address: {user.address}</p>
                                <p>Email Verified Date: {user.email_verified_at}</p>
                            </div>

                            <div className="space-x-3 text-white p-3 w-full">
                                <button onClick={() => editUser(user)}
                                        className="p-2 bg-gray-600 rounded hover:bg-green-800 transition-all w-1/3">
                                    Edit User
                                </button>
                                <button className="p-2 bg-red-400 rounded hover:bg-green-800 transition-all w-1/2"
                                        onClick={() => deleteUser(user.user_id)}
                                >Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

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
                    <h1 className={"text-prime text-center text-2xl text-yellow-300 "}>UPDATE USER</h1>
                    <form onSubmit={handleSubmit}
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
                                   onChange={handleInputChange} className="inputBox"/>
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
