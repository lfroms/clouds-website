import React from 'react';

import styles from './Screenshots.module.scss';

export default class Screenshots extends React.PureComponent {
  render() {
    return (
      <div className={styles.Screenshots}>
        <img src={require('./images/screenshots.png')} alt="Screenshots of Clouds app" />
      </div>
    );
  }
}
