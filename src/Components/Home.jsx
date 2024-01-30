import React from 'react';
import myPhoto from '../assets/Jimmy.jpeg';
import './Home.css';

const Home = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>James Greaves Portfolio</h1>
      <h2>Software Developer</h2>
      <img src={myPhoto} alt="James Greaves" className="profile-photo" />
      <h2>"Helping you build a big brand for your small business"</h2>
    </div>
  );
};

export default Home;