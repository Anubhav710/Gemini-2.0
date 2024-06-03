"use client";
import React from "react";
import User from "./User";
import Bot from "./bot";

const Converstation = () => {
  return (
    <div className="text-white  h-[69vh] overflow-y-auto">
      <User />
      <Bot />
    </div>
  );
};

export default Converstation;
