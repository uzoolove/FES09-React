import { useState } from "react";
import PropTypes from 'prop-types';

Child.propTypes = {
  level: PropTypes.number
};

function Child({ level }){
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + level);
  }

  return (
    <>
      <div>
        클릭 횟수 X { level }: { count }
        <button onClick={ increase }>클릭</button>
      </div>
    </>
  );
}

function Parent(){
  return(
    <div>
      <h1>클래스 컴포넌트 - 함수 컴포넌트와 같이 사용</h1>
      <Child level={1} />
      <Child level={5} />
    </div>
  );
}

export default Parent;