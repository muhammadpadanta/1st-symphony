import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import {Autoplay, FreeMode, Pagination} from "swiper/modules";
import Image from "next/image";
import { RxArrowRight } from "react-icons/rx";
import { OrangesImages, PurplesImages } from "@/constants";
import '../../styles/twclass.css'

const MostPopularSlider = () => {
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
                                <div className="relative group mostPopularSlider" key={image.src}>
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
                                <div className="relative group mostPopularSlider" key={image.src}>
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

        </div>
    );
};

export default MostPopularSlider;
