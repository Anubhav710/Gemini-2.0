"use client";
import React, { useState } from "react";
import Cards from "./Cards";
import { code_icon, gallery_icon, send_icon } from "@/public/assets";
import Image from "next/image";

const data = [
  {
    title: "Write code for specific task, including edge case",
    image: "/assets/code_icon.png",
  },
  {
    title: "Write code for specific task, including edge case",
    image: "/assets/code_icon.png",
  },
  {
    title: "Write code for specific task, including edge case",
    image: "/assets/code_icon.png",
  },
  {
    title: "Write code for specific task, including edge case",
    image: "/assets/code_icon.png",
  },
];

const Main = () => {
  const [prompt, setPropmt] = useState("");
  const [resp, setResp] = useState("");
  const [show, setShow] = useState(true);

  const handleSubmit = async () => {
    setShow(false);
    let response = await fetch("http://localhost:3000/api/gemini", {
      method: "Post",
      body: JSON.stringify({ prompt }),
    });
    let data = await response.json();
    console.log(data);
    setResp(data);
  };

  return (
    <div className="w-full max-w-screen-md relative  mx-auto h-[90.5vh]   pt-20 pb-10 ">
      <div className=" px-2  h-full ">
        {show ? (
          <div>
            <div>
              <h1 className="font-semibold text-[56px] text-[#c4c7c5] ">
                Hello, Anubhav
              </h1>
              <h1 className="font-semibold  text-[56px] text-[#c4c7c5]">
                How can I help you today?
              </h1>
            </div>
            <div className="mt-20 flex w-full   space-x-4   ">
              {data.map((items, i) => (
                <Cards title={items.title} img={items.image} key={i} />
              ))}
            </div>
          </div>
        ) : (
          <div>
            <h1>{resp}</h1>
          </div>
        )}
        <div className="absolute  bottom-6 w-full ">
          <input
            type="text"
            value={prompt}
            placeholder="Enter a prompt here"
            onChange={(e) => setPropmt(e.target.value)}
            className="w-full bg-gray-100 rounded-full py-4 px-8 outline-none text-xl"
          />
          <div className="flex space-x-1 absolute top-5 right-5 -translate-y-1">
            <button
              type="submit"
              className="hover:bg-gray-300 duration-500 flex items-center justify-center  w-9 h-9 rounded-full  "
              onClick={handleSubmit}
            >
              <Image
                src={send_icon}
                alt="icon"
                width={25}
                height={25}
                className="object-cover cursor-pointer  "
              />
            </button>
            <div className="hover:bg-gray-300 duration-500 flex items-center justify-center  w-9 h-9 rounded-full  ">
              <Image
                src={gallery_icon}
                alt="icon"
                width={25}
                height={25}
                className="object-cover cursor-pointer  "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
