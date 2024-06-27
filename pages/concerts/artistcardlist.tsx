import { Swiper, SwiperSlide } from "swiper/react";
import Link from 'next/link';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import '../../styles/swiper.css';
import '../../styles/twclass.css';
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Image from "next/image";
import Button from "@/components/btn";
import axios from "axios";
import Musicicon from "@/components/icon/musicicon";

const ActiveSlider = () => {
    const [artistData, setArtistData] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/artists')
            .then(response => {
                setArtistData(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="artistcardlistContainer swiperCard">
            <h1 className="artistListTitle">Featured Artist</h1>
            <Swiper
                style={{ filter: "drop-shadow(10px 10px 4px rgba(0, 0, 0, 0.8))" }}
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
                        <Link href={`/concerts/artistpage/artistalbums/${item.artist_id}`}>
                            <div className="group flex hover:scale-105 mt-10 transition-all border-2 border-[#8BC34A] flex-col gap-6 mb-20 relative shadow-lg text-white rounded-xl px-6 py-8 xl:h-[350px] xl:w-[290px] 2xl:h-[400px] 2xl:w-[350px] overflow-hidden cursor-pointer">
                                <div className="artistcardlistCardBg"
                                     style={{ backgroundImage: `url(http://localhost:8000/${item.photo})` }} />
                                <div className="artistcardlistCardCover" />
                                <div className="artistcardlistCardTextContainer">
                                    <div className="artistcardlistCardIconContainer">
                                        <Musicicon/>
                                    </div>
                                    <h1 className="artistcardlistArtistName">{item.name} </h1>
                                    <p className="text-second group-hover:text-[#8BC34A] text-2xl"
                                       style={{ filter: "drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.8))" }}>{item.genre} </p>
                                </div>
                                <RxArrowTopRight
                                    className="artistcardlistIcon" />
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>

            <Link href={"/concerts/artistpage"}>
                <button
                    style={{ filter: "drop-shadow(4px 4px 2px rgba(0, 0, 0, 1))" }}
                    className=" p-5 bg-gray-800 text-white hover:bg-green-800 text-2xl rounded-full transition-all "> Check
                    All Artist
                </button>
            </Link>
        </div>
    );
};

export default ActiveSlider;