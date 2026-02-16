import React from 'react'



const Profile_main = () => {
  return (
    <div className='w-full p-6'>
      
      {/* Buttons */}
      <div className='flex gap-4 mb-4'>
        <button className='px-4 py-2 shadow hover:bg-gray-300 rounded'>
          Home
        </button>
        <button className='px-4 py-2 shadow hover:bg-gray-300 rounded'>
          About
        </button>
      </div>

      <hr className='border-gray-300 mb-6'/>

      {/* Card */}
      <div className='border border-black flex justify-between p-4 items-center w-full max-w-3xl rounded'>
        
        <div className='flex flex-col gap-2'>
          <p className='text-sm text-gray-600'>@Username</p>
          <h1 className='text-2xl font-semibold'>List Name</h1>
          <p className='text-gray-700'>Number of items in list</p>
        </div>

        <div className='w-32 h-24 bg-gray-400 rounded flex items-center justify-center'>
          Image
        </div>

      </div>

    </div>
  )
}

      

export default Profile_main
