import React, { Component,createElement } from 'react';
import config from './typeConfig';
import './index.scss'
export default  class Exception extends Component {
  static defaultProps = {
    backText: '返回首页',
    redirect: '/',
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      type,
      backText,
      linkElement = 'a',
      redirect,
      img,
      title,
      desc,
      actions

    } = this.props
    const pageType = type in config ? type : '404';

    return (
      <div className="exception-component">
        <div
          className="imgEle"
          style={{ backgroundImage: `url(${img || config[pageType].img})` }}
        />
        <div className="content">
          <h1>{title || config[pageType].title}</h1>
          <div className="desc">{desc || config[pageType].desc}</div>
          {/* <a to={redirect} href={redirect}>0000</a> */}
        </div>
        <div className="actions">
          {actions ||
            createElement(
              linkElement,
              {
                to: redirect,
                href: redirect,
              },
              <button type="primary">{backText}</button>
            )}
        </div>  
      </div>
    )
  }
}
