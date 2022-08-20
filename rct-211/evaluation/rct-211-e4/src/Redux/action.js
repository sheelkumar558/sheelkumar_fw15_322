
import * as types from "./actionTypes";

export const getCountriesFail =()=>{
  return {type:types.GET_COUNTRIES_FAILURE};
}
export const getCountriesSucc =(payload)=>{
  return {type:types.GET_COUNTRIES_SUCCESS,payload};
}
export const getCountriesREQ =()=>{
  return {type:types.GET_COUNTRIES_REQUEST};
}

const CountriesFail=()=>{
  return {type:types.UPDATE_COUNTRY_REQUEST};
}

const CountriesSucc=(payload)=>{
  return {type:types.UPDATE_COUNTRY_SUCCESS,payload};
}
const CountriesReq=()=>{
  return {type:types.UPDATE_COUNTRY_FAILURE};
}
