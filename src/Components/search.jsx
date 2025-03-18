import React, { useState } from 'react';
import './search.css';

function Search({ task, setTask}) {
  const [input, setInput] = useState('');

  function doSomething() {
    if (input.trim() === '') {
      alert('Please enter a task!');
      return;
    }

    setTask((prevTasks) => [...prevTasks, input]);
    setInput(''); 
  }

  return (
    <div className='w-2/3 ml-auto mr-auto p-5 flex flex-col items-center justify-center bg-gray-100 h-100 dark:bg-gray-400'>
      <h1 className='text-8xl animate-color dark:animate-color-dark max-[900px]:text-7xl max-[500px]:text-3xl'>Just do it.</h1>
      <div className='flex relative'>
        <input
          className='bg-gray-500 dark:bg-gray-100 dark:text-black max-[900px]:w-xs max-[500px]:w-50 text-white pl-5 pr-5 pt-2 pb-2 w-xl rounded-2xl m-10'
          type="text"
          placeholder='Add a task!'
          value={input}
          onChange={(e) => setInput(e.target.value)} // Controlled input
        />
        <button
          onClick={doSomething}
          className='absolute right-10 top-10 bg-indigo-900 rounded-r-2xl max-[900px]:w-20 max-[900px]:text-xs max-[900px]:h-10 text-white pl-5 pr-5 pt-2 pb-2 hover:cursor-pointer'
        >
          Add to List!
        </button>
      </div>
    </div>
  );
}

export default Search;

