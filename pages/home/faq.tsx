import React from "react";
import '../../styles/twclass.css';
import { faqs } from "@/constants";

export function FaqMenu() {
    return (
        <div
            className="w-[80vw] mx-auto flex flex-col mb-10 justify-center items-center space-y-5 2xl:h-screen cursor-default">
            <h1
                className="xl:text-7xl 2xl:text-7xl mb-5 accent-primary xs:text-2xl"
                style={{ filter: "drop-shadow(4px 4px 10px rgba(255, 99, 71, 0.2))" }}
            >FAQ</h1>
            <div className="grid grid-cols-2 gap-5">
                {faqs.map((faq, index) => (
                    <div key={index} className=" flex flex-col items-start  rounded-xl p-5 hover:bg-green-900 transition-all group hover:scale-105">
                        <h2 className="text-3xl transition-all text-prime  p-2 rounded-t-2xl w-full">
                            {faq.question}
                        </h2>
                        <p className=" transition-all text-xl text-second  bg-opacity-30 p-2 ">
                            {faq.answer}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FaqMenu;