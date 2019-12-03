import React, { Component } from 'react';
import { Table, Divider, Tag } from 'antd';
import {API} from '@/api';


const columns = [
  {
    title:"ID",
    dataIndex:'id',
    key:"id"
  },
  {
    title:'姓名',
    dataIndex:'name',
    key:"name"
  },
  {
    title:"年龄",
    dataIndex:'age',
    key:'age'
  },
  {
    title:'性别',
    dataIndex:'sex',
    key:'sex'
  },
  {
    title:'操作',
    ket:'action',
    render: (text, record) => (
      <span>
        <a>Invite {record.name}</a>
        <Divider type="vertical" />
        <a>Delete</a>
      </span>
    ),
  }
]
class antdTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoaded:false
    }
  }
  componentDidMount() {
    const _this=this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
    API.fetchUserInfo({}).then(res =>{
      _this.setState({
          users:res.data,
          isLoaded:true
      });
    })
  }

  render() {
    return (
      <Table rowKey="id" dataSource={this.state.users} columns={columns} />
    )
  }
}

export default antdTable
