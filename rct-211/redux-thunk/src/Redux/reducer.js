import * as types from "./actionTypes";
const initialState = {
  todos: [],
  isLoding: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_TODOS_REQUEST:
      return {
        ...state,
        isLoding: true,
        isError: false,
      };
    case types.GET_TODOS_SUCCESS:
      return {
        ...state,
        todos: payload,
        isLoding: false,
        isError: false,
      };
    case types.GET_TODOS_FAILURE:
      return {
        ...state,
        isLoding: false,
        isError: true,
      };
    case types.ADD_TODOS_REQUEST:
      return {
        ...state,
        isLoding: true,
        isError: false,
      };
    case types.ADD_TODOS_SUCCESS:
      return {
        ...state,

        isLoding: false,
        isError: false,
      };
    case types.ADD_TODOS_FAILURE:
      return {
        ...state,
        isLoding: false,
        isError: true,
      };
    default:
      return state;
  }
};
