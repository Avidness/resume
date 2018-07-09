import React from 'react'
import { Tooltip, Grow } from '@material-ui/core';

const IconLink = (props) => (
  <Tooltip title={props.tooltip}>
    <a href={props.href} target="blank">
      <Grow in={true} timeout={2500}>
        {props.children}
      </Grow>
    </a>
  </Tooltip>
)

export default IconLink