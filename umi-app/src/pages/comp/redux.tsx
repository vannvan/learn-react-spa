import React from 'react';
import { Input, Button, List } from 'antd';

import store from '@/store';

export default class TodoList extends React.Component {
  constructor(props: any) {
    super(props);
    console.log(store.getState());

    this.state = store.getState();
  }
  render() {
    return (
      <div>
        <h1>待办清单</h1>
        <div style={{ width: 500 }}>
          <Input
            style={{ marginBottom: 15 }}
            placeholder={this.state.inputValue}
          />
          <Button type="primary">新增</Button>
          <div style={{ marginTop: 10 }}>
            <List
              bordered
              dataSource={this.state.list}
              renderItem={item => <List.Item>{item.title}</List.Item>}
            ></List>
          </div>
        </div>
      </div>
    );
  }
}
