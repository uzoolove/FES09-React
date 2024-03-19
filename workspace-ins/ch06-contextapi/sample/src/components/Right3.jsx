import { useEffect } from 'react';

function Right3() {
  useEffect(()=>{
    console.log('#### Right3 렌더링.');
  });
  return (
    <div>
      <h1>Right3</h1>
      <button onClick={ () => {} }>+</button>
    </div>
  );
}

export default Right3;