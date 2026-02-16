import React from 'react'
import Cards from '../Components/Cards'
import Snippits from '../Components/Snippits'
import Blogs_List from './Blogs_List'

const Hero = () => {
  return (
   <div className='flex h-screen  '>

    <div className=' flex-2'></div>
    
    <div className='mt-10 flex-6 border-t border-gray-400 overflow-y-auto '>
      <Blogs_List/>
       </div>

    <div className=' flex-2 mt-10 border-t border-l border-gray-400'></div>

   </div>
  )
}

export default Hero
  