import React from 'react';
import TodoForm from './toto-form';
import TodoShow from './todo-show';
import axios from 'axios';

import store from '../../store';
import {
  changeInputAction,
  addAction,
  deleteAction,
  getListAction,
} from '../../store/actionCreators';

export default class TodoList extends React.Component<{}, any> {
  constructor(props: any) {
    super(props);
    this.state = store.getState();
    this.addTodoItem = this.addTodoItem.bind(this);
    store.subscribe(this.storeChange);
  }
  changeInputValue(e: any) {
    const action = changeInputAction(e.target.value);
    store.dispatch(action);
  }
  storeChange = () => {
    this.setState(store.getState());
  };
  addTodoItem() {
    const action = addAction(this.state.inputValue);
    store.dispatch(action);
  }
  handleDelete(index: number) {
    const action = deleteAction(index);
    store.dispatch(action);
  }

  componentDidMount() {
    axios
      .get(
        'https://www.easy-mock.com/mock/5fa4043f60b9b97b2c399398/api/todolist',
      )
      .then(res => {
        const data = res.data.data;
        const action = getListAction(data);
        store.dispatch(action);
      });
  }

  render() {
    return (
      <div style={{ display: 'flex' }}>
        <TodoForm
          inputValue={this.state.inputValue}
          changeInputValue={this.changeInputValue}
          addTodoItem={this.addTodoItem}
        />
        <TodoShow list={this.state.list} handleDelete={this.handleDelete} />
      </div>
    );
  }
}
