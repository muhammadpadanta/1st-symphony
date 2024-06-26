"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HomeParallax = ({
                                 artist,
}: {
    artist: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = artist.slice(0, 5);
  const secondRow = artist.slice(5, 10);
  const thirdRow = artist.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };


  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className=" h-[400vh] 2xl:h-[300vh] py-40 overflow-hidden relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((artist) => (
              <ProductCard
                  artist={artist}
                  reverse={false}
                  key={artist.title}
              />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((artist) => (
              <ProductCard
                  artist={artist}
                  reverse={true}
                  key={artist.title}
              />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((artist) => (
              <ProductCard
                  artist={artist}
                  reverse={false}
                  key={artist.title}
              />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
      <>
          <div className="max-w-7xl relative mx-auto  px-4 w-full  left-0 top-0 ">
              <h1
                  style={{filter: "drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.8))"}}
                  className="text-8xl font-bold text-prime pt-20 md:pt-40">
                  Your Gateway to Unforgettable Concerts
              </h1>
              <p
                  style={{filter: "drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.8))"}}
                  className="max-w-2xl md:text-2xl text-second ">
                  Welcome to <span
                  className="accent-primary">1st Symphony</span>,
                  your go-to destination for purchasing music concert tickets online!
                  Browse our wide selection of concerts, from rock to pop to jazz, and secure your tickets with ease.
                  With a straightforward booking process and reliable customer support, getting your tickets has never
                  been simpler.
              </p>
          </div>




      </>


  );
};

export const ProductCard = ({
                                artist,
                                reverse = false,
                            }: {
    artist: {
        title: string;
        link: string;
        thumbnail: string;
    };
    reverse?: boolean;
}) => {
    const {scrollYProgress} = useScroll({
        offset: ["start start", "end start"],
    });

    const springConfig = {stiffness: 300, damping: 30, bounce: 100};

    const translate = useSpring(
        useTransform(scrollYProgress, [0, 1], reverse ? [0, -1000] : [0, 1000]),
        springConfig
    );
    return (
        <motion.div
            style={{
                x: translate,
                filter: "drop-shadow(10px 10px 4px rgba(0, 0, 0, 0.8))"
            }}
            whileHover={{
                y: -20,
            }}
            key={artist.title}
            className="group/product h-96 w-[30rem] relative flex-shrink-0  "

        >

            <Image
                src={artist.thumbnail}
                height="600"
                width="600"
                className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={artist.title}
          loading="lazy"
        />

      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none transition-all"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white new-rocker-regular transition-all">
        {artist.title}
      </h2>
    </motion.div>
  );
};
