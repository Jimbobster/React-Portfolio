import React from 'react';
import myPhoto from '../assets/IMG_7075.jpg';
import './Home.css';

const Home = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>James Greaves' Portfolio</h1>
      <img src={myPhoto} alt="James Greaves" className="profile-photo" />
      <h2>Software Developer</h2>
      <p>About Me</p>
      <p>My name is James Greaves, I'm 40 years old and live in Manchester, UK. I am currently studying a web development course learning the basics of creating websites and styling them. I am working towards becoming a Front End Web Developer, with a view to change careers next year. I'm thoroughly enjoying the course so far and am very eager to learn as much as I can.</p>
      <h2>Skills Gained</h2>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>Responsive Web Design</li>
      <li>Front-End Frameworks (e.g., Bootstrap, React)</li>
      <li>Version Control</li>
      <li>Git Bash</li>
      <li>Web Development Tools</li>
      {/* No buttons */}
    </div>
  );
};

export default Home;