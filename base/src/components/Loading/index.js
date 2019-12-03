import React, { Component } from 'react';

class LoadingBox extends Component {
  render() {
    let LoadingBoxStyle = {
      display:this.props.value?'none':'block'
    }
    return (
      <div className="loading-box" style={LoadingBoxStyle}>
        <div className="left"></div>
        <div className="right"></div>
        <div className="progress">加载中</div>
      </div>
    )
  }
}

export default LoadingBox
