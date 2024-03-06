"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import { Boxes } from "@/components/ui/background-boxes";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import {BtnBorder} from "./btnborder";
import { ImagesSlider } from "@/components/ui/images-slider";


export function Hero() {
    const words = [
        {
            text: "We Are Ready To",
            className: "bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 danta1 text-4xl 2xl:text-[3rem]",
        },

        {
            text: "Tune in with You.",
            className: "bg-clip-text text-transparent bg-gradient-to-t from-[#162a85] to-blue-300 danta1 text-4xl 2xl:text-[3rem]",
        },
        ];
    
    const images = [
        "https://www.desktopbackground.org/p/2015/08/05/990227_coldplay-hd-wallpapers-4k-wallpapers_2560x1600_h.jpg",
        "https://assets.teenvogue.com/photos/63b98a0effed78bd420c4383/16:9/w_2560%2Cc_limit/YOASOBI_A%25E5%2586%2599_2021_12.jpg",
        "https://media.suara.com/pictures/970x544/2022/03/17/39060-tulus-instagramattulusm.jpg",
        ];
    
    
    
    return (
        
        <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
            <video
                src="/epicvid.mp4"
                playsInline
                autoPlay
                muted
                loop
                className="absolute w-full h-full object-cover z-1 brightness-50 opacity-25"
            />
            <div className="w-full mx-auto p-4 ">
                
                
                    
                
                <div className="flex justify-center items-center space-x-10">
                    
                    <div className="sliderimage w-1/2">
                        
                        <ImagesSlider className="h-[40vh] top-2" images={images}>
                            <motion.div
                                initial={{
                                opacity: 0,
                                    y: -80,
                                }}
                                animate={{
                                opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                duration: 2,
                                }}
                                className="z-30 flex flex-col justify-center items-center"
                                >
                            </motion.div>
                            
                            
                        </ImagesSlider>
                    </div>
                    
                    
                    <div className="w-1/2 flex flex-col justify-center items-center">
                        <div className="b z-10">
                            <p className="text-neutral-500 dark:text-neutral-200 text-xs sm:text-base text-center  merienda-font">
                                The road to freedom starts from here
                            </p>
                            <TypewriterEffectSmooth words={words} />
                        </div>
                        <div className="btnborder">
                            <BtnBorder />
                        </div>
                    
                    </div>
                    
                    
                    
                    
                </div>
                
                
                
                
            </div>
            
        </div>
        
        );
}
