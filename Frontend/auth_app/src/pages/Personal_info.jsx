import React, { useState } from 'react'
import Edit_profile from '../Components/Edit_profile'




const Personal_info = () => {

  const [open, setopen] = useState(false)

  return (
    <div className='p-4'>
      <div className=' p-4 flex items-center justify-between rounded-lg '>
            <div className='flex '>
                <div className='flex items-center gap-4'>
                    <img className='w-24 h-24 rounded-full border border-gray-500 object-cover'
                     src=""
                     alt=""
                      />

                    <h2 className='text-3xl  font-bold'>Lorem, ipsum </h2>
                </div>
            </div>
            
      </div>    
      <span className='text-lg m-4 mt-3 bg-sky-500 px-2 py-2 rounded-2xl  font-semibold  '
      onClick={()=>{setopen(true)}}>
        Edit Profile</span>  

      {open && (
        <Edit_profile closemodel ={()=>setopen(false)}/>
      )} 
      <div></div>
      <div className='mt-6'>
        <h1 className=' text-2xl font-bold mb-3 '>List</h1>
            <div className='flex items-center gap-4'>
                <img className='w-24 h-24 border-gray-500 border' src="" alt="" />
                <h2 className='text-2xl'>favourite artical </h2>    
            </div>
      </div>
    </div>  
  )
}

export default Personal_info
