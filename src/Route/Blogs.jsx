import React, { useContext } from 'react'
import { Context } from '../abc'
import { useNavigate } from 'react-router-dom';

function Blogs() {
    const Nav = useNavigate();
    const [title, setTitle, titles, setTitles] = useContext(Context)
    console.log(titles);
    return (
        <div className='flex justify-center items-center flex-col  '>
            {titles &&
                titles.map((items) => {
                    return (
                        <div key={items} className="grid grid-cols-2 gap-6 w-full">
                            <h1 className='text-3xl bg-white p-6 border text-center' >{items.title}</h1>
                            <div >
                                <button onClick={() => Nav(`/Blogs/${items.id}`)} className="text-black bg-slate-600   font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">READ MORE</button>
                            </div>
                        </div>
                    )
                })}
            <br /><br />

            <button onClick={() => Nav('/')} className="text-black bg-slate-600   font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Create blog</button>

        </div>
    )
}

export default Blogs