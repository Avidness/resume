import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const theme = createTheme({
  palette: {
    type: 'light',
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
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Roboto Mono',
    ].join(','),
  },
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: '#94b9c6',
        color: '#002b5c',
        padding: '16px',
        borderRadius: '8px',
      },
    },
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();
