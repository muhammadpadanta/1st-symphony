import React from "react";
import { faqs } from "@/constants";


export function FaqMenu() {
  return (
      <div className="max-w-2xl mx-auto flex flex-col mb-10 justify-center items-center space-y-5 h-screen xs:h-auto new-rocker-regular ">
          <h1 className="text-3xl mb-5 text-red-400 xs:text-2xl">Frequently Asked Questions</h1>
          {faqs.map((faq, index) => (
              <div key={index}
                   className="collapse collapse-arrow bg-[#2e3239] bg-opacity-20 backdrop-blur-lg mb-5 xs:bg-opacity-50 xs:backdrop-blur-none"
                   style={{ filter: "drop-shadow(8px 8px 2px rgba(0, 0, 0, 1))"}}
              >
                  <input
                      type="radio"
                      name="my-accordion-2"
                      defaultChecked={index === 0}
                  />
                  <div className="collapse-title text-2xl text-white xs:text-xl">{faq.title}</div>
                  <div className="collapse-content text-gray-300 xs:text-sm">
                      <p>{faq.content}</p>
                  </div>
              </div>
          ))}
      </div>
  );
}

export default FaqMenu;
