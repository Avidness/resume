import React from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';

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
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
        {value === 0 && <p>Item One</p>}
        {value === 1 && <p>Item Two</p>}
        {value === 2 && <p>Item Three</p>}
      </AppBar>
    )
  }
};

export default Menu