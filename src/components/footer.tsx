import React from 'react';
import { SocialMedia } from "@/components/ui/social-media";
import { BsMusicNote, BsMusicNoteBeamed, } from "react-icons/bs";
const people = [
  {
    id: 1,
    name: "Facebook",
    designation: "Facebook",
    image:
    "https://cdn.pixabay.com/photo/2016/11/05/08/42/facebook-1799691_1280.png",
  },
  {
    id: 2,
    name: "Discord",
    designation: "Discord",
    image:
      "https://i.pinimg.com/736x/8b/70/50/8b70503d7ffc26ad5a89ce4c4ce231f9.jpg",
  },
  {
    id: 3,
    name: "Instagram",
    designation: "Instagram",
    image:
      "https://i.pinimg.com/564x/36/b2/2d/36b22ddab8cdc81af8cdcd26b144ca37.jpg",
  },

  ];
const Footer = () => (
  <footer className="footer items-center  bg-[#06181b] text-white p-5 mt-5">
    <aside className="items-center grid-flow-col">
    <p className='danta'>Copyright © 2024</p>
    
      <p className='dancing-script-font text-xl '>1st Symphony</p>
      
      <p className='danta'>- All right reserved</p>
      
    </aside> 
    <nav className="grid-flow-col gap-4 mr-20 justify-self-end ">
      <div className="flex  ">
        <SocialMedia items={people} />
      </div>
    </nav>
  </footer>
);

export default Footer;