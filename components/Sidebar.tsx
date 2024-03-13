"use client";
import React from "react";
import {
  menu_icon,
  plus_icon,
  message_icon,
  history_icon,
  question_icon,
  setting_icon,
} from "@/public/assets";
import Image from "next/image";
import { motion } from "framer-motion";

const Sidebar = () => {
  return (
    <div className="min-h-screen  flex flex-col px-5 py-6 justify-between bg-[#F0F4F9] ">
      {/* Top Bar  */}
      <div className="space-y-9">
        <div className="px-3">
          <Image src={menu_icon} alt="menu" height={50} width={22} />
        </div>
        <div className="flex items-center space-x-3  bg-gray-200 py-2 px-3 rounded-full  ">
          <div className="w-6 h-6">
            <Image
              src={plus_icon}
              alt="plusIcon"
              height={27}
              width={20}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="whitespace-nowrap"> New Chat</p>
        </div>
        <div className="px-3">
          <h5 className="font-semibold">Recent</h5>
          <div className="flex space-x-1">
            <motion.div className="w-6 h-6">
              <Image
                src={message_icon}
                alt="message"
                height={50}
                width={22}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <p className="whitespace-nowrap">Hello Gemini</p>
          </div>
        </div>
      </div>
      {/* Bottom Bar  */}
      <div className="px-3 space-y-4">
        <div className="flex space-x-2">
          <div className="w-6 h-6">
            <Image
              src={question_icon}
              alt="menu"
              height={50}
              width={22}
              className="w-full h-full object-cover"
            />
          </div>

          <p>Help</p>
        </div>
        <div className="flex space-x-2">
          <div className="w-6 h-6">
            <Image
              src={history_icon}
              alt="menu"
              height={50}
              width={22}
              className="w-full h-full object-cover"
            />
          </div>

          <p>Activity</p>
        </div>
        <div className="flex space-x-2">
          <div className="w-6 h-6">
            <Image
              src={setting_icon}
              alt="menu"
              height={50}
              width={22}
              className="w-full h-full object-cover"
            />
          </div>

          <p>Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
