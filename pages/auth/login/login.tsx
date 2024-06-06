
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from 'next/link';
import '../../../styles/twclass.css'
import InputField from "@/components/inputfield";
import Button from "@/components/btn";
import PasswordField from "@/components/inputfieldpw";
import Modal from "react-modal";
import ReactLoading from 'react-loading';
import { toast, Toaster } from "react-hot-toast";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showResetPassModal, setShowResetPassModal] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [InvalidCredentialMessage, setInvalidCredentialMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        const response = await fetch('http://localhost:8000/api/password/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        const data = await response.json();

        if (response.ok) {
            toast.success(data.message);
        } else {
            toast.error(data.message);
        }

        setIsLoading(false);
    };


    // Function to open the modal
    const openLoginModal = () => {
        setShowLoginModal(true);
    };
    const openResetPassModal = () => {
        setShowResetPassModal(true);
    };

    // Function to close the modal
    const closeLoginModal = () => {
        setShowLoginModal(false);
    };
    const closeResetPassModal = () => {
        setShowResetPassModal(false);
    };


    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const login = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
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

            const result = await response.json();

            if (result.message === "Email is not verified") {
                toast.error(result.message);
            } else if (result.error) {
                // Handle wrong credentials
                toast.error(result.message);
            } else if (result.token) {
                // Handle correct credentials
                localStorage.setItem("token", result.token);
                setIsLoggedIn(true);
                window.location.replace("/");
            } else if (!response.ok) {
                // Handle HTTP error status
                toast.error(result.message);
            } else {
                // Handle unexpected response format
                toast.error(result.message);
            }
        } catch (error) {
            console.error("An unexpected error occurred:", error);
            alert("An unexpected error occurred. Please try again.");
        }
        setIsLoading(false);
    };

    return (
        <>
            <Toaster/>
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
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
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
                                {InvalidCredentialMessage && <p className="text-red-500">{InvalidCredentialMessage}</p>}
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

                                    <Button type="submit" className="btnPrimary">
                                        {isLoading ? <ReactLoading type={"spin"} color={"#ffffff"} height={20} className="mx-auto"
                                                                   width={20}/> : 'Login'}
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
                                            href="/auth/register"
                                            className="bottomText2 "
                                        >
                                            Register here!
                                        </Link>
                                    </p>
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
                                        Forgot your password?
                                        <Link
                                            href="#"
                                            onClick={openResetPassModal}
                                            className="bottomText2 ghost"
                                        >
                                            Reset Here
                                        </Link>
                                    </p>
                                </motion.div>
                                <div className={"flex justify-center items-center "}>
                                    <Button
                                        type="button" // Add this line
                                        className="bg-transparent bg-opacity-30 text-second mt-5 p-2 rounded hover:opacity-80 transition-all"
                                        href="/">
                                        &#8592; Back to Home
                                    </Button>
                                </div>
                            </form>
                        </div>
                     </div>
        </motion.div>
        </motion.div>


            {/*modal*/}
            <Modal
                isOpen={showLoginModal}
                onRequestClose={closeLoginModal}
                contentLabel="LoginModal"
                className={{
                    base: 'animate-modal',
                    afterOpen: 'animate-modal-after-open',
                    beforeClose: 'animate-modal'
                }}
                style={{
                    overlay: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1000,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        backdropFilter: 'blur(3px)', //
                    },
                    content: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid #FFFFFF',
                        borderRadius: '10px',
                        width: '40%',
                        height: '40%',
                        top: '0',
                        left: '0',
                        right: '0',
                        bottom: '0',
                        margin: 'auto',
                        backgroundColor: '#0a0a0a',
                    },
                }}
            >
                <button onClick={closeLoginModal} className="absolute right-5 top-5 font-bold text-xl">X</button>
                <div className="space-y-5">
                    <div>
                        <p className="font-bold text-2xl text-center text-red-400">Please Verify Your email before
                            logging in.</p>
                    </div>
                    <div>
                        <p className="font-bold text-xl text-center ">You can check your email for the Verification Link.</p>
                    </div>

                </div>
            </Modal>

            <Modal
                isOpen={showResetPassModal}
                onRequestClose={closeResetPassModal}
                contentLabel="ResetPasswordModal"
                className={{
                    base: 'animate-modal',
                    afterOpen: 'animate-modal-after-open',
                    beforeClose: 'animate-modal-before-close'
                }}
                style={{
                    overlay: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1000,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        backdropFilter: 'blur(3px)',
                    },
                    content: {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid #FFFFFF',
                        borderRadius: '10px',
                        width: '50%',
                        height: '50%',
                        top: '0',
                        left: '0',
                        right: '0',
                        bottom: '0',
                        margin: 'auto',
                        backgroundColor: '#0a0a0a',
                        padding: '20px',
                        color: 'white',
                    },
                }}
            >
                <button onClick={closeResetPassModal} className="absolute right-5 top-5 font-bold text-xl">X</button>
                <h2 className="font-bold text-2xl mb-5">Reset Password</h2>
                <form onSubmit={handleResetPassword} className="w-full space-y-5">
                    <div className="w-full">
                        <label htmlFor="email" className="block text-lg font-medium mb-2">Please enter your
                            email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="w-full p-3 rounded-lg bg-gray-700 border-none  focus:outline-none"
                            required
                        />
                    </div>
                    <button type="submit"
                            className="w-full h-[50px] p-3 bg-red-500 transition-all hover:opacity-70 text-white rounded-lg font-semibold focus:outline-none ">
                        {isLoading ? <ReactLoading type={"spin"} color={"#ffffff"} height={20} className="mx-auto"
                                                   width={20}/> : 'Send Reset Password Link'}
                    </button>
                </form>
            </Modal>


        </>
    );
}

export default Login;
