import React from 'react';
import { Typography, Slide, Button } from '@material-ui/core';
import FaIcon from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/fontawesome-free-brands';
import { faPhone, faEnvelope, faIdCard, 
  faCode, faCaretDown } from '@fortawesome/fontawesome-free-solid';

import imgProfile from '../../img/me.png';
import IconLink from './IconLink';
import '../../styles/header.css';

const Header = () => (
  <div id="header">

    <Slide direction="up" in={true} timeout={800}>
      <img id="profile_image" className="center" src={imgProfile} alt="profile" />
    </Slide>

    <Slide direction="up" in={true} timeout={800}>
      <span id="title">
        <Typography variant="display1" gutterBottom>Alan David Ness</Typography>
        <Typography variant="title" gutterBottom>Software Engineer</Typography>

        <div id="header_icons" className="center">
          <IconLink tooltip="GitHub" href="https://github.com/Avidness" icon={faGithub} />
          <IconLink tooltip="Resume PDF" href="https://drive.google.com/file/d/1CTobl7LZa74mRTx9o8yKC3WiBC4o8iE2" icon={faIdCard} />
          <IconLink tooltip="Linked In" href="https://www.linkedin.com/in/alandavidness/" icon={faLinkedin} />
          <IconLink tooltip="407-733-9763" href="tel:4077339763" icon={faPhone} />
          <IconLink tooltip="adavidness@gmail.com" href="mailto:adavidness@gmail.com" icon={faEnvelope} />
          <IconLink tooltip="Source code for this site" href="https://github.com/Avidness/resume" icon={faCode} />
        </div>
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
            <FaIcon icon={faCaretDown} size="3x" />
        </Button>
      </div>
    </Slide>
  </div>
)

export default Header