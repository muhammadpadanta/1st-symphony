
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/ticket-list";


export default function Inventory() {
    return (
        <>
            <p className="text-4xl pt-24 new-rocker-regular text-white flex justify-center items-center">Purchased Tickets</p>
            <div className=" flex justify-center py-12">

                <div
                    className="max-w-7xl p-12 bg-[#2e3239] bg-opacity-20 backdrop-blur-lg rounded-xl overflow-auto h-[60vh] "
                    style={{filter: "drop-shadow(8px 8px 2px rgba(0, 0, 0, 1))"}}
                >


                    <div className=" grid grid-cols-1 gap-x-8 gap-y-8 sm:gap-y-20 lg:mx-0 lg:grid-cols-2">

                        <div className=" w-full rounded-xl p-5 ">
                            <div>
                                <CardContainer>
                                    <CardBody>
                                        <CardItem translateZ="100" className=" ">
                                            <Image
                                                src="https://s9.gifyu.com/images/SV4BX.png"
                                                alt="Product screenshot"
                                                className="w-full rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 object-center h-full"
                                                width={1920}
                                                height={1080}
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                style={{filter: "drop-shadow(12px 12px 4px rgba(0, 0, 0, 0.6))"}}
                                            />
                                        </CardItem>
                                    </CardBody>
                                </CardContainer>
                            </div>

                            <div className="flex flex-col text-left">
                                <p className="text-xl new-rocker-regular text-white items-center mt-4">
                                    Purchase date: 2024-01-01
                                </p>
                                <p className="text-xl new-rocker-regular text-white items-center mt-4">
                                    Price: 2024-01-01
                                </p>
                                <p className="text-xl new-rocker-regular text-white items-center mt-4">
                                    Category: 2024-01-01
                                </p>
                            </div>

                        </div>

                        <div className=" w-full rounded-xl p-5 ">
                            <div>
                                <CardContainer>
                                    <CardBody>
                                        <CardItem translateZ="100" className=" ">
                                            <Image
                                                src="https://s9.gifyu.com/images/SV4BX.png"
                                                alt="Product screenshot"
                                                className="w-full rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 object-center h-full"
                                                width={1920}
                                                height={1080}
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                style={{filter: "drop-shadow(12px 12px 4px rgba(0, 0, 0, 0.6))"}}
                                            />
                                        </CardItem>
                                    </CardBody>
                                </CardContainer>
                            </div>

                            <div className="flex flex-col text-left">
                                <p className="text-xl new-rocker-regular text-white items-center mt-4">
                                    Purchase date: 2024-01-01
                                </p>
                                <p className="text-xl new-rocker-regular text-white items-center mt-4">
                                    Price: 2024-01-01
                                </p>
                                <p className="text-xl new-rocker-regular text-white items-center mt-4">
                                    Category: 2024-01-01
                                </p>
                            </div>

                        </div>

                        <div className=" w-full rounded-xl p-5 ">
                            <div>
                                <CardContainer>
                                    <CardBody>
                                        <CardItem translateZ="100" className=" ">
                                            <Image
                                                src="https://s9.gifyu.com/images/SV4BX.png"
                                                alt="Product screenshot"
                                                className="w-full rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 object-center h-full"
                                                width={1920}
                                                height={1080}
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                style={{filter: "drop-shadow(12px 12px 4px rgba(0, 0, 0, 0.6))"}}
                                            />
                                        </CardItem>
                                    </CardBody>
                                </CardContainer>
                            </div>

                            <div className="flex flex-col text-left">
                                <p className="text-xl new-rocker-regular text-white items-center mt-4">
                                    Purchase date: 2024-01-01
                                </p>
                                <p className="text-xl new-rocker-regular text-white items-center mt-4">
                                    Price: 2024-01-01
                                </p>
                                <p className="text-xl new-rocker-regular text-white items-center mt-4">
                                    Category: 2024-01-01
                                </p>
                            </div>

                        </div>


                    </div>
                </div>

            </div>
        </>

    )
}
