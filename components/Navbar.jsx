import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { MdNightlightRound } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill, BsFillSunFill } from "react-icons/bs";
import { DiSublime } from "react-icons/di";
import { useTheme } from "next-themes";
import Button from "./Button";

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const router = useRouter();
  const handleNav = () => {
    setNav(!nav);
  };
  {
    /*
    useEffect(() => {
    if (router.asPath === "/property") {
      SethideNavbarFix(true);
    } else {
      SethideNavbarFix(false);
    }
  }, [router]); 
  */
  }

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    const shadowEventListener = window.addEventListener("scroll", handleShadow);
    return () => {
      window.removeEventListener("scroll", handleShadow);
    };
  }, [router]);
  {
    /* Toogle dark and light mode */
  }

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <Button className="rounded-lg p-1 " onClick={() => setTheme("light")}>
          <BsFillSunFill size={24}></BsFillSunFill>
        </Button>
      );
    } else {
      return (
        <Button
          className="rounded-lg p-1 bg-[#ecf0f3]"
          onClick={() => setTheme("dark")}
        >
          <MdNightlightRound size={24}></MdNightlightRound>
        </Button>
      );
    }
  };
  return (
    <div className="w-full h-16 relative ">
      <div
        className={
          shadow
            ? `fixed  w-full h-16 shadow-lg shadow-black dark:shadow-[#5651e5]  duration-1000 z-[100] bg-[#ecf0f3] dark:bg-[#0f0e17]`
            : `fixed  w-full h-16  z-[100] bg-[#ecf0f3] dark:bg-[#0f0e17]`
        }
      >
        <div className="flex  justify-between items-center w-full h-full  px-2 2xl:px-16 ">
          <Link href="/">
            <DiSublime className="cursor-pointer" color="#5651e5" size={50} />
          </Link>

          <div>
            <ul className="hidden text-black dark:text-white md:mx-7 md:flex select-none items-center">
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
              <li className="ml-10 text-sm uppercase hover:scale-105">
                {renderThemeChanger()}
              </li>
            </ul>
            <div onClick={handleNav} className="mr-5 md:hidden">
              <AiOutlineMenu className="text-black dark:text-white" size={25} />
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
                ? "overflow-auto fixed left-0 top-0 w-[85%] sm:w-[75%]  h-screen bg-[#ecf0f3] dark:bg-[#0f0e17] py-10 px-5 ease-in duration-500"
                : "fixed left-[-100%] top-0 py-10 px-5"
            }
          >
            <div>
              <div className="flex w-full  justify-between items-center">
                <Link href="/">
                  <DiSublime
                    className="cursor-pointer"
                    color="#5651e5"
                    size={50}
                  />
                </Link>
                <div
                  onClick={handleNav}
                  className="rounded-full dark:bg-[#5651e5] shadow-xl shadow-[#5651e5] p-3 cursor-pointer"
                >
                  <AiOutlineClose className="dark:text-black" />
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
                <li className="text-center">{renderThemeChanger()}</li>
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
              <div className="pt-16">
                <p className="uppercase tracking-widest text-[#5651e5]">
                  Let&apos;s Connect!
                </p>

                <div className="flex items-center justify-between w-full my-4 sm:w-[80%] pt-4 pb-4">
                  <div className="rounded-full dark:bg-[#fffffe] shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaLinkedinIn color="black" size={20} />
                  </div>
                  <div className="rounded-full dark:bg-[#fffffe] shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaGithub color="black" size={20} />
                  </div>
                  <div className="rounded-full dark:bg-[#fffffe] shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                    <BsFillPersonLinesFill color="black" size={20} />
                  </div>
                  <div className="rounded-full dark:bg-[#fffffe] shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 ">
                    <AiOutlineMail color="black" size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={handleNav}
            className={
              nav ? "fixed right-0 top-0 h-screen w-[15%] sm:w-[25%] " : ""
            }
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
