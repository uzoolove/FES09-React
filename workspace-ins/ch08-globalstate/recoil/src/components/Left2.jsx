import Left3 from '@components/Left3';
import { countStateKor } from '@recoil/selectors.mjs';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

function Left2() {
  useEffect(()=>{
    console.log('### Left2 렌더링.');
  });

  const countKor = useRecoilValue(countStateKor);

  return (
    <div>
      <h1>Left2 : { countKor }</h1>
      <Left3 />
    </div>
  );
}

export default Left2;