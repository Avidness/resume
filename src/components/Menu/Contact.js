import React from 'react';
import { Typography } from '@material-ui/core';
import FaIcon from '@fortawesome/react-fontawesome';
import { faSlack } from '@fortawesome/fontawesome-free-brands';
import { faPhone, faEnvelope } from '@fortawesome/fontawesome-free-solid';

const Contact = () => {
  return (
    <div className='parallax'>
      <Typography variant='display1' paragraph={true}>
        Send me an email: 
      </Typography>
      <Typography variant='headline' paragraph={true}>
        <a target='blank' href='mailto:adavidness@gmail.com'>
          <FaIcon icon={faEnvelope} /> adavidness@gmail.com 
        </a>
      </Typography>
      <br />

      <Typography variant='display1' paragraph={true}>
        Chat with me online:
      </Typography>
      <Typography variant='headline' paragraph={true}>
        <a target='blank' href='https://join.slack.com/t/avidness/shared_invite/enQtNDE0NzUzMTc3MDI3LTc2NjM1YjY5YzE5YjdhMGE2YTIxOTdhZjYxOTAyMzQzNjJkOTA5N2MyYTM0OGRkMjEyN2ZkMmFlN2JhZDNiM2M'>
          <FaIcon icon={faSlack} /> Slack
        </a>
      </Typography>
      <br />
      
      <Typography variant='display1' paragraph={true}>
        Call me: 
      </Typography>
      <Typography variant='headline' paragraph={true}>
        <a target='blank' href='tel:4077339763'>
          <FaIcon icon={faPhone} /> 1-407-733-9763
        </a>
      </Typography>
      <br />
      
    </div>
  )
}

export default Contact;