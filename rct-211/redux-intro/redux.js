// function add(a,b){
//     a=1;
//     return a+b;
// }
// console.log(add(2,3))

import { legacy_createStore as createStore } from "redux";
const reducer = (store, action) => {
  if (action.type === "ADD_COUNT") {
    return { ...store, counter: store.counter + action.payload };
  }
  //   if (action.type === "TOGGLE_THEME") {
  //     return { ...state, theme: store.theme === "light" ? "dark" : "light" };
  //   }
  return store;
};

const initState = {
  counter: 0,
  todos: [],
  theme: "dark",
};

const store = createStore(reducer, initState);
console.log("store", store.getState());
store.dispatch({type:"ADD_COUNT",payload: 3});
 console.log("after",store.getState());





//  const obj1={
//   n:"a",
//   p:"b"
// }
// let obj2=obj1;
// obj1.n='b';
// let obj3 = {...obj2,p:'c'};
// console.log(obj3)