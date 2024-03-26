# 8장 상태 관리 라이브러리
* 소스 코드(GitHub): <https://github.com/uzoolove/FES09-React/tree/main/workspace-ins/ch08-globalstate>
* 코드 실행(GitHub Page): <https://uzoolove.github.io/FES09-React/workspace-ins/index.html#08>

## 상태 관리란?
* 리액트의 useState, useReducer 훅을 이용해서 컴포넌트 내부의 상태를 관리 할 수 있음
* 상태가 변경되면 컴포넌트가 다시 호출되고 화면이 리렌더링 되는게 리액트의 기본 동작 방식
* useState, useReducer는 컴포넌트에 종속적인 상태만 관리하므로 다른 컴포넌트와 상태를 공유할 수 없음
* 전역 상태 관리: 여러 컴포넌트가 상태를 공유하고 특정 컴포넌트에서 상태를 변경하면 공유된 모든 컴포넌트에 영향을 미치는 상태 관리
  - 전역 상태 관리 라이브러리로는 Context API, Redux, Recoil, Zustand, MobX, Jotai, Valtio 등이 있음

## Recoil
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
  ```jsx
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
        <h1>Right3 : { count }</h1>
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

### Recoil 참고: <https://recoiljs.org/ko>

## Zustand
* zustand는 '상태'라는 뜻의 독일어로 리액트의 상태 관리 라이브러리 중 하나
* Provider 없이 훅 기반으로 쉽게 사용 가능

### 설치
```powershell
npm i zustand
```

### Store
* 상태와 상태를 관리하는 함수로 구성되며 커스텀 훅으로 작성
* Zustand.create 함수로 생성하고 create 함수의 콜백 함수에서 상태 정의와 상태관리 로직 구현
* create에 전달하는 콜백 함수의 매개변수
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
    countDown: (step) => set({ count: get().count - step }),
    countUp: (step) => set((state) => ({ count: state.count + step })),
  }));

  export default useCounterStore;
  ```

### Store 사용
* 커스텀 훅 사용과 동일하게 사용
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

### Zustand 참고: <https://docs.pmnd.rs/zustand>



## Redux
* 자바스크립트 애플리케이션을 위한 예측 가능한 상태 컨테이너
* UI 상태, 데이터 상태를 관리하기 위한 도구
* Flux 아키텍처 기반. 복잡성을 줄이고 발전시켜 핫 리로딩, 시간여행 디버깅 등 추가 기능을 제공
* React 뿐만 아니라 모든 자바스크립트 애플리케이션에서 사용 가능

### Flux 아키텍처
* 클라이언트-사이드 웹 애플리케이션을 만들기 위해 사용하는 애플리케이션 아키텍처
* 단방향 데이터 흐름을 활용해 View 컴포넌트를 구성하는 React를 보완할 수 있음

#### Flux 구성 요소
<img src="https://raw.githubusercontent.com/uzoolove/FES09-React/main/images/flux-won2.png">
[그림 1. Flux 구조] 출처 "원쌤의 리액트 퀵스타트 with 타입스트립트"

* Dispatcher
  - 단 하나의 디스패처
  - Actions으로부터 전달받은 메세지를 Store에 전달하는 단일 통신 채널
  - 모든 메세지는 이 지점을 거쳐감
* Stores
  - 애플리케이션의 상태와 상태를 변경하는 메서드를 보유
  - 상태 변경 메서드는 상태의 불변성을 유지할 수 있도록 하는 것이 권장
* Views
  - Store의 상태를 UI로 나타내고, Action을 일으킬 수 있는 환경을 제공
* ActionCreators
  - 상태를 변경하는 기능 이외의 비즈니스 로직을 배치
  - 비즈니스 로직 실행 후의 결과(Action)를 Dispatcher를 거쳐 Store로 전달하여 상태를 변경
* Action
  - Dispatcher를 거쳐 Store로 전될되는 메세지
  - 상태를 어떻게 병경할 것인지를 담은 메세지 정보 객체
    ```js
    { type: 'countDown', payload: { step: 2 }}
    ```

### Redux 구성 요소
<img src="https://raw.githubusercontent.com/uzoolove/FES09-React/main/images/redux-won.png">
[그림 1. Redux 구조] 출처 "원쌤의 리액트 퀵스타트 with 타입스트립트"

* Store
  - 단일 스토어로 구성
  - 애플리케이션 전체의 상태를 한 곳에서 관리
  - Store를 들여다보면 모든 데이터의 흐름, 상태 변경 사항을 확인 할 수 있음
  - Flux 처럼 상태 변경 작업까지 하나의 Store에서 관리하면 복잡성이 증가하므로 상태 변경은 Reducer들로 위임
* ActionCreator
  - Flux의 ActionCreator를 거의 대부분 수용
  - 애플리케이션의 상태를 변경하고 싶다면 Action을 전송해야 함(dispatch)
  - 액션은 Store를 거쳐 Reducer로 전달되고 Reducer가 상태를 변경한 후 Store로 리턴함
  - 변경된 후 리턴된 상태가 Store의 새로운 상태가 됨
* Reducer
  - 상태 변경 로직을 구현한 순수함수로 구성
  - Action이 Store로 전달되면 Store는 이것을 Reducer로 전달
  - Reducer에 전달되는 상태는 불변성을 유지하도록 복제한 뒤 변경사항을 반영해 리턴
    - 이전 상태 객체는 남겨지고 새로운 상태 객체가 생성되어 Store의 상태가 되므로 변경 사항을 추적할 수 있는 밑바탕이 됨

### Redux의 3가지 원칙
* 애플리케이션의 상태 관리를 위해 단 하나의 Store를 사용
* 상태는 읽기 전용(불변성)
  - 애플리케이션의 다른 부분에서 상태를 변경할 수 없음
  - 상태를 변경하기 위해서는 action이 보내져야 함
* 상태의 변경은 순수 함수로 작성
  - Reducer는 현재의 상태를 인자로 전달받고 상태를 수정하여 새로운 상태로 리턴하는 순수함수로 만들어야 함

### 설치
```
npm i redux react-redux @reduxjs/toolkit
```

### Redux DevTools 설치
* 크롬 웹스토어에서 Redux DevTools 검색 후 설치
* 개발자 도구에 Redux 탭이 생김


