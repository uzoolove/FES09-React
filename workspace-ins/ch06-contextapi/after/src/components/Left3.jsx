import CounterContext from '@context/CounterContext';
import { useContext, useEffect } from 'react';

function Left3() {
  useEffect(()=>{
    console.log('#### Left3 렌더링.');
  });

  const { state: { count } } = useContext(CounterContext);

  return (
    <div>
      <h1>Left3 : { count }</h1>
    </div>
  );
}

export default Left3;