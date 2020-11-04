import React, { ReactNode } from 'react';
import { List } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import store from '../../store';
import { deleteAction } from '../../store/actionCreators';

export interface propsType {
  list: [];
}
const handleDelete = (index: number) => {
  const action = deleteAction(index);
  store.dispatch(action);
};
export default (props: propsType) => {
  const { list } = props;

  return (
    <div style={{ width: 500 }}>
      <List
        bordered
        dataSource={list}
        header={'代办事项'}
        renderItem={(item: any, index: number) => (
          <List.Item>
            {item.title}
            <CloseCircleOutlined
              onClick={() => handleDelete(index)}
              style={{ float: 'right', cursor: 'pointer' }}
            />
          </List.Item>
        )}
      ></List>
    </div>
  );
};
