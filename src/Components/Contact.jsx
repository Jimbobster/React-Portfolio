import React from 'react';
import './index.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!');
  };

  return (
    <div className="contact">
      <h2>Contact Information</h2>
      <p>Email: jgreavesei@gmail.com</p>
      <p>Phone: +447790444222</p>
      <p>
      <a href="https://www.linkedin.com/in/james-greaves-202a28293">My LinkedIn Profile</a>
      </p>
      <p>
       <a href="https://github.com/Jimbobster">My Github Profile</a>
      </p>
      <p>
        <a href="./src/assets/James Greaves CV 2023.pdf" target="_blank" rel="noopener noreferrer">Download My CV</a>
      </p>
      {/* Contact form */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;