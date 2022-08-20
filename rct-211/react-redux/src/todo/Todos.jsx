import axios from "axios";
import React from "react";
import TodoInput from "./TodoInput";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  getTodoFailure,
  getTodoRequest,
  getTodoSussess,
} from "../redux/action";

const Todos = () => {
  const { todos,isError,isLoading } = useSelector((store) => {
    return {
         todos: store.todos ,
         isLoading:store.isLoading,
         isError:store.isError,
        };
  },shallowEqual);
  const dispatch = useDispatch();
  //   const isLoding = useSelector(store=>store.isLoding);
  //   const isError = useSelector(store=>store.isError);
  //   const store = useSelector(store=> store);
  const getTodos = () => {
    const requestAction = getTodoRequest();
    dispatch(requestAction);
    return axios
      .get("http://localhost:8080/todos")
      .then((res) => {
        const successAction = getTodoSussess(res.data);
        dispatch(successAction);
      })
      .catch((err) => {
        const errorAction = getTodoFailure(err);
        dispatch(errorAction);
      });
  };

  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div>
      <h1>Todo App</h1>
      <TodoInput />
      {todos.length &&
        todos.map((item) => {
          return <div key={item.id}>{item.title}</div>;
        })}
    </div>
  );
};

export default Todos;
