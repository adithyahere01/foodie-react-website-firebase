import React, {lazy, Suspense} from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home, About, Menus, Contactpage, Signu, Login } from './pages/Index';

const Aboutpage = lazy(() => import('./pages/About/About'));

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar/>

          <Suspense fallback='Loading....'>
          <Routes>
            <Route path='/' element={<Home/>} />

            <Route path='/about' element={<Aboutpage/>} />
            <Route path='/menu' element={<Menus/>} />
            
            <Route path='/signup' element={<Signu/>} />
            <Route path='/login' element={<Login/>} />

            <Route path='/contact' element={<Contactpage/>} />
          </Routes>
          </Suspense>
      </Router>
    </div>
  );
}

export default App;
