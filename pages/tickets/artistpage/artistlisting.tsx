// src/components/ArtistList.js
import React from 'react';
import Link from "next/link";
import Image from 'next/image';

const artists = [
    { name: 'Artist 1', genre: 'Genre 1', imageUrl: '/images/artistList1.webp' },
    { name: 'Artist 2', genre: 'Genre 2', imageUrl: '/images/artistList1.webp' },
    { name: 'Artist 3', genre: 'Genre 3', imageUrl: '/images/artistList1.webp' },
    { name: 'Artist 1', genre: 'Genre 1', imageUrl: '/images/artistList1.webp' },
    { name: 'Artist 2', genre: 'Genre 2', imageUrl: '/images/artistList1.webp' },
    { name: 'Artist 3', genre: 'Genre 3', imageUrl: '/images/artistList1.webp' },
    { name: 'Artist 1', genre: 'Genre 1', imageUrl: '/images/artistList1.webp' },
    { name: 'Artist 2', genre: 'Genre 2', imageUrl: '/images/artistList1.webp' },
    { name: 'Artist 3', genre: 'Genre 3', imageUrl: '/images/artistList1.webp' },
    { name: 'Artist 1', genre: 'Genre 1', imageUrl: '/images/artistList1.webp' },
    { name: 'Artist 2', genre: 'Genre 2', imageUrl: '/images/artistList1.webp' },
    { name: 'Artist 3', genre: 'Genre 3', imageUrl: '/images/artistList1.webp' },
    { name: 'Artist 1', genre: 'Genre 1', imageUrl: '/images/artistList1.webp' },
    { name: 'Artist 2', genre: 'Genre 2', imageUrl: '/images/artistList1.webp' },
    { name: 'Artist 3', genre: 'Genre 3', imageUrl: '/images/artistList1.webp' },
    // Add more artists here
];

const ArtistListing = () => {
    return (
        <div className="min-h-screen w-2/3 mx-auto text-white p-5">
            <h1 className="text-5xl font-bold mb-5 text-center text-[#FFC107]">Artist Lists</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {artists.map((artist, index) => (
                    <div key={index}
                         className="hover:bg-green-900 border border-2 border-gray-500 transition-all bg-gray-800 p-5 rounded-lg shadow-lg flex flex-col items-center">
                        <div className="relative w-24 h-24 rounded-full mb-4">
                            <Image
                                src={artist.imageUrl}
                                alt={artist.name}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-full"
                            />
                        </div>
                        <div className="text-center">
                            <h2 className="text-2xl font-semibold">{artist.name}</h2>
                            <p className="text-gray-400">{artist.genre}</p>

                            <Link href={"/concerts/artistpage/artistalbums"}>
                                <button
                                    className="mt-4 p-3 bg-yellow-600 hover:opacity-80 shadow-xl transition-all  rounded">
                                    Check Popular Albums
                                </button>
                            </Link>


                            <Link href={"/concerts/artistpage/artisttickets"}>
                                <button
                                    className="mt-4 p-3 bg-green-500 hover:opacity-80 shadow-xl transition-all  rounded">
                                    Check Available Tickets
                                </button>
                            </Link>


                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default ArtistListing;
