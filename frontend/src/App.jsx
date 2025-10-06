
import Board from './components/Board'
import { BoardProvider } from './Boardcontext'
import { BrowserRouter as Router, Route, Routes as Routers } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import LoginPage from './Pages/LoginPage'

function App() {
  

  return (
    <BoardProvider>
      <Router>
      <Routers>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/board" element={<Board />} />
      </Routers>
      </Router>
     
    </BoardProvider>
  )
}

export default App
