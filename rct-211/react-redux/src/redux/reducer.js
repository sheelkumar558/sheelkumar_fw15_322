import * as types from "./actonTypes";

const initState = {
  count: 0,
  todos: [],
  isLoding: false,
  isError: false,
};

export const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.ADD_COUNT:
      return { ...state, count: state.count + payload };

    case types.SUB_COUNT:
      return { ...state, count: state.count - payload };
    case types.GET_TODO_REQUEST:
      return { ...state, isLoding: true };
    case types.GET_TODO_SUCCESS:
      return {
        ...state,
        todos: [...state.todos, ...payload],
        isLoding: false,
        isError: false,
      };
    case type.GET_TODO_FAILURE:
      return { ...state, isLoding: false, isError: payload };
    default:
      return state;
  }
};
