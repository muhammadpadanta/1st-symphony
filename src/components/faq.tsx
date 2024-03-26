import React from "react";

const faqs = [
  {
    title: "What is 1st Symphony ?",
    content:
      '"At 1st Symphony, we make getting tickets to your favorite concerts easy. Browse our curated selection of live music events, choose your seats, and book with confidence. From rock to jazz, classical to pop, find the perfect concert experience with us. Start planning your next unforgettable night out – get your tickets now at 1st Symphony!"',
  },

  { title: "How can I receive my concert tickets after purchasing them on your website?",
   content: "After you complete your ticket purchase on our website, you will receive a confirmation email with details about your order. Your concert tickets will be delivered to you electronically via email or through our mobile app. You can simply present the digital tickets on your smartphone at the venue, or print them out for entry. If you have any concerns about receiving your tickets, please don't hesitate to contact our customer support team for assistance." },

  { title: "Can I cancel or exchange my concert tickets after purchasing them?",
   content: "Unfortunately, we are unable to offer cancellations or exchanges for concert tickets once they have been purchased. All ticket sales are final, and we are unable to refund or exchange tickets for a different event or date. We recommend carefully reviewing the event details, including the date, time, and venue, before completing your ticket purchase. If you have any concerns or encounter any issues with your tickets, please don't hesitate to contact our customer support team for assistance. We're here to help ensure you have an enjoyable concert experience." },

   { title: "Are there any age restrictions for attending concerts listed on your website?",
   content: "Age restrictions for concerts vary depending on the event and venue. Some concerts may be open to all ages, while others may have age restrictions imposed by the artist or venue. We recommend reviewing the event details provided on our website, which typically include information about any age restrictions or guidelines for attendees. If you have specific questions about age restrictions for a particular concert, feel free to reach out to our customer support team for clarification. We're here to help ensure you have all the information you need to enjoy your concert experience to the fullest." },

   { title: "How do I know if my concert tickets are authentic?",
   content: "We take the authenticity of concert tickets very seriously. When you purchase tickets through our website, you can rest assured that you are buying genuine tickets directly from authorized sellers or official ticketing partners. Additionally, all tickets sold on our platform are backed by our guarantee of authenticity. If you have any concerns about the authenticity of your tickets or encounter any issues upon entry to the event, please contact our customer support team immediately for assistance. We're dedicated to ensuring that you have a seamless and worry-free concert experience." },
  
];

export function FaqMenu() {
  return (
    <div className="max-w-2xl mx-auto flex flex-col justify-center items-center space-y-5 h-screen new-rocker-regular">
      <h1 className="text-3xl mb-5 text-red-400">Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="collapse collapse-arrow bg-[#2e3239] mb-5">
          <input
            type="radio"
            name="my-accordion-2"
            defaultChecked={index === 0}
          />
          <div className="collapse-title text-2xl text-white">{faq.title}</div>
          <div className="collapse-content text-gray-300">
            <p>{faq.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FaqMenu;
