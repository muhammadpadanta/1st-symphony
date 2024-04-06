
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
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
