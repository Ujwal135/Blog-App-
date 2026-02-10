import { Bell } from 'lucide-react'
import React from 'react'
import Profilebutton from '../Components/Profilebutton'

const Write = () => {

  const user = {
    username : "ujjwal",
    email : "ujjwal@test.com",
    avtar : "https://i.pravatar.cc/40"

  }
  return (
    <div>
      <nav className='fixed top-0 left-0 right-0 z-50 h-16 bg-[#284b63] text-white flex items-center justify-center px-6 shadow-lg backdrop-blur-md '>
        <div className='items-center justify-between flex gap-120'>
          <h1 className="text-3xl font-bold ">Explore Blogs</h1>

          <div className='' >
            <ul className='flex gap-6 items-center '>
              <li className=''>
                <button className='px-4 py-1 rounded-3xl font-bold bg-green-600 cursor-pointer'>Publish</button>
                </li>
              <li className=''>
                <button><Bell/></button>
              </li>
              <li>
                 <Profilebutton user = {user}/>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        <div className='page_Body'></div>
    </div>
    
  )
}

export default Write
