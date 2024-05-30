
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from 'next/link';
import Button from "@/components/btn";
import '../../../styles/twclass.css'
import PasswordField from "@/components/inputfieldpw";
import InputField from "@/components/inputfield";
import Checkbox from "@/components/checkbox";

function Register() {
    const [gender, setGender] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [usernameError, setUsernameError] = useState("");

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

        let item = { name, username, email, password };
        let result = await fetch("http://localhost:8000/api/register", {
            method: "POST",
            body: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        window.location.replace("/auth/login");
    }

    return (
        <div >
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
                    delay: 0.6,
                }}
                className="mainContainer wp2">

                <div className="registerContainer">
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
                            delay: 1,
                        }}
                    >
                        <h2 className="h2RegisterTitle">
                            Lets Register Your <span
                            className="spanRegisterTitle">1st Symphony</span> Account!
                        </h2>
                    </motion.div>
                    <hr/>
                    <form onSubmit={signUp} className="mt-5 space-y-2">

                        <InputField
                            label="Full Name"
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Please Enter Your Full Name"
                            initialX={-80}
                            delay={1.5}
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
                            initialX={-80}
                            delay={1.5}
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
                        {usernameError && <div style={{color: 'red'}}>{usernameError}</div>}

                        <InputField
                            label="Email"
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter Your Valid E-mail address"
                            initialX={-80}
                            delay={1.5}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required={true}
                        />

                        <PasswordField
                            label="Password"
                            value={password}
                            setValue={setPassword}
                            placeholder="Enter Your password."
                            initialX={-80}
                            delay={1.5}
                            togglePasswordVisibility={togglePasswordVisibility}
                            required={true}
                        />

                        <div className="mb-4">
                            <label
                                className="block mb-2 text-l font-bold text-slate-200 ">Gender:</label>
                            <select
                                id="gender"
                                name="gender"
                                value={gender}
                                required={true}
                                onChange={(e) => setGender(e.target.value)}
                                className="inputBox"
                            >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>

                        </div>

                        <Checkbox
                            id="cek"
                            className="checkbox checkbox-accent border-2"
                            label="I Agree to the Terms & Conditions of 1st Symphony."
                            initialX={-80}
                            delay={1.6}

                        />

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
                            <Button type="submit" className="btnBack" href="/">
                                Back
                            </Button>

                            <Button type="submit" className="btnPrimary" disabled={!!usernameError}>
                                Register
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
                                delay: 2.0,
                            }}
                        >
                            <p className="registerbottomText1">
                                Have an Account?{" "}
                                <Link
                                    href="/auth/login"
                                    className="registerbottomText2"
                                >
                                    Login Here!
                                </Link>
                            </p>
                        </motion.div>
                    </form>
                </div>
            </motion.div>
        </div>
    );
}

export default Register;
