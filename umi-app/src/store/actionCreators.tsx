import { CHANGE_INPUT, DELETE_ITEM, ADD_ITEM } from './actionTypes';

export const changeInputAction = (value: string) => {
  return {
    type: CHANGE_INPUT,
    inputValue: value,
  };
};

export const addAction = (value: string) => {
  return {
    type: ADD_ITEM,
    value: {
      title: value,
      time: 4,
    },
  };
};

export const deleteAction = (index: number) => {
  return {
    type: DELETE_ITEM,
    index,
  };
};
