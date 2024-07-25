import { Routes, Route } from 'react-router-dom';
import { GeneralPage } from './pages/generalPage/general';

import './App.css'

function App() {

  return (
    <Routes>
      <Route index element={<GeneralPage />} />
    </Routes>
  )
}

export default App