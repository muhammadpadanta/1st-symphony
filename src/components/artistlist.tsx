"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { ArtistListUi } from "@/components/ui/artist-list";

function getRandomColor() {
    return [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];
}


export function ArtistList() {

    const cardData = [
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








    ];

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl  mb-2 new-rocker-regular bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">Find Ticket By Artist</h1>
            <div
                className="py-20 flex flex-wrap items-center justify-center bg-[#0a0a0a] w-full gap-8 mx-auto px-8"
            >
                {cardData.map((card, index) => (
                    <div key={index} className="min-w-[20%]">
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
                ))}
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
            className="border border-white/[0.2] group/canvas-card flex items-center justify-center  max-w-sm w-full mx-auto p-4 h-[30rem] relative"

            style={{backgroundImage: `url("${image}")`, backgroundSize: 'cover'}}
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
                <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-white mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
                    {title}
                </h2>
            </div>
        </div>
    );
};

const MusicIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
             className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z"/>
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
