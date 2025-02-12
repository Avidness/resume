import React from 'react';
import { Typography, Slide, Grid, Paper } from '@material-ui/core';
import { faGithub, faLinkedin } from '@fortawesome/fontawesome-free-brands';
import { faPhone, faEnvelope, faIdCard, faCode } from '@fortawesome/fontawesome-free-solid';
import GraphCanvas from './components/GraphCanvas';

import imgProfile from './img/me.png';
import IconLink from './components/IconLink';

import './styles/App.css';

const App = () => (
  <div id='header'>
    <GraphCanvas>
      <Slide direction='up' in={true} timeout={800}>
      <Paper elevation={24} id='header_wrapper'>
          <Grid container alignItems='center' spacing={2} style={{ flexGrow: 1 }} justifyContent='center'>
            <Grid item xs={12} md={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img id='profile_image' src={imgProfile} alt='profile' />
            </Grid>

            <Grid item xs={12} md={8} className='centered'>
              <Typography variant='h4' gutterBottom>Alan David Ness</Typography>
              <Typography variant='h6' gutterBottom>Full-Stack AI Engineer</Typography>
            </Grid>

            <Grid item xs={12} className='centered'>
              <div id='header_icons'>
                <IconLink tooltip='GitHub' href='https://github.com/Avidness' icon={faGithub} />
                <IconLink tooltip='Resume PDF' href='https://drive.google.com/file/d/16VjgRQEHNFciLcej49CToYkB-Y_N3caA/view' icon={faIdCard} />
                <IconLink tooltip='Linked In' href='https://www.linkedin.com/in/alandavidness/' icon={faLinkedin} />
                <IconLink tooltip='407-733-9763' href='tel:4077339763' icon={faPhone} />
                <IconLink tooltip='adavidness@gmail.com' href='mailto:adavidness@gmail.com' icon={faEnvelope} />
                <IconLink tooltip='Source code for this site' href='https://github.com/Avidness/resume' icon={faCode} />
              </div>
            </Grid>
          </Grid>
        </Paper>
      </Slide>
    </GraphCanvas>
  </div>
)

export default App