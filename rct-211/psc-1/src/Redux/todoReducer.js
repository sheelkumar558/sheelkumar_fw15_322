import * as types from "./actionTypes";

const initialState = {
  todos: [],
  isLoding: false,
  isError: false,
};

export const todoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_TODO_LISTS_REQUEST:
      return {
        ...state,
        isLoding: true,
        isError: false,
      };
    case types.GET_TODO_LISTS_SUCCESS:
      return {
        ...state,
        todos: payload,
        isLoding: false,
        isError: false,
      };
    case types.GET_TODO_LISTS_FAILURE:
      return {
        ...state,
        isLoding: false,
        isError: true,
      };

    case types.ADD_TODO_REQUEST:
      return {
        ...state,
        isLoding: true,
        isError: false,
      };
    case types.ADD_TODO_SUCCESS:
      let newTodos = [...state.todos, payload];
      return {
        ...state,
        todos: newTodos,
        isLoding: false,
        isError: false,
      };
    case types.ADD_TODO_FAILURE:
      return {
        ...state,
        isLoding: false,
        isError: true,
      };
    case types.TOGGLE_TODO_REQUEST:
      return {
        ...state,
        isLoding: true,
        isError: false,
      };
    case types.TOGGLE_TODO_SUCCESS:
      let newToggleTodos = state.todos.map((item) => 
        item.id === payload.id ? payload : item
      );
      return {
        ...state,
        todos: newTodos,
        isLoding: false,
        isError: false,
      };
    case types.TOGGLE_TODO_FAILURE:
      return {
        ...state,
        isLoding: false,
        isError: true,
      };

    default:
      return state;
  }
};
