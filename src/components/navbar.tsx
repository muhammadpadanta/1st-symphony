"use client";
import React, {useState, useContext, useEffect} from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import UserContext from "../../pages/UserContext";
import Link from 'next/link';
import {BsFillPersonFill, BsClipboard2Check, BsJustify, BsCart} from "react-icons/bs";
import '../../styles/twclass.css';
import Image from "next/image";


function getUserIdFromLocalStorage() {
    // Get the 'user-info' item from local storage
    const userInfo = localStorage.getItem('user-info');

    // Check if the 'user-info' item exists
    if (userInfo) {
        // Parse the 'user-info' item as JSON to convert it back into an object
        const parsedUserInfo = JSON.parse(userInfo);

        // Return the 'id' property of the object
        return parsedUserInfo.id;
    }

    // If the 'user-info' item does not exist, return null
    return null;
}





export function Navbar({ className}: { className?: string }) {
    const userContext = useContext(UserContext);

    const id=  getUserIdFromLocalStorage()
    console.log("Item ID:", id);

    const [userData, setUserData] = useState({
        name: "",
        username: "",
        phone: "",
        address: "",
        email: "",
        birth: "",
        password: "",
        gender: "",
        pfp_path: "",
    });


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/cariuser/${id}`);
                const data = await response.json();
                setUserData(data);
                // setImagePreview(`http://localhost:8000/${data.file_path}`);
            } catch (error) {
                console.error("Error fetching data:", error);
                // Handle error as needed
            }
        };

        fetchData();
    }, [id]);



    if (!userContext) {
        throw new Error('Navbar must be used within a UserProvider');
    }

    const { checkUserLoggedIn, setIsLoggedIn } = userContext;
    const [active, setActive] = useState<string | null>(null);
    const handleLogout = () => {
        setIsLoggedIn(false); // Set isLoggedIn state to false
        localStorage.removeItem('user-info');
    };


  return (
      <div className={`${className}`}>
          <nav
              onMouseLeave={() => setActive(null)} // resets the state
              className="w-full bg-[#0a0a0a] bg-opacity-50 backdrop-blur-lg flex justify-between items-center p-4 "
          >
              <Link href="/" legacyBehavior>
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
                      labelClassName="text-white hover:scale-110 hover:opacity-40 transition-all xs:hidden lg:flex"
                  >
                      <div className="flex flex-col space-y-4 text-sm ">
                          <HoveredLink href="/about/contactus">Contact us</HoveredLink>
                          <HoveredLink href="/about/ourteam">Our Team</HoveredLink>
                      </div>
                  </MenuItem>


              </Menu>

              <div className="flex justify-between items-center text-white text-xl mr-10 space-x-8 ">


                  {checkUserLoggedIn() ? (
                      <>
                          <Link href="/inventory" legacyBehavior
                                className="text-xl hover:scale-110 hover:opacity-50 transition-all">
                              <BsClipboard2Check className="cursor-pointer hover:scale-110 hover:opacity-50 transition-all"/>
                          </Link>

                          <Link href="/cart" legacyBehavior
                                className="text-xl hover:scale-110 hover:opacity-50 transition-all">
                              <BsCart className="cursor-pointer hover:scale-110 hover:opacity-50 transition-all"/>
                          </Link>


                          <MenuItem
                              setActive={setActive}
                              active={active}
                              itemId={"account"}
                              item={
                                  <div className="w-[25px] h-[25px] rounded-full bg-transparent">
                                      <Image
                                          width={100}
                                          height={100}
                                          src={userData.pfp_path ? `http://localhost:8000/${userData.pfp_path}` : `/images/defaultAvatar.webp`}
                                          alt="Preview"
                                          className="w-full h-full object-cover rounded-full hover:scale-105 transition-all"
                                      />
                                  </div>
                              }
                              labelClassName="hover:scale-110 hover:opacity-40  transition-all"
                          >
                              <div className="flex flex-col space-y-4 text-sm ">
                                  {checkUserLoggedIn() ? (
                                      <>
                                          <HoveredLink href="/account/profile">Account</HoveredLink>
                                          <div onClick={handleLogout}>
                                              <HoveredLink href="/auth/login">Logout</HoveredLink>
                                          </div>
                                      </>
                                  ) : (
                                      <HoveredLink href="/auth/register">Register</HoveredLink>
                                  )}


                              </div>
                          </MenuItem>
                      </>
                  ) : (
                      <>
                          <Link href="/auth/register" legacyBehavior>
                              <div
                                  className="text-md text-white hover:scale-110 hover:opacity-50 transition-all cursor-pointer">
                                  Sign Up
                              </div>
                          </Link>

                          <Link href="/auth/login" legacyBehavior>
                              <div className="text-md text-white hover:scale-110 hover:opacity-50 transition-all cursor-pointer">
                                  Login
                              </div>
                          </Link>
                      </>
                  )}

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


