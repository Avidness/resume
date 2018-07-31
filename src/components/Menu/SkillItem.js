import React, { Fragment } from 'react';
import { ListItem, ListItemText, LinearProgress } from '@material-ui/core';
import FaIcon from '@fortawesome/react-fontawesome';

const SkillItem = (props) => (  
  <Fragment>
    <ListItem>
      <FaIcon icon={props.icon} size='2x' />
      <ListItemText primary={props.text} secondary={props.subtext} />
    </ListItem>
    <LinearProgress variant='determinate' color='secondary' value={props.progress} />
  </Fragment>
)

export default SkillItem