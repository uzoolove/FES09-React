# 8장 상태 관리 라이브러리
* 소스 코드(GitHub): <https://github.com/uzoolove/FES09-React/tree/main/workspace-ins/ch08-globalstate>
* 코드 실행(GitHub Page): <https://uzoolove.github.io/FES09-React/workspace-ins/index.html#08>


## 생태 관리란?
* 리액트의 useState, useReducer 훅을 이용해서 컴포넌트 내부의 상태를 관리 할 수 있음
* 상태가 변경되면 컴포넌트가 다시 호출되고 화면이 리렌더링 되는게 리액트의 기본 동작 방식
* useState, useReducer는 컴포넌트에 종속적인 상태만 관리하므로 다른 컴포넌트와 상태를 공유할 수 없음
* 전역 상태 관리: 여러 컴포넌트가 상태를 공유하고 특정 컴포넌트에서 상태를 변경하면 공유된 모든 컴포넌트에 영향을 미치는 상태 관리
  - 전역 상태 관리 라이브러리로는 Context API, Redux, Recoil, Zustand, MobX, Jotai, Valtio 등이 있음

## Recoil 이란?
* 리액트를 만든 페이스북 팀에서 만든 상태 관리 라이브러리

### 설치
```
npm i recoil
```

### RecoilRoot
* RecoilRoot 컴포넌트 하위의 컴포넌트가 recoil을 사용할 수 있으므로 주로 루트 컴포넌트를 RecoilRoot로 감싼다.
  ```jsx
  import { RecoilRoot } from 'recoil';

  function App() {
    return (
      <RecoilRoot>
        <MyRootComponent />
      </RecoilRoot>
    );
  }
  ```

### atom
* atom은 상태를 정의하는데 사용
* Recoil은 여러 종류의 상태를 관리할 수 있는데 atom은 상태의 일부를 나타냄(로그인 상태, 다크모드 여부 상태 등 상태값 하나)
* atom의 값을 읽는 컴포넌트들은 암묵적으로 atom을 구독하게 됨
* atom이 바뀌면(상태가 바뀌면) 그 atom을 구독하는 모든 컴포넌트가 리렌더링 됨

#### atom을 정의하는 방법
* atom 함수 사용
* atoms.mjs
  ```js
  import { atom } from "recoil";
  export const countState = atom({
    key: 'count', // atom 식별자. 모든 atom에서 고유해야 함
    default: 10 // 상태 초기값
  });
  ```

#### atom에서 읽기(getter)
* atom에서 읽기 작업을 하는 컴포넌트는 자동으로 atom을 구독하게 되고 구독중인 atom에 변경이 발생하면 리렌더링 됨
* 읽기 작업만 필요할 때는 useRecoilValue 훅 사용
  ```jsx
  import { countState } from '@recoil/atoms.mjs';
  import { useRecoilValue } from 'recoil';

  function Left3() {
    const count = useRecoilValue(countState);
    return (
      <div>
        <h1>Left3 : { count }</h1>
      </div>
    );
  }

  export default Left3;
  ```

#### atom을 변경(setter)
* 변경 작업만 필요할 때는 useSetRecoilState 훅 사용
  ```js
  import { countState } from '@recoil/atoms.mjs';
  import { useSetRecoilState } from 'recoil';

  function Right3() {
    const setCount = useSetRecoilState(countState);

    const countUp = function(step){
      setCount(count => count + step);
    };

    return (
      <div>
        <h1>Right3</h1>
        <button onClick={ () => countUp(1) }>+</button>
      </div>
    );
  }

  export default Right3;
  ```

#### atom을 읽고 쓰기
* 읽고 쓰는 작업이 다 필요하면 useRecoilState 훅 사용
  ```jsx
  import { countState } from '@recoil/atoms.mjs';
  import { useRecoilState } from 'recoil';

  function Right3() {
    const [count, setCount] = useRecoilState(countState);
    const countUp = function(step){
      setCount(count + step);
    };

    return (
      <div>
        <h1>Right3</h1>
        <button onClick={ () => countUp(1) }>+</button>
      </div>
    );
  }

  export default Right3;
  ```

### selector
* atom이나 다른 selector를 통해서 읽은 상태값을 기반으로 가공된 값을 반환
* 컴포넌트가 atom을 읽을 경우는 현재 상태값 그대로 읽게 되지만 selector를 통해서 읽을 경우에는 현재 상태값을 기반으로 파생된 다른 값으로 사용 가능
* selector에서 사용하는 atom 값이 변하지 않으면 언제나 같은 값을 반환하는 순수 함수로 만들어야 함

#### selector를 정의하는 방법
* selector 함수 사용
* selectors.mjs
  ```js
  import { countState } from "@recoil/atoms.mjs";
  import { selector } from "recoil";

  export const countStateKor = selector({
    key: 'korCount',
    get: ({ get }) => {
      const count = get(countState); // atom 값 추출
      return numberToKorean(count); // 추출한 atom 값을 기반으로 파생된 값을 반환
    }
  });

  function numberToKorean(number) {
    // 아라비아 숫자 number를 한국식으로 변경
    ......
  }
  ```

#### selector에서 읽기(getter)
* selector에서 읽기 작업을 하는 컴포넌트는 자동으로 selector가 사용하는 atom을 구독하게 되고 구독중인 atom에 변경이 발생하면 리렌더링 됨
* selector는 주로 읽기 전용으로 사용되며 useRecoilValue 훅 사용
  ```jsx
  import { countStateKor } from '@recoil/selectors.mjs';
  import { useRecoilValue } from 'recoil';

  function Left3() {
    const korCount = useRecoilValue(countStateKor);
    return (
      <div>
        <h1>Left3 : { korCount }</h1>
      </div>
    );
  }

  export default Left3;
  ```

## Zustand
* zustand는 '상태'라는 뜻의 독일어로 리액트의 상태 관리 라이브러리 중 하나
* Provider 없이 훅 기반으로 쉽게 사용 가능

### 설치
```powershell
npm i zustans
```

### Store
* 상태와 상태를 관리하는 함수로 구성되며 커스텀 훅으로 작성
* Zustand.create 함수로 생성하고 create 함수의 콜백 함수에서 관리
* create의 콜백 함수의 매개변수
  - set
    + set(newState): 상태를 newState로 업데이트
    + set(state => newState): 이전 상태를 인자로 받고 newState를 반환하면 반환된 상태로 업데이트 됨
  - get(): 이전 상태를 반환하는 함수

#### 사용 예시
* counter.mjs
  ```js
  import { create } from "zustand";

  const useCounterStore = create((set, get) => ({
    count: 10,
    countUp: (step) => set((state) => ({ count: state.count + step })),
    countDown: (step) => set({ count: get().count - step }),
  }));

  export default useCounterStore;
  ```

### Store 사용
* Provider는 필요 없고 그냥 커스텀 훅 사용과 동일하게 사용
* Store를 사용하는 컴포넌트는 자동으로 Store를 구독하게 되며 Store의 상태가 변경되면 리렌더링 됨

* Right3.jsx
  ```jsx
  import useCounterStore from '@zustand/counter.mjs';

  function Right3() {
    const countUp = useCounterStore(state => state.countUp);

    return (
      <div>
        <h1>Right3</h1>
        <button onClick={ () => countUp(1) }>+</button>
      </div>
    );
  }

  export default Right3;
  ```
