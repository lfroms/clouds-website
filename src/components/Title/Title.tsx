import React from 'react';
import classNames from 'classnames';

import styles from './Title.module.scss';

type Size = 'primary' | 'secondary';

interface Props {
  size: Size;
  children: string;
}

export default class Title extends React.PureComponent<Props> {
  render() {
    const { size, children } = this.props;
    const className = classNames(styles.Title, styles[`Title-${size}`]);

    const Component = this.getTag();

    return <Component className={className}>{children}</Component>;
  }

  private getTag() {
    const { size } = this.props;

    switch (size) {
      case 'primary':
        return 'h1';
      case 'secondary':
        return 'h2';
    }
  }
}
