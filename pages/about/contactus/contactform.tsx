

import '../../../styles/twclass.css'
import { motion } from "framer-motion";
import React, { useState } from "react";


export function Kontak() {
    const [nama, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pesan, setPesan] = useState("");

    const addPesan = async () => {
        const formData = new FormData();

        formData.append("nama", nama);
        formData.append("email", email);
        formData.append("pesan", pesan);

        try {
            let result = await fetch("http://localhost:8000/api/message", {
                method: "POST",
                body: formData,
            });

            if (result.ok) {
                alert("Pesan success dikirim!");
            } else {
                alert("Failed ");
            }
        } catch (error) {
            console.error("Error adding product:", error);
            alert("Internal server error");
        }
    };

    const handleKirim = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addPesan();
    };
    return (
        <div className="bg-[#0a0a0a]">

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="w-full "
            >
                <section className="text-gray-600 body-font relative pb-10 ">


                    <div className=" flex justify-center items-center flex-row rounded-2xl px-10 w-full pt-10 pb-24 2xl:pb-36" >

                        <div
                            className="w-2/3 2xl:h-[full] xl:h-[70vh] bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-16 flex items-end justify-start relative">
                            <iframe
                                width="100%"
                                height="100%"
                                className="absolute inset-0"
                                style={{
                                    filter: " contrast(1.2) opacity(0.4)",
                                }}
                                title="map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0579223730665!2d104.04846189999999!3d1.1186350999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d98921856ddfab%3A0xf9d9fc65ca00c9d!2sPoliteknik%20Negeri%20Batam!5e0!3m2!1sen!2sid!4v1701790720205!5m2!1sen!2sid?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                            ></iframe>
                            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                                <div className="lg:w-1/2 px-6">
                                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                                        ADDRESS
                                    </h2>
                                    <p className="mt-1">
                                        Batam Centre, Jl. Ahmad Yani, Tlk. Tering, Kec. Batam Kota,
                                        Kota Batam, Kepulauan Riau 29461
                                    </p>
                                </div>
                                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                                        EMAIL
                                    </h2>
                                    <a
                                        href="mailto:example@email.com"
                                        className="text-indigo-500 leading-relaxed"
                                    >
                                        1stsymphony@email.com
                                    </a>
                                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                                        PHONE
                                    </h2>
                                    <p className="leading-relaxed">123-456-7890</p>
                                </div>
                            </div>

                        </div>

                        <form onSubmit={handleKirim}
                              className="lg:w-1/3 md:w-1/2 bg-transparent font-deskripsi flex flex-col md:ml-auto w-full ">
                            <h2 className="text-white text-lg mb-1 font-medium title-font">
                                Feedback
                            </h2>
                            <p className="leading-relaxed mb-5 text-white ">
                                Please Fill in Your Name, Email, and your Message.
                            </p>
                            <div className="relative mb-4">
                                <label htmlFor="name" className="leading-7 text-sm text-white">
                                    Name
                                </label>
                                <input
                                    id="nama"
                                    type="text"
                                    value={nama}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="email" className="leading-7 text-sm text-white">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <div className="relative mb-4">
                                <label
                                    htmlFor="message"
                                    className="leading-7 text-sm text-white"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="pesan"
                                    value={pesan}
                                    onChange={(e) => setPesan(e.target.value)}
                                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                ></textarea>
                            </div>
                            <button
                                id="kirim"
                                type="submit"
                                className="text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 transition-all rounded text-lg"
                            >
                                Send
                            </button>

                        </form>
                    </div>
                </section>
            </motion.div>
        </div>
    );
}

export default Kontak;
