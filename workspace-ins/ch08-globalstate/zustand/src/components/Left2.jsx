import Left3 from '@components/Left3';
import useCounterStore from '@zustand/counter.mjs';
import { useEffect } from 'react';

function Left2() {
  useEffect(()=>{
    console.log('### Left2 렌더링.');
  });

  const { count } = useCounterStore();

  return (
    <div>
      <h1>Left2 : { count }</h1>
      <Left3 />
    </div>
  );
}

export default Left2;