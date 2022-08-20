import * as types from "./actonTypes";

export const addCount = (payload) => {
  return { type: types.ADD_COUNT, payload };
};

export const subCount = (payload) => {
  return { type: types.SUB_COUNT, payload };
};

export const getTodoRequest = () => {
  return { type: types.GET_TODO_REQUEST };
};

export const getTodoSussess = (payload) => {
  return { type: types.GET_TODO_SUCCESS, payload };
};

export const getTodoFailure = (error) => {
  return { type: types.GET_TODO_FAILURE, payload: error };
};
