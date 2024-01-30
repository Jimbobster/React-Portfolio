// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import ProjectGallery from './Components/ProjectGallery';
import Project from './Components/Project';
import Contact from './Components/Contact';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<ProjectGallery />} />
          <Route path="/Project/:id" element={<Project />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Skills" element={<Skills />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;