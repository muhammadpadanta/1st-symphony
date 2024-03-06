"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";

export function NavbarMenu() {
  return (
    <div className="relative left-0 w-screen  z-50 ">
      <Navbar className="top-2  " />
      
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className="fixed top-0 z-50 w-screen">
      
      <Menu setActive={setActive}>
      

      
        <a href="https://youtube.com" className="text-white">Home</a>
        <a href="https://youtube.com" className="text-white">Ticket</a>
        
        
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Contact us</HoveredLink>
            <HoveredLink href="/individual">Our Team</HoveredLink>
            
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}


