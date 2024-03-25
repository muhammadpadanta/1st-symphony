"use client";


import { CardSlider } from "@/components/ui/card-slider";
import Image from 'next/image';

export function CardSliderAnimation() {
  return (
    <div className="anjay">
      <div className="teks text-center mt-10">
  <span className="rounded-full inline-block">
    <h1 className="text-white text-4xl px-4 py-2 inline-block honk-font ">Most Popular</h1>
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
      "https://lastfm.freetls.fastly.net/i/u/770x0/e319c808bb2538b77e02cb667c1f7394.jpg#e319c808bb2538b77e02cb667c1f7394",
    name: "Tulus - Monokrom",
    title: "A Tale of Two Cities",
  },
  {
    imageUrl:
      "https://lastfm.freetls.fastly.net/i/u/770x0/e319c808bb2538b77e02cb667c1f7394.jpg#e319c808bb2538b77e02cb667c1f7394",
    name: "Newjeans - OMG",
    title: "Hamlet",
  },
  {
    imageUrl:
      "https://lastfm.freetls.fastly.net/i/u/770x0/e319c808bb2538b77e02cb667c1f7394.jpg#e319c808bb2538b77e02cb667c1f7394",
    name: "Imagine Dragon - Believer",
    title: "A Dream Within a Dream",
  },
  {
    imageUrl:
      "https://lastfm.freetls.fastly.net/i/u/770x0/e319c808bb2538b77e02cb667c1f7394.jpg#e319c808bb2538b77e02cb667c1f7394",
    name: "Yoasobi - Ano yume o Nazotte",
    title: "Pride and Prejudice",
  },
  {
    imageUrl:
      "https://lastfm.freetls.fastly.net/i/u/770x0/e319c808bb2538b77e02cb667c1f7394.jpg#e319c808bb2538b77e02cb667c1f7394",
    name: "Virgoun - Bukti",
    title: "Moby-Dick",
  },
];

export function CardSliderAnimation2() {
  return (
    <div className="anjay">
      <div className="teks text-center mt-10">
        <span className=" rounded-full inline-block">
          <h1 className="text-white text-4xl px-4 py-2 inline-block honk-font">Upcoming</h1>
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
      "https://lastfm.freetls.fastly.net/i/u/770x0/e319c808bb2538b77e02cb667c1f7394.jpg#e319c808bb2538b77e02cb667c1f7394",
    name: "Ed Sheeran - Perfect",
    title: "A Tale of Two Cities",
  },
  {
    imageUrl:
      "https://lastfm.freetls.fastly.net/i/u/770x0/e319c808bb2538b77e02cb667c1f7394.jpg#e319c808bb2538b77e02cb667c1f7394",
    name: "Twice - What is Love?",
    title: "Hamlet",
  },
  {
    imageUrl:
      "https://lastfm.freetls.fastly.net/i/u/770x0/e319c808bb2538b77e02cb667c1f7394.jpg#e319c808bb2538b77e02cb667c1f7394",
    name: "Coldplay - Paradise",
    title: "A Dream Within a Dream",
  },
  {
    imageUrl:
      "https://lastfm.freetls.fastly.net/i/u/770x0/e319c808bb2538b77e02cb667c1f7394.jpg#e319c808bb2538b77e02cb667c1f7394",
    name: "Artist - Unknown",
    title: "Pride and Prejudice",
  },
  {
    imageUrl:
      "https://lastfm.freetls.fastly.net/i/u/770x0/e319c808bb2538b77e02cb667c1f7394.jpg#e319c808bb2538b77e02cb667c1f7394",
    name: "ITZY - Checkmate",
    title: "Moby-Dick",
  },
  ];

