import React from "react";
import { SocialMedia } from "@/components/ui/social-media";
import { socialMedia, asideParagraphs } from "@/constants";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className="footer items-center bg-[#06181b] text-white p-5 relative inset-x-0 bottom-0">
      <div className="absolute inset-0 bg-cover bg-center wp z-0 " />
      <aside className="items-center grid-flow-col pacifico-regular z-10 relative">
        {asideParagraphs.map((paragraph, index) => (
          <p key={index} className={paragraph.className}>
            {paragraph.text}
          </p>
        ))}
      </aside>
      <nav className="grid-flow-col gap-4 mr-20 justify-self-end z-10 relative">
        <div className="flex">
          <SocialMedia items={socialMedia} />
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
