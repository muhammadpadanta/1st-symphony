"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";

import Link from 'next/link';
import {BsFillPersonFill, BsReverseLayoutTextSidebarReverse} from "react-icons/bs";

export function NavbarMenu() {
  return (
    <div className="relative left-0 w-screen z-50 ">
      <Navbar className="top-2  " />
      
    </div>
  );
}

function Navbar({ }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
      <div className="fixed top-0 z-50 w-screen pacifico-regular">
          <nav
              onMouseLeave={() => setActive(null)} // resets the state
              className="w-screen top-0 sticky z-50 bg-[#092327] flex justify-between items-center p-4"
          >
              <a href="https://www.youtube.com">
                  <div
                      className="bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent  flex justify-between pacifico-regular text-2xl hover:opacity-70 transition-all">1st
                      Symphony
                  </div>
              </a>

              <Menu setActive={setActive}>

                  <Link href="/" legacyBehavior>
                      <p className="text-white hover:scale-110 hover:opacity-80 transition-all cursor-pointer ">Home</p>
                  </Link>
                  <Link href="/tickets" legacyBehavior>
                      <p className="text-white hover:scale-110 hover:opacity-80 transition-all cursor-pointer">Ticket</p>
                  </Link>


                  <MenuItem
                      setActive={setActive}
                      active={active}
                      item="About"
                      itemId={"about"}
                      labelClassName="hover:scale-110 transition-all" // New prop
                  >
                      <div className="flex flex-col space-y-4 text-sm ">
                          <HoveredLink href="/hobby">Contact us</HoveredLink>
                          <HoveredLink href="/individual">Our Team</HoveredLink>
                      </div>
                  </MenuItem>


              </Menu>

              <div className="flex justify-between items-center text-white text-xl mr-10 space-x-8">


                  <a href="https://www.youtube.com" className="text-xl hover:scale-110 hover:opacity-80 transition-all cursor-pointer">
                      <BsReverseLayoutTextSidebarReverse/>
                  </a>

                  <MenuItem
                      setActive={setActive}
                      active={active}
                      itemId={"account"}
                      item={<BsFillPersonFill className="text-2xl" />}
                      labelClassName="hover:scale-110 transition-all"
                  >

                      <div className="flex flex-col space-y-4 text-sm ">
                          <HoveredLink href="/individual">Account</HoveredLink>
                          <HoveredLink href="/hobby">Login</HoveredLink>
                          <HoveredLink href="/individual">Register</HoveredLink>
                      </div>
                  </MenuItem>
              </div>
          </nav>
      </div>
  );
}


