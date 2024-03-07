"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from 'next/link';

export function NavbarMenu() {
  return (
    <div className="relative left-0 w-screen z-50 ">
      <Navbar className="top-2  " />
      
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className="fixed top-0 z-50 w-screen">
      
      <Menu setActive={setActive}>
      
      <Link href="/" legacyBehavior> 
      <a href="https://youtube.com" className="text-white danta hover:scale-110 hover:opacity-80 transition-all ">Home</a>
      </Link>
      <Link href="/ticketlist" legacyBehavior> 
      <a className="text-white danta hover:scale-110 hover:opacity-80 transition-all">Ticket</a>
      </Link>
        
        
        
        <MenuItem 
  setActive={setActive} 
  active={active} 
  item="About" 
  className="danta "
  labelClassName="hover:scale-110 transition-all" // New prop
>
  <div className="flex flex-col space-y-4 text-sm danta">
    <HoveredLink href="/hobby">Contact us</HoveredLink>
    <HoveredLink href="/individual">Our Team</HoveredLink>
  </div>
</MenuItem>


      </Menu>
    </div>
  );
}


