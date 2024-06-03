"use client";
import { user_icon } from "@/public/assets";
import Image from "next/image";
import React, { useState } from "react";
import Menu from "./Menu";
import Sidebar from "./Sidebar";
import { AiFillCaretDown } from "react-icons/ai";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full p-5 fixed z-50 ">
      <div className="flex  items-center  ">
        {/* sidebar  */}
        <div className="">
          <Menu onClick={() => setOpen(!open)} />
          <Sidebar open={open} />
        </div>
        {/* mainNavBar  */}
        <div className="flex justify-between w-full ml-20 items-center  z-50">
          <h1 className="text-2xl text-gray-300 flex   items-center cursor-pointer ">
            Gemini <AiFillCaretDown className="w-4 h-4 ml-1" />{" "}
          </h1>
          <div className="cursor-pointer">
            <Image
              src={user_icon}
              alt="image"
              height={35}
              width={35}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
