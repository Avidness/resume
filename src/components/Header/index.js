import React from 'react';
import { Typography, Slide, Button, Paper } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/fontawesome-free-brands';
import { faPhone, faEnvelope, faIdCard, 
  faCode, faCaretDown } from '@fortawesome/fontawesome-free-solid';
import GraphCanvas from './GraphCanvas';

import imgProfile from '../../img/me.png';
import IconLink from './IconLink';
import '../../styles/header.css';

const Header = () => (
  <div id="header">
    <GraphCanvas>
    <Slide direction="up" in={true} timeout={800}>
      <Paper elevation={3} style={{margin: 100, padding: 100, width: 500, height: 100}}>
          <img id="profile_image" className="center" src={imgProfile} alt="profile" />

          <span id="title">
            <Typography variant="display1" gutterBottom>Alan David Ness</Typography>
            <Typography variant="title" gutterBottom>Software Engineer</Typography>

            <div id="header_icons" className="center">
              <IconLink tooltip="GitHub" href="https://github.com/Avidness" icon={faGithub} />
              <IconLink tooltip="Resume PDF" href="https://drive.google.com/file/d/1lHJE8tb0hlOTGpUEZbdbauScX2SQsOOW" icon={faIdCard} />
              <IconLink tooltip="Linked In" href="https://www.linkedin.com/in/alandavidness/" icon={faLinkedin} />
              <IconLink tooltip="407-733-9763" href="tel:4077339763" icon={faPhone} />
              <IconLink tooltip="adavidness@gmail.com" href="mailto:adavidness@gmail.com" icon={faEnvelope} />
              <IconLink tooltip="Source code for this site" href="https://github.com/Avidness/resume" icon={faCode} />
            </div>
          </span>
        </Paper>
      </Slide>
    </GraphCanvas>
  </div>
)

export default Header