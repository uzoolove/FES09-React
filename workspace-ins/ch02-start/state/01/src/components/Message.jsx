import { useState } from "react";

let count = 0;

function Message(){
  // 1. 메세지를 저장할 상태 생성(msg)
  const [msg, setMsg] = useState('');
  // 2. 입력 횟수를 저장할 상태 생성(count)
  // const [count, setCount] = useState(0);

  count++;

  const handleChange = e => {
    const inputMsg = e.target.value;

    // 3. 입력받은 메세지로 상태 수정(setMsg)
    setMsg(inputMsg);
    // 4. 증가시킨 입력 횟수로 상태 수정(setCount)
    // setCount(count + 1);
    
  };
  return (
    <div>
      <input type="text" onChange={ handleChange } />
      <br/>
      <span>입력 메세지: { msg }</span>
      <br/>
      <span>입력 횟수: { count }</span>
    </div>
  );
}

export default Message;