import { MapPinIcon, CalendarDaysIcon, CurrencyDollarIcon } from '@heroicons/react/20/solid'



const features = [
    {
        name: 'Alone',
        id: '1',
        date: '15 FEB',
        price: 'Rp 200.000 - Rp 500.000',
        location: 'Jakarta, Indonesia. BSD City',
        icon1: <MapPinIcon className="w-5 h-5"/>,
        icon2: <CalendarDaysIcon className="w-5 h-5"/>,
        icon3: <CurrencyDollarIcon className="w-5 h-5"/>,

    },
    {
        name: 'Happier',
        id: '2',
        date: '15 FEB',
        price: 'Rp 200.000 - Rp 500.000',
        location: 'Jakarta, Indonesia. BSD City',
        icon1: <MapPinIcon className="w-5 h-5"/>,
        icon2: <CalendarDaysIcon className="w-5 h-5"/>,
        icon3: <CurrencyDollarIcon className="w-5 h-5"/>,
    },
    {
        name: 'Friends',
        id: '3',
        date: '15 FEB',
        price: 'Rp 200.000 - Rp 500.000',
        location: 'Jakarta, Indonesia. BSD City',
        icon1: <MapPinIcon className="w-5 h-5"/>,
        icon2: <CalendarDaysIcon className="w-5 h-5"/>,
        icon3: <CurrencyDollarIcon className="w-5 h-5"/>,
    },

    {
        name: 'Project Dreams',
        id: '4',
        date: '15 FEB',
        price: 'Rp 200.000 - Rp 500.000',
        location: 'Jakarta, Indonesia. BSD City',
        icon1: <MapPinIcon className="w-5 h-5"/>,
        icon2: <CalendarDaysIcon className="w-5 h-5"/>,
        icon3: <CurrencyDollarIcon className="w-5 h-5"/>,
    },
    {
        name: 'Wolves',
        id: '5',
        date: '15 FEB',
        price: 'Rp 200.000 - Rp 500.000',
        location: 'Jakarta, Indonesia. BSD City',
        icon1: <MapPinIcon className="w-5 h-5"/>,
        icon2: <CalendarDaysIcon className="w-5 h-5"/>,
        icon3: <CurrencyDollarIcon className="w-5 h-5"/>,
    },

    {
        name: 'Silence',
        id: '6',
        date: '15 FEB',
        price: 'Rp 200.000 - Rp 500.000',
        location: 'Jakarta, Indonesia. BSD City',
        icon1: <MapPinIcon className="w-5 h-5"/>,
        icon2: <CalendarDaysIcon className="w-5 h-5"/>,
        icon3: <CurrencyDollarIcon className="w-5 h-5"/>,
    },

    {
        name: 'Keep it Mello',
        id: '6',
        date: '15 FEB',
        price: 'Rp 200.000 - Rp 500.000',
        location: 'Jakarta, Indonesia. BSD City',
        icon1: <MapPinIcon className="w-5 h-5"/>,
        icon2: <CalendarDaysIcon className="w-5 h-5"/>,
        icon3: <CurrencyDollarIcon className="w-5 h-5"/>,
    },

    {
        name: 'Fly',
        id: '6',
        date: '15 FEB',
        price: 'Rp 200.000 - Rp 500.000',
        location: 'Jakarta, Indonesia. BSD City',
        icon1: <MapPinIcon className="w-5 h-5"/>,
        icon2: <CalendarDaysIcon className="w-5 h-5"/>,
        icon3: <CurrencyDollarIcon className="w-5 h-5"/>,
    },






]

export default function TicketArtist() {
    return (
        <>
            <p className="text-4xl pt-20 new-rocker-regular bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent flex justify-center items-center">Ticket
                List</p>
            <p className="text-2xl new-rocker-regular bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent flex justify-center items-center">(Artist: Marshmello)</p>
            <div className="flex justify-center items center py-5">

                <div
                    className="w-[80vw] 2xl:w-[60vw] p-12 bg-[#2e3239] bg-opacity-20 backdrop-blur-lg rounded-xl "
                    style={{filter: "drop-shadow(8px 8px 2px rgba(0, 0, 0, 1))"}}
                >

                    <div
                        className="w-full  gap-x-8 gap-y-16  overflow-auto px-5 "
                        style={{maxHeight: '30rem'}}
                    >

                        <div className="lg:pr-8 lg:pt-4">

                            <div className="w-full new-rocker-regular ">
                                <dl className=" space-y-8 text-base leading-7 text-gray-600 lg:max-w-none  gap-4">
                                    {features.map((feature) => (
                                        <div key={feature.name} className="relative pl-9 ">
                                            <dt className="inline ">

                                                <div
                                                    className="flex justify-between items-center space-x-10 text-2xl font-semibold text-red-400  ">
                                                    {feature.name}

                                                    <div >
                                                        <div
                                                            className="flex text-xs items-center space-x-10  ">
                                                            {feature.icon1}
                                                            {feature.location}
                                                        </div>
                                                    </div>

                                                    <div
                                                        className="flex items-center space-x-10 ">
                                                        <div
                                                            className="flex text-xs items-center space-x-10 ">
                                                            {feature.icon2}
                                                            {feature.date}
                                                        </div>
                                                        <div
                                                            className="flex text-xs items-center space-x-10 ">
                                                            {feature.icon3}
                                                            {feature.price}
                                                        </div>
                                                        <div
                                                            className="flex items-center space-x-10 hover:scale-110  hover:rounded-sm hover:text-white transition-all cursor-pointer">
                                                            <button className="btn text-gray-400 border-none hover:bg-[#2e3239] mb-2 bg-[#2e3239] bg-opacity-60 backdrop-blur-lg ">Get Ticket</button>
                                                        </div>
                                                    </div>
                                                </div>

                                            </dt>
                                            {' '}
                                            <dd className="block text-white"></dd>
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
