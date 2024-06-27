import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

function YouTubePlayer() {
    const [playing, setPlaying] = useState(false);
    const [artistData, setArtistData] = useState(null);

    const router = useRouter();
    const { artistId } = router.query; // Access the artist id from the router query object

    useEffect(() => {
        if (artistId) { // Make sure artistId is defined before making the fetch request
            fetch(`http://localhost:8000/api/artists/${artistId}`)
                .then(response => response.json())
                .then(data => setArtistData(data));
        }
    }, [artistId]); // Add artistId as a dependency to the useEffect hook

    const handlePlay = (videoId) => {
        setPlaying(true);
    };

    const handlePause = () => {
        setPlaying(false);
    };

    return (
        <div className={"flex justify-center items-center h-screen flex-col w-full"}>
            <div className="w-2/3 "> {/* Increase the width of the container */}
                {artistData && (
                    <div>
                        <h1
                            style={{ filter: "drop-shadow(8px 8px 2px rgba(0, 0, 0, 1))" }}
                            className={`text-center xl:text-5xl  2xl:text-6xl text-yellow-500 mb-10`}>
                            Popular Songs From {artistData.name}
                        </h1>
                    </div>
                )}
                <div className="grid grid-cols-3 gap-4">
                    {artistData && artistData.songs && artistData.songs.map((song, index) => (
                        <div key={index}>
                            <div className="iframe-container rounded-xl border border-2 border-[#8BC34A] relative hover:scale-105 transition-all hover:border-green-600 hover:opacity-80"
                                 style={{paddingBottom: '56.25%', filter: "drop-shadow(8px 8px 2px rgba(0, 0, 0, 0.6))"}}>
                                <iframe
                                    className={"-xl"}
                                    src={`https://www.youtube.com/embed/${song.link_id}?autoplay=${playing ? 1 : 0}`}
                                    frameBorder="0"
                                    allowFullScreen
                                    onClick={() => handlePlay(song.link_id)}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default YouTubePlayer;