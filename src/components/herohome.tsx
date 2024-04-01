"use client";

import { motion } from "framer-motion";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { ButtonBorder } from "@/components/ui/btn-border";
import { HomeSlider } from "@/components/ui/home-slider";
import Link from 'next/link';
import {heroWords, heroImages} from "@/constants";
export function HeroHome() {

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
                    
                    <div className="">
                        
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
                    
                    
                    <div className="w-1/2 flex flex-col justify-center items-center new-rocker-regular ">
                        <div className="b z-10 ">
                            <p className="text-neutral-500 dark:text-neutral-200 text-xs sm:text-base text-center ">
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
