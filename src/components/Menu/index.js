import React from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';

import Skills from './Skills/';
import Projects from './Projects/';
import Aboutme from './Aboutme';
import Contact from './Contact';

class Menu extends React.Component {
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
        {value === 0 && <Skills />}
        {value === 1 && <Projects />}
        {value === 2 && <Aboutme />}
        {value === 3 && <Contact />}
      </AppBar>
    )
  }
};

export default Menu;