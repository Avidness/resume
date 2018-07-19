import React from 'react';
import { Typography, Slide, Button } from '@material-ui/core';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/fontawesome-free-solid';
import imgProfile from '../img/me.png';
import HeaderLinks from './HeaderLinks';
import '../styles/header.css';

const Header = () => (
  <div id="header">

    <Slide direction="up" in={true} timeout={800}>
      <img id="profile_image" className="center" src={imgProfile} alt="profile" />
    </Slide>

    <Slide direction="up" in={true} timeout={800}>
      <span id="title">
        <Typography variant="display1" gutterBottom>Alan David Ness</Typography>
        <Typography variant="title" gutterBottom>Full-Stack Web Developer</Typography>
        <HeaderLinks />
      </span>
    </Slide>
    
    <Slide direction="up" in={true} timeout={1000}>
      <div id="header_bottom" className="center">
        <Button 
           size='large'
           onClick={() => 
            window.scroll({
              top: window.innerHeight, 
              behavior: 'smooth' 
            })}>
            <FontAwesomeIcon icon={faCaretDown} size="3x" />
        </Button>
      </div>
    </Slide>
  </div>
)

export default Header