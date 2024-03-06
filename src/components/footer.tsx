import React from 'react';
import { SocialMedia } from "@/components/ui/social-media";
const people = [
  {
    id: 1,
    name: "Facebook",
    designation: "Facebook",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png",
  },
  {
    id: 2,
    name: "Discord",
    designation: "Discord",
    image:
      "https://e7.pngegg.com/pngimages/842/992/png-clipart-discord-computer-servers-teamspeak-discord-icon-video-game-smiley-thumbnail.png",
  },
  {
    id: 3,
    name: "Instagram",
    designation: "Instagram",
    image:
      "https://e7.pngegg.com/pngimages/953/528/png-clipart-instagram-icon-logo-desktop-computer-icons-instagram-miscellaneous-text.png",
  },

  ];
const Footer = () => (
  <footer className="footer items-center  bg-[#080f30] text-white p-5 mt-5">
    <aside className="items-center grid-flow-col">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
      </svg>
      
      <p>Copyright 1st Symphony © 2024 - All right reserved</p>
    </aside> 
    <nav className="grid-flow-col gap-4 mr-20 justify-self-end ">
      <div className="flex ">
        <SocialMedia items={people} />
      </div>
    </nav>
  </footer>
);

export default Footer;