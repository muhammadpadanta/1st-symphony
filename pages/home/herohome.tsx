"use client";

import { motion } from "framer-motion";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { ButtonBorder } from "@/components/ui/btn-border";
import { HomeSlider } from "@/components/ui/home-slider";
import Link from 'next/link';
import {heroWords, heroImages} from "@/constants";
import '../../styles/twclass.css'

export default function HeroHome() {

    return (
        
        <div className="heroContainer">
            <video
                src="/epicvid.mp4"
                playsInline
                autoPlay
                muted
                loop
                className="videoContainer"
                disablePictureInPicture
                preload="auto"
            />
            <div className="itemContainer">

                
                <div className="imageSliderContainer">
                        <HomeSlider className="h-[50vh]" images={heroImages}>
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

                    
                    
                    <div className="typewriterContainer">
                        <div className="z-10">
                            <p className="heroText1">
                                The road to freedom starts from here
                            </p>
                            <div
                                style={{filter: "drop-shadow(8px 8px 2px rgba(0, 0, 0, 1))"}}
                                className="pb-10 pt-5 ">
                                <span

                                    className="heroHomeTitleSpan1">
                                We are ready to <span
                                    className="heroHomeTitleSpan2">Tune in With You</span>
                            </span>
                            </div>

                        </div>

                        <div className="btnborder">
                            <Link href="/tickets">
                                <ButtonBorder
                                    borderRadius="1.75rem"
                                    className="btnContainer"

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
