import { countState } from '@recoil/atoms.mjs';
import { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

function Right3() {
  useEffect(()=>{
    console.log('#### Right3 렌더링.');
  });

  // getter/setter 모두 사용(구독)
  // const [count, setCount] = useRecoilState(countState);

  const setCount = useSetRecoilState(countState);

  const countUp = function(step){
    // setCount(count + step);
    setCount(count => count + step);
  };

  /*
  let count = 5;
  function setCount(state){
    if(typeof state === 'function'){
      count = state(count);
    }else{
      count = state;
    }
  }
  */

  return (
    <div>
      <h1>Right3</h1>
      <button onClick={ () => countUp(1) }>+</button>
    </div>
  );
}

export default Right3;