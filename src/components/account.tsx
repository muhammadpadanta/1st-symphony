
import Image from "next/image";
import Link from 'next/link';


export default function Account() {
    return (
        <>

            <div className=" flex justify-center pt-20 mt-16 pb-10 new-rocker-regular ">

                <div
                    className="max-w-7xl p-6 bg-[#2e3239] bg-opacity-20 backdrop-blur-lg rounded-xl h-screen 2xl:h-[70vh]  "
                    style={{filter: "drop-shadow(8px 8px 2px rgba(0, 0, 0, 1))"}}
                >

                    <div className="kon1 flex flex-col justify-between">
                        <div className="glassmorphism max-w-xl w-full p-8">
                            <div className="flex justify-center mb-6">
                                <Image className="w-32 h-32 rounded-full"
                                     src="https://avatars.githubusercontent.com/u/115600378?v=4" alt="Profile Picture"
                                    width={128} height={128}
                                />
                            </div>
                            <h2 className="text-3xl font-bold text-center mb-4 text-white">Muhammad Padanta Tarigan</h2>
                            <p className="text-center text-gray-400 mb-6">Customer</p>
                            <div className="border-t border-gray-300"></div>
                            <div className="mt-6">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-gray-500">Email:</span>
                                    <span className="text-gray-400">danta.mail.com</span>
                                </div>
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-gray-500">Phone:</span>
                                    <span className="text-gray-400">+62 821 7577 4102</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-500">Address:</span>
                                    <span className="text-gray-400">Batam, Indonesia</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 flex justify-center items-center space-x-5">
                            <Link href="/">
                                <button className="btn bg-gray-800 text-white border-none hover:bg-gray-900 hover:text-white ">Back</button>
                            </Link>

                            <Link href="/">
                                <button className="btn bg-gray-600 text-white border-none hover:bg-gray-800">Edit Profile</button>
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
        </>

    )
}
