import React, { useState } from "react";
import Slidingbar from "../Components/Slidingbar";
import Topbar from "../Components/Topbar";
import Personal_info from "./Personal_info";
import Profile_main from "../Components/Profile_main";


const Profile = () => {
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

      <div className="flex flex-1 overflow-hidden pt-16 ">
        <Slidingbar open={open} />

        <main
          className={`flex-1 p-0 transition-all duration-300 ${open ? "ml-64" : "ml-0"} flex flex-col`}
        >
             <div className="flex flex-1">
            <div className="flex flex-2 "></div>
            <div className="flex flex-5  border-l border-gray-400 overflow-y-auto">
                <Profile_main/>
            </div>
            <div className="flex flex-3  border-l border-gray-400 ">
                <Personal_info/>
            </div>
        </div>  

        </main>
      </div>
    </div>
  );
};

export default Profile;
