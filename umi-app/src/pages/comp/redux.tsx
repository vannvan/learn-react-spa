import React from 'react';
import TodoForm from './toto-form';
import TodoShow from './todo-show';

import store from '../../store';
import { changeInputAction, addAction } from '../../store/actionCreators';

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

  render() {
    return (
      <div style={{ display: 'flex' }}>
        <TodoForm
          inputValue={this.state.inputValue}
          changeInputValue={this.changeInputValue}
          addTodoItem={this.addTodoItem}
        />
        <TodoShow list={this.state.list} />
      </div>
    );
  }
}
