import React from 'react'
import { Typography } from '@material-ui/core';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/fontawesome-free-solid';
import imgProfile from '../img/me.png';
import HeaderLinks from './HeaderLinks';
import '../styles/header.css';

const Header = () => (
  <div id="header">

    <img id="profile_image" className="center" src={imgProfile} alt="profile" />

    <span id="title">
      <Typography variant="display1" gutterBottom>Alan David Ness</Typography>
      <Typography variant="title" gutterBottom>Full-Stack Web Developer</Typography>
      <HeaderLinks />
    </span>
    
    <div id="header_bottom" className="center">
      <Typography>More info</Typography>
      <FontAwesomeIcon icon={faCaretDown} size="3x" />
    </div>
  </div>
)

export default Header