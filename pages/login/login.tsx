import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from 'next/link';
import '../../styles/twclass.css'
import InputField from "@/components/inputfield";
import Button from "@/components/btn";
import PasswordField from "@/components/inputfieldpw";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let userInfoValue = localStorage.getItem("user-info");

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(showPassword => !showPassword);
    };

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
        <motion.div
            initial={{
                y: 600,
                opacity: 0,
            }}
            animate={{
                y: 0,
                opacity: 1,
            }}
            transition={{
                duration: 2.6,
                ease: "easeInOut",
                delay: 0.2,
            }}

            className="loginContainer wp3">

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
                     <div className="boxContainer">

                        <div className="leftContainer">
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
                                <h1>
                                    Welcome to <p className="leftTitle" >1st Symphony</p>
                                </h1>


                                    <Image
                                        width={300}
                                        height={300}
                                        className="leftImage"
                                        src="/images/loginLeftIcon.png"
                                        alt=""
                                    />

                            </motion.div>
                        </div>

                        <div className="rightContainer">
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
                                <h2 className="rightTitle">
                                    Please Login with your account!
                                </h2>
                            </motion.div>
                            <hr/>

                            <form onSubmit={login} className="mt-5">

                                <InputField
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="Enter your username"
                                    label="Username"
                                    initialX={-60}
                                    delay={1.5}
                                />

                                <PasswordField
                                    label="Password"
                                    value={password}
                                    setValue={setPassword}
                                    placeholder="Enter Your password."
                                    initialX={-80}
                                    delay={1.5}
                                    togglePasswordVisibility={togglePasswordVisibility}
                                />

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
                                    <Button type="submit" className="btnBack" href="/">
                                        Back
                                    </Button>
                                    <Button type="submit" className="btnPrimary">
                                        Login
                                    </Button>

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
                                    <p className="bottomText1">
                                        Not Have one?
                                        <Link
                                            href="/register"
                                            className="bottomText2"
                                        >
                                            Register here!
                                        </Link>
                                    </p>
                                </motion.div>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

    );
}

export default Login;
