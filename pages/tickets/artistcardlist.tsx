import { Swiper, SwiperSlide } from "swiper/react";
import Link from 'next/link';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import '../../styles/swiper.css';
import '../../styles/twclass.css';

import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
import { artistData } from "@/constants";
import React, {useState} from "react";
import Modal from "react-modal";
import Image from "next/image";
import Button from "@/components/btn";

const ActiveSlider = () => {

    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => {
        setShowModal(false);
    };



    return (
        <div className="artistcardlistContainer swiperCard">
            <h1 className="artistListTitle">Featured Artist</h1>
            <Swiper
                style={{filter: "drop-shadow(10px 10px 4px rgba(0, 0, 0, 0.8))"}}
                breakpoints={{
                    340: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                    },
                    700: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    1500: {
                        slidesPerView: 4,
                        spaceBetween: 15,
                    },
                }}

                loop={true}

                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,

                }}
                speed={5000}
                freeMode={true}
                pagination={{

                    clickable: true,
                }}
                modules={[FreeMode, Pagination, Autoplay]}
                className="artistcardlistContainerWidth"
            >
                {artistData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Link href="/tickets/artistpage/artistalbums">
                            <div className="group artistcardlistCardShaper">
                                <div className="artistcardlistCardBg"
                                     style={{backgroundImage: `url(${item.backgroundImage})`}}/>
                                <div className="artistcardlistCardCover"/>
                                <div className="artistcardlistCardTextContainer">
                                    <div className="artistcardlistCardIconContainer">
                                        <item.icon/>
                                    </div>
                                    <h1 className="artistcardlistArtistName">{item.title} </h1>
                                    <p className="text-second group-hover:text-[#8BC34A]"
                                       style={{filter: "drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.8))"}}>{item.content} </p>
                                </div>
                                <RxArrowTopRight
                                    className="artistcardlistIcon"/>
                            </div>

                        </Link>

                    </SwiperSlide>

                ))}

            </Swiper>

            <Link href={"/tickets/artistpage"}>
                <button
                    style={{filter: "drop-shadow(4px 4px 2px rgba(0, 0, 0, 1))"}}
                    className=" p-5 bg-gray-800 text-white hover:bg-green-800 text-2xl rounded-full transition-all "> Check
                    All Artist
                </button>
            </Link>


            {/*modal*/}
            <Modal
                isOpen={showModal}
                onRequestClose={handleCloseModal}
                contentLabel="LoginModal"
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
                        backdropFilter: 'blur(3px)', //
                    },
                    content: {
                        width: '60%',
                        height: '60%',
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
                        <h1 className="font-bold text-2xl text-center">Join Us!</h1>

                        <div className="flex flex-row justify-center items-center">

                            <div className="">
                                <Image
                                    priority={true}
                                    src="/images/livemusic.png"
                                    alt="hero tickets image"
                                    className="w-2/3 text-white "
                                    width={1920}
                                    height={1080}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    style={{filter: "drop-shadow(12px 12px 4px rgba(0, 0, 0, 0.6)) brightness(10) saturate(0)",}}
                                />
                            </div>

                            <div>
                                <p className="py-4 text-2xl text-center">
                                    You are just few steps away to enjoy our full features!
                                </p>


                                <Button type="submit" className="btnBack" href="/auth/login">
                                    Login
                                </Button>
                                <Button type="submit" className="btnPrimary" href="/auth/register">
                                    Register
                                </Button>


                            </div>

                        </div>

                    </div>
                </div>
            </Modal>


        </div>
    );
};

export default ActiveSlider;
