import { useMemo, useState } from "react";

// 지정한 수가 소수인지 여부를 반환
var isPrime = function(num){
  console.time('소요 시간');
  // 소수 판별 코드
  let prime = true;

  for(let i=2; i<=num/2; i++){
    if(num % i === 0){
      prime = false;
      break;
    }
  }

  if(num === 1){
    prime = false;
  }else if(num === 2){
    prime = true;
  }

  console.timeEnd('소요 시간');
  return prime;
};

function App(){
  const [name, setName] = useState('GD');
  const [num, setNum] = useState(1);

  // const result = isPrime(num);
  const result = useMemo(() => isPrime(num), [num]);

  return (
    <>
      <h1>useMemo Hook - 상태가 변경되지 않으면 함수를 호출하지 않고 메모이징된 결과값 사용</h1>
      <div>
        <input type="text" value={ name } onChange={ e => setName(e.target.value) } />
        가 좋아하는 숫자: 
        <input type="number" min="1" max="1000000007" value={ num } onChange={ e => setNum(e.target.value) } />
        <div>결과: { name }님 { num }은 소수가 { result ? <span style={{ color: 'blue' }}>맞습니다.</span> : <span style={{ color: 'red' }}>아닙니다.</span> } </div>
      </div>
    </>
  );
}

export default App;