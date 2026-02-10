import React, { useEffect, useState } from 'react'
import Topbar from '../Components/Topbar'
import bgpic from '../assets/desgine.png'
import axios from 'axios'


const NewHome = () => {

  const [quotes, setquotes] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:8000/api/quotes/")
    .then(res=>{
      setquotes(res.data)
    }).catch(err=>{
      console.error(err)
    })
  },[])





  return (
    <div>
      <Topbar/>

      <div className="fixed top-20 left-170 m-2 font-bold text-black text-xl font-['ibm-plex-sans'] ">
         <span> A place to read, write, and deepen your understanding   </span>
      </div>

        <div className='h-screen w-full bg-[#D9D9D9] flex items-center justify-center'>
            
            <div className='h-[70vh] w-screen bg-[#284b63] flex  p-2 '>

                 <div className='w-[80%] h-full bg-[#284b63] mx-auto   text-[#d9d9d9] flex items-center'>

                  {quotes.map((q,i)=>(
                    <div className='w-150 h-100 border-2 border-white text-lg m-5 rounded-2xl flex flex-col  justify-between p-7 
                    font-semibold'  key={i}>
                      <p className=" font-['ibm-plex-sans'] font-thin leading-none text-2xl ">{q.context}</p>
                      <span className="font-['playball'] font-thin underline decoration-solid"> - {q.author}</span>
                    </div>
                  ))}

                 </div>

                 <div className='w-[20%] h-full bg-[#284b63]'>
                    <img src={bgpic} alt=""  className='w-full h-full object-cover'/>
                 </div>
            </div>
        
        </div>

    </div>  
    
  ) 
}

export default NewHome
