import React from 'react'
import { Link } from 'react-router-dom'

const Basic_topbar = () => {
  return (
     <div className=' fixed top-0 left-0 right-0 z-50 h-16 bg-[#284b63] 
                text-white flex items-center justify-between px-6 shadow-lg backdrop-blur-md '>

      <div className='flex items-center gap-6'>

        <h1 className="text-3xl p-5 font-semibold text-[#d9d9d9] tracking-wide "> Explore Blogs</h1>
    
      </div> 

      <div className=''>

      <Link to = {'/login'}> <button className='px-5 py-1 text-xl font-semibold rounded-2xl bg-green-600'> Login</button>
          </Link>
                   
        </div> 
    
    </div>
  )
}

export default Basic_topbar
