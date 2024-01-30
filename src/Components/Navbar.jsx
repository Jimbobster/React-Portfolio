// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><a href="/AboutMe">About Me</a></li>
        <li><a href="/Skills">Skills</a></li>
        <li><Link to="/Projects">Projects</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;