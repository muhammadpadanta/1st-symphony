import {ticketDetails} from "@/constants";
import React, {useState} from "react";
import '../../styles/twclass.css'
import Modal from "react-modal";
import Image from "next/image";
import Button from "@/components/btn";
import {
    CalendarDaysIcon,
    CurrencyDollarIcon,
    MapPinIcon,
} from "@heroicons/react/20/solid";



export default function TicketArtist() {

    const [counter, setCounter] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const handleButtonClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };



    const ticketCategories = [
        { id: 'option2', name: 'Regular', price: 200000, stock: 100 },
        { id: 'option3', name: 'Vip I', price: 300000, stock: 80 },
        { id: 'option4', name: 'Vip II', price: 500000, stock: 50 },
    ];

    const [selectedCategory, setSelectedCategory] = useState(ticketCategories[0]);
    const [stock, setStock] = useState(selectedCategory.stock);
    const [subtotal, setSubtotal] = useState(selectedCategory.price);

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOption = ticketCategories.find(category => category.id === event.target.value);
        if (selectedOption) {
            setSelectedCategory(selectedOption);
            setStock(selectedOption.stock);
            setSubtotal(selectedOption.price);
        }
    };

    const handleIncrement = () => {
        if (counter < stock) {
            setCounter(counter + 1);
            setSubtotal((counter + 1) * selectedCategory.price);
        }
    };

    const handleDecrement = () => {
        if (counter > 0) {
            setCounter(counter - 1);
            setSubtotal((counter - 1) * selectedCategory.price);
        }
    };

    return (
        <div className="svgwave2 ticketArtistScreen">
            <p className=" font-semibold 2xl:text-8xl xl:text-6xl flex justify-center items-center bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent ">
                Get your Ticket Now!
            </p>
            <div className="ticketArtistMainContainer ">
                <div className="ticketArtistCardContainer "
                     style={{filter: "drop-shadow(2px 2px 5px rgba(180, 180, 180, 0.7))"}}
                >
                    <p style={{filter: "drop-shadow(8px 8px 2px rgba(0, 0, 0, 0.6))"}}
                       className="ticketArtistTitle ">Available
                        Tickets</p>
                    <p style={{filter: "drop-shadow(8px 8px 2px rgba(0, 0, 0, 1))"}}
                       className="ticketArtistSubtitle">(Artist:
                        Tulus)</p>
                    <div className="ticketArtistContentContainer" style={{maxHeight: '30rem'}}>
                        <div className="ticketArtistTextContainer">

                            <div className="ticketArtistDetailsContainer">

                                <dl className="space-y-8 text-base leading-7 text-gray-600 lg:max-w-none gap-4">
                                    {ticketDetails.map((ticketDetails) => (
                                        <div key={ticketDetails.name} className="ticketArtistDetailsItem">
                                            <dt className="inline ">
                                                <div className="ticketArtistDetailsTitle">
                                                    <div className="flex items-center">
                                                        <CalendarDaysIcon className="ticketArtistDetailsIcon"/>
                                                        <span className="w-[1rem] text-center flex">
                                                    {ticketDetails.name}
                                                </span>
                                                    </div>
                                                    <div>
                                                        <div className="ticketArtistDetailsText">
                                                            <div className="text-red-400">
                                                                {ticketDetails.icon1}
                                                            </div>
                                                            {ticketDetails.location}
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center space-x-10 ">
                                                        <div className="ticketArtistDetailsText">
                                                            <div className="text-red-400">
                                                                {ticketDetails.icon2}
                                                            </div>
                                                            {ticketDetails.date}
                                                        </div>
                                                        <div className="ticketArtistDetailsText">
                                                            <div className="text-red-400">
                                                                {ticketDetails.icon3}
                                                            </div>
                                                            {ticketDetails.price}
                                                        </div>
                                                        <div
                                                            className="flex items-center space-x-10 hover:scale-105 hover:opacity-80 hover:rounded-sm hover:text-white transition-all cursor-pointer">
                                                            <button className="ticketArtistDetailsButton" onClick={handleButtonClick}>Get Ticket
                                                            </button>
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

            {/*modal*/}
            <Modal
                isOpen={showModal}
                onRequestClose={handleCloseModal}
                contentLabel="TicketModal"
                className={{
                    base: 'animate-modal',
                    afterOpen: 'animate-modal-after-open',
                    beforeClose: 'animate-modal'
                }}
                style={{
                    overlay: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1000,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        backdropFilter: 'blur(3px)',
                    },
                    content: {
                        border: '1px solid #FFFFFF',
                        borderRadius: '10px',
                        width: '60%',
                        height: '70%',
                        top: '0',
                        left: '0',
                        right: '0',
                        bottom: '0',
                        margin: 'auto',
                        backgroundColor: '#0a0a0a',
                    },
                }}
            >
                <div className="flex justify-center items-center pt-10">
                    <div className="text-white ">

                        <div className="flex flex-row justify-center items-center space-x-5 ">

                            <div className="w-[300px] h-[260px] flex justify-center items-center object-cover">
                                <Image
                                    priority={true}
                                    src="/images/artistList1.webp"
                                    alt="hero tickets image"
                                    className="object-contain text-white w-full h-full"
                                    width={1920}
                                    height={1080}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    style={{
                                        filter: "drop-shadow(12px 12px 4px rgba(0, 0, 0, 0.6))",
                                    }}
                                />
                            </div>

                            <div>
                                <div className="text-red-400">
                                    <div className="flex flex-row items-center">
                                        <MapPinIcon className="w-7 h-7"/>
                                        <p className="py-1 text-2xl text-left">
                                            Jakarta, Indonesia, BSD City
                                        </p>
                                    </div>

                                    <div className="flex flex-row items-center">
                                        <CalendarDaysIcon className="w-7 h-7"/>
                                        <p className="py-1 text-2xl text-left">
                                            15 FEB
                                        </p>
                                    </div>

                                    <div className="flex flex-row items-center">
                                        <CurrencyDollarIcon className="w-7 h-7"/>
                                        <p className="py-1 text-2xl text-left">
                                            Rp 200.000 - Rp 500.000
                                        </p>
                                    </div>
                                </div>

                                <div className="pt-3">
                                    <select className="p-2 bg-gray-900 text-xl text-left" onChange={handleSelectChange}>
                                        <option value="option1" selected disabled>- Choose Ticket Category -</option>
                                        {ticketCategories.map(category => (
                                            <option key={category.id} value={category.id}>{category.name}</option>
                                        ))}
                                    </select>
                                    <div className="pt-3 space-x-5">
                                        <button className="bg-gray-900 text-white py-1 px-3 rounded-full"
                                                onClick={handleDecrement}>-
                                        </button>
                                        <span>{counter}</span>
                                        <button className="bg-gray-900 text-white py-1 px-3 rounded-full"
                                                onClick={handleIncrement}>+
                                        </button>
                                        <span>Stok: {stock}</span>
                                    </div>
                                    <p className="text-left pt-3">Subtotal: Rp{subtotal}</p>
                                </div>

                                <div>
                                    <Button type="submit" className="btnBack " href="">
                                        Cancel
                                    </Button>
                                    <Button type="submit" className="btnPrimary" href="">
                                        Get Ticket
                                    </Button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </Modal>


        </div>
    )


}
