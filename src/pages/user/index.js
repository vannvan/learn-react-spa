import React, { Component } from 'react';
import TableList from './components/TableList'
import LoadingBox from '../../components/loading'
import axios from 'axios';

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
    axios.get('https://5b5e71c98e9f160014b88cc9.mockapi.io/api/v1/lists')
    .then(function (response) {
      _this.setState({
        users:response.data,
        isLoaded:true
      });
    })
    .catch(function (error) {
      console.log(error);
      _this.setState({
        isLoaded:false,
        error:error
      })
    })
  }
  render() {
      return (
        <div>
          <table className="table border">
            <thead>
              <tr>
                <th className="text-center">ID</th>
                <th className="text-center">姓名</th>
                <th className="text-center">年龄</th>
                <th className="text-center">性别</th>
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
