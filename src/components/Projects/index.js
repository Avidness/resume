import React from 'react';
import ProjectItem from './ProjectItem';

const Projects = ({projects}) => {
  return (
    <div className='parallax'>
      {projects.map((proj, i) => 
        <ProjectItem 
          key={i}
          title={proj.title}
          body={proj.body}
          />)}
    </div>
  )
}

export default Projects;