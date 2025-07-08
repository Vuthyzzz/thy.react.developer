import './App.css';
import Header from './Header';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Project from './Project';
import Experience from './Experience';
import Certificate from './Certificate';
import Footer from './Footer';

import MyCV from './MyCV';




function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Certificate" element={<Certificate />} />
        <Route path="/MyCV" element={<MyCV />} />
      </Routes>

      <Footer/>
    </Router>
    
  );
}

export default App;
