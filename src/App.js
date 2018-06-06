import React, { Component } from 'react';

import Header from './components/Header'
import Steps from './components/Steps'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Steps />
        <p className="App-intro parallax">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
