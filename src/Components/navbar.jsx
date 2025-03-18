import React from 'react'
import './navbar.css'
import {useDark} from '../Context/ThemeContext'
import logo from './image.png'
function Navbar() {
    const{dark,setDark}=useDark()
    return (
        <div className='bg-gray-300 dark:bg-gray-700  w-2/3 ml-auto mr-auto p-5 rounded-t-2xl flex justify-between items-center'>
            {/* icon */}
            <div className='flex gap-1.5 items-center'>
               
                <h1 className='font-bold text-2xl dark:text-white'>TodoApp</h1>
            </div>

            {/* visibilities */}
            <img onClick={()=>{
                setDark(!dark)
            }} className='w-10  h-10 hover:cursor-pointer' src={logo} alt="image" />
        </div>
    )
}

export default Navbar
