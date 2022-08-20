import {
  GET_SHOES_FAILURE,
  GET_SHOES_REQUEST,
  GET_SHOES_SUCCESS,
} from "./actionTypes";

const initialState = {
  shoes: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SHOES_REQUEST:
      return {
         ...state,
          isLoading: true,
          isError: false };
    case GET_SHOES_SUCCESS:
      return { ...state,
         isLoading: false,
          isError: false,
           shoes: payload };
    case GET_SHOES_FAILURE:
      return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }
};
