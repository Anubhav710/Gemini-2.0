"use client";
import React, { useState } from "react";
import Cards from "./Cards";
import {
  code_icon,
  gallery_icon,
  send_icon,
  gemini_image,
} from "@/public/assets";
import Image from "next/image";
import { motion } from "framer-motion";

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
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setShow(false);
    setLoading(true); // Set loading to true before the fetch

    try {
      let response = await fetch("/api/gemini", {
        method: "POST",
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        // Check for HTTP errors
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      let data = await response.json(); // Try parsing the response as JSON
      console.log(data);
      setResp(data);
    } catch (error) {
      console.error("Error fetching or parsing response:", error);
      // Handle errors appropriately (e.g., display an error message to the user)
    } finally {
      setLoading(false); // Set loading to false after the fetch (even on errors)
    }
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
          <div className="flex space-x-2 items-center ">
            <motion.div
              animate={loading && { rotate: 360 }}
              transition={{
                duration: 1,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              <Image
                src={gemini_image}
                alt="geini-icon"
                width={34}
                height={24}
                className=""
              />
            </motion.div>
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
