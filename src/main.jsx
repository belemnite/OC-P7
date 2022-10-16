import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import './css/index.css'
import "@fontsource/montserrat"
import About from './pages/About'
import FicheLogement from './pages/FicheLogement'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/a-propos' element={<About />} />
      <Route path='/:id' element={<FicheLogement/>} />
      </Routes>
    </Router>
  </React.StrictMode>
)
