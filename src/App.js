import React, { Fragment } from 'react';

import Header from './components/Header';
import Menu from './components/Menu/';
import Steps from './components/Steps';
import './styles/App.css';

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Menu />
        <Steps />
        <p className="App-intro parallax">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </Fragment>
    );
  }
}

export default App;
