import useCounterStore from '@zustand/counter.mjs';
import { useEffect } from 'react';

function Right3() {
  useEffect(()=>{
    console.log('#### Right3 렌더링.');
  });

  // const { countUp, countDown } = useCounterStore();

  // 렌더링 최적화를 위해서 수동으로 필요한 속성만 반환받아서 사용
  const countUp = useCounterStore(state => state.countUp);
  const countDown = useCounterStore(state => state.countDown);

  return (
    <div>
      <h1>Right3</h1>
      <button onClick={ () => countDown(2) }>-</button>
      <button onClick={ () => countUp(1) }>+</button>
    </div>
  );
}

export default Right3;