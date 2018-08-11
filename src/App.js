import React, { Fragment } from 'react';

import Header from './components/Header/';
import Menu from './components/Menu/';
import './styles/App.css';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Menu />
    </Fragment>
  )
}

export default App;
