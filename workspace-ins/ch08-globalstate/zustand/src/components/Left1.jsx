import Left2 from '@components/Left2';
import useCounterStore from '@zustand/counter.mjs';
import { useEffect } from 'react';

function Left1() {
  useEffect(()=>{
    console.log('## Left1 렌더링.');
  });

  const { count } = useCounterStore();

  return (
    <div>
      <h1>Left1 : { count }</h1>
      <Left2 />
    </div>
  );
}

export default Left1;