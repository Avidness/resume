import React from 'react';
import { Typography } from '@material-ui/core';
import SlideWrapper from '../SlideWrapper/';

const About = () => {
  return (
    <div className='parallax'>
      <SlideWrapper>
        <Typography variant='body2' paragraph={true}>
          Motivated, creative, Software Engineer with a passion for user experience, design, and beautiful code. Heavily experienced in all aspects of web development.
        </Typography>
        <Typography variant='body2' paragraph={true}>
          I like good movies, good beer, and good software.
        </Typography>
      </SlideWrapper>
    </div>
  )
}

export default About;