import React, { useState } from 'react'
const colors = ['bg-red-200', 'bg-blue-100', 'bg-green-100', 'bg-yellow-200', 'bg-purple-100', 'bg-pink-100']

function Card(prop) {
  const [col, setCol] = useState(colors[Math.floor(Math.random() * colors.length)])
  return (
    <div className='flex justify-between items-center w-full pl-5 pr-10 max-[900px]:w-4xs max-[900px]:gap-7 max-[900px]:p-0 max-[900px]:m-0'>
      <div className={`${col} rounded-2xl pl-2 pr-2 flex items-center w-xl h-15`} >
        <h1 className=' text-xl max-[900px]:text-lg'><b>Task:. </b>{prop.task}</h1>
      </div>
      <div className='flex gap-10 justify-center items-center'>
        <button onClick={prop.onRemove} className='rounded-full bg-indigo-300 dark:bg-amber-50 w-10 h-10 hover:cursor-pointer'>✔️</button>
      </div>
    </div>

  )
}

export default Card
