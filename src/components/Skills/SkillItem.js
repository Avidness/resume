import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  ListItem, 
  ListItemText,
  LinearProgress, 
  Slide, 
  Paper } from '@material-ui/core';

const SkillItem = (props) => (
  <Slide 
    direction="up" 
    in={true} 
    timeout={800} 
    mountOnEnter 
    unmountOnExit>
    <Paper style={{margin: 10}}>
      <ListItem>
          <FontAwesomeIcon icon={props.icon} size='2x' />
          <ListItemText primary={props.text} secondary={props.subtext} />
        </ListItem>
        <LinearProgress variant='determinate' color='secondary' value={props.progress} />
    </Paper>
	</Slide>
)

export default SkillItem