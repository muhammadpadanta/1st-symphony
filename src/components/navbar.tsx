import { useEffect, useState } from "react";
import React, { useContext } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import UserContext from "../../pages/UserContext";
import Link from "next/link";
import {
  BsMusicNoteBeamed,
  BsClipboard2Check,
  BsJustify,
  BsCart,
  BsPersonCircle,
} from "react-icons/bs";
import "../../styles/twclass.css";
import Image from "next/image";

function checkUserLoggedIn() {
  const token = localStorage.getItem("token");
  if (token) {
    return true;
  }
  return false;
}

export function Navbar({ className }: { className?: string }) {
  interface UserData {
    pfp_path: string;
    role: string;
  }

  const [userData, setUserData] = useState<UserData | null>(null);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:8000/api/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => setUserData(data));
    }
  }, []);

  async function handleLogout() {
    try {
      const token = localStorage.getItem("token");
      const response = await logout(token);
      console.log(response.message);
      localStorage.removeItem("token");
    } catch (error) {
      console.error("Logout failed", error);
    }
  }

  async function logout(token) {
    const response = await fetch("http://localhost:8000/api/logout", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Logout failed");
    }

    return response.json();
  }

  return (
    <div className={`${className}`}>
      <nav
        onMouseLeave={() => setActive(null)}
        className="w-full bg-[#0a0a0a] bg-opacity-50 backdrop-blur-lg justify-center items-center p-4 "
      >
        <div className="flex justify-between w-2/3 mx-auto items-center">
          <div className="ml-5 flex items-center ">
            <BsMusicNoteBeamed className="w-5 h-5 text-yellow-400 mr-2 mt-2" />
            <Link href="/" legacyBehavior>
              <div className="text-[#FFC107] font-bold text-lg flex justify-between xl:text-xl  hover:opacity-70 transition-all ">
                {" "}
                1st Symphony
              </div>
            </Link>
          </div>
          <div className={"ml-5"}>
            <Menu setActive={setActive}>
              <Link href="/" legacyBehavior>
                <p className="text-white hover:scale-110 hover:text-[#8BC34A] transition-all cursor-pointer xs:hidden lg:flex">
                  Home
                </p>
              </Link>
              <Link href="/concerts" legacyBehavior>
                <p className="text-white hover:scale-110 hover:text-[#8BC34A] transition-all cursor-pointer xs:hidden lg:flex">
                  Concert
                </p>
              </Link>

              <MenuItem
                setActive={setActive}
                active={active}
                item="About"
                itemId={"about"}
                labelClassName="text-white hover:scale-110 hover:text-[#8BC34A] transition-all xs:hidden lg:flex"
              >
                <div className="flex flex-col space-y-4 text-sm  ">
                  <HoveredLink href="/about/contactus">Contact us</HoveredLink>
                  <HoveredLink href="/about/ourteam">Our Team</HoveredLink>
                </div>
              </MenuItem>

              <div>
                <div className="flex justify-between items-center text-white text-xl mr-10 space-x-8 ">
                  {checkUserLoggedIn() ? (
                    <>
                      {userData && userData.role === "user" && (
                        <>
                          <Link
                            href="/inventory"
                            legacyBehavior
                            className="text-xl hover:scale-110 hover:opacity-50 transition-all"
                          >
                            <BsClipboard2Check className="cursor-pointer hover:scale-110 hover:opacity-50 transition-all" />
                          </Link>

                          <Link
                            href="/cart"
                            legacyBehavior
                            className="text-xl hover:scale-110 hover:text-[#8BC34A] transition-all"
                          >
                            <BsCart className="cursor-pointer hover:scale-110 hover:opacity-50 transition-all" />
                          </Link>
                        </>
                      )}

                      {userData && userData.role === "admin" && (
                        <Link href="/admin/dashboard" legacyBehavior>
                          <p className="text-xl hover:scale-110 hover:text-[#8BC34A] transition-all cursor-pointer">
                            Dashboard
                          </p>
                        </Link>
                      )}

                      <MenuItem
                        setActive={setActive}
                        active={active}
                        itemId={"account"}
                        item={
                          <div className="w-[25px] h-[25px] rounded-full bg-transparent">
                            {userData && userData.pfp_path ? (
                              <Image
                                width={100}
                                height={100}
                                src={`http://localhost:8000/${userData.pfp_path}`}
                                alt="Preview"
                                className="w-full h-full object-cover rounded-full hover:scale-105 transition-all"
                              />
                            ) : (
                              <BsPersonCircle className="w-full h-full text-white" />
                            )}
                          </div>
                        }
                        labelClassName="hover:scale-110 hover:text-[#8BC34A]  transition-all"
                      >
                        <div className="flex flex-col space-y-4 text-sm ">
                          <HoveredLink href="/account/profile">
                            Account
                          </HoveredLink>
                          <div onClick={handleLogout}>
                            <HoveredLink href="/auth/login">Logout</HoveredLink>
                          </div>
                        </div>
                      </MenuItem>
                    </>
                  ) : (
                    <>
                      <Link href="/auth/register" legacyBehavior>
                        <div className="text-md text-[#FFC107] hover:scale-110 hover:text-[#8BC34A] transition-all cursor-pointer">
                          Sign Up
                        </div>
                      </Link>
                    </>
                  )}

                  <MenuItem
                    setActive={setActive}
                    active={active}
                    itemId={"bar"}
                    item={<BsJustify className="text-2xl" />}
                    labelClassName="hover:scale-110 hover:opacity-50  transition-all xs:flex lg:hidden"
                  >
                    <div className="flex flex-col space-y-4 text-sm hover:text-[#8BC34A]">
                      <HoveredLink href="/">Home</HoveredLink>
                      <HoveredLink href="/tickets">Ticket</HoveredLink>
                      <HoveredLink href="/">Contact us</HoveredLink>
                      <HoveredLink href="/">Our Team</HoveredLink>
                    </div>
                  </MenuItem>
                </div>
              </div>
            </Menu>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
