import React from 'react';
import { Table, Tag, Space, Input, Popconfirm, message } from 'antd';
import Operation from './operation';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text: String) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags: any) => (
      <>
        {tags.map((tag: any) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text: String, record: any) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <Popconfirm
          title={'Are you sure delete this data？'}
          onConfirm={confirm}
          onCancel={cancel}
          okText="Yes"
          cancelText="No"
        >
          <a>delete</a>
        </Popconfirm>
      </Space>
    ),
  },
];

function confirm() {
  message.info('Click on Yes');
}

function cancel() {
  message.info('Clicj on No');
}

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
export default () => {
  return (
    <>
      <Operation>
        <span className="op-item">
          <Input placeholder="input name" style={{ width: 150 }} />
        </span>
        <span className="op-item">
          <Input placeholder="input address" style={{ width: 180 }} />
        </span>
      </Operation>
      <Table columns={columns} dataSource={data} />
    </>
  );
};
