import { useEffect, useState } from 'react';
import Left1 from '@components/Left1';
import Right1 from '@components/Right1';
import { RecoilRoot } from 'recoil';

function App() {
  
  useEffect(()=>{
    console.log('# App 렌더링.');
  });

  return (
    <RecoilRoot>
      <div id="container">
        <h1>App - Recoil</h1>
        <div id="grid">
          <Left1 />
          <Right1 />
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;