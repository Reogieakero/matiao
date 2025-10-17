import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import About from './pages/About'
import './index.css'


function App() {

  return (
    
     <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
    <Route path='/aboutus' element={<About />} />
    </Routes>

    
    </BrowserRouter>
  )
}

export default App
