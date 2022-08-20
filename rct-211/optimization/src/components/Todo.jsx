import React from "react";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import ItemTodo from "./ItemTodo";
import { useCallback } from "react";
const initialState = [
  { id: 1, status: false, title: "Task1" },
  { id: 2, status: false, title: "Task2" },
  { id: 3, status: false, title: "Task3" },
];
const Todo = () => {
  const [todos, setTodos] = useState(initialState);
  const [currentTodo, setCurrentTodo] = useState("");
  const todoHandler = (e) => {
    setCurrentTodo(e.target.value);
  };
  const handlerAddTask = () => {
    const payload = { id: uuid(), status: false, title: currentTodo };
    setTodos([...todos, payload]);
    setCurrentTodo("");
  };

  const handleToggle = useCallback(
    (id) => {
      let newTodoList = todos.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      );
      setTodos(newTodoList);
    },
    [todos]
  );

  const handleDelete = useCallback(
    (id) => {
      let newTodoList = todos.filter((item) => item.id !== id);
      setTodos(newTodoList);
    },
    [todos]
  );

  return (
    <div>
      <h2>Todo</h2>
      <input type="text" value={currentTodo} onChange={todoHandler} />
      <button onClick={handlerAddTask}>ADD</button>
      {todos.length &&
        todos.map((e) => (
          <ItemTodo
            key={e.id}
            {...e}
            toggleStatus={handleToggle}
            handleDelete={handleDelete}
          />
        ))}
    </div>
  );
};

export default Todo;
