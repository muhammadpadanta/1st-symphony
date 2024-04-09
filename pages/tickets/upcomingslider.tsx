import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import {Autoplay, FreeMode, Pagination} from "swiper/modules";
import Image from "next/image";
import { RxArrowRight } from "react-icons/rx";
import { OrangeImages, PurpleImages } from "@/constants";

const UpcomingSlider = () => {
    return (
        <div className="h-[1000px] flex flex-col md:flex-row gap-5 items-center justify-center bg-transparent">
            <div
                style={{filter: "drop-shadow(3px 3px 2px rgba(0, 0, 0, 1))"}}
                className="flex flex-col gap-3">
                <h1 className="text-white text-[50px] font-semibold">
                    Upcoming Event<span className="text-red-500">.</span>
                    <p

                        className="text-[16px] max-w-[400px] text-gray-200 md:text-gray-100">
                        Get ready for an unforgettable night of music with our upcoming concert series! Featuring a lineup of top artists spanning various genres, this event promises non-stop entertainment and good vibes. From rock to pop, indie to EDM, theres something for everyone. Dont miss out – grab your tickets now and secure your spot for a night to remember! 🎶🎟️
                    </p>
                </h1>
            </div>
            <div className="w-[70%] md:w-[40%]">
                <Swiper
                    className="upcomingConcerts "
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
                    <SwiperSlide
                        className="mb-14">
                        <div className="grid grid-cols-3 gap-4 px-10">
                            {PurpleImages.map((image) => (
                                <div className="relative group" key={image.src}>
                                    <Image
                                        width={600}
                                        height={600}
                                        src={image.src}
                                        alt="purple image"
                                        className="rounded-md xl:h-[150px] 2xl:h-[240px] w-[240px] object-cover"
                                    />
                                    <div className="cursor-pointer absolute inset-0 max-w-[240px] rounded-md bg-gradient-to-r from-red-400 via-orange-500 to-red-900 opacity-0 transition-all group-hover:opacity-60" />
                                    <div className="absolute text-white inset-0 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-all">
                                        See Ticket
                                        <RxArrowRight className="ml-2 w-[24px] h-[24px]" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="mb-14">
                        <div className="grid grid-cols-3 gap-4 px-10">
                            {OrangeImages.map((image) => (
                                <div className="relative group" key={image.src}>
                                    <Image
                                        width={600}
                                        height={600}
                                        src={image.src}
                                        alt="purple image"
                                        className="rounded-md xl:h-[150px] 2xl:h-[240px] w-[240px] object-cover"
                                    />
                                    <div className="cursor-pointer absolute inset-0 max-w-[240px] rounded-md bg-gradient-to-r from-red-400 via-orange-500 to-red-900 opacity-0 transition-all group-hover:opacity-60" />
                                    <div className="absolute text-white inset-0 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-all">
                                        See Ticket
                                        <RxArrowRight className="ml-2 w-[24px] h-[24px]" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default UpcomingSlider;
