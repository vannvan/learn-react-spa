import React, { ReactNode } from 'react';
import { List } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';

export interface propsType {
  list: Array<object>;
  handleDelete: (index: number) => void;
}
export default (props: propsType) => {
  const { list, handleDelete } = props;

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
