"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import ReactPlayer from 'react-player';
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { ButtonBorder } from "@/components/ui/btn-border";
import { ImagesSlider } from "@/components/ui/images-slider";


export function Hero() {
    const words = [
        {
            text: "We Are Ready To",
            className: "bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-4xl 2xl:text-[3rem] drop-shadow-xl",
        },

        {
            text: "Tune in with You.",
            className: "bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-4xl 2xl:text-[3rem] drop-shadow-xl",
        },
        ];
    
    const images = [
        "https://lastfm.freetls.fastly.net/i/u/770x0/ad255404a818dfbd6b2ccd17bda35988.jpg#ad255404a818dfbd6b2ccd17bda35988",
        "https://lastfm.freetls.fastly.net/i/u/770x0/e8d2cd8575f54ccadb35a5dba78d524a.jpg#e8d2cd8575f54ccadb35a5dba78d524a",
        "https://lastfm.freetls.fastly.net/i/u/770x0/509496d58e48cee9fb27767ff924724a.jpg#509496d58e48cee9fb27767ff924724a",
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
                disablePictureInPicture
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
                    
                    
                    <div className="w-1/2 flex flex-col justify-center items-center new-rocker-regular ">
                        <div className="b z-10 ">
                            <p className="text-neutral-500 dark:text-neutral-200 text-xs sm:text-base text-center ">
                                The road to freedom starts from here
                            </p>
                            <TypewriterEffectSmooth words={words} />
                        </div >

                        <div className="btnborder ">
                        <a href="https://youtube.com" >
                <ButtonBorder
                    borderRadius="1.75rem"
                    className="bg-[#0a0a0a]  text-white border-slate-800 z-20 hover:bg-[#092327] hover:text-yellow-300 transition-all danta text-xl"

                    >
                        <span className="animate-pulse">
                        GET TICKET
                        </span>
                    
                </ButtonBorder>
            </a>
                        </div>
                    
                    </div>
                    
                    
                    
                    
                </div>
                
                
                
                
            </div>
            
        </div>
        
        );
}
