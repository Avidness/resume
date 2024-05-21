import React from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';

import Skills from '../components/Skills/';
import Work from '../components/Work/';
import Projects from '../components/Projects/';
import Education from '../components/Education/';
import About from '../components/About/';
import Contact from '../components/Contact/';

import data from '../data.json';

class ContentWrapper extends React.Component {
  constructor(){
    super();
    this.state = {
      value: 0
    }
  }
  handleChange = (e, value) => {
    this.setState({ value });
  };
  render() {
    let value = this.state.value;
    return (
      <AppBar position="static" style={{display: "none"}}>
        <Tabs value={value} onChange={this.handleChange}>
          <Tab label="Skills" />
          <Tab label="Work" />
          <Tab label="Projects" />
          <Tab label="Education" />
          <Tab label="About Me" />
          <Tab label="Contact" />
        </Tabs>
        {value === 0 && <Skills skills={data.skills} />}
        {value === 1 && <Work work={data.work} />}
        {value === 2 && <Projects projects={data.projects} />}
        {value === 3 && <Education />}
        {value === 4 && <About />}
        {value === 5 && <Contact />}
      </AppBar>
    )
  }
};

export default ContentWrapper;