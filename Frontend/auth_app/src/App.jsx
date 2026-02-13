import React from 'react'
import Home from './pages/Home'
import {Routes,Route} from 'react-router-dom'
import Login from './pages/Login'
import Posts from './pages/Posts'
import About from './pages/About'
import Blogs from './pages/Blogs'
import NewHome from './pages/NewHome'
import Write from './pages/Write'


const App = () => {
 
  return (
    <div>
       <Routes>
          <Route path='/' element={<NewHome/>}/>
          <Route path='/posts' element={<Posts/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path = '/write' element={<Write/>}/>
       </Routes>

    </div>
  )
}

export default App
  