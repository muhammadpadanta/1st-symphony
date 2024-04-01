import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from 'next/link';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let userInfoValue = localStorage.getItem("user-info");

    async function login(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const item = { username, password };

        if (!username || !password) {
            alert("Semua kolom harus diisi");
            return;
        }

        try {
            const response = await fetch("http://localhost:8000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(item),
            });

            if (!response.ok) {
                // Handle HTTP error status
                alert(`HTTP error! Status: ${response.status}`);
                return;
            }

            const result = await response.json();

            if (Array.isArray(result) && result.includes("error")) {
                // Handle wrong credentials
                alert("Password atau Username Salah");
            } else if (typeof result === "object" && result.id) {
                // Handle correct credentials
                localStorage.setItem("user-info", JSON.stringify(result));
                window.location.replace("/shop");

            } else if (typeof result === "object" && result.role) {
                localStorage.setItem("user-info", JSON.stringify(result));
                window.location.replace("/admin");


            } else {
                // Handle unexpected response format
                alert("Unexpected response format");
            }
        } catch (error) {
            console.error("An unexpected error occurred:", error);
            alert("An unexpected error occurred. Please try again.");
        }
    }

    return (
        <div className="flex items-center justify-center h-[90vh] overflow-hidden mt-16 2xl:mt-0">
            <motion.div
                initial={{
                    width: 0,
                    left: 0,
                }}
                animate={{
                    width: "100%",
                    left: 0,
                }}
                transition={{
                    duration: 1.1,
                    ease: "easeInOut",
                    delay: 0.2,
                }}
                className="pattern4 h-full absolute top-0 bottom-0 left-0"
            ></motion.div>

            <div className="s">
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
                        duration: 1.4,
                        ease: "easeInOut",
                        delay: 0.6,
                    }}
                >
                    <div className="grid grid-cols-2 rounded-xl overflow-hidden">
                        <div className="text-5xl font-semibold rounded-tl-xl rounded-bl-xl font-deskripsi text-center bg-gray-500 p-10 backdrop-blur-sm bg-opacity-30 shadow-md text-white transition-all">
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
                                    duration: 1.8,
                                    ease: "easeInOut",
                                    delay: 1.1,
                                }}
                            >
                                <h2 className="new-rocker-regular">
                                    Welcome to <p className="bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent " >1st Symphony</p>
                                </h2>

                                <div className="gambar mt-10 ">
                                    <Image
                                        width={300}
                                        height={300}
                                        className="object-cover h-80 w-full "
                                        src="https://s12.gifyu.com/images/SV4lH.png"
                                        alt=""
                                    />
                                </div>
                            </motion.div>
                        </div>

                        <div className="p-8  bg-[#2e3239] bg-opacity-20 backdrop-blur-lg  rounded-tr-xl rounded-br-xl new-rocker-regular ">
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
                                    duration: 1.5,
                                    ease: "easeInOut",
                                    delay: 1.3,
                                }}
                            >
                                <h2 className="text-2xl font-semibold mb-6 italic font-deskripsi text-center mt-5  text-white ">
                                    Please Login with your account!
                                </h2>
                            </motion.div>

                            <hr className="border-dashed " />
                            <form onSubmit={login}>
                                <div className="mb-4 mt-10">
                                    <motion.div
                                        initial={{
                                            x: -60,
                                            opacity: 0,
                                        }}
                                        animate={{
                                            x: 0,
                                            opacity: 1,
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            ease: "easeInOut",
                                            delay: 1.5,
                                        }}
                                    >
                                        <label
                                            htmlFor="username"
                                            className="block text-white mb-2 text-md font-deskripsi"
                                        >
                                            Username
                                        </label>
                                    </motion.div>

                                    <motion.div
                                        initial={{
                                            x: 80,
                                            opacity: 0,
                                        }}
                                        animate={{
                                            x: 0,
                                            opacity: 1,
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            ease: "easeInOut",
                                            delay: 1.8,
                                        }}
                                    >
                                        <input
                                            type="text"
                                            id="username"
                                            name="username"
                                            onChange={(e) => setUsername(e.target.value)}
                                            className="w-full text-white p-2 px-3 rounded-xl shadow-md bg-gray-800 placeholder-gray-300 font-deskripsi outline-none "
                                            placeholder="Enter your username"
                                        />
                                    </motion.div>
                                </div>

                                <div className="mb-4">
                                    <motion.div
                                        initial={{
                                            x: -60,
                                            opacity: 0,
                                        }}
                                        animate={{
                                            x: 0,
                                            opacity: 1,
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            ease: "easeInOut",
                                            delay: 1.5,
                                        }}
                                    >
                                        <label
                                            htmlFor="password"
                                            className="block text-white mb-2 text-md font-deskripsi"
                                        >
                                            Password
                                        </label>
                                    </motion.div>

                                    <motion.div
                                        initial={{
                                            x: 80,
                                            opacity: 0,
                                        }}
                                        animate={{
                                            x: 0,
                                            opacity: 1,
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            ease: "easeInOut",
                                            delay: 1.8,
                                        }}
                                    >
                                        <input
                                            type="password"
                                            id="password"
                                            name="password"
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="w-full text-white p-2 px-3 rounded-xl shadow-md bg-gray-800 placeholder-gray-300 font-deskripsi outline-none "
                                            placeholder="Enter your password"
                                        />
                                    </motion.div>
                                </div>

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
                                        duration: 1.5,
                                        ease: "easeInOut",
                                        delay: 1.8,
                                    }}
                                >
                                    <button

                                        type="submit"
                                        className="w-full bg-gray-800 font-deskripsi backdrop-blur-sm bg-opacity-30 text-white p-2 rounded hover:bg-gray-600 mt-10 transition-all"
                                    >
                                        Login
                                    </button>
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
                                        delay: 3.0,
                                    }}
                                >
                                    <p className="font-deskripsi text-white mt-5 flex justify-center">
                                        Not Have one?
                                        <Link
                                            href="/register"
                                            className="text-blue-300 underline ml-1 hover:animate-pulse"
                                        >
                                            Register here!
                                        </Link>
                                    </p>
                                </motion.div>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Login;
