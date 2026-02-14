import React, { useState } from "react";
import Hero from "./Hero";
import Topbar from "../Components/Topbar";
import { Sidebar } from "lucide-react";
import togglesidebar from "../Components/Topbar";
import Slidingbar from "../Components/Slidingbar";

const Home = () => {
  const [open, setopen] = useState(false);
  return (
    <div className="font-['Poppins']">
      {/* Top Bar  */}
      <div className=" w-full">
        <Topbar
          togglesidebar={() => {
            setopen(!open);
          }}
        />
      </div>

      {/* SideBar */}

      <div className="flex flex-1 overflow-hidden pt-16">
        <Slidingbar open={open} />

        <main
          className={`flex-1 p-0 transition-all duration-300 ${open ? "ml-64" : "ml-0"} flex flex-col`}
        >
          
            <Hero />
          

        </main>
      </div>
    </div>
  );
};

export default Home;
