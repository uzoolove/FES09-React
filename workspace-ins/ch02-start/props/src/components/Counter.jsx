import { useState } from "react";
import Button from "./Button";

function Counter({ children=0 }) {
  const [count, setCount] = useState(Number(children));

  const handleDown = () => {
    setCount(count - 1);
  };
  const handleUp = () => {
    setCount(count + 1);
  };
  const handleReset = () => {
    setCount(Number(children));
  };
  return(
    <div id="counter">
      <Button color="red" onClick={ handleDown }>-</Button>
      <Button onClick={ () => handleReset() }>{ children }</Button>
      <Button color="blue" onClick={ handleUp }>+</Button>
      <span>{count}</span>
    </div>
  );
}

export default Counter;