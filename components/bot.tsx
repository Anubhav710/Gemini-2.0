"use client";
import MessageContext, { useMessageContext } from "@/context/MessageContext";
import { gemini_image } from "@/public/assets";
import Image from "next/image";
import React, { useContext } from "react";
import Loader from "./Loader";
import { motion } from "framer-motion";

const Bot = () => {
  const user = useMessageContext();

  return (
    <div>
      <div className="space-y-3 flex ">
        {/* Image Container  */}
        <motion.div
          animate={{ rotate: user.loading ? 360 : 0 }}
          transition={
            user.loading
              ? { repeat: Infinity, duration: 1.5, ease: "linear" }
              : { duration: 0 }
          }
          className=" h-9 w-9 "
        >
          <Image
            src={gemini_image}
            alt="gemini image"
            className="object-cover"
            width={32}
            height={32}
          />
        </motion.div>
        {/* Message Box  */}
        <div className="pl-3 w-full">
          {" "}
          {user.loading ? (
            <Loader />
          ) : (
            <p dangerouslySetInnerHTML={{ __html: user.resultData }}></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bot;
