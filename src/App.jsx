import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Landing from './pages/Landing';
import About from './pages/About';
import Services from './pages/Services';
import News from './pages/News';
import Contact from './pages/Contact';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/news' element={<News />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
