import useCounterStore from '@zustand/counter.mjs';
import { useEffect } from 'react';

function Left3() {
  useEffect(()=>{
    console.log('#### Left3 렌더링.');
  });

  const { count } = useCounterStore();

  return (
    <div>
      <h1>Left3 : { count }</h1>
    </div>
  );
}

export default Left3;