import React, { useContext, useState } from 'react'
import { useBoard, BoardContext } from '../Boardcontext'
import Column from './Column';
import TrashBin from './TrashBin';



function TaskInput(){
  const {dispatch} = useContext(BoardContext);
  const [text, setText] = useState('');
  
  const handleSubmit =(e)=>{
    e.preventDefault();
    if(!text.trim()) return;
    dispatch({type: 'ADD_TASK', payload:{text}});
    setText('');
  };


  return(
    <form onSubmit={handleSubmit} className="flex gap-2 mb-8 w-full max-w-md" >
      <input type="text" 
      value={text} 
      placeholder='Add new Task...' 
      onChange={(e)=> setText(e.target.value)}
      className="flex-1 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition border-2 hover:shadow-[0_10px_50px_rgba(255,200,255,0.9)]"/>
      <button type='submit' className="px-5 py-3 bg-purple-500 text-black font-bold rounded-lg hover:bg-purple-600 transition border-2 hover:shadow-[0_10px_50px_rgba(255,200,255,0.9)]  hover:scale-105">ADD</button>
    </form>
  )
}
export default function Board() {
  const {state} = useBoard();
  return (
    <div className="flex gap-6 p-6 min-h-screen bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400" >
      
      <div className="min-h-screen w-full flex flex-col items-center p-3">
        <h1 className="text-5xl font-extrabold mb-20 text-black drop-shadow-lg mt-15 ">KANBAN BOARD</h1> 
        < TaskInput />
     
 <div className="flex flex-row gap-6 justify-center w-full items-start">
          {Object.values(state.columns).map((col) => (
            <Column key={col.id} Column={col} />
          ))}
      <TrashBin />
     </div>
     
      </div>
       
    </div>
  )
}

