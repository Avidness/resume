import React from 'react';
import { Typography } from '@material-ui/core';
import FaIcon from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/fontawesome-free-solid';
import SlideWrapper from '../SlideWrapper/';

const Contact = () => {
  return (
    <div className='parallax'>
    <SlideWrapper>
        <Typography variant='display1' paragraph={true}>
          Send me an email: 
        </Typography>
        <Typography variant='headline' paragraph={true}>
          <a target='blank' href='mailto:adavidness@gmail.com'>
            <FaIcon icon={faEnvelope} /> adavidness@gmail.com 
          </a>
        </Typography>
    </SlideWrapper>

    <SlideWrapper>
     <Typography variant='display1' paragraph={true}>
        Call me: 
      </Typography>
      <Typography variant='headline' paragraph={true}>
        <a target='blank' href='tel:4077339763'>
          <FaIcon icon={faPhone} /> 1-407-733-9763
        </a>
      </Typography>
    </SlideWrapper>
    </div>
  )
}

export default Contact;