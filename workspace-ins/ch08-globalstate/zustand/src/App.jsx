import { useEffect, useState } from 'react';
import Left1 from '@components/Left1';
import Right1 from '@components/Right1';

function App() {

  useEffect(()=>{
    console.log('# App 렌더링.');
  });

  return (
    <div id="container">
      <h1>App - Zustand</h1>
      <div id="grid">
        <Left1 />
        <Right1 />
      </div>
    </div>
  );
}

export default App;