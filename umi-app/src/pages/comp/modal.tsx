import React from 'react';

import { Modal, Button, message, Space } from 'antd';

import WButton from '@/components/button/button';

//非泛型
function createArray1(length: number, value: any): Array<any> {
  let result: any = [];
  result = Array.from({ length: length }, () => {
    return value;
  });
  return result;
}

//泛型

function createArray<T>(length: number, value: T): Array<T> {
  return Array.from({ length: length }, () => value);
}

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
        <Space>
          <Button type="primary" onClick={this.showModal}>
            Open Modal
          </Button>
          <WButton onClick={this.showModal} type={'primary'}>
            按钮
          </WButton>
          <WButton onClick={this.showModal} type={'success'}>
            按钮
          </WButton>
        </Space>

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
