import { PlayIcon, SpeakerWaveIcon } from '@heroicons/react/20/solid'
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/ticket-list";


const features = [
    {
        name: 'Alone',
        id: '1',
        duration: '0:00',
        icon1: <PlayIcon className="w-5 h-5"/>,
        icon2: <SpeakerWaveIcon className="w-5 h-5"/> ,

    },
    {
        name: 'Happier',
        id: '2',
        duration: '0:00',
        icon1: <PlayIcon className="w-5 h-5"/>,
        icon2: <SpeakerWaveIcon className="w-5 h-5"/> ,

    },
    {
        name: 'Friends',
        id: '3',
        duration: '0:00',
        icon1: <PlayIcon className="w-5 h-5"/>,
        icon2: <SpeakerWaveIcon className="w-5 h-5"/> ,

    },

    {
        name: 'Project Dreams',
        id: '4',
        duration: '0:00',
        icon1: <PlayIcon className="w-5 h-5"/>,
        icon2: <SpeakerWaveIcon className="w-5 h-5"/> ,

    },
    {
        name: 'Wolves',
        id: '5',
        duration: '0:00',
        icon1: <PlayIcon className="w-5 h-5"/>,
        icon2: <SpeakerWaveIcon className="w-5 h-5"/> ,

    },

    {
        name: 'Silence',
        id: '6',
        duration: '0:00',
        icon1: <PlayIcon className="w-5 h-5"/>,
        icon2: <SpeakerWaveIcon className="w-5 h-5"/> ,
    },

    {
        name: 'Keep it Mello',
        id: '6',
        duration: '0:00',
        icon1: <PlayIcon className="w-5 h-5"/>,
        icon2: <SpeakerWaveIcon className="w-5 h-5"/> ,
    },

    {
        name: 'Fly',
        id: '6',
        duration: '0:00',
        icon1: <PlayIcon className="w-5 h-5"/>,
        icon2: <SpeakerWaveIcon className="w-5 h-5"/> ,
    },




]

export default function TicketAlbums() {
    return (
        <>
            <p className="text-4xl pt-24 new-rocker-regular bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent flex justify-center items-center">Popular
                Album</p>
            <p className="text-2xl new-rocker-regular bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent flex justify-center items-center">(Artist:
                Marshmello)</p>
            <div className=" flex justify-center items center py-12">

                <div
                    className="max-w-7xl p-12 bg-[#2e3239] bg-opacity-20 backdrop-blur-lg rounded-xl "
                    style={{filter: "drop-shadow(8px 8px 2px rgba(0, 0, 0, 1))"}}
                >


                    <div
                        className=" grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="h-[60vh] w-full rounded-xl p-5">
                            <CardContainer className="h-[60vh] w-full rounded-xl p-5">
                                <CardBody className="h-[60vh] w-full rounded-xl p-5">
                                    <CardItem translateZ="100" className=" w-full rounded-xl p-5">
                            <Image
                                src="https://lastfm.freetls.fastly.net/i/u/770x0/f565949a1ec26d06f0c9e56f762b31e2.jpg#f565949a1ec26d06f0c9e56f762b31e2"
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
                        <div className="lg:pr-8 lg:pt-4">

                            <div className="lg:max-w-lg new-rocker-regular overflow-auto px-5"
                                 style={{maxHeight: '30rem'}}>
                                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none ">
                                    {features.map((feature) => (
                                        <div key={feature.name} className="relative pl-9 ">
                                            <dt className="inline ">

                                                <div
                                                    className="flex justify-between items-center space-x-10 text-2xl font-semibold text-red-400  ">
                                                    {feature.name}
                                                    <div
                                                        className="flex items-center space-x-10 ">
                                                        <div
                                                            className="flex items-center space-x-10  hover:scale-110  hover:rounded-sm hover:text-white transition-all cursor-pointer">
                                                            {feature.icon1}
                                                        </div>
                                                        <div
                                                            className="flex text-xs items-center space-x-10 hover:scale-110  hover:rounded-sm hover:text-white transition-all cursor-pointer">
                                                            {feature.duration}
                                                        </div>
                                                        <div
                                                            className="flex items-center space-x-10 hover:scale-110  hover:rounded-sm hover:text-white transition-all cursor-pointer">
                                                            {feature.icon2}
                                                        </div>
                                                    </div>

                                                </div>


                                            </dt>
                                            {' '}

                                            <hr className="w-full border-t border-red-400 "/>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </>

    )
}
