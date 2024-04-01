
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from 'next/link';
import { FiEye, FiEyeOff } from "react-icons/fi";


function Register() {
    const [username, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(showPassword => !showPassword);
    };
    async function signUp(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!(document.getElementById("cek") as HTMLInputElement).checked) {
            alert("Please check the checkbox First!");
            return;
        }

        if (!username || !email || !password) {

            alert("All Required information must be filled!");
            return;
        }

        let item = { username, email, password };
        let result = await fetch("http://localhost:8000/api/register", {
            method: "POST",
            body: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        window.location.replace("/login");
    }

    return (
        <div className="flex justify-center h-full overflow-hidden new-rocker-regular mt-16 py-10 2xl:mt-0 ">

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 1.2,
                    ease: "easeInOut",
                    delay: 0.6

            }}
                className="w-full "
            >
                <div className="hero min-h-screen ">
                    <div className=" p-8 rounded w-[40vw] bg-[#2e3239] bg-opacity-20 backdrop-blur-lg z-0 ">
                        <motion.div
                            initial={{
                                y: -80,
                                opacity: 0,
                            }}
                            animate={{
                                y: 0,
                                opacity: 1,
                            }}
                            transition={{
                                duration: 2.6,
                                ease: "easeInOut",
                                delay: 0.6,
                            }}
                        >
                            <h2 className="text-4xl font-semibold mb-6 italic font-deskripsi text-center text-white ">
                                Lets Register Your 1st Symphony Account!
                            </h2>
                        </motion.div>
                        <hr className="border-dashed " />
                        <form onSubmit={signUp}>
                            <motion.div
                                initial={{
                                    x: -80,
                                    opacity: 0,
                                }}
                                animate={{
                                    x: 0,
                                    opacity: 1,
                                }}
                                transition={{
                                    duration: 2.0,
                                    ease: "easeInOut",
                                    delay: 0.6,
                                }}
                            >
                                <div className="mb-4 mt-5">
                                    <label className="block text-2xl text-white mb-2 text-md ">
                                        Username
                                    </label>
                                    <input
                                        id="username"
                                        type="text"
                                        value={username}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full text-white p-3 px-3 rounded-xl shadow-md bg-gray-700 placeholder-gray-300 outline-none  "
                                        placeholder="Choose Your Username"
                                    />
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{
                                    x: -80,
                                    opacity: 0,
                                }}
                                animate={{
                                    x: 0,
                                    opacity: 1,
                                }}
                                transition={{
                                    duration: 2.0,
                                    ease: "easeInOut",
                                    delay: 0.6,
                                }}
                            >
                                <div className="mb-4">
                                    <label className="block text-2xl text-white  text-md mb-2">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-3 p-3 text-white rounded-xl bg-gray-700 shadow-md placeholder-gray-300 outline-none"
                                        placeholder="Enter Your Valid E-mail address"
                                    />
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{
                                    x: -80,
                                    opacity: 0,
                                }}
                                animate={{
                                    x: 0,
                                    opacity: 1,
                                }}
                                transition={{
                                    duration: 2.0,
                                    ease: "easeInOut",
                                    delay: 0.6,
                                }}
                            >
                                <div className="mb-4 relative">
                                    <label className="block text-2xl text-white  text-md mb-2">
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full px-3 p-3 rounded-xl text-white bg-gray-700 shadow-md placeholder-gray-300 outline-none"
                                        placeholder="Enter Your password."
                                    />
                                    <div
                                        onClick={togglePasswordVisibility}
                                        className="absolute inset-y-0 pt-10 right-0 pr-3 flex items-center cursor-pointer"
                                    >
                                        {showPassword ? <FiEyeOff/> : <FiEye/>}
                                    </div>
                                </div>
                            </motion.div>

                            <div className="flex">
                                <input
                                    required
                                    type="checkbox"
                                    name=""
                                    id="cek"
                                    className="checkbox checkbox-accent border-2"
                                />
                                <label className="text-white ml-2 font-mono">
                                    I Agree to the Terms & Conditions of 1st Symphony.
                                </label>
                            </div>

                            <motion.div
                                initial={{
                                    x: -80,
                                    opacity: 0,
                                }}
                                animate={{
                                    x: 0,
                                    opacity: 1,
                                }}
                                transition={{
                                    duration: 2.0,
                                    ease: "easeInOut",
                                    delay: 1.6,
                                }}
                            >
                                <Link href="/login">
                                    <button
                                        type="submit"

                                        className="w-full bg-gray-700 backdrop-blur-sm bg-opacity-30 text-white p-2 rounded hover:bg-gray-600 mt-10 transition-all"
                                    >
                                        Register
                                    </button>
                                </Link>
                            </motion.div>

                            <motion.div
                                initial={{
                                    y: 80,
                                    opacity: 0,
                                }}
                                animate={{
                                    y: 0,
                                    opacity: 1,
                                }}
                                transition={{
                                    duration: 1.0,
                                    ease: "easeInOut",
                                    delay: 2.0,
                                }}
                            >
                                <p className="text-white mt-5 flex justify-center">
                                    Have an Account?{" "}
                                    <Link
                                        href="/login"
                                        className="text-blue-400 underline ml-1 hover:animate-bounce transition-all"
                                    >
                                        LOGIN Here!
                                    </Link>
                                </p>
                            </motion.div>
                        </form>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default Register;
