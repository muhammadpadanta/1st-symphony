"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";

import Link from 'next/link';
import {BsFillPersonFill, BsClipboard2Check, BsJustify} from "react-icons/bs";

export function Navbar({ className}: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
      <div className={`${className}`}>
          <nav
              onMouseLeave={() => setActive(null)} // resets the state
              className="w-screen bg-[#0a0a0a] bg-opacity-50 backdrop-blur-lg flex justify-between items-center p-4"
          >
              <Link href="/">
                  <div
                      className="bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent whitespace-nowrap text-lg flex justify-between xl:text-2xl  hover:opacity-70 transition-all ">1st
                      Symphony
                  </div>
              </Link>

              <Menu setActive={setActive}>

                  <Link href="/" legacyBehavior>
                      <p className="text-white hover:scale-110 hover:opacity-50 transition-all cursor-pointer xs:hidden lg:flex">Home</p>
                  </Link>
                  <Link href="/tickets" legacyBehavior>
                      <p className="text-white hover:scale-110 hover:opacity-50 transition-all cursor-pointer xs:hidden lg:flex">Ticket</p>
                  </Link>


                  <MenuItem
                      setActive={setActive}
                      active={active}
                      item="About"
                      itemId={"about"}
                      labelClassName="hover:scale-110 hover:opacity-50 transition-all xs:hidden lg:flex"
                  >
                      <div className="flex flex-col space-y-4 text-sm ">
                          <HoveredLink href="/hobby">Contact us</HoveredLink>
                          <HoveredLink href="/individual">Our Team</HoveredLink>
                      </div>
                  </MenuItem>


              </Menu>

              <div className="flex justify-between items-center text-white text-xl mr-10 space-x-8">


                  <Link href="/inventory"
                        className="text-xl hover:scale-110 hover:opacity-50 transition-all cursor-pointer">
                      <BsClipboard2Check/>
                  </Link>

                  <MenuItem
                      setActive={setActive}
                      active={active}
                      itemId={"account"}
                      item={<BsFillPersonFill className="text-2xl"/>}
                      labelClassName="hover:scale-110 hover:opacity-50  transition-all"
                  >

                      <div className="flex flex-col space-y-4 text-sm ">
                          <HoveredLink href="/account">Account</HoveredLink>
                          <HoveredLink href="/login">Login</HoveredLink>
                          <HoveredLink href="/register">Register</HoveredLink>
                      </div>
                  </MenuItem>

                  <MenuItem
                      setActive={setActive}
                      active={active}
                      itemId={"bar"}
                      item={<BsJustify className="text-2xl"/>}
                      labelClassName="hover:scale-110 hover:opacity-50  transition-all xs:flex lg:hidden"
                  >

                      <div className="flex flex-col space-y-4 text-sm ">
                          <HoveredLink href="/">Home</HoveredLink>
                          <HoveredLink href="/tickets">Ticket</HoveredLink>
                          <HoveredLink href="/">Contact us</HoveredLink>
                          <HoveredLink href="/">Our Team</HoveredLink>
                      </div>
                  </MenuItem>
              </div>
          </nav>
      </div>
  );
}


