import { useEffect, useState } from 'react';
import Left1 from '@components/Left1';
import Right1 from '@components/Right1';
import { CounterProvider } from '@context/CounterContext';

function App() {


  useEffect(()=>{
    console.log('# App 렌더링.');
  });

  return (
    <div id="container">
      <h1>App - with Context</h1>
      <CounterProvider>
        <div id="grid">
          <Left1 />
          <Right1 />
        </div>
      </CounterProvider>
    </div>
  );
}

export default App;