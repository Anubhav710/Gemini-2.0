"use client";
import React, { useContext, useState } from "react";
import { BiHelpCircle, BiHistory } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { BiMessage } from "react-icons/bi";
import { IoIosAdd } from "react-icons/io";
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
import { MotionDiv } from "@/utils/motion";
import MessageContext, { useMessageContext } from "@/context/MessageContext";

const Sidebar = ({ open }: any) => {
  let data = useMessageContext();
  return (
    <MotionDiv
      variants={{
        open: {
          width: "50%",
        },
        close: {
          width: "70px",
        },
      }}
      animate={open ? "open" : "close"}
      transition={{
        type: "tween",
        ease: "linear",
      }}
      className=" absolute left-0 top-0 z-50  h-screen bg-[#1E1F20] "
    >
      <div className="w-full h-full flex flex-col justify-between px-4    relative py-14 ">
        {/* Top Bar  */}
        <div className="">
          <div className=" mt-4 bg-[#1A1A1C] rounded-full inline-block">
            <IoIosAdd className="text-[#666667] w-10 h-10 " />
          </div>
          {open && (
            <div className=" pt-3 space-y-3 overflow-hidden">
              <h4 className="text-white font-semibold text-sm">Recent</h4>
              {data.prevPrompt.map((prompt) => (
                <div className=" flex space-x-3 items-center px-2  ">
                  <div className="">
                    <BiMessage className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-white">{prompt}...</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom bar  */}
        <div>
          <div className="space-y-3 overflow-hidden">
            <div>
              <BiHelpCircle className="text-white w-7 h-7" />
            </div>
            <div>
              <BiHistory className="text-white w-7 h-7" />
            </div>
            <div>
              <CiSettings className="text-white w-7 h-7" />
            </div>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};

export default Sidebar;
