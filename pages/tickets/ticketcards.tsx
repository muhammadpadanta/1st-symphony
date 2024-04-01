"use client";

import { CardSlider } from "@/components/ui/card-slider";
import {upcomingTicket, mostPopularTicket} from "@/constants";
export default function TicketCards() {


  return (
      <div className="mt-20 new-rocker-regular"

      >
          <br/><br/><br/>

          <div
              className="border-2 border-red-400 bg-gray-800 p-10 bg-opacity-20 backdrop-blur-lg  mt-10 rounded-md flex flex-col antialiased bg-transparent items-center justify-center relative overflow-hidden w-3/4 mx-auto "
              style={{ filter: "drop-shadow(8px 8px 2px rgba(0, 0, 0, 1))"}}
              id="upcomingConcerts"
          >

              <h1 className=" text-4xl px-4 py-2 inline-block new-rocker-regular bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent ">Upcoming</h1>

              <hr className="w-3/4 border-t border-red-400 my-4"/>

              <CardSlider
                  items={mostPopularTicket}
                  direction="right"
                  speed="slow"

              />
              <CardSlider
                  items={upcomingTicket}
                  direction="left"
                  speed="slow"

              />


          </div>
          <br/><br/><br/>

          <br/><br/><br/>
          <div
              className="border-2 border-red-400 bg-gray-800 p-10 bg-opacity-20 backdrop-blur-lg  mt-10 rounded-md flex flex-col antialiased bg-transparent items-center justify-center relative overflow-hidden w-3/4 mx-auto "
              style={{ filter: "drop-shadow(8px 8px 2px rgba(0, 0, 0, 1))"}}
              id="mostPopularConcerts"
          >


              <h1 className=" text-4xl px-4 py-2 inline-block new-rocker-regular bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent ">Most Popular</h1>

              <hr className="w-3/4 border-t border-red-400 my-4"/>

              <CardSlider
                  items={upcomingTicket}
                  direction="right"
                  speed="slow"

              />
              <CardSlider
                  items={mostPopularTicket}
                  direction="left"
                  speed="slow"

              />

          </div>
          <br/><br/><br/>


      </div>


  );
}







