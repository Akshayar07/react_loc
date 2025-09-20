
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import LettersOfCredit from './pages/LettersOfCredit/LettersOfCredit'
import Expansion from './pages/Expansion/Expansion'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LettersOfCredit />} />
        <Route path='/expansion' element={<Expansion />} />
      </Routes>
    </Router>
  )
}

export default App
