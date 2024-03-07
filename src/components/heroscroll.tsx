"use client";
import React from "react";
import { HeroScrollAnimation } from "@/components/ui/hero-scroll-animation";

export function HeroScroll() {
  return (
    <div className="flex flex-col overflow-hidden">
      <HeroScrollAnimation
        users={users}
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white ">
                Tons of Artist Are Waiting <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                   For You!
              </span>
            </h1>
          </>
        }
      />
    </div>
    );
}

export const users = [
    {
        name: "Tulus",
        designation: "Monokrom, Pamit",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/80/Tulus_Performs_at_Jakarta_International_Jazz_Java_Festival_2020_%28cropped%29.jpg",
        badge: "Trending",
    },
    {
        name: "Virgoun",
        designation: "Surat Cinta untuk Starla, Bukti",
        image: "https://awsimages.detik.net.id/community/media/visual/2023/04/25/virgoun-1_43.png?w=1200",
        badge: "Trending",
    },
    {
        name: "Armada",
        designation: "Asal kau bahagia, Harusnya aku",
        image: "https://cdn1-production-images-kly.akamaized.net/F890RvxNw0TxiB5frsVWLMa9N6Q=/800x800/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4302616/original/059759300_1674645874-WhatsApp_Image_2023-01-25_at_17.18.19.jpeg",
        badge: "Popular",
    },
    {
        name: "Raisa",
        designation: "Percayalah, Kali Kedua",
        image: "https://i.scdn.co/image/ab67616d00001e028bd2fdd47fa594b1362682a9",
        badge: "Loved",
    },
    {
        name: "Coldplay",
        designation: "Paradise, Hymn for the Weekend",
        image: "https://static.promediateknologi.id/crop/0x0:1080x934/750x500/webp/photo/2023/05/29/IMG_20230529_113209-1107229092.jpg",
        badge: "Top sales",
    },
    {
        name: "Imagine Dragon",
        designation: "Believer, Enemy",
        image: "https://www.billboard.com/wp-content/uploads/2022/12/imagine-dragons-Press-Photo-Credit-Eric-Ray-Davidson-2022-billboard-1548.jpg?w=942&h=623&crop=1",
        badge: "Newcomer",
    },
    {
        name: "Yoasobi",
        designation: "Ano Yume o nazotte, Idol",
        image: "https://akcdn.detik.net.id/visual/2021/12/24/yoasobi_43.jpeg?w=650&q=90",
        badge: "Newcomer",
    },
    {
        name: "Ed Sheeran",
        designation: "Perfect, Shape of You",
        image: "https://cdn.britannica.com/17/249617-050-4575AB4C/Ed-Sheeran-performs-Rockefeller-Plaza-Today-Show-New-York-2023.jpg",
        badge: "Trending",
    },
    {
        name: "Justin Bieber",
        designation: "Stay, Baby",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Justin_Bieber_in_2015.jpg/800px-Justin_Bieber_in_2015.jpg",
        badge: "Rising",
    },
    {
        name: "Bruno Mars",
        designation: "The lazy Song, 24K Magic",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/b0/BrunoMars24KMagicWorldTourLive_%28cropped%29.jpg",
        badge: "Rising",
    },
    {
        name: "Andmesh Kamaleng",
        designation: "Hanya Rindu, Cinta luar biasa",
        image: "https://picsum.photos/id/20/300/300",
    },
    {
        name: "LiSA",
        designation: "Gurenge, Homura",
        image: "https://www.billboard.com/wp-content/uploads/media/lisa-2018-bbjapan-1548.jpg",
    },
    {
        name: "Twice",
        designation: "The Feels, I Got You",
        image: "https://cdn.antaranews.com/cache/1200x800/2023/03/11/WhatsApp-Image-2023-03-10-at-7.27.13-PM.jpeg",
        badge: "Newcomer",
    },
    {
        name: "Blackpink",
        designation: "Pink Venom, Kill this Love",
        image: "https://i.scdn.co/image/ab6761610000e5ebc9690bc711d04b3d4fd4b87c",
        badge: "Newcomer",
    },
    {
        name: "NewJeans",
        designation: "OMG, Ditto",
        image: "https://awsimages.detik.net.id/community/media/visual/2023/08/07/yamahafesyen-1.jpeg?w=600&q=90",
        badge: "Newcomer",
    },
   
    ];
