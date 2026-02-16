import { Heart,MessageSquare,BookMarked } from 'lucide-react'
import React from 'react'

const   Blogs_List = () => {
  return (
<div className="p-5 w-full">
  <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 mt-5">

    {/* Author */}
    <div className="flex items-center gap-3 mb-4">
      <img
        className="w-10 h-10 rounded-full border"
        src="https://i.pravatar.cc/40"
        alt="author pic"
      />
      <div>
        <p className="font-semibold">Author Name</p>
        <span className="text-sm text-gray-500">2 min read · Today</span>
      </div>
    </div>

    {/* Content */}
    <div className="flex flex-col md:flex-row gap-6 items-start">
      <div className="flex-1">
        <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, deserunt!
        </h1>

        <p className="text-gray-600 text-base md:text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe necessitatibus doloremque quae!
        </p>
      </div>

      <img
        className="w-full md:w-40 h-28 object-cover rounded-lg"
        src="https://images.unsplash.com/photo-1769911646566-e2153ddb56d9?q=80&w=1170&auto=format&fit=crop"
        alt="image associate with Blog"
      />
    </div>

    {/* Actions */}
    <div className="flex gap-6 mt-5 items-center text-gray-500">
      <button className="flex items-center gap-1 hover:text-red-500 transition">
        <Heart size={18} />
        <span className="text-sm">12</span>
      </button>

      <button className="flex items-center gap-1 hover:text-blue-500 transition">
        <MessageSquare size={18} />
        <span className="text-sm">3</span>
      </button>

      <button className="flex items-center gap-1 hover:text-gray-600 transition">
        <BookMarked size={18} />
      </button>
    </div>

  </div>
</div>

        
  )
}

export default Blogs_List
