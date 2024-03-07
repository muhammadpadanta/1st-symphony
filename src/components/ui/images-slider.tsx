import React, { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';

export const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
}: {
  images: string[];
  children: React.ReactNode;
  overlay?: React.ReactNode;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: "up" | "down";
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // autoplay
    let interval: any;
    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(interval);
    };
  }, [images.length, autoplay]);

  const slideVariants = {
    initial: {
      scale: 0,
      opacity: 0,
      rotateX: 45,
    },
    visible: {
      scale: 1,
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 2,
        ease: [0.645, 0.045, 0.355, 1.0],
      },
    },
    upExit: {
      opacity: 1,
      x: "-150%",
      transition: {
        duration: 4,
      },
    },
    downExit: {
      opacity: 1,
      x: "150%",
      transition: {
        duration: 4,
      },
    },
  };

  return (
    <div className="utama bg-transparent justify-center items-center flex">
      <div
        className={cn(
          "overflow-hidden w-[40vw] relative flex items-center justify-center top-0 mt-16 ",
          className
          )}

        >
        {children}
        {overlay && (
          <div
            className={cn("absolute inset-0 z-20", overlayClassName)}
          />
          )}

        <AnimatePresence>
        <motion.div
  key={currentIndex}
  initial="initial"
  animate="visible"
  exit={direction === "up" ? "upExit" : "downExit"}
  variants={slideVariants}
  className="image h-full w-full absolute inset-0 border rounded-xl border-white"
>
  <div className="h-full w-full overflow-hidden rounded-xl relative">
    <Image
      src={images[currentIndex]}
      alt=""
      layout="fill"
      objectFit="cover"
      className="mask-image"
    />
  </div>
</motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};