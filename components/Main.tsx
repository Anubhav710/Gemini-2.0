"use client";
import React, { Suspense, useContext, useEffect, useState } from "react";
import Cards from "./Cards";

import { BsLightbulb } from "react-icons/bs";
import { BiCompass } from "react-icons/bi";
import { LuPencilLine } from "react-icons/lu";

import { AiOutlineSend } from "react-icons/ai";
import Converstation from "./Converstation";
import MessageContext, { useMessageContext } from "@/context/MessageContext";
import { geminiResponse } from "@/app/action";

// import { MdTipsAndUpdates } from "react-icons/md"; important one

const Main = () => {
  const data = useMessageContext();

  return (
    <section className=" h-[100vh] pt-[150px]   w-[70%]  md:max-w-screen-md  lg:max-w-screen-lg mx-auto relative   ">
      {data.showResult ? (
        <Converstation />
      ) : (
        <div>
          {/* Top Container  */}
          <div>
            <h1 className=" greet text-6xl font-semibold mb-3  ">
              Hello, Anubhav
            </h1>
            <h1 className=" text-6xl font-semibold text-[#444746] ">
              How can I help you today?
            </h1>
          </div>
          {/* Middle Container  */}
          <div className=" flex justify-evenly space-x-2 mt-20 lg:space-x-4 ">
            <Cards
              title="Help me compare these collage majors"
              icon={<BsLightbulb className="w-5 h-5" />}
            />
            <Cards
              title="Help me compare these collage majors"
              icon={<BiCompass className="w-5 h-5" />}
            />
            <Cards
              title="Help me compare these collage majors"
              icon={<LuPencilLine className="w-5 h-5" />}
            />
            <Cards
              title="Help me compare these collage majors"
              icon={<BsLightbulb className="w-5 h-5" />}
            />
          </div>
        </div>
      )}
      {/* Bottom Container  */}
      <div className="absolute w-full bottom-10">
        <form action={data.onSent}>
          <textarea
            className="resize-none w-full overflow-y-hidden  rounded-full py-5 px-7 text-white outline-none bg-[#1E1F20]"
            placeholder="Enter a prompt here"
            value={data.input}
            onChange={(e) => data.setInput(e.target.value)}
            name="input"
            cols={1}
            rows={1}
          />
          <div>
            <button
              type="submit"
              className="text-white w-7 h-10 absolute right-3 bottom-3 cursor-pointer"
            >
              <AiOutlineSend className="w-6 h-6" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Main;
