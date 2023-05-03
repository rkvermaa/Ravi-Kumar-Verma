import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'

import Navbar from './components/Navbar';
import Themes from './components/Themes';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <BrowserRouter basename="/Ravi-Kumar-Verma">
      <Navbar />
      <Themes />
      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<About />}  />
        <Route path='portfolio' element={<Portfolio />}  />
        <Route path='contact' element={<Contact />}  />

      </Routes>
    </BrowserRouter>
  );
}

export default App;