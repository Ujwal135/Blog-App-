import React from 'react'
import{Home,User,Settings,LibraryBig} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Slidingbar = ({open}) => {
 const navigate =  useNavigate()
  return (
    <div className={`fixed top-16 left-0 h-[calc(100vh-4rem)] bg-[f843bd] text-[#d9d9d9] 
    transition-all duration-300 shadow-lg  border-gray-500 font-['Poppins']
     ${open ? "w-60 bg-[#284b63] ": "w-16 bg-[#284b63]"}`}>

      <ul className='p-4 space-y-3 text-2xl text-[#d9d9d9]'> 
        <li className="flex items-center gap-3 p-2 rounded hover:bg-[#3c6e71] cursor-pointer font-['ibm-plex-sans']">
          <Home className='text-[#d9d9d9]' size={22} />
          {open && <span onClick={()=>{navigate('/home')}} >Home</span>}
        </li>

        <li className="flex items-center gap-3 p-2 rounded hover:bg-[#3c6e71] cursor-pointer font-['ibm-plex-sans']">
          <User size={22} />
          {open && <span onClick={()=>{navigate('/profile')}}>Profile</span>}
        </li>

         <li className="flex items-center gap-3 p-2 rounded hover:bg-[#3c6e71] cursor-pointer font-['ibm-plex-sans']">
          <LibraryBig  size={22} />
          {open && <span onClick={()=>{navigate('/profile')}}>Library</span>}
        </li>

        <li className="flex items-center gap-3 p-2 rounded hover:bg-[#3c6e71] cursor-pointer font-['ibm-plex-sans']">
          <Settings size={22} />
          {open && <span>Settings</span>}
        </li>

      </ul>

      <hr />

    </div>
  )
}

export default Slidingbar
