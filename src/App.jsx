import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home.jsx';
import { Logement } from './pages/Logement.jsx';
import { Error_404 } from './pages/Error_404.jsx';
import { About } from './pages/About.jsx';

export function App() {
  return (
    <div className='main'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Logement/:id' element={<Logement />} />
        <Route path='/Error_404' element={<Error_404 />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

