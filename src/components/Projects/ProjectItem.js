import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { 
  Slide, 
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
 } from '@material-ui/core';

const Projects = (props) => {
  return ( 
    <Slide 
      direction="up" 
      in={true} 
      timeout={800} 
      mountOnEnter 
      unmountOnExit>
      <ExpansionPanel style={{margin: 5, padding: 10}}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant='headline' paragraph={true}>
            {props.title}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography variant='body2' paragraph={true}>
            {props.body}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Slide>
  )
}

export default Projects;