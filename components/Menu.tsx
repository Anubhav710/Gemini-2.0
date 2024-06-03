import React from "react";

const Menu = ({ onClick }: any) => {
  return (
    <div
      onClick={onClick}
      className="space-y-1 cursor-pointer px-1  inline-block relative z-[99]"
    >
      <div className="w-5 h-[2px] bg-black dark:bg-white rounded-lg  " />
      <div className="w-5 h-[2px] bg-black dark:bg-white rounded-lg  " />
      <div className="w-5 h-[2px] bg-black dark:bg-white rounded-lg  " />
    </div>
  );
};

export default Menu;
