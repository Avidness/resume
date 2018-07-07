import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Header from './components/Header'
import Steps from './components/Steps'
import './styles/App.css';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Press Start 2P',
    ].join(','),
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Header />
        <Steps />
        <p className="App-intro parallax">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </MuiThemeProvider>
    );
  }
}

export default App;
