import Image from "next/image";
import React from "react";

const Cards = ({ title, img }: { title: string; img: any }) => {
  return (
    <div className=" w-52 h-52 md:w-44 md:h-44 rounded-xl bg-gray-200 p-2 flex flex-col  justify-between items-end">
      <h1>{title}</h1>
      <div>
        <Image src={img} alt="icons" height={50} width={50} />
      </div>
    </div>
  );
};

export default Cards;
