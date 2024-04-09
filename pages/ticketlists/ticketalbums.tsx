
import {songs} from "@/constants";
import '../../styles/twclass.css'
import React, {useRef, useState, useEffect} from "react";
import {PauseCircleIcon, PlayCircleIcon} from "@heroicons/react/20/solid";


export default function TicketAlbums() {

    const [play, setPlay] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const oceanRef = useRef<HTMLAudioElement>(null);
    const MAX = 20;

    function toggleAudio(): void {
        if (play) {
            oceanRef.current?.pause();
            setPlay(false);
        } else {
            void oceanRef.current?.play();
            setPlay(true);
        }
    }

    function handleVolume(e: React.ChangeEvent<HTMLInputElement>): void {
        const { value } = e.target;
        const volume = Number(value) / MAX;
        if (oceanRef.current) {
            oceanRef.current.volume = volume;
        }
    }

    function handleTimeChange(e: React.ChangeEvent<HTMLInputElement>): void {
        const { value } = e.target;
        if (oceanRef.current) {
            oceanRef.current.currentTime = Number(value);
            setCurrentTime(Number(value));
        }
    }




    useEffect(() => {
        if (oceanRef.current) {
            oceanRef.current.ontimeupdate = () => {
                setCurrentTime(oceanRef.current?.currentTime || 0);
            };
            oceanRef.current.onloadedmetadata = () => {
                setDuration(oceanRef.current?.duration || 0);
            };
        }
    }, []);

    return (
        <div>
            <p className=" font-semibold text-8xl flex justify-center text-white pt-10 animate-bounce">
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
                                    {songs.map((songs) => (
                                        <div key={songs.name} className="relative pl-9 ">
                                            <dt className="inline ">

                                                <div
                                                    className="ticketAlbumsSongName">
                                                    <div className="flex flex-row">
                                                        <button
                                                            onClick={toggleAudio}
                                                            className="ticketAlbumsSongIcon">
                                                            {!play ? (
                                                                <PlayCircleIcon className="h-6 w-6" aria-hidden="true"/>
                                                            ) : (
                                                                <PauseCircleIcon className="h-6 w-6"
                                                                                 aria-hidden="true"/>
                                                            )}
                                                        </button>
                                                        {songs.name}
                                                    </div>

                                                    <div
                                                        className="flex items-center space-x-10 ">


                                                        <div
                                                            className="ticketAlbumsSongDuration">
                                                            <div className="">
                                                                <input type="range"
                                                                       min={0}
                                                                       max={duration}
                                                                       value={currentTime}
                                                                       onChange={(e) => handleTimeChange(e)}
                                                                       className="no-thumb"/>

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
                                                                   onChange={(e) => handleVolume(e)}
                                                                   className="range range-error range-xs transition-all"/>
                                                        </div>
                                                    </div>
                                                    <audio ref={oceanRef} loop src={"/music/Monokrom.mp3"}/>
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
