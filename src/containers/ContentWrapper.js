import React from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';

import Skills from '../components/Skills/';
import Projects from '../components/Projects/';
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
      <AppBar position="static">
        <Tabs value={value} onChange={this.handleChange}>
          <Tab label="Skills" />
          <Tab label="Projects" />
          <Tab label="About Me" />
          <Tab label="Contact" />
        </Tabs>
        {value === 0 && <Skills skills={data.skills} />}
        {value === 1 && <Projects projects={data.projects} />}
        {value === 2 && <About />}
        {value === 3 && <Contact />}
      </AppBar>
    )
  }
};

export default ContentWrapper;