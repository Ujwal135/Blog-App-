import React from 'react'
import{Home,User,Settings,LibraryBig} from 'lucide-react'

const Slidingbar = ({open}) => {
  return (
    <div className={`fixed top-16 left-0 h-[calc(100vh-4rem)] bg-[f843bd] text-[#d9d9d9] 
    transition-all duration-300 shadow-lg  border-gray-500
     ${open ? "w-60 bg-[#284b63] ": "w-16 bg-[#284b63]"}`}>

      <ul className='p-4 space-y-3 text-2xl text-[#d9d9d9]'> 
        <li className="flex items-center gap-3 p-2 rounded hover:bg-[#3c6e71] cursor-pointer font-['ibm-plex-sans']">
          <Home className='text-[#d9d9d9]' size={22} />
          {open && <span>Home</span>}
        </li>

        <li className="flex items-center gap-3 p-2 rounded hover:bg-[#3c6e71] cursor-pointer font-['ibm-plex-sans']">
          <User size={20} />
          {open && <span>Profile</span>}
        </li>

         <li className="flex items-center gap-3 p-2 rounded hover:bg-[#3c6e71] cursor-pointer font-['ibm-plex-sans']">
          <LibraryBig  size={20} />
          {open && <span>Library</span>}
        </li>

        <li className="flex items-center gap-3 p-2 rounded hover:bg-[#3c6e71] cursor-pointer font-['ibm-plex-sans']">
          <Settings size={20} />
          {open && <span>Settings</span>}
        </li>

      </ul>

      <hr />

    </div>
  )
}

export default Slidingbar
