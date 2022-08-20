//Create ActionCreator functions here
import axios from "axios";
import * as types from "./actionTypes";

export const getShoes = (params) => (dispatch) => {
  dispatch({ type: types.GET_SHOES_DATA_REQUEST });
  axios
    .get("/shoes", params)
    .then((r) =>
      dispatch({ type: types.GET_SHOES_DATA_SUCCESS, payload: r.data })
    )
    .then((e) => dispatch({ type: types.GET_SHOES_DATA_FAILURE }));
};

export const updateShoes = (payload) => (dispatch) => {
    axios.patch(`/shoes/${payload.id}`, payload);
  };