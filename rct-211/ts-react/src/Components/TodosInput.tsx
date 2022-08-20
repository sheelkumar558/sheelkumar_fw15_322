import React, { useState } from "react";
interface ITodosInputProps {
  onClick: (value: string) => void;
}

const TodosInput = ({ onClick }: ITodosInputProps) => {
  const [text, setText] = useState<string>("");
  const chengeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };
  const handleAdd = () => {
    onClick(text);
  };
  //console.log(text);

  return (
    <div>
      <input type={"text"} value={text} onChange={chengeHandler} />
      <br />
      <button onClick={handleAdd}>ADD</button>
    </div>
  );
};

export default TodosInput;
