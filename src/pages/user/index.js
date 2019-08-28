import React, { Component } from 'react';
import TableList from './components/TableList'
import LoadingBox from '../../components/Loading'
import {API} from '@/api';
class User extends Component {
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
  renderTableTh() {
    const titleList = ['ID','姓名','年龄','性别']
    return titleList.map(el =>
      <th key={el}>{el}</th>
    )
  }
  render() {
      return (
        <div>
          <table className="table border">
            <thead>
              <tr>
                {this.renderTableTh()}
              </tr>
            </thead>
          <tbody>
             <TableList users={this.state.users} />
          </tbody>
          </table>
          <LoadingBox value={this.state.isLoaded} />
        </div>

      )
  }
}

export default User
