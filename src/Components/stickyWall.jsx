import React from 'react'
import Card from './Card'
function StickyWall({ task, setTask }) {
  function removeThisCard(idx) {
    //underscore means ignore this parameter
    setTask(task.filter((_, i) => i !==idx))

  }
  return (
    <div className='w-2/3 ml-auto mr-auto p-5 flex flex-wrap gap-3 overflow-y-auto bg-gray-100 h-100 dark:bg-gray-400'>
      {task.length === 0 ? (
        <h1 className='text-4xl text-center dark:text-white'> No task you have added!!</h1>
      ) : (
        task.map((e, idx) => {
          return <Card key={idx} task={e} onRemove={() => removeThisCard(idx)}/>
        })
      )}
    </div>
  )
}

export default StickyWall
