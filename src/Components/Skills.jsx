// Skills.jsx
import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div className="skills-container">
      {/* First Set of Skill Cards */}
      <div className="skill-card">
        <img src="HTML.png" alt="HTML Logo" className="skill-logo" />
        <h3 className="skill-name">HTML</h3>
        <p className="skill-description">
          Proficient in HTML for creating the structure and content of web pages.
        </p>
      </div>

      <div className="skill-card">
        <img src="CSS.png" alt="CSS Logo" className="skill-logo" />
        <h3 className="skill-name">CSS</h3>
        <p className="skill-description">
          Strong skills in CSS for styling and designing visually appealing web pages.
        </p>
      </div>

      <div className="skill-card">
        <img src="icons8-react-80.png" alt="React Logo" className="skill-logo" />
        <h3 className="skill-name">React</h3>
        <p className="skill-description">
          Experienced in building dynamic and responsive user interfaces using React.
        </p>
      </div>

      <div className="skill-card">
        <img src="icons8-json-96.png" alt="JSON Logo" className="skill-logo" />
        <h3 className="skill-name">JSON</h3>
        <p className="skill-description">
          Proficient in working with JSON (JavaScript Object Notation) for data interchange between server and client.
        </p>
      </div>

      <div className="skill-card">
        <img src="icons8-api-96.png" alt="API Logo" className="skill-logo" />
        <h3 className="skill-name">APIs</h3>
        <p className="skill-description">
          Skilled in integrating and consuming APIs (Application Programming Interfaces) for fetching and updating data.
        </p>
      </div>

      {/* Second Set of Skill Cards */}
      <div className="skill-card">
        <img src="icons8-javascript-480.png" alt="JavaScript Logo" className="skill-logo" />
        <h3 className="skill-name">JavaScript</h3>
        <p className="skill-description">
          A versatile programming language used for creating dynamic and interactive user interfaces in web development.
        </p>
      </div>

      {/* Additional Skill Cards */}
      <div className="skill-card">
        <img src="icons8-backend-development-100.png" alt="Web Development Tools Logo" className="skill-logo" />
        <h3 className="skill-name">Web Development Tools</h3>
        <p className="skill-description">
          Familiarity with a variety of web development tools, including browser developer tools, code editors, and build tools.
        </p>
      </div>

      <div className="skill-card">
        <img src="icons8-bootstrap-a-free-and-open-source-css-framework-100.png" alt="Bootstrap Logo" className="skill-logo" />
        <h3 className="skill-name">Bootstrap</h3>
        <p className="skill-description">
          Proficient in using Bootstrap, a popular front-end framework for responsive and mobile-first web development.
        </p>
      </div>

      <div className="skill-card">
        <img src="icons8-vs-code-512.png" alt="Version Control Logo" className="skill-logo" />
        <h3 className="skill-name">Version Control</h3>
        <p className="skill-description">
          Experience with version control systems, particularly Git, for managing and tracking changes in collaborative projects.
        </p>
      </div>

      <div className="skill-card">
        <img src="icons8-github-500.png" alt="Git Logo" className="skill-logo" />
        <h3 className="skill-name">Git</h3>
        <p className="skill-description">
          Proficient in using Git for version control and collaboration in software development projects.
        </p>
      </div>

      <div className="skill-card">
        <img src="icons8-nodejs-512.png" alt="Node.js Logo" className="skill-logo" />
        <h3 className="skill-name">Node.js</h3>
        <p className="skill-description">
          Knowledge of server-side JavaScript runtime environment for building scalable and high-performance applications.
        </p>
      </div>

      <div className="skill-card">
        <img src="icons8-web-design-96.png" alt="Responsive Web Design Logo" className="skill-logo" />
        <h3 className="skill-name">Responsive Web Design</h3>
        <p className="skill-description">
          Design approach ensuring optimal viewing and functionality across various devices and screen sizes.
        </p>
      </div>

      <div className="skill-card">
        <img src="icons8-testing-100.png" alt="Testing and Debugging Logo" className="skill-logo" />
        <h3 className="skill-name">Testing and Debugging</h3>
        <p className="skill-description">
          Proficient in testing and debugging techniques to ensure the functionality and reliability of web applications.
        </p>
      </div>

    </div>
  );
};

export default Skills;