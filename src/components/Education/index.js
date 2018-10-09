import React from 'react';
import { Typography } from '@material-ui/core';
import SlideWrapper from '../SlideWrapper/';

const Education = () => {
  return (
    <div className='parallax'>
      <SlideWrapper>
        <Typography variant='title' paragraph={true}>
          University of Central Florida, Orlando, FL: 2010
        </Typography>
        <Typography variant='body2' paragraph={true}>
          Bachelor of Science – Information Technology (GPA:  3.65)
        </Typography>
        <Typography variant='title' paragraph={true}>
          Relevant Coursework:  
        </Typography>
        <Typography variant='body2' paragraph={true}>
          Computer Science I & II; Discrete Structures I & II; Programming Languages; Database Management Systems; Computer Logic and Organization; Systems Software; Operating Systems
        </Typography>
      </SlideWrapper>
    </div>
  )
}

export default Education;