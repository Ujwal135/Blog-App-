import React from 'react'
import { Menu, MenuIcon, Search,Bell,SquarePen} from 'lucide-react';
import { Link } from 'react-router-dom';

const Topbar = ({togglesidebar}) => {

  return (
    <div className=' fixed top-0 left-0 right-0 z-50 h-16 bg-[#284b63] 
                text-white flex items-center justify-between px-6 shadow-lg backdrop-blur-md'>

      <div className='flex items-center gap-6'>

        <button onClick={togglesidebar} className='p-2 rounded-full hover:bg-white/20 transition'><MenuIcon size={30}/></button>

        <h1 className="text-3xl p-5 font-bold text-[#d9d9d9] tracking-wide font-['ibm-plex-sans']"> Explore Blogs</h1>

        <div className='relative flex items-center'>

            <Search size={28}  className="absolute left-3 text-gray-400" /> 

            <input className='h-10 w-64 pl-10 pr-4 rounded-full bg-white/90 text-gray-900 
                   focus:ring-2 focus:-[#d9d9d9] outline-none'  type="text" placeholder='Search...' />
        </div>


      </div> 

      <div className='flex gap-3 items-center'>

      <Link to = "/write"><button className='bg-none   flex p-2 m-1 gap-1 cursor-pointer '><SquarePen strokeWidth={0.9} size={28}/>  Wirte</button></Link>  
       
      <button className='p-2 cursor-pointer'> <Bell size={28}  /> </button>

      <Link to = "/login"><button className="bg-[#d9d9d9] text-[#284b63] px-8 py-2 rounded-full font-semibold 
                     hover:bg-[#d9d9d9] transition shadow cursor-pointer font-['ibm-plex-sans']">Login</button>
                     </Link>
                   
        </div> 
    
    </div>
  )
}

export default Topbar
