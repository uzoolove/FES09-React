import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Left3() {
  // const count = useSelector(state => state.count);
  // redux toolkit
  const count = useSelector(state => state.counterStore.count);

  useEffect(()=>{
    console.log('#### Left3 렌더링.');
  });
  return (
    <div>
      <h1>Left3 : { count }</h1>
    </div>
  );
}

export default Left3;