import React from 'react';
import './AboutMe.css';
import profileImage from '/jimbob.jpeg';

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <h1>About Me</h1>

      <img src={profileImage} alt="Profile" className="about-me-image" />

      <p>
        Hi, I'm James Greaves! 👋 I'm a passionate web developer based in Manchester, UK.
      </p>

      <p>
        Currently on an exciting journey of learning and building. I'm on a mission to become a
        skilled Front End Web Developer, with a vision to transform my career in the upcoming year.
      </p>

      <p>
        Enthusiastic about creating beautiful and interactive websites, I bring creativity and
        dedication to every project I undertake.
      </p>
    </div>
  );
};

export default AboutMe;