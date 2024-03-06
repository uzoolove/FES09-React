import { useState } from "react";

function Counter(){
  const [number, setNumber] = useState(0);
  return (
    <>
      <h1>{ number }</h1>
      <button onClick={ () => {
        // setNumber(number + 1);  // 0 + 1
        // setNumber(number + 1);  // 0 + 1
        // setNumber(number + 1);  // 0 + 1

        // setNumber(number => number + 1);  // 0 + 1
        // setNumber(number => number + 1);  // 1 + 1
        // setNumber(number => number + 1);  // 2 + 1

        setNumber(number + 3);  // 0 + 3
        // alert(number);
        setTimeout(() => {
          alert(number);
        }, 3000);

      } }>+3</button>
    </>
  );
}

export default Counter;