import React from 'react';
import { List, Grid } from '@material-ui/core';
import { faCode, faDatabase } from '@fortawesome/fontawesome-free-solid';
import { faReact, faCss3Alt, faHtml5, faGit, faAws, faAndroid } from '@fortawesome/fontawesome-free-brands';

import SkillItem from './SkillItem';

const Skills = () => {
  return (
    <Grid container spacing={0} className='parallax'>
      <Grid item xs={12} md={6}>
        <List>
          <SkillItem text="C#" progress={95} icon={faCode} />
          <SkillItem text="ReactJS" progress={80} icon={faReact} />
          <SkillItem text="AWS" progress={70} icon={faAws} />
          <SkillItem text=".NET" progress={90} icon={faCode} />
          <SkillItem text="dotnet core" progress={80} icon={faCode} />
          <SkillItem text="EF core" progress={70} icon={faDatabase} />
          <SkillItem text="NHibernate" progress={80} icon={faDatabase} />
          <SkillItem text="Redux" progress={70} icon={faCode} />
        </List>
      </Grid>
      <Grid item xs={12} md={6}>
        <List>
          <SkillItem text="SQL Server" progress={95} icon={faDatabase} />
          <SkillItem text="Git" progress={90} icon={faGit} />
          <SkillItem text="Restful APIs" progress={90} icon={faCode} />
          <SkillItem text="CSS" progress={95} icon={faCss3Alt} />
          <SkillItem text="HTML" progress={95} icon={faHtml5} />
          <SkillItem text="MVC5" progress={95} icon={faCode} />
          <SkillItem text="Android" progress={50} icon={faAndroid} />
        </List>
      </Grid>
    </Grid>
  )
}

export default Skills;