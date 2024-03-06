
function Message(){
  // TODO: 1. 메세지를 저장할 상태 생성(msg)

  // TODO: 2. 입력 횟수를 저장할 상태 생성(count)



  const handleChange = e => {
    const inputMsg = e.target.value;

    // TODO: 3. 입력받은 메세지로 상태 수정(setMsg)

    // TODO: 4. 증가시킨 입력 횟수로 상태 수정(setCount)

  };
  return (
    <div>
      <input type="text" />
      <br/>
      <span>입력 메세지: { msg }</span>
      <br/>
      <span>입력 횟수: { count }</span>
    </div>
  );
}

export default Message;