import React from "react";

export default function Dashboard() {
    return (
        <div className="flex flex-col justify-center items-center  py-24 w-full h-screen 2xl:h-[70vh]">
            <div>
                <h1 className={"text-5xl text-yellow-500"}>Welcome to Your admin dashboard 🥳</h1>
            </div>
            <div>
                <h1 className={"text-3xl text-prime"}>Start by selecting Menu from the Sidebar.</h1>
            </div>
        </div>
    );
}