import React from 'react';
import FaIcon from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faIdCard, faCode } from '@fortawesome/fontawesome-free-solid';
import { faGithub } from '@fortawesome/fontawesome-free-brands';

import IconLink from './IconLink';

const HeaderLinks = () => (
  <div id="header_icons" className="center">
    <IconLink tooltip="GitHub" href="https://github.com/Avidness">
      <FaIcon icon={faGithub} size="2x" />
    </IconLink>
    <IconLink tooltip="Resume PDF" href="/resume.pdf">
      <FaIcon icon={faIdCard} size="2x" />
    </IconLink>
    <IconLink tooltip="407-733-9763" href="tel:4077339763">
      <FaIcon icon={faPhone} size="2x" />
    </IconLink>
    <IconLink tooltip="adavidness@gmail.com" href="mailto:adavidness@gmail.com">
      <FaIcon icon={faEnvelope} size="2x" />
    </IconLink>
    <IconLink tooltip="Source code for this site" href="https://github.com/Avidness/resume">
      <FaIcon icon={faCode} size="2x" />
    </IconLink>
  </div>
)

export default HeaderLinks