import React from "react";

import '../../styles/twclass.css';
import {faqs} from "@/constants";

export function FaqMenu() {
  return (
      <div
          style={{filter: "drop-shadow(4px 4px 10px rgba(255, 99, 71, 0.2))"}}
          className="faqContainer">
          <h1 className="faqTitle">FAQ</h1>
          <div className="faqItemsContainer">
              {faqs.map((faq, index) => (
                  <div key={index} className="faqItem hover:scale-110 transition-all">
                      <h2 className="faqItemTitle ">
                          {faq.question}
                      </h2>
                      <p className="faqItemContent">
                          {faq.answer}
                      </p>
                  </div>
              ))}
          </div>
      </div>
  );
}

export default FaqMenu;
