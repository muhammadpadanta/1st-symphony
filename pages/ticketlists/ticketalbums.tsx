import {songs} from "@/constants";
import '../../styles/twclass.css'
import React, {useEffect, useState} from "react";
import {PauseCircleIcon, PlayCircleIcon} from "@heroicons/react/20/solid";


export default function TicketAlbums() {

    const [currentSongIndex, setCurrentSongIndex] = useState(-1); // Add this line
    const [play, setPlay] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const musicRefs = songs.map(() => React.createRef<HTMLAudioElement>());
    const MAX = 20;

    function toggleAudio(index: number): void {
        if (play && currentSongIndex === index) {
            musicRefs[index].current!.pause();
            setPlay(false);
        } else {
            if (currentSongIndex !== -1) {
                musicRefs[currentSongIndex].current!.pause();
            }
            musicRefs[index].current!.play();
            setPlay(true);
            setCurrentSongIndex(index); // Add this line
        }
    }

    function handleVolume(e: React.ChangeEvent<HTMLInputElement>, index: number): void {
        const { value } = e.target;
        musicRefs[index].current!.volume = Number(value) / MAX;
    }

    function handleTimeChange(e: React.ChangeEvent<HTMLInputElement>, index: number): void {
        const { value } = e.target;
        musicRefs[index].current!.currentTime = Number(value);
        setCurrentTime(Number(value)); // Add this line
    }



    useEffect(() => {
        const currentMusicRef = musicRefs.find(ref => ref.current && !ref.current.paused);

        if (currentMusicRef?.current) {
            currentMusicRef.current.ontimeupdate = () => {
                setCurrentTime(currentMusicRef.current?.currentTime || 0);
                setDuration(currentMusicRef.current?.duration || 0);
            };
        }
    }, [play, musicRefs, duration]);

    return (
        <div>
            <p className=" font-semibold 2xl:text-8xl xl:text-6xl flex justify-center text-white 2xl:pt-20 2xl:mt-20 xl:pt-5 xl:mt-5 animate-bounce ">
                Checkout the Album!
            </p>

            <div className="ticketAlbumsScreenContainer ">

                <div
                    className="albumsContainer"
                    style={{filter: "drop-shadow(1px 1px 10px rgba(180, 180, 180, 0.7))"}}
                >

                    <div
                        className="ticketAlbumsGridContainer pattern1">
                        <p
                            style={{filter: "drop-shadow(8px 8px 2px rgba(0, 0, 0, 1))"}}
                            className="ticketAlbumsTitle">Popular
                            Album</p>
                        <p
                            style={{filter: "drop-shadow(8px 8px 2px rgba(0, 0, 0, 1))"}}
                            className="ticketAlbumsArtistName">(Artist:
                            Tulus)</p>

                        <div className="">

                            <div className="ticketAlbumsSongList"
                                 style={{maxHeight: '25rem'}}>
                                <dl className="ticketAlbumsSongWrapper">
                                    {songs.map((songs, index) => (
                                        <div key={songs.name} className="relative pl-9 ">
                                            <dt className="inline ">

                                                <div
                                                    className="ticketAlbumsSongName">
                                                    <div className="flex flex-row">
                                                        <button onClick={() => toggleAudio(index)}
                                                                className="ticketAlbumsSongIcon">
                                                            {play && currentSongIndex === index ? (
                                                                <PauseCircleIcon className="h-6 w-6"
                                                                                 aria-hidden="true"/>
                                                            ) : (
                                                                <PlayCircleIcon className="h-6 w-6" aria-hidden="true"/>
                                                            )}
                                                        </button>
                                                        {songs.name}
                                                    </div>

                                                    <div
                                                        className="flex items-center space-x-10 ">


                                                        <div
                                                            className="ticketAlbumsSongDuration">
                                                            <div className="">
                                                                <input
                                                                    type="range"
                                                                    min={0}
                                                                    max={duration}
                                                                    value={currentSongIndex === index ? currentTime : 0}
                                                                    onChange={(e) => handleTimeChange(e, index)}
                                                                    className="no-thumb"
                                                                />

                                                            </div>

                                                            <div>
                                                                <div>{`${Math.floor(currentTime / 60)}:${Math.floor(currentTime % 60)} / ${Math.floor(duration / 60)}:${Math.floor(duration % 60)}`}</div>
                                                            </div>


                                                        </div>
                                                        <div
                                                            className="ticketAlbumsIconHoverEffect">

                                                            {songs.volumeIcon}
                                                            <input type="range"
                                                                   min={0}
                                                                   max={MAX}
                                                                   onChange={(e) => handleVolume(e, index)}
                                                                   className="range range-error range-xs transition-all"/>
                                                        </div>
                                                    </div>
                                                    <audio ref={musicRefs[index]} loop src={songs.music}/>
                                                </div>


                                            </dt>
                                            {' '}

                                            <hr className="w-full border-t border-red-400 "/>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </div>

    )
}
