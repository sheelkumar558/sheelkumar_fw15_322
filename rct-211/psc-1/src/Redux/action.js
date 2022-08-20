import * as types from "./actionTypes";

export const getTodoListsRequest = () => {
  return { type: types.GET_TODO_LISTS_REQUEST };
};

export const getTodoListsSuccess = (payload) => {
  return { type: types.GET_TODO_LISTS_SUCCESS,payload };
};

export const getTodoListsFailure = () => {
  return { type: types.ADD_TODO_FAILURE };
};

export const addTodoListsRequest = () => {
  return { type: types.ADD_TODO_REQUEST };
};

export const addTodoListsSuccess = (payload) => {
  return { type: types.ADD_TODO_SUCCESS,payload };
};

export const addTodoListsFailure = () => {
  return { type: types.ADD_TODO_FAILURE };
};


export const toggleTodoListsRequest = () => {
  return { type: types.TOGGLE_TODO_REQUEST };
};

export const toggleListsSuccess = (payload) => {
  return { type: types.TOGGLE_TODO_SUCCESS,payload };
};

export const toggleListsFailure = () => {
  return { type: types.TOGGLE_TODO_FAILURE };
};











