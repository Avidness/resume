import React from 'react';
import { List, Grid } from '@material-ui/core';
import SkillItem from './SkillItem';

const Skills = ({skills}) => {

  const leftCol = [], rightCol = [];
  skills.forEach((item, i) => {
    if(i % 2 === 0){
      leftCol.push(item);
    }else{
      rightCol.push(item);
    }
  });
  
  return (
    <Grid container spacing={0} className='parallax'>
      <Grid item xs={12} md={6}>
        <List>
          {leftCol.map((skill, i) => 
            <SkillItem 
              key={i}
              text={skill.name} 
              progress={skill.value}
              icon={skill.icon} 
              />)}
        </List>
      </Grid>
      <Grid item xs={12} md={6}>
        <List>
          {rightCol.map((skill, i) => 
            <SkillItem 
              key={i}
              text={skill.name} 
              progress={skill.value}
              icon={skill.icon} 
              />)}
        </List>
      </Grid>
    </Grid>
  )
}

export default Skills;