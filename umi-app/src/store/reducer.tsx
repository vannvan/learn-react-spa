import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './actionTypes';
export interface stateType {
  inputValue: string;
  list: Array<object>;
}

export interface actionType {
  type: string;
  inputValue?: string;
  value?: {
    title: string;
    time: number;
  };
  index?: number;
}
const defaultState: stateType = {
  inputValue: 'Write something',
  list: [
    { time: 1, title: '吃饭' },
    { time: 2, title: '睡觉' },
    { time: 3, title: '打豆豆' },
  ],
};
export default (state = defaultState, action: actionType) => {
  console.log('action:', action);
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case CHANGE_INPUT:
      newState.inputValue = action.inputValue;
      return newState;
      break;
    case ADD_ITEM:
      newState.list.push(action.value);
      return newState;
      break;
    case DELETE_ITEM:
      newState.list.splice(action.index, 1);
      return newState;
      break;
  }
  return state;
};
