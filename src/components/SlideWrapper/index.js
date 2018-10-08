import React from 'react';
import { Slide, Paper } from '@material-ui/core';

const SlideWrapper = ({children}) => (
  <Slide 
    direction="up" 
    in={true} 
    timeout={800} 
    mountOnEnter 
    unmountOnExit>
    <Paper style={{margin: 10, padding: 10}}>
      {children}
    </Paper>
	</Slide>
)

export default SlideWrapper