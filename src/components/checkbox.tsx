import { motion } from "framer-motion";
import React from "react";
interface CheckboxProps {
  id: string;
  className: string;
  label: string;
  initialX: number;
  delay: number;
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  className,
  label,
  initialX,
  delay,
}) => {
  return (
    <motion.div
      initial={{
        x: initialX,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 2.0,
        ease: "easeInOut",
        delay: delay,
      }}
      className="flex justify-center items-center"
    >
      <input required type="checkbox" id={id} className={className} />
      <label className="text-white ml-2 font-mono 2xl:text-lg text-sm mt-1">
        {label}
      </label>
    </motion.div>
  );
};

export default Checkbox;
