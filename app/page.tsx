import Header from "@/components/Header";
import Main from "@/components/Main";
import Sidebar from "@/components/Sidebar";
import MessageContextProvider from "@/context/MessageContextProvider";

import React from "react";

const page = () => {
  return (
    <div className="">
      {/* sidebar  */}
      <MessageContextProvider>
        <Header />
        <Main />
      </MessageContextProvider>
    </div>
  );
};

export default page;
