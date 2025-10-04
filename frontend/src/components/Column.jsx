import React from 'react'
import { useBoard } from '../Boardcontext'
import Task from './Task';
export default function Column({Column}) {
    const {dispatch} = useBoard();

    const handleDrop= (e) =>{
      const task = e.dataTransfer.getData('task');
      const sourceCol = e.dataTransfer.getData('sourceCol');
      if(task && sourceCol !== Column.id){
        dispatch({type: "MOVE_TASK", payload:{sourceCol, targetCol:Column.id, task}})
      };

    };

    
    return(
      <div className="rounded-xl flex-1 p-4 flex flex-col shadow-lg  border-2 
                 backdrop-blur-sm gap-4 bg-white/10 
                 hover:scale-105 hover:bg-white/20 
                 transition-transform duration-300 min-h-[320px] w-50 hover:shadow-[0_10px_50px_rgba(255,200,255,0.9)]" 
                 onDragOver={(e)=> e.preventDefault()}
                 onDrop={handleDrop}>
        <h2 className="text-xl font-bold text-black text-center mb-4 drop-shadow animate-[glow_3s_ease-in-out_infinite]">
  {Column.title}
</h2>
        {Column.tasks.map((task)=>(
          <Task key ={task} task={task} sourceCol={Column.id} />
        ))}
      </div>
    )
 
}


