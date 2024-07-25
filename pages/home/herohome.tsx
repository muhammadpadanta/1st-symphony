"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { ButtonBorder } from "@/components/ui/btn-border";
import { HomeSlider } from "@/components/ui/home-slider";
import Link from "next/link";
import { heroWords, heroImages } from "@/constants";
import "../../styles/twclass.css";
import Modal from "react-modal";
import Image from "next/image";
import Button from "@/components/btn";

export default function HeroHome() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <video
        src="/videos/herohome.webm"
        playsInline
        autoPlay
        muted
        loop
        className="absolute w-full h-full object-cover brightness-50 opacity-50"
        disablePictureInPicture
        preload="auto"
      />
      <div className="w-full p-4 absolute 2xl:top-48 xs:top-20 xl:top-32">
        <div className="flex xs:flex-col lg:flex-row justify-center items-center space-y-5 px-16 xl:ml-20 xl:pl-20 2xl:pl-24 2xl:ml-24 ">
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
            ></motion.div>
          </HomeSlider>

          <div className="w-full flex flex-col justify-center items-center">
            <div className="z-10 text-center">
              <p className="text-neutral-500 dark:text-neutral-200 text-lg text-center">
                The road to freedom starts from here
              </p>
              <div
                style={{ filter: "drop-shadow(8px 8px 2px rgba(0, 0, 0, 1))" }}
                className="pb-10 pt-5 "
              >
                <div>
                  <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 xs:text-[1rem] xl:text-[3rem] 2xl:text-[4rem] drop-shadow-xl">
                    We are ready to{" "}
                  </span>
                </div>
                <div>
                  <span className="bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent xs:text-[1rem] xl:text-[3rem]  2xl:text-[4rem] drop-shadow-xl">
                    Tune in With You
                  </span>
                </div>
              </div>
            </div>

            <div className="btnborder">
              <Link href="/concerts">
                <ButtonBorder borderRadius="1.75rem" className="btnContainer">
                  <span className="animate-pulse">GET TICKET</span>
                </ButtonBorder>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
