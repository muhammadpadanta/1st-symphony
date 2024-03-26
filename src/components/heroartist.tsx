import { MagnifyingGlassIcon, CalendarDaysIcon, ArrowTrendingUpIcon } from '@heroicons/react/20/solid'
import Image from "next/image";
const features = [
    {
        name: 'Find By Artist',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: MagnifyingGlassIcon,
    },
    {
        name: 'Find by Upcoming Concerts',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: CalendarDaysIcon,
    },
    {
        name: 'FInd by Most Popular concert',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: ArrowTrendingUpIcon,
    },
]

export default function HeroArtist() {
    return (
        <div className=" flex justify-center items center py-24 sm:py-32">
            <div className="max-w-7xl px-6 lg:px-8">
                <div className=" grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg new-rocker-regular">
                            <h2 className="text-base font-semibold leading-7 text-red-400 ">Find your Ticket Faster!</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Use These Options:</p>
                            <p className="mt-6 text-lg leading-8 text-gray-200">
                                You can search for tickets by artist, Upcoming Concert, and Most Popular one Based on the Popularity of the Artist.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9 ">
                                        <dt className="inline ">
                                            <feature.icon
                                                className="absolute text-4xl left-1 top-1 h-5 w-5 text-indigo-200"
                                                aria-hidden="true"/>
                                            <div
                                                className="text-2xl animate-bounce font-semibold text-red-400 hover:bg-red-400 hover:rounded-sm hover:text-white transition-all cursor-pointer inline-block">
                                                {feature.name}
                                            </div>

                                        </dt>
                                        {' '}
                                        <dd className="block text-white">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <div className="h-[60vh] w-full overflow-hidden rounded-xl relative">
                    <Image
                        src="https://s9.gifyu.com/images/SV9sr.gif"
                        alt="Product screenshot"
                        className=" max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 object-center h-full w-full"
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
