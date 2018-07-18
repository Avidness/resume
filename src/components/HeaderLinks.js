import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faIdCard, faCode } from '@fortawesome/fontawesome-free-solid'
import { faGithub } from '@fortawesome/fontawesome-free-brands'
import IconLink from './IconLink';
import '../styles/header.css';

const HeaderLinks = () => (
  <div id="header_icons" className="center">
    <IconLink tooltip="GitHub" href="https://github.com/Avidness">
      <FontAwesomeIcon icon={faGithub} size="2x" />
    </IconLink>
    <IconLink tooltip="Resume PDF" href="/resume.pdf">
      <FontAwesomeIcon icon={faIdCard} size="2x" />
    </IconLink>
    <IconLink tooltip="407-733-9763" href="tel:4077339763">
      <FontAwesomeIcon icon={faPhone} size="2x" />
    </IconLink>
    <IconLink tooltip="adavidness@gmail.com" href="mailto:adavidness@gmail.com">
      <FontAwesomeIcon icon={faEnvelope} size="2x" />
    </IconLink>
    <IconLink tooltip="Source code for this site" href="https://github.com/Avidness/resume">
      <FontAwesomeIcon icon={faCode} size="2x" />
    </IconLink>
  </div>
)

export default HeaderLinks