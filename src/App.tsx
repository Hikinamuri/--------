import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { GeneralPage } from './pages/generalPage/general';

import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<div>Home</div>} />
        <Route path='general' element={<GeneralPage />} />
      </Routes>
    </Router>
  )
}

export default App