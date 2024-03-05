import { useState } from "react";

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
      <button type="button" onClick={ handleDown }>-</button>
      <button type="button" onClick={ () => handleReset(event) }>0</button>
      <button type="button" onClick={ handleUp }>+</button>
      <span>{count}</span>
    </div>
  );
}

export default Counter;