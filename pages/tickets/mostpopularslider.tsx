import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import Modal from 'react-modal'
import {Autoplay, FreeMode, Pagination} from "swiper/modules";
import Image from "next/image";
import { RxArrowRight } from "react-icons/rx";
import { OrangesImages, PurplesImages } from "@/constants";
import '../../styles/twclass.css'
import React, {useState} from "react";
import Button from "@/components/btn";

const MostPopularSlider = () => {

    const [showModal, setShowModal] = useState(false);
    const handleButtonClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };


    return (
        <div className="h-[1000px] flex flex-col md:flex-row gap-5 items-center justify-center bg-transparent">

            <div className="w-[70%] md:w-[40%]">
                <Swiper
                    className = "swipercon mostPopularConcerts"
                    style={{filter: "drop-shadow(2px 2px 5px rgba(180, 180, 180, 0.7))"}}
                    breakpoints={{
                        340: {
                            slidesPerView: 1,
                            spaceBetween: 15,
                        },
                        700: {
                            slidesPerView: 1,
                            spaceBetween: 15,
                        },
                    }}

                    loop={true}

                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,

                    }}
                    speed={20000}

                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination, Autoplay]}
                >
                    <SwiperSlide className="mb-14 swiperslid">
                        <div className="grid grid-cols-3 gap-4 px-10">
                            {PurplesImages.reverse().map((image) => (
                                <div className="relative group mostPopularSlider" key={image.src} onClick={handleButtonClick}>
                                    <Image
                                        width={600}
                                        height={600}
                                        src={image.src}
                                        alt="purple image"
                                        className="rounded-md xl:h-[150px] 2xl:h-[240px] w-[240px] object-cover"
                                    />
                                    <div
                                        className="cursor-pointer absolute inset-0 max-w-[240px] rounded-md bg-gradient-to-r from-red-400 via-orange-500 to-red-900 opacity-0 transition-all group-hover:opacity-60"/>
                                    <div
                                        className="absolute text-white inset-0 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-all">
                                        See Ticket
                                        <RxArrowRight className="ml-2 w-[24px] h-[24px]"/>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="mb-14 swiperslid">
                        <div className="grid grid-cols-3 gap-4 px-10">
                            {OrangesImages.reverse().map((image) => (
                                <div className="relative group mostPopularSlider" key={image.src} onClick={handleButtonClick}>
                                    <Image
                                        width={600}
                                        height={600}
                                        src={image.src}
                                        alt="purple image"
                                        className="rounded-md xl:h-[150px] 2xl:h-[240px] w-[240px] object-cover"
                                    />
                                    <div
                                        className="cursor-pointer absolute inset-0 max-w-[240px] rounded-md bg-gradient-to-r from-red-400 via-orange-500 to-red-900 opacity-0 transition-all group-hover:opacity-60"/>
                                    <div
                                        className="absolute text-white inset-0 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-all">
                                        See Ticket
                                        <RxArrowRight className="ml-2 w-[24px] h-[24px]"/>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div
                style={{filter: "drop-shadow(3px 3px 2px rgba(0, 0, 0, 1))"}}
                className="flex flex-col gap-3">
                <h1 className="text-white text-[50px] font-semibold">
                    Most Popular<span className="text-red-500">.</span>
                    <p

                        className="text-[16px] max-w-[400px] text-gray-200 md:text-gray-100">
                        Prepare for the event of the year – our Most Popular Event is back and bigger than ever! Join us
                        for a spectacular music festival showcasing the hottest acts and chart-topping performers. With
                        headliners that are guaranteed to blow your mind and a lineup bursting with talent, this is THE
                        place to be for music lovers everywhere. Dont miss your chance to be part of history – grab
                        your tickets now before theyre gone! 🎤🎸🎉
                    </p>
                </h1>
            </div>

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
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid #FFFFFF',
                        borderRadius: '10px',
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
                        <h1 className="font-bold text-4xl text-center">Join Us!</h1>

                        <div className="flex flex-row justify-center items-center">

                            <div className="flex items-center justify-center">
                                <Image
                                    priority={true}
                                    src="/images/livemusic.png"
                                    alt="hero tickets image"
                                    className="w-2/3 text-white object-contain"
                                    width={1920}
                                    height={1080}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    style={{filter: "drop-shadow(12px 12px 4px rgba(0, 0, 0, 0.6)) brightness(10) saturate(0)", }}
                                />
                            </div>

                            <div className="px-6">
                                <p className="py-4 text-2xl text-center">
                                    You are just few steps away to enjoy our full features!
                                </p>


                                <Button type="submit" className="btnBack " href="/auth/login">
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

export default MostPopularSlider;
