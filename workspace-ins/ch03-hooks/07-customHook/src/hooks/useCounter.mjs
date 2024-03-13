import { useReducer } from "react";

function useCounter(initValue){
  const [count, countDispatch] = useReducer(counterReducer, initValue);

  const handleDown = (num) => {
    countDispatch({ type: 'DOWN', value: num });
  };
  const handleUp = (num) => {
    countDispatch({ type: 'UP', value: num });
  };
  const handleReset = (num) => {
    countDispatch({ type: 'RESET', value: num });
  };

  return { count, down: handleDown, up: handleUp, reset: handleReset };
}

function counterReducer(state, action){
  let newState;

  switch(action.type){
    case 'DOWN':
      newState = state - action.value;
      break;
    case 'UP':
      newState = state + action.value;
      break;
    case 'RESET':
      newState = action.value;
      break;
    default:
      newState = state;
  }

  return newState;
}

export default useCounter;