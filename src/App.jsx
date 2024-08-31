import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/Home/Section2';
import Menu from './pages/Home/Section3';
import Promotion from './pages/Home/Section4';
import Shop from './pages/Home/Section5';
import Blog from './pages/Home/Section6';
// import Contact from './pages/Home/Section7';

function App() {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Promotion" element={<Promotion />} />
          <Route path="/Blog" element={<Blog />} />
    
        </Routes>
      </Router>
    </>
  )
}

export default App