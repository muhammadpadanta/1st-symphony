import React from 'react';
import { motion } from "framer-motion";
import { FiEye, FiEyeOff } from "react-icons/fi";

interface PasswordFieldProps {
    label: string;
    value: string;
    setValue: (value: string) => void;
    placeholder: string;
    initialX: number;
    delay: number;
    togglePasswordVisibility: () => void;
    required?: boolean; // Add this line
}
const PasswordField: React.FC<PasswordFieldProps> = ({ label, value, setValue, placeholder, initialX, delay, togglePasswordVisibility, required }) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleTogglePasswordVisibility = () => {
        togglePasswordVisibility();
        setShowPassword(prevState => !prevState);
    };

    return (
        <div className="mb-4 relative">
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
                <label className="block text-white mb-2 text-md">
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
                    type={showPassword ? "text" : "password"}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="inputBox"
                    placeholder={placeholder}
                    required={required}
                />

                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 2.0,
                        ease: "easeInOut",
                        delay: 3.0,
                    }}
                >
                    <div
                        onClick={handleTogglePasswordVisibility}
                        className="absolute inset-y-0 pt-10 right-0 pr-3 flex items-center cursor-pointer"
                    >
                        {showPassword ? <FiEyeOff className="text-white"/> : <FiEye className="text-white"/>}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default PasswordField;
