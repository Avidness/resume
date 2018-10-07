import React from 'react';
import ProjectItem from './ProjectItem';

const Projects = () => {

  const projects = [
    {
      title: "Request for Access - Web app", 
      body: "Website that centralizes RFA's from medical staff, volunteers, ancillary staff, and provides a control dashboard for the Provisioning team."
    },
    {
      title: "Survey Collection and Reporting", 
      body: "Led a small team to develop multi-faced website that collects surveys and displays statistics to clients."
    },
    {
      title: "Custom Active Directory Integration", 
      body: "Custom web apps needed to use AD authentication but also store roles and data, specific to each web app."
    },
    {
      title: "System Software Compiler", 
      body: "Writing a compiler (Scanner, Parser, Code Generator and Virtual Machine) to implement the PL/0 language as part of a semester project for Systems Software."
    },
    {
      title: "Customer Service Call App", 
      body: "Web application that uses the Twilio API to trigger a conversation between two parties and store the resulting conversation."
    }
  ];
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