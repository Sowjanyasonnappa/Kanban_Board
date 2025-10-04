import { createContext, useContext, useReducer } from "react";
import { boardReducer,initialBoard } from "./components/boardReducer";

 export const BoardContext = createContext();

export function useBoard(){
    return useContext(BoardContext);
}

export function BoardProvider({children}){
    const [state, dispatch] = useReducer(boardReducer, initialBoard)
    return(
        <BoardContext.Provider value={{state, dispatch}}>
            {children}
        </BoardContext.Provider>
    );

}