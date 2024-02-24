import './App.css'
import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import CreateBlog from './Route/CreateBlog'
import Blogs from './Route/Blogs'
import { Context } from './abc'
import FinalBlog from './Route/FinalBlog'
function App() {
  const [title, setTitle] = useState({
    id: 0,
    title: "",
    content: '',
  })
  const [titles, setTitles] = useState([])
  return (
    <div>
      <Context.Provider value={[title, setTitle, titles, setTitles]}>
        <Routes>
          <Route path='/' element={<CreateBlog />} />
          <Route path='Blogs' element={<Blogs />} />
          <Route path='/Blogs/:id' element={<FinalBlog />} />
        </Routes>
      </Context.Provider>


    </div>
  )
}

export default App