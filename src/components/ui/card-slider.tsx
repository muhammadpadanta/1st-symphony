"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";
import Image from 'next/image';

export const CardSlider = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    imageUrl: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false); 
  useEffect(() => {
    function addAnimation() {
      if (containerRef.current && scrollerRef.current) {
        const scrollerContent = Array.from(scrollerRef.current.children);
  
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });
  
        getDirection();
        getSpeed();
        setStart(true);
      }
    }
  
    addAnimation();
  }, []);

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    // scroll speed
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-[80vw]  overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
 {/* Container */}
{items.map((item, idx) => (
  <li
    className="w-[20vw] max-w-full relative rounded-2xl flex-shrink-0 transition-all group"
    key={item.name}
  >
    {/* Image setting */}
    <blockquote>
      <div
        aria-hidden="true"
        className="user-select-none border -z-1 pointer-events-none absolute  -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
      ></div>
     {/* Change this img tag to use the Next.js Image component */}
<Image src={item.imageUrl} alt={item.name} width={500} height={300} className="object-cover group-hover:opacity-40 group-hover:scale-105 group-hover:filter group-hover:blur-sm transition-all" />
    </blockquote>
    {/* Text to display on hover */}
    <div className="absolute inset-0 flex items-center justify-center z-50 opacity-0 group-hover:opacity-100 group-hover:scale-110  transition-all">
      <p className="text-white">{item.name}</p>
    </div>
  </li>
))}
      </ul>
    </div>
  );
};
