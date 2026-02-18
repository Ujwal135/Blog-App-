import React, { useEffect, useState } from "react";
import Edit_profile from "../Components/Edit_profile";
import axios from "axios";

const Personal_info = () => {
  const [open, setopen] = useState(false);
  const [profiledata, setprofiledata] = useState({});

  function profiledataApi() {
    axios
      .get("http://localhost:8000/api/profileviews/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setprofiledata(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    profiledataApi();
  }, []);

  return (
    <div className="p-4">
      <div className=" p-4 flex items-center justify-between rounded-lg ">
        <div className="flex ">
          <div className="flex items-center gap-4">
            <img
              className="w-24 h-24 rounded-full border border-gray-500 object-cover"
              src={
                profiledata?.profile_img
                  ? `http://localhost:8000${profiledata.profile_img}`
                  : "https://i.pravatar.cc/40"
              }
              
            />
            <div>
              {profiledata && (
                <h2 className="text-3xl  font-bold">
                  {profiledata.first_name && profiledata.last_name
                    ? `${profiledata.first_name} ${profiledata.last_name}`
                    : profiledata.username}
                </h2>
              )}
              <h1 className="text-sm">{profiledata.email}</h1>
            </div>
          </div>
        </div>
      </div>
      <span
        className="w-fit px-4 py-1.5 text-sm bg-sky-500 text-white rounded-md hover:bg-sky-600 transition"
        onClick={() => {
          setopen(true);
        }}
      >
        Edit Profile
      </span>

      {open && <Edit_profile closemodel={() => setopen(false)} />}
      <div></div>
      <div className="mt-6">
        <h1 className=" text-2xl font-bold mb-3 ">List</h1>
        <div className="flex items-center gap-4">
          <img className="w-24 h-24 border-gray-500 border" src="" alt="" />
          <h2 className="text-2xl">favourite artical </h2>
        </div>
      </div>
    </div>
  );
};

export default Personal_info;
