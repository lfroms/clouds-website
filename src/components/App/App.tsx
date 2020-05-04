import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Helmet from 'react-helmet';
import { Nav, Routes } from 'components';

import * as NavItems from './nav_items.json';
import styles from './App.module.scss';

export default class App extends React.PureComponent {
  render() {
    return (
      <>
        <Helmet defaultTitle="Clouds" titleTemplate="%s | Clouds" />
        <Router>
          <div className={styles.App}>
            <Nav pages={NavItems.pages} />
            <Routes />
          </div>
        </Router>
      </>
    );
  }
}
