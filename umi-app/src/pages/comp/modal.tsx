import React from 'react';

import { Modal, Button, message } from 'antd';

export default class modalExample extends React.Component {
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    message.info('点击了OK');
    this.setState({
      visible: false,
    });
  };

  handleCancel = () => {
    console.log('点击了取消');
    this.setState({
      visible: false,
    });
  };
  render() {
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </>
    );
  }
}
