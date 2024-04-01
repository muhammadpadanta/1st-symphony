
import Image from "next/image";
import { Link } from 'react-scroll';
import {ticketFeatures, textBlocks} from "@/constants";



export default function HeroArtist() {
    return (
        <div className=" flex justify-center items center py-24 sm:py-32 ">

            <div
                className="max-w-7xl p-12 bg-[#2e3239] bg-opacity-20 backdrop-blur-lg rounded-xl "
                style={{ filter: "drop-shadow(8px 8px 2px rgba(0, 0, 0, 1))"}}
            >

                <div className=" grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg new-rocker-regular">
                            <div>
                                {textBlocks.map((block, index) => (
                                    <p key={index} className={block.className}>
                                        {block.text}
                                    </p>
                                ))}
                            </div>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                {ticketFeatures.map((ticketFeatures) => (
                                    <div key={ticketFeatures.name} className="relative pl-9 ">
                                        <dt className="inline ">
                                            <ticketFeatures.icon
                                                className="absolute text-4xl left-1 top-1 h-5 w-5 text-indigo-200"
                                                aria-hidden="true"/>
                                            <Link
                                                to={ticketFeatures.link}
                                                smooth={true}
                                                duration={500}
                                            >
                                                <div
                                                    className="text-2xl animate-bounce font-semibold text-red-400 hover:bg-red-400 hover:rounded-sm hover:text-white transition-all cursor-pointer inline-block">
                                                    {ticketFeatures.name}
                                                </div>
                                            </Link>

                                        </dt>
                                        {' '}
                                        <dd className="block text-white">{ticketFeatures.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>

                    <div className="h-[60vh] w-full rounded-xl p-5">
                        <Image
                            src="https://lastfm.freetls.fastly.net/i/u/770x0/f565949a1ec26d06f0c9e56f762b31e2.jpg#f565949a1ec26d06f0c9e56f762b31e2"
                            alt="Product screenshot"
                            className="w-full rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 object-center h-full"
                            width={1920}
                            height={1080}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>

                </div>
            </div>

        </div>
    )
}
