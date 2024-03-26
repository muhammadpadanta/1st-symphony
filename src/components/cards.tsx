"use client";


import { CardSlider } from "@/components/ui/card-slider";



const upcomingTicket = [
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

const mostPopularTicket = [
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

export function CardSliderAnimation() {


  return (
      <div className="mt-20">
        <div className="container-1">
          <div className="teks text-center mt-10">
        <span className="rounded-full inline-block">
             <h1 className=" text-4xl px-4 py-2 inline-block new-rocker-regular bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent ">Upcoming</h1>
         </span>
          </div>

          <div
              className="mt-10 rounded-md flex flex-col antialiased bg-transparent items-center justify-center relative overflow-hidden">
            <CardSlider
                items={upcomingTicket}
                direction="right"
                speed="slow"
            />
          </div>
        </div>

        <div className="container-2">
          <div className="teks text-center mt-10">
        <span className="rounded-full inline-block">
         <h1 className="text-4xl px-4 py-2 inline-block new-rocker-regular bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent ">Most Popular</h1>
         </span>
          </div>

          <div
              className="mt-10 rounded-md flex flex-col antialiased bg-transparent items-center justify-center relative overflow-hidden">
            <CardSlider
                items={mostPopularTicket}
                direction="left"
                speed="slow"
            />
          </div>
        </div>


      </div>


  );
}







