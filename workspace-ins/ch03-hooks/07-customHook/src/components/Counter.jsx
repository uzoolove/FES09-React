import { useRef } from "react";
import Button from "./Button";
import PropTypes from 'prop-types';
import useCounter from "../hooks/useCounter.mjs";

Counter.propTypes = {
  children: PropTypes.node
};

function Counter({ children=0 }) {
  const num = useRef(1);
  const { count, up, down, reset } = useCounter(children);

  const handleDown = () => {
    down(num.current);
  };
  const handleUp = () => {
    up(num.current);
  };
  const handleReset = () => {
    reset(0);
  };

  return(
    <div id="counter">
      <Button color="red" onClick={ handleDown }>-</Button>
      <Button onClick={ () => handleReset() }>{ children }</Button>
      <Button color="blue" onClick={ handleUp }>+</Button>
      <input type="number" style={{ width: '40px' }} defaultValue="1"
        onChange={e => num.current = Number(e.target.value) } />
      <span>{ count }</span>
    </div>
  );
}

export default Counter;