"use client";

import React, { useEffect, useState } from "react";
import { CardSlider } from "@/components/ui/card-slider";

export function CardSliderAnimation() {
  return (
    <div className="anjay">
      <div className="teks text-center mt-10">
  <span className="rounded-full inline-block">
    <h1 className="text-white text-2xl px-4 py-2 inline-block">Most Popular</h1>
  </span>
</div>



      <div className="mt-10 rounded-md flex flex-col antialiased bg-transparent items-center justify-center relative overflow-hidden">
        <CardSlider
          items={testimoni1}
          direction="left"
          speed="slow"
        />
      </div>
    </div>
  );
}

const testimoni1 = [
  {
    imageUrl:
      "https://asset.kompas.com/crops/4nccygFvfUr2ZBvHAlBtv69BK_w=/0x0:780x520/750x500/data/photo/2022/01/10/61dc0c0d5f361.jpg",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    imageUrl:
      "https://thebiaslistcom.files.wordpress.com/2023/01/newjeans-omg.jpg?w=640",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    imageUrl:
      "https://www.billboard.com/wp-content/uploads/2022/12/imagine-dragons-Press-Photo-Credit-Eric-Ray-Davidson-2022-billboard-1548.jpg?w=942&h=623&crop=1",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    imageUrl:
      "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/01/2023/11/25/Yoasobi-Asia-Live-Tour-Jakarta-2275686169.jpg",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    imageUrl:
      "https://media.matamata.com/thumbs/2023/04/27/46052-kontroversi-virgoun-instagramvirgoun/745x489-img-46052-kontroversi-virgoun-instagramvirgoun.jpg",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

export function CardSliderAnimation2() {
  return (
    <div className="anjay">
      <div className="teks text-center mt-10">
        <span className=" rounded-full inline-block">
          <h1 className="text-white text-2xl px-4 py-2 inline-block">Upcoming</h1>
        </span>
      </div>



      <div className="mt-10 rounded-md flex flex-col antialiased bg-transparent items-center justify-center relative overflow-hidden">
        <CardSlider
          items={testimoni2}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
    );
}

const testimoni2 = [
  {
    imageUrl:
      "https://www.rukita.co/stories/wp-content/uploads/2023/10/Edsheeran.jpg.webp",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    imageUrl:
      "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/events/2023/09/21/273ba3f2-5ab9-44e7-920a-7e2c45498f66-1695297789191-0aca64fb473648249d7123f5df3387b4.jpg",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    imageUrl:
      "https://awsimages.detik.net.id/community/media/visual/2023/05/10/konser-coldplay-2023-music-of-the-spheres-world-tour_169.jpeg?w=1200",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    imageUrl:
      "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/06/12/one-ok-rock-ig-pkentertainment-id-3095586971.jpg",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    imageUrl:
      "https://asset.kompas.com/crops/NXysik8RZXUul2Mv2BtSCEh5u7E=/522x108:1818x972/750x500/data/photo/2022/11/07/6368d24a5d2b7.jpg",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
  ];

