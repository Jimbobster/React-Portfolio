// ProjectGallery.jsx
import React from 'react';
import projectsData from '../../projectsData';
import Project from './Project';
import './index.css';

const ProjectGallery = () => {
  return (
    <div className="card-deck">
      {projectsData.map(project => (
        <Project key={project.id} {...project} />
      ))}
    </div>
  );
};

export default ProjectGallery;