import React, { Fragment } from 'react';

import Header from './components/Header/';
import ContentWrapper from './containers/ContentWrapper';
import './styles/App.css';

const App = () => {
  return (
    <Fragment>
      <Header />
      <ContentWrapper />
    </Fragment>
  )
}

export default App;
