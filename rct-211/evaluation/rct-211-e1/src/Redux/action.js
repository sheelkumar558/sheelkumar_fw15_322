//Create ActionCreator functions here

import { GET_SHOES_FAILURE, GET_SHOES_REQUEST, GET_SHOES_SUCCESS, UPDATE_SHOE_COUNT_FAILURE, UPDATE_SHOE_COUNT_REQUEST, UPDATE_SHOE_COUNT_SUCCESS } from "./actionTypes"

export const getShoesFailure=()=>{
    return {type:GET_SHOES_FAILURE}
}
export const getShoesRequest=()=>{
    return {type:GET_SHOES_REQUEST}
}
export const getShoesSuccess=(payload)=>{
    return {type:GET_SHOES_SUCCESS,payload}
}

export const shoeCounteRequeste=()=>{
    return {type:UPDATE_SHOE_COUNT_REQUEST}
}
export const shoeCounteFailour=()=>{
    return {type:UPDATE_SHOE_COUNT_FAILURE}
}
export const shoeCounteSuccess=(payload)=>{
    return {type:UPDATE_SHOE_COUNT_SUCCESS,payload}
}