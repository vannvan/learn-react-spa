import React, { Component } from 'react';
import { Button, Radio, Icon } from 'antd';

class Antd extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
          size:'large'
      }
  }
  handleSizeChange = e => {
    this.setState({ size: e.target.value })
  }

  render() {
    const { size } = this.state;
    return (
      <div>
        <Radio.Group value={size} onChange={this.handleSizeChange}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <br/>
        <Button type="primary">Button</Button>
        <Button type="primary" shape="circle" icon="download" size={size} />
        <Button type="primary" icon="download" size={size}>
          Download
        </Button>
      </div>
    )
  }
}

export default Antd
