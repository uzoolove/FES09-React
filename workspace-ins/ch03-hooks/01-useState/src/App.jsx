import { useState } from "react";

function App(){
  const [msg, setMsg] = useState('');
  return (
    <div>
      <input type="text" value={msg} onChange={ e => setMsg(e.target.value) } />
      <br/>
      <span>입력 메세지: {msg}</span>
    </div>
  );
}

export default App;