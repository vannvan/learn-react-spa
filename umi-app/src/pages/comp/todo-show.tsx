import React from 'react';
import { List } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';

export interface PropsType {
  list: Array<object>;
  handleDelete: (index: number, item?: object) => void;
}
export default (props: PropsType) => {
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
