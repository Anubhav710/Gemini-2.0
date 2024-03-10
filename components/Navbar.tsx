import { user_icon } from "@/public/assets";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-white flex justify-between items-center py-5 px-4">
      <div>
        <h1 className="text-2xl">Gemini</h1>
      </div>
      <div>
        <Image
          src={user_icon}
          alt="image"
          height={50}
          width={50}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
