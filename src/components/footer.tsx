import React from 'react';
import { SocialMedia } from "@/components/ui/social-media";
const people = [
  {
    id: 1,
    name: "Facebook",
    designation: "1st Symphony",
    image: "https://cdn.pixabay.com/photo/2016/11/05/08/42/facebook-1799691_1280.png",
    url: "https://www.facebook.com/MuhammadPadantaTarigan"
  },
  {
    id: 2,
    name: "Discord",
    designation: "1stSymphony",
    image: "https://i.pinimg.com/736x/8b/70/50/8b70503d7ffc26ad5a89ce4c4ce231f9.jpg",
    url: "https://discord.gg/6CsZXs2DxN"
  },
  {
    id: 3,
    name: "Github",
    designation: "muhammadpadanta",
    image: "https://assets.dryicons.com/uploads/icon/svg/8312/cc33248a-e56e-4e7f-93f4-0e16350e5768.svg",
    url: "https://github.com/muhammadpadanta"
  },


  ];
  const Footer = () => (
    <footer className="footer items-center bg-[#06181b] text-white p-5 mt-5 relative">
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url('https://i.ibb.co/j66T1qq/Pngtree-blue-wave-shapes-with-layered-7291763.png')` }} />
      <aside className="items-center grid-flow-col pacifico-regular z-10 relative">
        <p className='text-center'>Copyright © 2024</p>
        <p className=''>1st Symphony</p>
        <p className=''>. All Right Reserved.</p>
      </aside> 
      <nav className="grid-flow-col gap-4 mr-20 justify-self-end z-10 relative">
        <div className="flex">
          <SocialMedia items={people} />
        </div>
      </nav>
    </footer>
  );
export default Footer;