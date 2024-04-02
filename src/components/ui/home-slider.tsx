import React, { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import { useCallback, } from "react";
import { debounce } from "lodash";


export const HomeSlider = ({
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

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  

  useEffect(() => {
    const handleKeyDown = debounce((event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    }, 100);
  
    window.addEventListener("keydown", handleKeyDown);
  
    // Autoplay logic
    let intervalId: NodeJS.Timeout | undefined;
if (autoplay) {
  intervalId = setInterval(handleNext, 5000); // Change image every 5 seconds
}
  
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (intervalId) {
        clearInterval(intervalId); // Clear interval on component unmount
      }
    };
  }, [handleNext, handlePrevious, autoplay]);

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
      opacity: 0,
      x: "-150%",
      transition: {
        duration: 2,
        ease: [0.645, 0.045, 0.355, 1.0],
      },
    },
    downExit: {
      opacity: 0,
      x: "150%",
      transition: {
        duration: 2,
        ease: [0.645, 0.045, 0.355, 1.0],
      },
    },
  };

  return (
    <div className="bg-transparent justify-center items-center flex"
         style={{ filter: "drop-shadow(8px 8px 2px rgba(0, 0, 0, 1))"}}>
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
  className="image h-full w-full absolute inset-0 border rounded-xl border-red-400"

>
  <div className="h-full w-full overflow-hidden rounded-xl relative ">
    <Image
      src={images[currentIndex]}
      alt=""
      width={1920}
      height={1080}
      className="mask-image object-cover h-full"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  </div>
</motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};