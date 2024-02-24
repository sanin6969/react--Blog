import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../abc';
function FinalBlog() {
  const { id } = useParams()
  const Nav = useNavigate();
  const [title, setTitle, titles, setTitles] = useContext(Context)
  console.log(titles, "titles");
  const result = titles.filter((val) => val.id == id)
  console.log(result, 'this is result');
  return (
    <div>
      <h1 className='text-5xl flex justify-center'>{result[0].title}</h1>
      <p className='text-3xl bg-white p-6 border text-center'>{result[0].content}</p>
      <div className='flex justify-center '>
        <button onClick={() => Nav('/Blogs')} className="text-black bg-slate-600   font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Go To Blogs</button>

        <button onClick={() => Nav('/')} className="text-black bg-slate-600   font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Create blog</button>
      </div >
    </div>
  )
}

export default FinalBlog

