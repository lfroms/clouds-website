import React from 'react';
import classNames from 'classnames';

import styles from './Text.module.scss';

type Type = 'paragraph' | 'menu' | 'caption' | 'footnote';

interface Props {
  type: Type;
  children: React.ReactNode;
}

export default class Text extends React.PureComponent<Props> {
  render() {
    const { type, children } = this.props;
    const className = classNames(styles.Text, styles[`Text-${type}`]);

    const Component = this.getTag();

    return <Component className={className}>{children}</Component>;
  }

  private getTag() {
    const { type } = this.props;

    switch (type) {
      case 'paragraph':
        return 'p';
      case 'menu':
        return 'span';
      case 'caption':
        return 'p';
      case 'footnote':
        return 'span';
    }
  }
}
