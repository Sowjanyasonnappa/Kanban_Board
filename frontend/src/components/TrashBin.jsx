import React from 'react'
import { useBoard } from '../Boardcontext'
import { FaTrash } from 'react-icons/fa'

export default function TrashBin() {
  const { dispatch } = useBoard()

  const handleDrop = (e) => {
    e.preventDefault()
    const task = e.dataTransfer.getData('task')
    const sourceCol = e.dataTransfer.getData('sourceCol')
    if (task && sourceCol) {
      dispatch({ type: "DELETE_TASK", payload: { sourceCol, task } })
    }
  }

  const handleDragOver = (e) => e.preventDefault()

  return (
    <div
      className="rounded-xl flex-1 p-4 flex flex-col shadow-lg border-2 
                 backdrop-blur-sm gap-4 bg-white/10 min-h-[320px] w-50
                 hover:scale-105 hover:bg-white/20 
                 transition-transform duration-300 hover:shadow-[0_10px_50px_rgba(255,200,255,0.9)]"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <h2 className="text-xl font-bold text-black text-center mb-4 drop-shadow animate-[glow_3s_ease-in-out_infinite]">
        TrashBin
      </h2>

      {/* Centered icon + text */}
      <div className="flex-1 flex flex-col items-center justify-center gap-3">
        <FaTrash className="text-black-600 text-6xl drop-shadow-lg" />
        <p className="text-center text-black font-semibold">
          Drop here to delete
        </p>
      </div>
    </div>
  )
}
