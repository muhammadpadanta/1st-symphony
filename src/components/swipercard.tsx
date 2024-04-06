import { Swiper, SwiperSlide } from "swiper/react";
import Link from 'next/link';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import '../../styles/swiper.css';

import { FreeMode, Pagination, Autoplay } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";
import { artistData } from "@/constants";
import React from "react";

const ActiveSlider = () => {
    return (
        <div className="flex items-center justify-center flex-col h-screen bg-transparent swiperCard ">
            <h1 className=" artistListTitle">Artist List</h1>
            <Swiper

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
                className="xs:max-w-[70%] lg:max-w-[80%] 2xl:max-w-[80%]  "
            >
                {artistData.map((item, index) => (
                    <SwiperSlide key={index} >
                        <Link href="/ticketslist">
                            <div className="flex hover:scale-110 mt-10 transition-all border-1 border-red-400 flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
                                <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url(${item.backgroundImage})`}}/>
                                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50 "/>
                                <div className="relative flex flex-col gap-3 ">
                                    <div className="text-white group-hover:text-blue-400 w-[32px] h-[32px]">
                                        <item.icon/>
                                    </div>
                                    <h1 className="text-xl lg:text-2xl ">{item.title} </h1>
                                    <p className="lg:text-[18px] ">{item.content} </p>
                                </div>
                                <RxArrowTopRight
                                    className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100"/>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ActiveSlider;
