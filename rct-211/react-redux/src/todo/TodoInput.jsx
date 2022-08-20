import React from "react";
import { useState } from "react";

const TodoInput = () => {
  const [text, setText] = useState("");

  const handleAdd = () => {};
  return (
    <div>
      <input
        type="text"
        placeholder="add some task"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TodoInput;
