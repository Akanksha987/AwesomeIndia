import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from "./pages/Home";
import Login from './components/Login';
const App: React.FC = () => {
  const navLinks = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Contact', url: '/contact' },
    { name: 'Bookmark', url: '/bookmark' },
    { name: 'Login', url: '/login' },
  ];

  return (
    <Router>
      <Navbar title="My Website" links={navLinks} />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      
    </Router>
  );
};

export default App;
