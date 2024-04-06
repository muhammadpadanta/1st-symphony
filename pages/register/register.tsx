
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from 'next/link';
import Button from "@/components/btn";
import '../../styles/twclass.css'
import PasswordField from "@/components/inputfieldpw";
import InputField from "@/components/inputfield";
import Checkbox from "@/components/checkbox";

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
                    <form onSubmit={signUp} className="mt-5">

                        <InputField
                            label="Username"
                            id="username"
                            name="username"
                            type="text"
                            placeholder="Choose Your Username"
                            initialX={-80}
                            delay={1.5}
                        />

                        <InputField
                            label="Email"
                            id="email"
                            name="username"
                            type="email"
                            placeholder="Enter Your Valid E-mail address"
                            initialX={-80}
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

                            <Button type="submit" className="btnPrimary">
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
                                    href="/login"
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
