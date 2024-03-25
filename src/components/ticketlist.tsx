"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/ticket-list";
import { HiLocationMarker } from "react-icons/hi";
export function TicketList() {
  return (
    <>
     <video
                src="/epicvid.mp4"
                playsInline
                autoPlay
                muted
                loop
                className="absolute w-full h-[96vh] object-cover z-1 brightness-50 opacity-25"
            />
      <div className="bg-[#0a0a0a] h-[96vh] top-0 bottom-0  flex justify-center items-center overflow-y-hidden">
      <div className="bg-transparent w-full sm:w-3/4 md:w-2/3 h-[80vh] flex flex-col rounded-xl px-5 utama overflow-auto">

          <div className="kotak1 border bg-opacity-20 backdrop-blur-lg mb-5 bg-[#0d3c44] rounded-xl flex-grow flex flex-col md:flex-row justify-center items-center h-1/2 text-white">
            <div className="item1 px-5 flex-grow flex justify-center items-center">
              <CardContainer className="inter-var ">
                <CardBody className="flex justify-center items-center  relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black   rounded-xl p-3  ">
                  <CardItem translateZ="100" className="w-full mt-4  ">
                    <Image
                      src="https://lastfm.freetls.fastly.net/i/u/770x0/ad255404a818dfbd6b2ccd17bda35988.jpg#ad255404a818dfbd6b2ccd17bda35988"
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>

            <div className="item2 w-full text-sm  2xl:text-2xl flex-grow flex justify-center items-center space-x-10 ">
              <div className="block text-center danta1 hover:scale-110 transition-all hover:text-yellow-300 cursor-pointer">
                <p>20</p>
                <p>FEB</p>
              </div>

              <div className="block text-center  danta1 px-5 hover:scale-110 transition-all hover:text-yellow-300 cursor-pointer">
                <p className="text-sm">Jakarta, Indonesia</p>
                <p>
                  <span className="inline-flex items-center">
                  <HiLocationMarker />
                    <span className="pr-5">bsd city</span>
                  </span>
                </p>
              </div>
            </div>

            <div className="item3 pl-10 w-full text-sm = 2xl:text-xl flex-grow flex justify-center items-center danta hover:scale-110 transition-all hover:text-yellow-300 cursor-pointer">
              <p>Rp800.000 - Rp1.200.000 </p>
            </div>

            <div className="item4 px-10 w-full md:w-1/4 flex justify-center items-center">
              <button className="btn hover:text-yellow-300 hover:bg-[#1b1a1a]">GET TICKET</button>
            </div>
          </div>


         
          

         

        </div>
      </div>
    </>
  );
}
