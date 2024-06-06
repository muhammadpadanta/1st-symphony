
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { AnimatePresence } from 'framer-motion';

interface HoveredLinkProps {
    href: string;
    children: React.ReactNode;
}

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
                           itemId,
                           children,
                           className,
                           labelClassName,
                         }: {
  setActive: (item: string) => void;
  active: string | null;
  item: string | React.ReactNode;
  itemId: string; // New prop
  children?: React.ReactNode;
  className?: string;
  labelClassName?: string;
}) => {
  return (
      <div onMouseEnter={() => setActive(itemId)} className={`relative ${ className === 'string' ? className : ''}`}>
        <motion.p
            transition={{ duration: 0.3 }}
            className={`cursor-pointer text-white hover:opacity-[0.9] dark:text-white ${labelClassName}`}
        >
          {item}
        </motion.p>
        <AnimatePresence>
          {active === itemId && ( // Use itemId here
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 0 }}
            animate={{ opacity: 1, scale: 1, y: -10 }}

            transition={transition}
          >
            <div className="absolute top-[calc(100%_+_1.7rem)] left-1/2 transform -translate-x-1/2">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-gray-800 bg-opacity-70  rounded-2xl  border border-gray-300 shadow-xl"
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

  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
  className?: string;
}) => {
  return (


      <div className="flex justify-between items-center space-x-8 mr-14">
        {children}
      </div>



  );
};


export function HoveredLink({ href, children }: HoveredLinkProps) {
    return (
        <Link href={href} legacyBehavior>
            <a className={`text-white cursor-pointer hover:scale-110 hover:text-[#8BC34A] transition-all`}>
                {children}
            </a>
        </Link>
    );
}
