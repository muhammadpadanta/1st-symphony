"use client";
import React from "react";
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

export function SocialMediaAnimation() {
  return (
    <div className="flex flex-row items-center justify-center w-full ">
      <SocialMedia items={people} />
    </div>
  );
}
