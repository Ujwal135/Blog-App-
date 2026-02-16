import React from 'react'

const Personal_info = () => {
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
      <p className='text-lg mt-4  '>Edit Profile</p>    
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
