import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: '#757ce8',
      main: '#303030',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#797d7f',
      main: '#566573',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Press Start 2P',
    ].join(','),
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>, 
  document.getElementById('root'));
registerServiceWorker();
