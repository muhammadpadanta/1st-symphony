import React, { useEffect, useState } from 'react';
import Link from "next/link";
import Image from 'next/image';
import Modal from 'react-modal';

const ArtistListing = () => {
    const [artists, setArtists] = useState([]);
    const [selectedArtist, setSelectedArtist] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetch('http://localhost:8000/api/artists')
            .then(response => response.json())
            .then(data => setArtists(data))
            .catch(error => console.error('Error:', error));
    }, []);

    const openModal = (artist) => {
        setSelectedArtist(artist);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="min-h-screen w-2/3 mx-auto text-white p-5">
            <h1 className="text-5xl font-bold mb-5 text-center text-[#FFC107]">Artist Lists</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {artists.map((artist, index) => (
                    <div key={index}
                         className="hover:bg-green-900 border border-2 border-gray-500 transition-all bg-gray-800 p-5 rounded-lg shadow-lg flex flex-col items-center">
                        <div className="relative w-24 h-24 rounded-full mb-4">
                            <Image
                                src={`http://localhost:8000/${artist.photo}`}
                                alt={artist.name}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-full"
                            />
                        </div>
                        <div className="text-center">
                            <h2 className="text-2xl font-semibold">{artist.name}</h2>
                            <p className="text-gray-400">{artist.bio}</p>
                            <p className="text-gray-400 mt-5">Genre: {artist.genre}</p>

                            <button
                                onClick={() => openModal(artist)}
                                className="mt-4 p-3 bg-green-500 hover:opacity-80 shadow-xl transition-all  rounded">
                                Check Available Concerts
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {selectedArtist && (
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    contentLabel="Concerts Modal"
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
                    }}
                >
                    <div className={"w-full h-full overflow-y-auto space-y-5 p-5"}>
                        <h2 className={"text-yellow-400 text-center text-2xl "}>{selectedArtist.name}'s Concerts</h2>
                        {selectedArtist.concerts.map((concert, index) => (
                            <div key={index} className={"bg-gray-800 p-3 rounded-xl flex justify-between"}>
                                <div>
                                    <h3 className={"font-bold text-prime"}>{concert.concert_name}</h3>
                                    <div className={"font-bold text-second"}>
                                        <p>Date: {concert.date}</p>
                                        <p>Venue: {concert.venue}</p>
                                        <p>Description: {concert.description}</p>
                                    </div>
                                </div>
                                <div className="border border-2 rounded-xl w-[150px] h-24 overflow-hidden">
                                    <Image
                                        src={`http://localhost:8000/${concert.concert_photo}`}
                                        alt={concert.concert_name}
                                        width={100}
                                        height={100}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>
                        ))}

                    </div>

                </Modal>
            )}
        </div>
    );
};
export default ArtistListing;