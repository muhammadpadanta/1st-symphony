"use client";

import { motion } from "framer-motion";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { ButtonBorder } from "@/components/ui/btn-border";
import { HomeSlider } from "@/components/ui/home-slider";
import Link from 'next/link';
import {heroWords, heroImages} from "@/constants";
export default function HeroHome() {

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
                preload="auto"
            />
            <div className="w-full mx-auto p-4 ">

                
                <div className="flex xs:flex-col lg:flex-row justify-center items-center  ">
                    
                    <div className="p-16">
                        
                        <HomeSlider className="h-[40vh] top-2" images={heroImages}>
                            <motion.div
                                initial={{
                                opacity: 0,

                                }}
                                animate={{
                                opacity: 1,

                                }}
                                transition={{
                                duration: 0.5,
                                }}
                                >
                            </motion.div>
                            
                            
                        </HomeSlider>
                    </div>
                    
                    
                    <div className="w-full flex flex-col justify-center items-center new-rocker-regular">
                        <div className="z-10 ">
                            <p className="text-neutral-500 dark:text-neutral-200 text-xs lg:text-base text-center ">
                                The road to freedom starts from here
                            </p>
                            <TypewriterEffectSmooth
                                words={heroWords}
                            />
                        </div >

                        <div className="btnborder ">
                        <Link href="/tickets" >
                <ButtonBorder
                    borderRadius="1.75rem"
                    className="bg-[#0a0a0a]  text-white border-slate-800 z-20 hover:bg-[#092327] hover:text-yellow-300 transition-all text-xl shadow-xl"

                    >
                        <span className="animate-pulse">
                        GET TICKET
                        </span>
                </ButtonBorder>
            </Link>
                        </div>
                    
                    </div>

                </div>

            </div>
            
        </div>
        
        );
}
