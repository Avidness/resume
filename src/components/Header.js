import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faFilePdf, faCodeBranch, faCode, faCaretDown } from '@fortawesome/fontawesome-free-solid'
import { faGithub, faGithubAlt } from '@fortawesome/fontawesome-free-brands'
import imgProfile from '../img/me.png'
import '../styles/header.css';

const Header = () => (
  
  <div id="header">

    <img id="profile_image" className="center" src={imgProfile} alt="profile" />
    <span id="title" className="center">Alan David Ness</span>
    <span id="subtext" className="center">Full-Stack Web Developer</span>

    <div id="header_icons" className="center">
      <FontAwesomeIcon icon={faPhone} size="2x" />
      <FontAwesomeIcon icon={faGithub} size="2x" />
      <FontAwesomeIcon icon={faFilePdf} size="2x" />
      <FontAwesomeIcon icon={faCodeBranch} size="2x" />
      <FontAwesomeIcon icon={faEnvelope} size="2x" />
      <FontAwesomeIcon icon={faCode} size="2x" />
      <FontAwesomeIcon icon={faGithubAlt} size="2x" />
    </div>
    
    <div id="header_bottom" className="center">
      <p>More info</p>
      <FontAwesomeIcon icon={faCaretDown} size="3x" />
    </div>
  </div>
)

export default Header