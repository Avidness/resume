import React from 'react';
import { List, Grid } from '@material-ui/core';
import { faCode, faDatabase } from '@fortawesome/fontawesome-free-solid';
import { faReact, faCss3Alt, faHtml5 } from '@fortawesome/fontawesome-free-brands';

import SkillItem from './SkillItem';

const Skills = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={6}>
        <List>
          <SkillItem text="ReactJS" subtext="test2" progress={80} icon={faReact} />
          <SkillItem text="CSS" subtext="test2" progress={90} icon={faCss3Alt} />
          <SkillItem text="HTML" subtext="test2" progress={90} icon={faHtml5} />
          <SkillItem text="C#" subtext="test2" progress={80} icon={faCode} />
          <SkillItem text="SQL" subtext="test2" progress={70} icon={faDatabase} />
        </List>
      </Grid>
      <Grid item xs={6}>
        <List>
          <SkillItem text="ReactJS" subtext="test2" progress={80} icon={faReact} />
          <SkillItem text="CSS" subtext="test2" progress={90} icon={faCss3Alt} />
          <SkillItem text="HTML" subtext="test2" progress={90} icon={faHtml5} />
          <SkillItem text="C#" subtext="test2" progress={80} icon={faCode} />
          <SkillItem text="SQL" subtext="test2" progress={70} icon={faDatabase} />
        </List>
      </Grid>
    </Grid>
  )
}

export default Skills;