import { useState } from "react";
import Button from "./Button";
import Header from "./Header";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = (value: number) => {
    setCount(count + value);
  };

  return (
    <div>
      <Header >
        <div>Child counter Header</div>
        <div>Child counter Header</div>
        <div>Child counter Header</div>
      </Header>
      <Header label={`${count}`} />
      <Button label="add" handleClick={() => handleClick(1)} />
      <Button label="reduce" handleClick={() => handleClick(-1)} />
    </div>
  );
};

export default Counter;
