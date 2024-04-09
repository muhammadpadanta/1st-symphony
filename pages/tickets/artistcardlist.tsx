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
import React from "react";

const ActiveSlider = () => {
    return (
        <div className="artistcardlistContainer swiperCard">
            <h1 className="artistListTitle">Artist List</h1>
            <Swiper
                style={{filter: "drop-shadow(2px 2px 5px rgba(180, 180, 180, 0.7))"}}
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
                    <SwiperSlide key={index} >
                        <Link href="/ticketlists">
                            <div className="group artistcardlistCardShaper">
                                <div className="artistcardlistCardBg" style={{backgroundImage: `url(${item.backgroundImage})`}}/>
                                <div className="artistcardlistCardCover"/>
                                <div className="artistcardlistCardTextContainer">
                                    <div className="artistcardlistCardIconContainer">
                                        <item.icon/>
                                    </div>
                                    <h1 className="artistcardlistArtistName">{item.title} </h1>
                                    <p className="">{item.content} </p>
                                </div>
                                <RxArrowTopRight
                                    className="artistcardlistIcon"/>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ActiveSlider;
