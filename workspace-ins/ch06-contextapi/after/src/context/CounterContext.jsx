import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

CounterProvider.propTypes = {
  children: PropTypes.element
};

// 1. 컨텍스트 컴포넌트 생성
const CounterContext = createContext();

// 3. Provider 작성
export function CounterProvider({ children }){
  // 4. 상태와 상태를 관리하는 함수 정의
  const [count, setCount] = useState(10);

  const countUp = function(step){
    setCount(count + step);
  };

  const values = {
    state: { count },
    actions: { countUp }
  };

  // 5. 컨텍스트 컴포넌트의 Provider로 자식 컴포넌트를 감싸서 리턴
  // value 속성에 전달한 컨텍스를 지정
  return (
    <CounterContext.Provider value={ values }>
      { children }
    </CounterContext.Provider>
  );
}

// 2. 컨텍스트 컴포넌트 export
export default CounterContext;