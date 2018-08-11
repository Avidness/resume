import React from 'react';
import { Typography } from '@material-ui/core';

const Projects = () => {
  return (
    <div className='parallax'>      
      <Typography variant='display1' paragraph={true}>
        Request for Access - Web app
      </Typography>
      <Typography variant='body2' paragraph={true}>
        Website that centralizes RFA's from medical staff, volunteers, ancillary staff, and provides a control dashboard for the Provisioning team.
      </Typography><br />

      <Typography variant='display1'>
        Survey Collection and Reporting
      </Typography>
      <Typography variant='body2' paragraph={true}>
        Led a small team to develop multi-faced website that collects surveys and displays statistics to clients.
      </Typography><br />
      
      <Typography variant='display1'>
        Custom Active Directory Integration
      </Typography>
      <Typography variant='body2' paragraph={true}>
        Custom web apps needed to use AD authentication but also store roles and data, specific to each web app.
      </Typography><br />

      <Typography variant='display1'>
        System Software Compiler
      </Typography>
      <Typography variant='body2' paragraph={true}>
        Writing a compiler (Scanner, Parser, Code Generator and Virtual Machine) to implement the PL/0 language as part of a semester project for Systems Software.
      </Typography><br />

      <Typography variant='display1'>
        Customer Service Call App
      </Typography>
      <Typography variant='body2' paragraph={true}>
        Web application that uses the Twilio API to trigger a conversation between two parties and store the resulting conversation.
      </Typography>
    </div>
  )
}

export default Projects;