import React from 'react'

const Cards = () => {
  return (
    <div className=' flex gap-10'>
      <div className='w-[18vw]
       bg-white border
       border-white/30 shadow-xl
        h-[65vh] 
        rounded-4xl
        bg-[url(https://images.unsplash.com/photo-1764069138714-bcc6783b8e48?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] 
        invert-10 
        object-cover '> 
      <div className='flex flex-col justify-between gap-15 '> 
          <h1 className='text-amber-200 text-4xl p-5 font-bold bg-[#a0a0a016] rounded-4xl m-2  ' > This is title of blog </h1>
          <p className='text-white p-5 text-2xl font-bold '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nostrum praesentium eum aspernatur perferendis recusandae iusto reiciendis </p>
          <button className='bg-[#a0a0a0e0] text-2xl px-12 py-3 m-5 font-bold text-white rounded-2xl'>Read-More</button>
        </div>
      <div className=''></div>
      </div>

    </div>
  )
}

export default Cards
    