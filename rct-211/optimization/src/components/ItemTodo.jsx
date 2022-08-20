import React from "react";

const ItemTodo = ({ status, id, title, toggleStatus, handleDelete }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "1rm 0" }}>
      <div>{title}</div>
      <div style={{ margin: "0 1rem" }}>{status ? "True" : "False"}</div>
      <button onClick={() => toggleStatus(id)}>Toggle</button>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
};

export default ItemTodo;
