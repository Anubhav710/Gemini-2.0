"use client";
import MessageContext, { useMessageContext } from "@/context/MessageContext";
import { user_icon } from "@/public/assets";
import Image from "next/image";
import React, { useContext } from "react";

const User = () => {
  const user = useMessageContext();
  return (
    <div className=" mb-10">
      <div className="space-y-3 flex">
        <Image
          src={user_icon}
          alt="user image"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="pl-3">{user.recentPrompt}</div>
      </div>
    </div>
  );
};

export default User;
