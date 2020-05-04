import React from 'react';
import { Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import { Home, Privacy } from 'sections';

import styles from './Routes.module.scss';

export default function Routes() {
  return (
    <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
      className={styles.Wrapper}
    >
      <Route exact path="/" component={Home} />
      <Route exact path="/privacy" component={Privacy} />
    </AnimatedSwitch>
  );
}
