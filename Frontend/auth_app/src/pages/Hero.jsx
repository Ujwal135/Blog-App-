import React from 'react'
import Cards from '../Components/Cards'
import Snippits from '../Components/Snippits'
import Blogs_List from './Blogs_List'

const Hero = () => {
  return (
   <div className='flex h-screen mt-15'>

    <div className=' flex-2'></div>
    <div className=' mt-10 flex-6'><Blogs_List/> </div>
    <div className='bg-red-500 flex-2'></div>

   </div>
  )
}

export default Hero
  