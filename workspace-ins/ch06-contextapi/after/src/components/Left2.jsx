import Left3 from '@components/Left3';
import CounterContext from '@context/CounterContext';
import { useContext, useEffect } from 'react';

function Left2() {
  useEffect(()=>{
    console.log('### Left2 렌더링.');
  });

  const { state: { count } } = useContext(CounterContext);

  return (
    <div>
      <h1>Left2 : { count }</h1>
      <Left3 />
    </div>
  );
}

export default Left2;