import Image from "next/image";
import React from "react";

const Cards = ({ title, icon }: { title: string; icon: any }) => {
  return (
    <div className=" h-52 rounded-xl hover:bg-[#333537] duration-500 transition-colors bg-[#1E1F20] py-4 px-3 flex flex-col  justify-between items-end">
      <h1 className="text-white">{title}</h1>
      <div className=" text-white w-10 h-10 bg-black rounded-full flex items-center justify-center ">
        {icon}
      </div>
    </div>
  );
};

export default Cards;
