import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Logo.module.scss';

export default class Logo extends React.PureComponent {
  render() {
    return (
      <NavLink to="/">
        <img src={require('./images/logo.png')} alt="Clouds icon" className={styles.Logo} />
      </NavLink>
    );
  }
}
