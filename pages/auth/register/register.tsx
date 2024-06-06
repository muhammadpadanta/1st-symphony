
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from 'next/link';
import Button from "@/components/btn";
import '../../../styles/twclass.css'
import PasswordField from "@/components/inputfieldpw";
import InputField from "@/components/inputfield";
import Checkbox from "@/components/checkbox";
import Modal from "react-modal";

function Register() {
    const [gender, setGender] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const openModal = () => {
        setShowModal(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setShowModal(false);
        window.location.replace("/auth/login");
    };

    const togglePasswordVisibility = () => {
        setShowPassword(showPassword => !showPassword);
    };

    async function signUp(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        let item = { name, username, email, password, gender };
        let result = await fetch("http://localhost:8000/api/register", {
            method: "POST",
            body: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });

        // Convert the response to JSON
        let response = await result.json();

        // Check if the registration was successful
        if (response.message === "User registered successfully") {
            // Open the modal
            openModal();
        } else {
            // Handle registration failure
            // ...
        }
    }


    return (
        <>
        <div >
            <div className="mainContainer wp2">

                <div className="registerContainer">
                    <div
                    >
                        <h2 className="h2RegisterTitle">
                            Lets Register Your <span
                            className="spanRegisterTitle">1st Symphony</span> Account!
                        </h2>
                    </div>
                    <hr/>
                    <form onSubmit={signUp} className="mt-5 space-y-2 ">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <InputField
                                    label="Full Name"
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Please Enter Your Full Name"
                                    initialX={0}
                                    delay={0}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required={true}
                                />

                                <InputField
                                    label="Username"
                                    id="username"
                                    name="username"
                                    type="text"
                                    placeholder="Choose Your Username"
                                    initialX={0}
                                    delay={0}
                                    required={true}
                                    value={username}
                                    onChange={(e) => {
                                        const username = e.target.value;
                                        if (username.includes(' ')) {
                                            setUsernameError("Usernames can't use space");
                                        } else {
                                            setUsernameError("");
                                        }
                                        setUsername(username);
                                    }}
                                />
                                {usernameError && <div className="text-red-500">{usernameError}</div>}


                            </div>

                            <div className="space-y-2">
                                <PasswordField
                                    label="Password"
                                    value={password}
                                    setValue={(value) => {
                                        setPassword(value);
                                        setPasswordError(value.length < 8 ? "Minimal of 8 characters" : "");
                                    }}
                                    placeholder="Enter Your password."
                                    initialX={0}
                                    delay={0}
                                    togglePasswordVisibility={togglePasswordVisibility}
                                    required={true}
                                />

                                {passwordError && <div className="text-red-500">{passwordError}</div>}

                                <div className="">
                                    <label
                                        className="block mb-2 text-l font-bold text-slate-200 ">Gender:</label>
                                    <select
                                        id="gender"
                                        name="gender"
                                        value={gender}
                                        required={true}
                                        onChange={(e) => setGender(e.target.value)}
                                        className="w-full text-white p-2 px-3 rounded-xl shadow-md bg-gray-800 placeholder-gray-300 outline-none"
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                            </div>
                        </div>


                        <div
                        >
                            <InputField
                                label="Email"
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter Your Valid E-mail address"
                                initialX={0}
                                delay={0}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required={true}
                            />

                                <Button type="submit" className="btnPrimary"
                                        disabled={!!usernameError || !!passwordError}>
                                    Register
                                </Button>


                            <div>
                                <p className="registerbottomText1">
                                    Have an Account?{" "}
                                    <Link
                                        href="/auth/login"
                                        className="registerbottomText2"
                                    >
                                        Login Here!
                                    </Link>
                                </p>

                            </div>
                            <div className={"flex justify-center items-center "}>
                                <Button type="button" className="bg-transparent bg-opacity-30 text-second p-2 rounded hover:opacity-80 transition-all" href="/">
                                    &#8592; Back to Home
                                </Button>
                            </div>

                        </div>

                    </form>
                </div>
            </div>
        </div>


            {/*modal*/}
            <Modal
                isOpen={showModal}
                onRequestClose={closeModal}
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
                <button onClick={closeModal} className="absolute right-5 top-5 font-bold text-xl">X</button>
                <div className="space-y-5">
                    <div>
                        <p className="font-bold text-2xl text-center text-red-400">Email Verification Link has been
                            sent!</p>
                    </div>
                    <div>
                        <p className="font-bold text-lg text-center">You can check your email address that contains
                            Link
                            to verify your email.</p>
                    </div>
                </div>
            </Modal>

        </>
    );
}

export default Register;
