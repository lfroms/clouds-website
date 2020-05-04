import React from 'react';

import styles from './Privacy.module.scss';
import { Text, Title } from 'components';

export default class Privacy extends React.PureComponent {
  render() {
    return (
      <div className={styles.Privacy}>
        <div className={styles.Title}>
          <Title size="secondary">Privacy Policy</Title>
        </div>

        <div className={styles.Content}>
          <Text type="paragraph">
            Clouds doesn’t store any data that could be used to identify you. Period.
          </Text>

          <Text type="paragraph">
            Clouds is a weather app, not a social network, nor is it an advertising platform.
            Clouds’ mobile app and infrastructure are physically incapable of storing or
            transmitting personally identifiable information of any kind.
          </Text>

          <Text type="paragraph">
            Clouds’ infrastructure keeps logs of requests for weather data up to a maximum 7 days,
            but purely to help diagnose any issues with the infrastructure.{' '}
            <em>It is impossible to associate this data with any specific user.</em>
          </Text>

          <Text type="paragraph">
            None of the aforementioned log data will ever be sold to advertisers or third-party
            companies.
          </Text>
        </div>
      </div>
    );
  }
}
