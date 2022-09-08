import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { DiSublime } from "react-icons/di";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const [hamburgerColor, setHamburgerColor] = useState("black");
  const [hideNavbarFix, SethideNavbarFix] = useState(false);
  const router = useRouter();
  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    if (router.asPath === "/property") {
      SethideNavbarFix(true);
    } else {
      SethideNavbarFix(false);
    }
  }, [router]);
  useEffect(() => {
    if (router.asPath === "/property") {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
      setHamburgerColor("white");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
      setHamburgerColor("black");
    }
  }, [router]);
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
        setNavBg("#ecf0f3");
        setLinkColor("#1f2937");
        setHamburgerColor("black");
      } else {
        if (router.asPath === "/property") {
          setNavBg("transparent");
          setLinkColor("#ecf0f3");
          setHamburgerColor("white");
        }
        setShadow(false);
      }
    };
    const shadowEventListener = window.addEventListener("scroll", handleShadow);
    return () => {
      window.removeEventListener("scroll", handleShadow);
    };
  }, [router]);
  const toogleTheme = async () => {
    await setTheme(theme === "light" ? "dark" : "light");
    console.log(theme);
  };
  return (
    <div
      className={!hideNavbarFix ? "w-full h-16 relative " : "w-full relative"}
    >
      <div
        style={{ backgroundColor: `${navBg}` }}
        className={
          shadow
            ? "fixed  w-full h-16 shadow-2xl z-[100] "
            : "fixed  w-full h-16  z-[100]"
        }
      >
        <div className="flex  justify-between items-center w-full h-full  px-2 2xl:px-16 ">
          <Link href="/">
            <DiSublime className="cursor-pointer" color="#5651e5" size={50} />
          </Link>

          <div>
            <ul
              style={{ color: `${linkColor}` }}
              className="hidden md:mx-7 md:flex select-none"
            >
              <Link href="/">
                <li className="ml-10 text-sm uppercase hover:scale-105 ">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li className="ml-10 text-sm uppercase hover:scale-105">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li className="ml-10 text-sm uppercase hover:scale-105">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li className="ml-10 text-sm uppercase hover:scale-105">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li className="ml-10 text-sm uppercase hover:scale-105">
                  Contact
                </li>
              </Link>
            </ul>

            <div onClick={handleNav} className="mr-5 md:hidden">
              <AiOutlineMenu color={hamburgerColor} size={25} />
            </div>
          </div>
        </div>
        {/*Mobil nézeten miután megnyomod a hamburger menüt */}
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
              : ""
          }
        >
          <div
            className={
              nav
                ? "overflow-auto fixed left-0 top-0 w-[75%] sm:w-[60%]  h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 "
            }
          >
            <div>
              <div className="flex w-full  justify-between items-center">
                <Image
                  width="87"
                  height="35"
                  src="/assets/navLogo.png"
                  alt="nav logo"
                />
                <div
                  onClick={handleNav}
                  className="rounded-full shadow-xl shadow-gray-400 p-3 cursor-pointer"
                >
                  <AiOutlineClose />
                </div>
              </div>
              <div className="border-b border-gray-300 my-4">
                <p className="w-[85%]  py-4">
                  Let&apos;s build something legendary together!
                </p>
              </div>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link href="/">
                  <li onClick={handleNav} className="py-4 text-sm">
                    Home
                  </li>
                </Link>
                <Link href="/#about">
                  <li onClick={handleNav} className="py-4 text-sm">
                    About
                  </li>
                </Link>
                <Link href="/#skills">
                  <li onClick={handleNav} className="py-4 text-sm">
                    Skills
                  </li>
                </Link>
                <Link href="/#projects">
                  <li onClick={handleNav} className="py-4 text-sm">
                    Projects
                  </li>
                </Link>
                <Link href="/#contact">
                  <li onClick={handleNav} className="py-4 text-sm">
                    Contact
                  </li>
                </Link>
              </ul>
              <div className="pt-20">
                <p className="uppercase tracking-widest text-[#5651e5]">
                  Let&apos;s Connect!
                </p>

                <div className="flex items-center justify-between w-full my-4 sm:w-[80%]">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={handleNav}
            className={
              nav ? "fixed right-0 top-0 h-screen w-[25%] sm:w-[40%] " : ""
            }
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
