import * as types from "./actionTypes";
const initialState = {
  data: { isAuth: false, token: "" },
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: payload,
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        token: "",
        isError: true,
      };
    default:
      return state;
  }
};
