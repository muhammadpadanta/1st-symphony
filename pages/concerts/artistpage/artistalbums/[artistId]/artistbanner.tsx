"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';



export default function ArtistBanner() {
    const router = useRouter();
    const { artistId } = router.query; // Access the artist id from the router query object

    const [artistData, setArtistData] = useState(null);

    useEffect(() => {
        if (artistId) { // Make sure artistId is defined before making the fetch request
            fetch(`http://localhost:8000/api/artists/${artistId}`)
                .then(response => response.json())
                .then(data => setArtistData(data));
        }
    }, [artistId]); // Add artistId as a dependency to the useEffect hook


    return (

        <div className="h-screen w-full flex flex-col items-center justify-center  ">
            <video
                src="/videos/herohome.webm"
                playsInline
                autoPlay
                muted
                loop
                className="absolute w-full h-full object-cover brightness-50 opacity-50"
                disablePictureInPicture
                preload="auto"

            />
            <div className="w-full p-4">


                <div
                    className="flex flex-col justify-center items-center space-y-5"
                >
                    <div
                        style={{filter: "drop-shadow(8px 8px 2px rgba(0, 0, 0, 0.6))"}}
                        className="relative w-72 h-72 overflow-hidden rounded-full border border-2 border-[#8BC34A] relative">
                        <Image
                            className="absolute w-full h-full object-cover "
                            src={`http://localhost:8000/${artistData?.photo}`}
                            alt="Description of the image"
                            layout="fill"
                        />
                    </div>

                    <div className=" w-full flex flex-col justify-center items-center">
                        <div className="z-10 text-center">
                            <div
                                style={{filter: "drop-shadow(8px 8px 2px rgba(0, 0, 0, 1))"}}
                                className="pb-10 pt-5 ">
                                <div>
                        <span
                            className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 xs:text-[1rem] xl:text-[3rem] 2xl:text-[4rem] drop-shadow-xl">
                            {artistData ? artistData.name : 'Loading...'}
                        </span>
                                </div>
                                <div>
                        <span
                            className="bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent xs:text-[1rem] xl:text-[3rem]  2xl:text-[4rem] drop-shadow-xl">
                            Genre: {artistData ? artistData.genre : 'Loading...'}
                        </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>

    );
}
