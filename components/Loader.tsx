import React from "react";

const Loader = () => {
  return (
    <div className="space-y-3 flex flex-col w-full">
      <div className="loader w-full h-5 rounded-sm bg-gradient-to-r from-[#58b4f5] via-white to-[#58b4f5]" />
      <div className="loader w-full h-5 rounded-sm bg-gradient-to-r from-[#58b4f5] via-white to-[#58b4f5]" />
      <div className="loader w-full h-5 rounded-sm bg-gradient-to-r from-[#58b4f5] via-white to-[#58b4f5]" />
    </div>
  );
};

export default Loader;
