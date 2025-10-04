import Task from "./Task";

export const initialBoard ={
  columns:{
    todo: {id: "todo", title: "To Do", tasks:[]},
    progress: {id: "progress", title: "In Progress", tasks:[]},
    done: {id: "done", title: "Done", tasks:[]}
  }
};

export function boardReducer(state, action){
  switch(action.type){
    case "ADD_TASK":{
      const newTask ={
      id: Date.now().toString(),
      text: action.payload.text 
    };
    return{
      ...state,
      columns:{
        ...state.columns,
        todo:{
          ...state.columns.todo,
          tasks: [...state.columns.todo.tasks, action.payload.text]
        }
      }
    }
  };
    case "MOVE_TASK":{
      const {sourceCol, targetCol, task} = action.payload;
      return{
        ...state,
        columns: {
          ...state.columns,
          [sourceCol]: {
            ...state.columns[sourceCol],
            tasks:state.columns[sourceCol].tasks.filter((t)=>t !== task)
          },
           [targetCol]: {
            ...state.columns[targetCol],
            tasks:[...state.columns[targetCol].tasks, task]
           },
        }
      }
    };
    case "DELETE_TASK":{
      return{
        ...state,
        columns: {
          ...state.columns,
          [action.payload.sourceCol]:{
            ...state.columns[action.payload.sourceCol],
            tasks: state.columns[action.payload.sourceCol].
            tasks.filter((t)=> t !== action.payload.task)
          }
      }
    }
  };
      default:
        return state;
  }

}