import { Bell } from "lucide-react";
import React, { useState } from "react";
import Profilebutton from "../Components/Profilebutton";

const Write = () => {
  const [title, settitle] = useState("");
  const [story, setstory] = useState("");
  const [image, setimage] = useState(null);

  const user = {
    username: "ujjwal",
    email: "ujjwal@test.com",
    avtar: "https://i.pravatar.cc/40",
  };

  function publishblog(e) {
    e.preventDefault();

    if (!title || !story) {
      alert("Title and story is required ");
    }
  }

  function handleimagechange(e) {
    const file = e.target.files[0];

    setimage(file);
    console.log(file);
  }
  return (
    <div className="font-['Poppins']"> 
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-[#284b63] text-white flex items-center justify-center px-6 shadow-lg backdrop-blur-md ">
        <div className=" flex items-center justify-between w-full max-w-6xl">
          <h1 className="text-3xl font-bold ">Explore Blogs</h1>
          <ul className="flex gap-6 items-center ">
            <li>
              <button
                onClick={publishblog}
                className="px-4 py-1 rounded-3xl font-semibold bg-green-600 hover:bg-green-700 transition"
              >
                Publish
              </button>
            </li>

            <li className="hover:text-gray-300 transition">
              <button>
                <Bell />
              </button>
            </li>

            <li>
              <Profilebutton user={user} />
            </li>
          </ul>
        </div>
      </nav>

      <div className="page_Body flex justify-center">
        <div className="bg- w-[90%] md:w-[70vw] min-h-screen px-6 md:px-12 py-10 rounded-xl shadow ">
          <form onSubmit={publishblog} className=" w-full" action="">
            <input
              className="w-full text-black px-4 py-4 text-5xl outline-none bg-transparent placeholder-gray-500 "
              type="text"
              value={title}
              onChange={(e) => {
                settitle(e.target.value);
              }}
              placeholder="Title"
            />

            <textarea
              className="w-full mt-6 text-black px-4 py-3 text-2xl min-h-[300px] outline-none bg-transparent placeholder-gray-500 resize-none "
              type="text"
              value={story}
              onChange={(e) => {
                setstory(e.target.value);
              }}
              placeholder="Tell Your Story....  "
            />

            <div className="flex items-center gap-4">
              <label className="cursor-pointer font-semibold bg-gray-300 hover:bg-gray-500 px-4 py-2 rounded text-black">
                Add Image
                <input
                  className=" "
                  hidden
                  type="file"
                  accept="image/*"
                  onChange={handleimagechange}
                />
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Write;
