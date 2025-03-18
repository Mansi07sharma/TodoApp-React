import React from 'react'
import { useState } from 'react'

const quotes=[ "Success is the sum of small efforts, repeated day in and day out.",
  "Do something today that your future self will thank you for.",
  "Dream big, start small, act now.",
  "The secret of getting ahead is getting started.",
  "Don’t watch the clock; do what it does. Keep going.",
]

function Footer() {
  const[quote,setQuote]=useState(quotes[0])
  setInterval(()=>{
    const randomQuote=quotes[Math.floor(Math.random()*quotes.length)]
    setQuote(randomQuote)
  },10000)
  return (
    <div className='bg-gray-300 dark:bg-gray-700 dark:text-blue-100 w-2/3 ml-auto mr-auto  p-5 rounded-b-2xl text-center font-bold'>
      {quote}!!
    </div>
  )
}

export default Footer
