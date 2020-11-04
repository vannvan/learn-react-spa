import React from 'react';
import { Input, Button } from 'antd';

export interface propsType {
  inputValue: string;
  changeInputValue: React.FormEventHandler;
  addTodoItem: React.MouseEventHandler;
}

export default (props: propsType) => {
  return (
    <div>
      <h1>待办清单</h1>
      <div>
        <div style={{ width: 500, marginRight: 15 }}>
          <Input
            style={{ marginBottom: 15 }}
            placeholder={props.inputValue}
            onChange={props.changeInputValue}
          />
          <Button type="primary" onClick={props.addTodoItem}>
            新增
          </Button>
        </div>
      </div>
    </div>
  );
};
