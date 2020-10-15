import { Button, Input, Form } from 'antd';
import React, { Component } from 'react';

const formWrap = {
  width: '50%',
};

export default class FormWrap extends Component {
  state = {
    username: '',
    password: null,
  };
  render() {
    return (
      <>
        <Form style={formWrap} labelCol={{ span: 3 }}>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input value={this.state.username} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'please input your pwassword' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Captcha"
            name="captcha"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </>
    );
  }
}
