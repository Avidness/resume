import React from 'react'
import Typography from '@material-ui/core/Typography';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faFilePdf, faCaretDown } from '@fortawesome/fontawesome-free-solid'
import { faGithub, faSlack } from '@fortawesome/fontawesome-free-brands'
import imgProfile from '../img/me.png'
import '../styles/header.css';

const Header = () => (
  <div id="header">

    <img id="profile_image" className="center" src={imgProfile} alt="profile" />

    <span id="title">
      <Typography variant="display1" gutterBottom>Alan David Ness</Typography>
      <Typography variant="title" gutterBottom>Full-Stack Web Developer</Typography>
      
      <div id="header_icons" className="center">
        <FontAwesomeIcon icon={faPhone} size="2x" />
        <FontAwesomeIcon icon={faSlack} size="2x" />
        <FontAwesomeIcon icon={faGithub} size="2x" />
        <FontAwesomeIcon icon={faFilePdf} size="2x" />
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
      </div>
    </span>
    
    <div id="header_bottom" className="center">
      <p>More info</p>
      <FontAwesomeIcon icon={faCaretDown} size="3x" />
    </div>
  </div>
)

export default Header