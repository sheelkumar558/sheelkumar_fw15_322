import axios from "axios";
import { useDispatch } from "react-redux";

import React, { useState } from "react";
import {
  addTodoListsFailure,
  addTodoListsRequest,
  addTodoListsSuccess,
} from "../Redux/action";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  const addTodo = (payload) => {
    dispatch(addTodoListsRequest());
    axios
      .post("/todos", payload)
      .then((r) => dispatch(addTodoListsSuccess(r.data)))
      .catch((e) => dispatch(addTodoListsFailure(e)));
  };
  const handleAdd = () => {
    if (todo) {
      const payload = { title: todo, status: false };
      addTodo(payload);
      setTodo("");
    }
  };
  return (
    <div>
      <h1>AddTodo</h1>
      <input
        type="text"
        value={todo}
        placeholder="Add todo here..."
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddTodo;
