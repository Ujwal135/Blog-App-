import React from 'react'
import { X } from 'lucide-react'

const Edit_profile = ({closemodel}) => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black opacity-50 z-50'>
        <div className='bg-[#d9d9d9] w-100 p-6 rounded-xl shadow-lg relative'>
        <button
          onClick={closemodel}
          className="absolute top-2 right-2 text-gray-600"
        >
          <X color='black' strokeWidth={2.5} />
        </button>

           <h2 className="text-xl text-gray-800 font-semibold mb-4">Edit Profile</h2>
        <form action="">

        <input
         className=' w-full text-black border p-2 mb-3 rounded' 
         type="file" /> 

        <input
          type="text"
          placeholder="First Name"
          className="w-full text-black border p-2 mb-3 rounded"
        />
        

        <input
          type="text"
          placeholder="Last Name"
          className="w-full border p-2 mb-3 rounded"
        />

        <button
         className="w-full bg-blue-500 text-white py-2 rounded"
         type='submit'
         onClick={()=>{}}>
          Save Changes
        </button>

        </form>



        </div>
      
    </div>
  )
}

export default Edit_profile
