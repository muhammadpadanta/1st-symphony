import React from 'react';
import { motion } from "framer-motion";
import "../../styles/twclass.css"
interface InputFieldProps {
    id: string;
    name: string;
    label: string;
    type: string;
    placeholder: string;
    initialX: number;
    delay: number;
    value: string; // Add this line
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ label, type, placeholder, initialX, delay, value, onChange, required }) => {
    return (
        <div className="">
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
                    duration: 1.5,
                    ease: "easeInOut",
                    delay: delay,
                }}
            >
                <label
                    className="block text-white mb-2 text-md "
                >
                    {label}
                </label>
            </motion.div>
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
            >
                <input
                    type={type}
                    className="inputBox"
                    placeholder={placeholder}
                    value={value} // Use the value prop here
                    onChange={onChange} // Use the onChange prop here
                    required={required}
                />
            </motion.div>
        </div>
    );
}

export default InputField;