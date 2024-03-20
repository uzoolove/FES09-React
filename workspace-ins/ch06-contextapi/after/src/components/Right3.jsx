import CounterContext from '@context/CounterContext';
import { useContext, useEffect } from 'react';

function Right3() {
  useEffect(()=>{
    console.log('#### Right3 렌더링.');
  });

  const { actions: { countUp } } = useContext(CounterContext);

  return (
    <div>
      <h1>Right3</h1>
      <button onClick={ () => countUp(1) }>+</button>
    </div>
  );
}

export default Right3;