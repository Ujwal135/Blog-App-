import React, { useEffect, useRef, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Profilebutton = ({user}) => {

    const [open, setopen] = useState(false)
    const dropdownRef = useRef(null)
    const navigate = useNavigate()


    useEffect (()=>{
        const handler = (e) =>{
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)){
                setopen(false)
            }
        }
    document.addEventListener("mousedown", handler);
   
    },[])

    function LogOut(){
        localStorage.removeItem("token");
        navigate('/newhome')
    }



  return (  

    <div className='relative cursor-pointer'>
      
      <button onClick={()=>setopen(!open)}>
        <img src={user.avtar}
         alt="profile" 
         className='w-12 h-12  rounded-full c '/>

         </button>

        {/* dropdown */}

        { open &&   (
            <div className='absolute right--5 mt-3 w-48 bg-white rounded-xl shadow-lg border z-50'>
                <div className='p-1 px-4 border-b'>
                    <p className='font-semibold'>{user ?.username}</p> 
                    <p className='text-sm text-gray-500 '>{user ?.email}</p>
                </div>


                <ul className='py-2 text-[#284b63] font-semibold px-12'>
                    <li onClick={()=>Navigate('/Home')} className='px-4 py-2   hover:bg-gray-100 cursor-pointer'>
                        Home
                    </li>

                    <li onClick={()=>Navigate('/profile')} className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                        Profile
                    </li>

                    <li onClick={()=>Navigate('/write')} className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                        Write
                    </li>   

                    <li onClick={LogOut} className='px-4 py-3 hover:bg-gray-100 cursor-pointer'>
                        LogOut
                    </li>
                  
                </ul>
            </div>
        )

        }



    </div>
  )
}

export default Profilebutton
