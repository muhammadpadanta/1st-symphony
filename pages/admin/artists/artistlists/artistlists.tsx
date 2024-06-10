import "../../../../styles/globals.css";
import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import Modal from "react-modal";
import {toast, Toaster} from "react-hot-toast";
import ReactLoading from "react-loading";

export default function TransactionList() {
    const [artists, setArtists] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [artistId, setArtistId] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        genre: '',
        bio: '',
        photo: '',
    });

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleFileChange = (event) => {
        setFormData({
            ...formData,
            photo: event.target.files.length > 0 ? event.target.files[0] : null
        });
    };

    const editArtist = (artist) => {
        setArtistId(artist.artist_id);
        setFormData({
            name: artist.name,
            genre: artist.genre,
            bio: artist.bio,
            photo: artist.photo,
        });
        setModalIsOpen(true);
    };

    const handleDelete = async (artistId) => {
        const token = localStorage.getItem('token');

        if (token) {
            const confirmation = window.confirm("Are you sure you want to delete this artist?");

            if (confirmation) {
                const response = await fetch(`http://localhost:8000/api/admin/artists/${artistId}`, {
                    method: 'DELETE',
                    headers: {
                        "Accept": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });

                const responseData = await response.json();

                if (response.ok) {
                    toast.success(responseData.message);
                    setArtists(artists.filter(artist => artist.artist_id !== artistId));
                } else {
                    toast.error(responseData.message);
                }
            }
        }
    };

    const handleUpdate = async (event, artistId) => {
        event.preventDefault();

        setIsLoading(true); // Set isLoading to true at the start of the update process

        const token = localStorage.getItem('token');

        if (token) {
            const data = new FormData();
            Object.keys(formData).forEach(key => {
                if (key === 'photo' && formData[key] instanceof File) {
                    data.append(key, formData[key], formData[key].name);
                } else if (key !== 'photo' && formData[key] !== null) {
                    data.append(key, formData[key]);
                }
            });

            const response = await fetch(`http://localhost:8000/api/admin/artists/${artistId}?_method=PUT`, {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: data
            });

            const responseData = await response.json();

            if (response.ok) {
                toast.success(responseData.message);
                // Fetch the updated artist data
                const updatedArtistResponse = await fetch(`http://localhost:8000/api/admin/artists/${artistId}`, {
                    headers: {
                        "Accept": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });
                const updatedArtistData = await updatedArtistResponse.json();
                // Update the artist in the state
                setArtists(artists.map(artist => artist.artist_id === artistId ? updatedArtistData : artist));
                setModalIsOpen(false);
            } else {
                toast.error(responseData.message);
            }
        }

        setIsLoading(false); // Set isLoading back to false once the update process has completed
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
                .then(data => setArtists(data))
                .catch(error => console.error(error));
        }
    }, []);

    return (
        <>
            <Toaster/>
            <div
                className="new-rocker-regular grid grid-cols-1 md:grid-cols-3 gap-5 p-6 w-[80vw] xl:max-h-[600px] 2xl:max-h-[750px] overflow-auto">
                {artists.map(artist => (
                    <div key={artist.artist_id} className="bg-gray-800 rounded-xl flex items-center p-4 ">
                        <div className="" style={{filter: "drop-shadow(2px 2px 2px rgba(0, 0, 0, 1))"}}>
                            <h2 className="text-gray-100 font-semibold leading-7 text-3xl mb-3 p-3 ">
                                {artist.name}
                            </h2>
                            <div className=" border border-2 rounded-full w-24 h-24 overflow-hidden">
                                <Image
                                    src={artist.photo ? `http://localhost:8000/${artist.photo}` : '/images/default.png'}
                                    alt={artist.name}
                                    width={100}
                                    height={100}
                                    className="object-cover"
                                />
                            </div>
                            <div className={"text-second text-xl mb-3 p-3"}>
                                <p className={"text-yellow-400"}>Artist id: {artist.artist_id}</p>
                                <p>Artist name: {artist.name}</p>
                                <p>Bio: {artist.bio}</p>
                                <p>Genre: {artist.genre}</p>
                            </div>

                            <div className="space-x-3 text-white p-3 w-full">
                                <button onClick={() => editArtist(artist)}
                                        className="p-2 bg-gray-600 rounded hover:bg-green-800 transition-all w-1/3">
                                    Edit Artist
                                </button>
                                <button
                                    onClick={() => handleDelete(artist.artist_id)}
                                    className="p-2 bg-red-400 rounded hover:bg-green-800 transition-all w-1/2"
                                >
                                    Delete
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
                    <h1 className={"text-prime text-center text-2xl text-yellow-300 "}>UPDATE ARTIST</h1>
                    <form onSubmit={(event) => handleUpdate(event, artistId)}
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