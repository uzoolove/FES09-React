import Left3 from '@components/Left3';
import { useEffect } from 'react';

function Left2() {
  useEffect(()=>{
    console.log('### Left2 렌더링.');
  });
  return (
    <div>
      <h1>Left2</h1>
      <Left3 />
    </div>
  );
}

export default Left2;