import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Project = ({ id, title, deployedLink, githubLink, image }) => {
  return (
    <div className="card mb-3">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          Link to deployed version: <a href={deployedLink}>{deployedLink}</a>
        </p>
        <p className="card-text">
          Link to GitHub repository: <a href={githubLink}>{githubLink}</a>
        </p>

      </div>
    </div>
  );
};

export default Project;