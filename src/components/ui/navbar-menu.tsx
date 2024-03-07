"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { BsReverseLayoutTextSidebarReverse, BsFillPersonFill } from "react-icons/bs";
import { AnimatePresence } from 'framer-motion';
const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  className,
  labelClassName,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
  className?: string;
  labelClassName?: string;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className={`relative ${typeof className === 'string' ? className : ''}`}>
      <motion.p
        transition={{ duration: 0.3 }}
        className={`cursor-pointer text-white hover:opacity-[0.9] dark:text-white ${labelClassName}`}
      >
        {item}
      </motion.p>
      <AnimatePresence>
        {active === item && (
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 0 }}
            animate={{ opacity: 1, scale: 1, y: -10 }}
            
            transition={transition}
          >
            <div className="absolute top-[calc(100%_+_1.7rem)] left-1/2 transform -translate-x-1/2">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-white dark:bg-white backdrop-blur-sm rounded-2xl  border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
  className,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="w-screen top-0 sticky z-50 bg-[#092327] flex justify-between items-center p-4"
    >
      <a href="https://www.youtube.com" >
      <div className="text-yellow-300 underline flex justify-between dancing-script-font text-3xl hover:opacity-70 transition-all">1st Symphony</div> 
      </a>
      
      <div className="flex justify-between items-center space-x-8 mr-14">
        {children}
      </div>{" "}
      <div className="flex justify-between items-center text-white text-xl mr-10 space-x-8">
        <a href="https://www.youtube.com">
        <BsReverseLayoutTextSidebarReverse />
        </a>

        <a href="https://www.youtube.com" className="text-2xl">
        <BsFillPersonFill />
        </a>
      </div>
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-white dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black "
    >
      {children}
    </Link>
  );
};
