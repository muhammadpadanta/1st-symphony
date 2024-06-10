import "../../../../styles/globals.css";
import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import Modal from "react-modal";
import {toast, Toaster} from "react-hot-toast";
import ReactLoading from "react-loading";

export default function ConcertList() {
    const [artists, setArtists] = useState([]);
    const [concerts, setConcerts] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [concertId, setConcertId] = useState(null);
    const [formData, setFormData] = useState({
        artist_id: '',
        concert_name: '',
        date: '',
        venue: '',
        description: '',
        concert_photo: '',
    });

    const handleInputChange = (event) => {
        let value = event.target.value;

        // If the value is an object, get the artist_id
        if (typeof value === 'object' && value !== null) {
            value = value.artist_id;
        }

        setFormData({
            ...formData,
            [event.target.name]: value
        });
    };

    const handleFileChange = (event) => {
        if (event.target.files[0]) {
            setFormData({
                ...formData,
                concert_photo: event.target.files[0]
            });
        }
        console.log(formData);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = ('0' + (date.getMonth() + 1)).slice(-2); // Months are 0 based so add '1' and format to '01', '02' etc
        const day = ('0' + date.getDate()).slice(-2); // Format day to '01', '02' etc
        return `${year}-${month}-${day}`;
    }

    const editConcert = (concert) => {
        setConcertId(concert.concert_id);
        setFormData({
            artist_id: concert.artist_id,
            concert_name: concert.concert_name,
            date: formatDate(concert.date),
            venue: concert.venue,
            description: concert.description,
            concert_photo: concert.concert_photo,
        });
        setModalIsOpen(true);
    };

    const handleDelete = async (concertId) => {
        const token = localStorage.getItem('token');

        if (token) {
            const confirmation = window.confirm("Are you sure you want to delete this concert?");

            if (confirmation) {
                const response = await fetch(`http://localhost:8000/api/admin/concerts/${concertId}`, {
                    method: 'DELETE',
                    headers: {
                        "Accept": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });

                const responseData = await response.json();

                if (response.ok) {
                    toast.success(responseData.message);
                    setConcerts(concerts.filter(concert => concert.concert_id !== concertId));
                } else {
                    toast.error(responseData.message);
                }
            }
        }
    };

    const handleUpdate = async (event, concertId) => {
        event.preventDefault();

        setIsLoading(true); // Set isLoading to true at the start of the update process

        const token = localStorage.getItem('token');

        if (token) {
            const data = new FormData();
            Object.keys(formData).forEach(key => {
                if (key === 'concert_photo' && formData[key] instanceof File) {
                    data.append(key, formData[key], formData[key].name);
                } else if (key !== 'concert_photo' && formData[key] !== null) {
                    data.append(key, formData[key]);
                }
            });

            const response = await fetch(`http://localhost:8000/api/admin/concerts/${concertId}?_method=PUT`, {
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
                // Fetch the updated concert data
                const updatedConcertResponse = await fetch(`http://localhost:8000/api/admin/concerts/${concertId}`, {
                    headers: {
                        "Accept": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });
                const updatedConcertData = await updatedConcertResponse.json();
                // Update the concert in the state
                setConcerts(concerts.map(concert => concert.concert_id === concertId ? updatedConcertData : concert));
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
            fetch("http://localhost:8000/api/admin/concerts", {
                headers: {
                    "Accept": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
                .then(response => response.json())
                .then(data => setConcerts(data))
                .catch(error => console.error(error));
        }
    }, []);

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
                {concerts.map(concert => (
                    <div key={concert.concert_id} className="bg-gray-800 rounded-xl flex items-center p-4 ">
                        <div className="" style={{filter: "drop-shadow(2px 2px 2px rgba(0, 0, 0, 1))"}}>
                            <h2 className="text-gray-100 font-semibold leading-7 text-3xl mb-3 p-3 ">
                                {concert.concert_name}
                            </h2>
                            <div className=" border border-2 rounded-full w-24 h-24 overflow-hidden">
                                <Image
                                    src={concert.concert_photo ? `http://localhost:8000/${concert.concert_photo}` : '/images/default.png'}
                                    alt={concert.concert_name}
                                    width={100}
                                    height={100}
                                    className="object-cover"
                                />
                            </div>

                            <div className={"text-second text-xl mb-3 p-3"}>
                                <p className={"text-yellow-400"}>Concert id: {concert.concert_id}</p>
                                <p>Featured Artist: {concert.artist.name}</p>
                                <p>Concert name: {concert.concert_name}</p>
                                <p>Date: {concert.date}</p>
                                <p>Venue: {concert.venue}</p>
                                <p>Description: {concert.description}</p>
                            </div>

                            <div className="space-x-3 text-white p-3 w-full">
                                <button onClick={() => editConcert(concert)}
                                        className="p-2 bg-gray-600 rounded hover:bg-green-800 transition-all w-1/3">
                                    Edit Concert
                                </button>
                                <button
                                    onClick={() => handleDelete(concert.concert_id)}
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
                    <h1 className={"text-prime text-center text-2xl text-yellow-300 "}>UPDATE CONCERT</h1>
                    <form onSubmit={(event) => handleUpdate(event, concertId)}
                          className="rounded overflow-y-auto h-[40vh] p-5 w-full text-prime">
                        <label className="block mb-2">
                            <span className="">Concert Name:</span>
                            <input type="text" name="concert_name" value={formData.concert_name}
                                   onChange={handleInputChange} required
                                   className="inputBox"/>
                        </label>
                        <label className="block mb-2">
                            <span className="">Artist:</span>
                            <select name="artist_id" value={formData.artist_id} onChange={handleInputChange} required
                                    className="inputBox">
                                {artists.map(artist => (
                                    <option key={artist.artist_id} value={artist.artist_id}>
                                        {artist.name}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <label className="block mb-2">
                            <span className="">Date:</span>
                            <input type="date" name="date" value={formData.date} onChange={handleInputChange} required
                                   className="inputBox"/>
                        </label>
                        <label className="block mb-2">
                            <span className="">Venue:</span>
                            <input type="text" name="venue" value={formData.venue} onChange={handleInputChange} required
                                   className="inputBox"/>
                        </label>
                        <label className="block mb-2">
                            <span className="">Description:</span>
                            <textarea name="description" value={formData.description} onChange={handleInputChange}
                                      required
                                      className="inputBox"/>
                        </label>
                        <label className="block mb-2">
                            <span className="">Concert Photo:</span>
                            <input type="file" name="concert_photo" onChange={handleFileChange} className="inputBox"/>
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