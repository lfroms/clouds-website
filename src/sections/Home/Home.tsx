import React from 'react';
import { Screenshots } from './components';

import { ReactComponent as AppStore } from './images/app_store.svg';

import styles from './Home.module.scss';
import { Title, Text } from 'components';

export default class Home extends React.PureComponent {
  render() {
    return (
      <div className={styles.Home}>
        <div className={styles.Layout}>
          <div className={styles.Content}>
            <div className={styles.TitleGroup}>
              <Title size="primary">Clouds</Title>
              <Title size="secondary">Introducing a new way to check the weather.</Title>
            </div>

            <div className={styles.AppStore}>
              <AppStore />
            </div>

            <div className={styles.Caption}>
              <Text type="caption">
                A fast, reliable and gorgeous weather experience available exclusively to Canadians,
                with data sourced from Environment and Climate Change Canada.
              </Text>
            </div>
          </div>
          <div className={styles.ScreenshotsContainer}>
            <Screenshots />
          </div>
        </div>

        <footer>
          <Text type="footnote">&copy; 2020 Lukas Romsicki</Text>
        </footer>
      </div>
    );
  }
}
