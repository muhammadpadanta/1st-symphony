import {ticketDetails} from "@/constants";

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
                                    {ticketDetails.map((ticketDetails) => (
                                        <div key={ticketDetails.name} className="relative pl-9 ">
                                            <dt className="inline ">

                                                <div
                                                    className="flex justify-between items-center space-x-10 text-2xl font-semibold text-red-400  ">
                                                    {ticketDetails.name}

                                                    <div >
                                                        <div
                                                            className="flex text-xs items-center space-x-10  ">
                                                            {ticketDetails.icon1}
                                                            {ticketDetails.location}
                                                        </div>
                                                    </div>

                                                    <div
                                                        className="flex items-center space-x-10 ">
                                                        <div
                                                            className="flex text-xs items-center space-x-10 ">
                                                            {ticketDetails.icon2}
                                                            {ticketDetails.date}
                                                        </div>
                                                        <div
                                                            className="flex text-xs items-center space-x-10 ">
                                                            {ticketDetails.icon3}
                                                            {ticketDetails.price}
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
