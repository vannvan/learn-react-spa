import React, { Component } from 'react';

class TableList extends Component {
  render() {
    return (
      this.props.users.map((user,i)=>{
          return (
              <tr key={user.id} className="text-center">
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.sex}</td>
              </tr>
          )
      })
    )
  }
}

export default TableList
