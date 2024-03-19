# 6장 컨텍스트 API
* 소스 코드(GitHub): <https://github.com/uzoolove/FES09-React/tree/main/workspace-ins/ch06-contextapi>
* 코드 실행(GitHub Page): <https://uzoolove.github.io/FES09-React/workspace-ins/index.html#06>

## 컨텍스트 API란?
* 컴포넌트 트리에서 부모 컴포넌트의 상태나 데이터를 자식 컴포넌트에 전달할 때 보통 props를 이용하는데 이 방법은 컴포넌트 트리가 깊을 경우 불편함
  - 컴포넌트 트리가 깊을 경우 상단의 데이터를 말단의 컴포넌트에게 전달하기 위해서 거쳐가는 중계 컴포넌트가 많아져서 코드양이 많아짐
  - prop 이름이 변경되거나 새로운 props를 추가하면 모든 중계 컴포넌트가 수정되어야 함
  - 데이터가 변경되면 중계 컴포넌트의 불필요한 리렌더링이 발생
* 컨텍스트 API를 사용하면 매번 자식에게 prop을 전달하지 않아도 컴포넌트에 필요한 데이터 전달이 가능

### 상태 끌어올리기
<img src="https://raw.githubusercontent.com/uzoolove/FES09-React/main/images/context-lifting.webp">
[그림 1. props]

<img src="https://raw.githubusercontent.com/uzoolove/FES09-React/main/images/context-lifting2.webp">
[그림 2. Context API]]

### prop drilling
<img src="https://raw.githubusercontent.com/uzoolove/FES09-React/main/images/context-propdrilling.webp">
[그림 3. props]

<img src="https://raw.githubusercontent.com/uzoolove/FES09-React/main/images/context-propdrilling2.webp">
[그림 4. Context API]

## 사용 방법
### 컨텍스트 객체 생성
* React.createContext() 함수로 생성

### Provider 컴포넌트 작성
* 상태와 상태 변경 함수를 관리할 컴포넌트 작성
* 컨텍스트 객체가 제공하는 Provider 컴포넌트를 사용해서 자식 컴포넌트를 렌더링하고 이때 Provider의 value 속성으로 전달할 컨텍스트를 지정
  ```jsx
  import { createContext, useState } from "react";

  const CounterContext = createContext();

  export function CounterProvider({ children }){
    // 상태
    const [count, setCount] = useState(10);
    
    // 상태 변경 함수
    const countUp = function(step){
      setCount(count + step);
    };

    // 자식 컴포넌트에 전달할 Context
    const values = {
      state: { count },
      actions: { countUp, countDown }
    };

    return (
      <CounterContext.Provider value={ values }>
        { children }
      </CounterContext.Provider>
    );
  }

  export default CounterContext;
  ```

### 자식 컴포넌트에 컨텍스트 제공
```jsx
import { CounterProvider } from '@context/CounterContext';
```
```jsx
<CounterProvider>
  <Left1 />
  <Right1 />
</CounterProvider>
```

### 자식 컴포넌트에서 컨텍스트 사용
* React.useContext 훅을 이용해 컨텍스트를 꺼내서 사용
```jsx
import CounterContext from '@context/CounterContext';
import { useContext } from 'react';
```

```jsx
const { state: { count } } = useContext(CounterContext);
```

## 컨텍스트 남용
* props 전달
  - props를 사용하면 어떤 컴포넌트가 어떤 데이터를 사용하는지 쉽게 파악이 가능해서 데이터 흐름을 명확히 파악할 수 있음
* Context 사용
  - 데이터 흐름 파악이 힘듬

## 컨텍스트 API 사용 사례
* 테마 지정
  - 다크 모드, 라이트 모드 등의 테마를 사용자가 수정할수 있게 제공할 경우 컴포넌트 트리 상단에서 컨텍스트를 제공하고 선택한 테마를 하위 컴포넌트에서 사용
* 로그인 상태 관리
  - 사용자의 로그인 상태(로그인/비로그인) 여부를 컨텍스트로 제공하고 하위 컴포넌트에서 사용
* 전역 상태 관리
  - 여러 컴포넌트가 공통으로 관리해야 하는 상태를 컨텍스트로 제공하고 하위 컴포넌트에서 상태를 수정하면 필요한 모든 컴포넌트에서 수정된 상태를 사용해서 리렌더링

