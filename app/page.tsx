import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <Main />
      </div>
    </main>
  );
}
