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
      </Typography>

      <Typography variant='display1'>
        Survey Collection and Reporting
      </Typography>
      <Typography variant='body2' paragraph={true}>
        Led a small team to develop multi-faced website that collects surveys and displays statistics to clients.
      </Typography>
    </div>
  )
}

export default Projects;