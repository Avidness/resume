import React from 'react';
import { Typography } from '@material-ui/core';
import SlideWrapper from '../SlideWrapper';

const Aboutme = () => {
  return (
    <div className='parallax'>
      <SlideWrapper>
        <Typography variant='body2' paragraph={true}>
          I like good movies, good beer, and good software.
        </Typography>
        <Typography variant='body2' paragraph={true}>
          I don't like writing bio's, but I may add more to this later.
        </Typography>
      </SlideWrapper>
    </div>
  )
}

export default Aboutme;