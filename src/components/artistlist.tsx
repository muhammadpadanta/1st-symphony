"use client";
import React from "react";
import Link from 'next/link';
import { AnimatePresence, motion } from "framer-motion";
import { ArtistListUi } from "@/components/ui/artist-list";

function getRandomColor() {
    return [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];
}


export function ArtistList() {

    const artistData = [
        {
            title: "Twice",
            icon: <MusicIcon />,
            image: "https://lastfm.freetls.fastly.net/i/u/770x0/d98b6e954551c972386080b98ad7b60d.jpg#d98b6e954551c972386080b98ad7b60d",
        },
        {
            title: "Virgoun",
            icon: <MusicIcon />,
            image: "https://lastfm.freetls.fastly.net/i/u/770x0/462378a051090cdde996f5ffd54380a3.jpg#462378a051090cdde996f5ffd54380a3",
        },
        {
            title: "Mahalini",
            icon: <MusicIcon />,
            image: "https://lastfm.freetls.fastly.net/i/u/770x0/e319c808bb2538b77e02cb667c1f7394.jpg#e319c808bb2538b77e02cb667c1f7394",
        },
        {
            title: "BTS",
            icon: <MusicIcon />,
            image: "https://lastfm.freetls.fastly.net/i/u/770x0/0b1292a13c9a56b54886ebd58d452122.jpg#0b1292a13c9a56b54886ebd58d452122",
        },


        {
            title: "Yoasobi",
            icon: <MusicIcon />,
            image: "https://lastfm.freetls.fastly.net/i/u/770x0/76b01e2f38be328ea61dd752e1c69d63.jpg#76b01e2f38be328ea61dd752e1c69d63",
        },
        {
            title: "Newjeans",
            icon: <MusicIcon />,
            image: "https://lastfm.freetls.fastly.net/i/u/770x0/0970eefb5a3f0444f85429c2ddb5907c.jpg#0970eefb5a3f0444f85429c2ddb5907c",
        },
        {
            title: "Armada",
            icon: <MusicIcon />,
            image: "https://lastfm.freetls.fastly.net/i/u/770x0/2ecde8495a2b9b3dddef9e0afaf98897.jpg#2ecde8495a2b9b3dddef9e0afaf98897",
        },
        {
            title: "Blackpink",
            icon: <MusicIcon />,
            image: "https://lastfm.freetls.fastly.net/i/u/770x0/9663125192c3ba383344d0cbc5107f98.jpg#9663125192c3ba383344d0cbc5107f98",
        },

        {
            title: "Raisa",
            icon: <MusicIcon />,
            image: "https://lastfm.freetls.fastly.net/i/u/770x0/f1ff45f4bb60312b3da0749d88a820e8.jpg#f1ff45f4bb60312b3da0749d88a820e8",
        },








    ];

    return (
        <div
            className="flex flex-col items-center justify-center mx-auto  "
            id="artistList"
        >

            <div className="flex  justify-center items-center mt-20">
                <h1 className="text-4xl font-bold new-rocker-regular bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">Artist List</h1>

                <div
                    className=" p-10 h-[70vh] border-2 border-r-red-400 border-l-red-400 bg-[#2e3239] bg-opacity-20 backdrop-blur-lg  flex flex-wrap items-center justify-center w-full gap-8  mx-auto overflow-auto rounded-xl"
                    style={{ filter: "drop-shadow(8px 8px 2px rgba(0, 0, 0, 1))"}}
                >

                    {artistData.map((card, index) => (
                        <Link key={index} href="/tickets" legacyBehavior>
                            <div className="min-w-[30%] cursor-pointer">
                                <Card title={card.title} icon={card.icon} image={card.image}>
                                    <ArtistListUi
                                        animationSpeed={3}
                                        containerClassName="bg-transparent"
                                        colors={[
                                            getRandomColor(),
                                            getRandomColor(),
                                        ]}
                                        dotSize={2}
                                    />
                                </Card>
                            </div>
                        </Link>
                    ))}

                </div>

            </div>


        </div>


    );
}

const Card = ({
                  title,
                  icon,
                  image,
                  children,
              }: {
    title: string;
    icon: React.ReactNode;
    image: string;
    children?: React.ReactNode;
}) => {
    const [hovered, setHovered] = React.useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="border-2 border-gray-500 group/canvas-card flex items-center justify-center max-w-sm w-full mx-auto p-4 h-[30rem] relative sm:h-auto sm:min-h-[30rem]"

            style={{backgroundImage: `url("${image}")`, backgroundSize: 'cover', filter: "drop-shadow(8px 8px 2px rgba(0, 0, 0, 1))"}}
        >
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-white"/>
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-white"/>
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-white" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-white" />

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="h-full w-full absolute inset-0"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-20">
                <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
                    {icon}
                </div>
                <h2 className=" text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-white mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
                    {title}
                </h2>
            </div>
        </div>
    );
};

const MusicIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" className="w-10 h-10" fill="none" style={{filter: "drop-shadow(4px 4px 2px rgba(0, 0, 0, 1))"}}>
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#F59E0B"/>
                    <stop offset="35%" stopColor="#F59E0B"/>
                    <stop offset="65%" stopColor="#EC4899"/>
                </linearGradient>
            </defs>
            <path strokeLinecap="round" strokeLinejoin="round" stroke="url(#gradient)"
                  d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.660a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.660A2.25 2.25 0 0 0 9 15.553Z"/>
        </svg>


    );
};

export const Icon = ({className, ...rest}: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
            {...rest}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6"/>
        </svg>
    );
};
