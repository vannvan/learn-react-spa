import React, { Component } from 'react';
import { Button, Radio, Icon } from 'antd';

class Antd extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
          size:'large',
          visible:true,
          type:'left'
      }
  }
  handleSizeChange = e => {
    this.setState({ size: e.target.value })
  }

  handleToggle = e => {
    this.setState({visible:!this.state.visible})
  }

  render() {
    const { size } = this.state;
    const isPC = false
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
        <Button type="primary" onClick={this.handleToggle} size={size}>
          切换
        </Button>
        <Icon type={this.state.visible?'left':'right'} onClick={this.handleToggle}/>
        {
          this.state.visible?(
            <div>这一层是你下面列表的div</div>
          ):(null)
        }
      </div>
    )
  }
}

export default Antd
