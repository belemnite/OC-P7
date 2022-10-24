import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import FicheLogement from './pages/FicheLogement'
import Error from './composants/Error'
import NoMatch from './pages/NoMatch'

export default function Routage() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />}  />
                <Route path='/a-propos' element={<About />} />
                <Route path='/logement/:id' element={<FicheLogement />}  />
                <Route path='*' element={<NoMatch />} />
            </Routes>
        </Router>
    )
}
