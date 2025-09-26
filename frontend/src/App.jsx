
import Board from './components/Board'
import { BoardProvider } from './Boardcontext'

function App() {
  

  return (
    <BoardProvider>
      < Board />
    </BoardProvider>
  )
}

export default App
