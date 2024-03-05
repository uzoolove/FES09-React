import { useState } from "react";
import Button from "./Button";

function Counter() {
  const [count, setCount] = useState(0);

  const handleDown = () => {
    setCount(count - 1);
  };
  const handleUp = () => {
    setCount(count + 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  return(
    <div id="counter">
      <Button color="red" onClick={ handleDown }>-</Button>
      <Button onClick={ () => handleReset() }>0</Button>
      <Button color="blue" onClick={ handleUp }>+</Button>
      <span>{count}</span>
    </div>
  );
}

export default Counter;