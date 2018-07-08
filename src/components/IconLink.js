import React from 'react'
import { Tooltip } from '@material-ui/core';

const IconLink = (props) => (
  <Tooltip title={props.tooltip}>
    <a href={props.href} target="blank">
      {props.children}
    </a>
  </Tooltip>
)

export default IconLink