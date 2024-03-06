import React from 'react';
import { SocialMedia } from "@/components/ui/social-media";
import { BsMusicNote, BsMusicNoteBeamed, } from "react-icons/bs";
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
    <p>Copyright © 2024</p>
    
      <p>1st Symphony</p>
      
      <p>- All right reserved</p>
      
    </aside> 
    <nav className="grid-flow-col gap-4 mr-20 justify-self-end ">
      <div className="flex  ">
        <SocialMedia items={people} />
      </div>
    </nav>
  </footer>
);

export default Footer;