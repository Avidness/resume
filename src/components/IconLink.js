import React from 'react';
import { Tooltip, Grow } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconLink = (props) => (
  <Tooltip title={props.tooltip}>
    <a href={props.href} target="blank">
      <Grow in={true} timeout={2500}>
        <FontAwesomeIcon icon={props.icon} size="2x" />
      </Grow>
    </a>
  </Tooltip>
)

export default IconLink