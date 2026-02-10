import React from 'react'

const Blogs_List = () => {
  return (
    <div className='p-5  w-full'>
        <div className='border-2 border-black'>

            <div className='flex '>
                <img src="" alt="author pic" />
                <a href="">author name</a>
            </div>

            <div className='flex'>
                <h1>Title Of Blog</h1>
                <img src="" alt="image associate with Blog" />
            </div>

            <p>contain short information </p>

            <div className='flex '>
                <button>Save</button>
                <button>Like</button>
            </div>
        </div>
      
    </div>
  )
}

export default Blogs_List
