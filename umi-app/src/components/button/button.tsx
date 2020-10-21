import React, { Component, EventHandler } from 'react';

import './button.less';

interface ButtonProps {
  type?: 'primary' | 'success' | 'info' | 'default' | undefined;
  text?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Prifix: string = 'w-btn ';

export default class WButton extends React.Component<ButtonProps> {
  render() {
    let { onClick, children, type } = this.props;
    return (
      <span className={Prifix + type} onClick={onClick}>
        {children}
      </span>
    );
  }
}
