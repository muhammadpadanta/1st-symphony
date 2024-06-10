import React, {useEffect, useState} from "react";
import Link from "next/link";
import Modal from "react-modal";
import "../../../styles/twclass.css"
import ReactLoading from 'react-loading';
import { toast, Toaster } from "react-hot-toast";


export default function ArtistManagement() {
    const [artists, setArtists] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        genre: '',
        bio: '',
        photo: '',
    });

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        setIsLoading(true); // Start loading

        const token = localStorage.getItem('token');

        if (token) {
            const data = new FormData();
            Object.keys(formData).forEach(key => {
                if (key === 'photo' && formData[key]) {
                    data.append(key, formData[key], formData[key].name);
                } else {
                    data.append(key, formData[key]);
                }
            });

            const response = await fetch("http://localhost:8000/api/admin/artists", {
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
                setArtists([...artists, responseData]);
                setModalIsOpen(false);

                // Reset the form
                setFormData({
                    name: '',
                    genre: '',
                    bio: '',
                    photo: '',
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

    const handleFileChange = (event) => {
        if (event.target.files[0]) {
            setFormData({
                ...formData,
                photo: event.target.files[0]
            });
        }
    };

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    useEffect(() => {
        const token = localStorage.getItem('token'); // Fetch the token from local storage

        if (token) {
            fetch("http://localhost:8000/api/admin/artists", {
                headers: {
                    "Accept": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
                .then(response => response.json())
                .then(data => {
                    setArtists(data);
                })
                .catch(error => console.error(error));
        }
    }, []);


    return (
        <>
            <Toaster
            />
            <div className=" w-2/3 text-white grid grid-cols-2 gap-4 p-10">
                <Link href="/admin/artists/artistlists" legacyBehavior>
                    <div
                        className="border-2 bg-gray-800 p-10 rounded-lg cursor-pointer hover:bg-green-800 hover:scale-105 transition-all">
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="text-4xl font-bold mb-5">Show List of Artists</h1>
                            <p className="text-2xl text-second ">Total Registered Artists: {artists.length} Artists </p>
                        </div>
                    </div>
                </Link>

                <div onClick={() => setModalIsOpen(true)}
                     className="border-2 bg-gray-800 p-10 rounded-lg cursor-pointer hover:bg-green-800 hover:scale-105 transition-all">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-4xl font-bold mb-5">Create New Artist</h1>
                        <a className="text-2xl text-second">Create a New Artist</a>
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
                    <h1 className={"text-prime text-center text-2xl text-yellow-300 "}>CREATE NEW ARTIST</h1>
                    <form onSubmit={handleFormSubmit}
                          className="rounded overflow-y-auto h-[40vh] p-5 w-full text-prime">
                        <label className="block mb-2">
                            <span className="">Name:</span>
                            <input type="text" name="name" value={formData.name} onChange={handleInputChange} required
                                   className="inputBox"/>
                        </label>
                        <label className="block mb-2">
                            <span className="">Bio:</span>
                            <textarea name="bio" value={formData.bio} onChange={handleInputChange} required
                                      className="inputBox"/>
                        </label>
                        <label className="block mb-2">
                            <span className="">Genre:</span>
                            <input type="text" name="genre" value={formData.genre} onChange={handleInputChange} required
                                   className="inputBox"/>
                        </label>
                        <label className="block mb-2">
                            <span className="">Photo:</span>
                            <input type="file" name="photo" onChange={handleFileChange} className="inputBox"/>
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