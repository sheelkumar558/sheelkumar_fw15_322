import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useParams } from "react-router-dom";
import { toggleListsFailure, toggleTodoListsRequest } from "../Redux/action";
const SingleTodos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [currentTodo,setCurrentTodo ] = useState(() => {});
  const toggleStatus=(id,newStatus)=>{
    dispatch(toggleTodoListsRequest());
    axios.patch(`/todos/${id}`,{status : newStatus})
    .then((r)=> dispatch(toggleTodoListsRequest(r.data)))
    .then((e)=>dispatch(toggleListsFailure(e)))
  }
useEffect(()=>{
    let currentTodo = todos.find((item) => item.id === Number(id));
    currentTodo && setCurrentTodo(currentTodo);     
},[todos,id]);
console.log(todos);
  return (
    <div>
      <h2>SingleTodos</h2>
      {currentTodo?.title} {currentTodo?.status ? "True" : "false"}
      <button onClick={() => toggleStatus(currentTodo.id, !currentTodo.status)}>
        Toggle
      </button>
    </div>
  );
};

export default SingleTodos;
