import { useState } from "react";

function App(){
  const [position, setPosition] = useState({
    x: 0, 
    y: 0
  });
  return (
    <>
      {/* <h1>상태 관리 - 객체</h1> */}
      <div
        onPointerMove={e => {
          // position.x = e.clientX;
          // position.y = e.clientY;

          const newPosition = {
            x: e.clientX,
            y: e.clientY
          };

          setPosition(newPosition);
        }}
        style={{
          position: 'relative',
          width: '100vw',
          height: '100vh',
        }}>
        <div style={{
          position: 'absolute',
          backgroundColor: 'red',
          borderRadius: '50%',
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }} />
      </div>
    </>
  );
}

export default App;