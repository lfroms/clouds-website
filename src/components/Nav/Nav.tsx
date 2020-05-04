import React from 'react';
import { Logo } from './components';

import styles from './Nav.module.scss';
import PageEntry from './PageEntry';
import { NavLink } from 'react-router-dom';

import { Text } from 'components';

interface Props {
  pages: PageEntry[];
}

export default class Nav extends React.PureComponent<Props> {
  render() {
    return (
      <nav className={styles.Nav}>
        <div className={styles.LogoContainer}>
          <Logo />
        </div>
        {this.renderNavLinks()}
      </nav>
    );
  }

  private renderNavLinks() {
    const { pages } = this.props;

    return pages.map((page) => (
      <NavLink
        to={page.url}
        exact
        className={styles.NavItem}
        activeClassName={styles.NavItemActive}
        key={page.title}
      >
        <Text type="menu">{page.title}</Text>
      </NavLink>
    ));
  }
}
