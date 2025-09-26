import React from 'react'

export default function Task({task, sourceCol}) {
    const dragStart = (e) =>{
        e.dataTransfer.setData("task",task);
        e.dataTransfer.setData("sourceCol",sourceCol);
    }

  return (
    <div  className="rounded-lg p-3 mb-3 cursor-grab shadow-md 
      bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 
      text-gray-800 font-medium  hover:scale-[1.03] transition border-2 hover:shadow-[0_10px_50px_rgba(255,200,255,0.9)]" draggable onDragStart={dragStart}>
      {task}
    </div>
  )
}


