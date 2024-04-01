"use client";
import React from "react";
import Link from 'next/link';
import { AnimatePresence, motion } from "framer-motion";
import { ArtistListUi } from "@/components/ui/artist-list";
import {artistData } from "@/constants";
import { Icon } from "@/components/icon/icon";
function getRandomColor() {
    return [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];
}


export function ArtistList() {

    return (
        <div
            className="flex flex-col items-center justify-center mx-auto  "
            id="artistList"
        >

            <div className="flex  justify-center items-center mt-20">
                <h1 className="text-4xl font-bold new-rocker-regular bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent px-5">Artist List</h1>

                <div
                    className=" p-10 h-[70vh] border-2 border-r-red-400 border-l-red-400 bg-[#2e3239] bg-opacity-20 backdrop-blur-lg  flex flex-wrap items-center justify-center w-[70vw] 2xl:w-full gap-8  mx-auto overflow-auto rounded-xl"
                    style={{ filter: "drop-shadow(8px 8px 2px rgba(0, 0, 0, 1))"}}
                >

                    {artistData.map((card, index) => (
                        <Link key={index} href="/ticketslist" legacyBehavior>
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

