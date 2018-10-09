import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { 
  Slide,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
 } from '@material-ui/core';

const WorkItem = ({job}) => {
  return ( 
    <Slide 
      direction="up" 
      in={true} 
      timeout={800} 
      mountOnEnter 
      unmountOnExit>
      <ExpansionPanel style={{margin: 5, padding: 10}}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant='title' paragraph={true}>
            {job.company} | {job.location} | {job.timeline} | {job.title}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ul>
            {job.details.map((details, i) => 
              <li key={i} >
                <Typography 
                  variant='body2' 
                  paragraph={true}>
                  {details}<br />
                </Typography>
              </li>)}
          </ul>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Slide>
  )
}

export default WorkItem;