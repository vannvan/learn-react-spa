interface stateType {
  inputValue: string;
  list: Array<object>;
}
const defaultState: stateType = {
  inputValue: 'Write something',
  list: [
    { time: 1, title: '吃饭' },
    { time: 2, title: '睡觉' },
    { time: 3, title: '打豆豆' },
  ],
};
export default (state = defaultState, action: any) => {
  return state;
};
