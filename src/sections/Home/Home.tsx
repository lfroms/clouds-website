import React from 'react';
import GitHubButton from 'react-github-btn';
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
              <a href="https://apps.apple.com/ca/app/clouds/id1511249500">
                <AppStore />
              </a>
            </div>

            <div className={styles.Caption}>
              <Text type="caption">
                A fast, reliable and gorgeous weather experience available exclusively to Canadians,
                with data sourced from Environment and Climate Change Canada. Best of all, it's open
                source.
              </Text>
            </div>

            <div className={styles.OpenSource}>
              <GitHubButton
                href="https://github.com/lfroms/clouds"
                data-color-scheme="no-preference: dark; dark: dark; dark: dark;"
                data-size="large"
                aria-label="Star lfroms/clouds on GitHub"
                data-show-count
              >
                Star
              </GitHubButton>

              <GitHubButton
                href="https://github.com/lfroms/clouds/issues"
                data-color-scheme="no-preference: dark; light: dark; dark: dark;"
                data-icon="octicon-issue-opened"
                data-size="large"
                aria-label="Issue lfroms/clouds on GitHub"
                data-show-count
              >
                Issue
              </GitHubButton>
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
