# 3장 리액트 훅
* 소스 코드(GitHub): <https://github.com/uzoolove/FES09-React/tree/main/workspace-ins/ch03-hooks>
* 코드 실행(GitHub Page): <https://uzoolove.github.io/FES09-React/workspace-ins/index.html#03>

## 리액트 훅이란?
* 컴포넌트가 렌더링 되는 동안에만 사용할 수 있는 특별한 함수
* React 16.8 버전에 추가됨
* 훅을 이용하면 클래스 컴포넌트에서만 사용 가능했던 상태 관리와 생명 주기 이벤트 기능을 함수형 컴포넌트에서도 사용할 수 있음

## useState
* 상태값(컴포넌트에서 관리하는 데이터)을 추가하기 위한 훅

### API
```
const [state, setState] = useState(initialState);
```

#### 매개변수
* initialState: 상태값의 초기값(초기 렌더링 후 무시됨)

#### 리턴값
* state: 상태값이 저장된 getter
* setState: 상태값을 변경하는 setter 함수
  - setter를 통해 상태가 변경되면 해당 컴포넌트는 다시 렌더링됨

## useEffect
* 컴포넌트 생명주기 이벤트를 등록하기 위한 훅
* 클래스 기반 컴포넌트일 경우 아래 메소드를 오버라이드해서 구현
  - componentDidMount(): 컴포넌트 마운트가 완료되고 브라우저 DOM 트리에 반영된 후 호출
  - componentDidUpdate(): 브라우저 DOM 업데이트 완료 후 호출
  - componentWillUnmount(): 컴포넌트가 삭제되기 직전에 호출
  - ...

### API
```
useEffect(setup[, dependencies]);
```

#### 매개변수
* setup: 컴포넌트가 마운트 되거나(1-4) 업데이트(2-5), 제거(3-1) 될 때 호출되는 함수
  - setup이 함수를 리턴하면 컴포넌트가 업데이트 되거나(cleanup 먼저 실행되고 setup이 뒤에 실행됨) 언마운트 될 때 리턴한 함수가 호출됨
* dependencies: 의존 객체(배열)
  - 마운트 될 때는 의존 객체 지정 여부와 상관 없이 setup이 호출됨
  - 의존 객체를 지정한 경우 컴포넌트가 업데이트 될 때 배열에 지정한 값 중 하나라도 변경된 경우에만 setup 함수가 호출됨
  - 의존 객체 생략시 컴포넌트가 업데이트 될 때 항상 setup 함수가 호출됨
  - 빈 배열을 지정하면 컴포넌트가 마운트 될 때만 setup 함수가 호출되고 업데이트 될때는 호출되지 않음

## useReducer
* useState와 비슷함
* useState 훅은 컴포넌트 내부에서 상태 변경 로직을 구현해야 해서 컴포넌트 내부가 복잡해짐
* 컴포넌트 외부에서 컴포넌트 상태 관리를 하고 싶을 때 사용
* 여러 컴포넌트가 유사한 상태 관련 로직을 사용할 경우 기능을 공유
* state 값은 불변성이므로 상태 변경의 내역을 추적 할 수 있음
* reducer는 순수 함수로 만들어야 함
  - 입력 값이 동일하면 출력 값도 동일
  - 외부 값에 영향을 주거나 받으면 안됨
* 리듀서를 사용하여 어플리케이션 전역 수준의 상태 관리 라이브러리가 Redux

### API
```
function reducer(state, action){ ... }
const [state, dispatch] = useReducer(reducer, initialArg[, init]);
```

#### 매개변수
* reducer: state와 action을 인자로 받고 새로운 state를 반환하는 함수 
  - state: 리듀서에 전달되는 상태값
  - action: dispatch에 전달한 인자값. 수행할 작업의 종류와 작업에 필요한 인자값을 포함한 객체
* initialArg: 초기 상태로 지정할 값
* init: initialArg를 인자로 받고 리턴한 값이 초기 상태로 지정되는 함수

#### 리턴값
* state: 상태값이 저장된 getter
* dispatch: 상태값을 변경하는 setter 함수. dispatch에 전달한 인자값은 reducer의 두번째 인자값(action)으로 전달됨

## useRef
* 컴포넌트가 다시 렌더링 되더라도 기존 상태값을 유지하는 변수 생성
* 일반 변수는 컴포넌트가 다시 렌더링되면(함수 재호출) 다시 생성되는 지역변수라서 값이 초기화 됨
* useState는 값이 변경되면 컴포넌트가 다시 렌더링 됨.
* useRef는 수정되더라도 컴포넌트가 다시 렌더링 되지 않음
* 태그에 ref 속성을 추가하면 브라우저 DOM 엘리먼트에 직접 접근 가능
  - 포커스 이동 같은 작업은 브라우저 DOM에 직접 접근해야 함

### API
```
const ref = useRef(initialValue);
```

#### 매개변수
* initialValue: 초기값

#### 리턴값
* current라는 상태값이 있는 속성 하나가 정의되어 있는 객체

## useMemo
* 메모이제이션: 함수가 호출되어서 만들어진 결과값을 내부에 저장(캐싱)하고 있는 함수

### API
```
const calculateValue = function(){ ... };
const cachedValue = useMemo(calculateValue, dependencies);
```

#### 매개변수
* calculateValue: 캐싱할 값을 계산해서 반환하는 함수(순수 함수)
* dependencies: 의존 객체(배열)
  - 계산 결과에 영향을 주는(바뀌는) calculateValue 함수의 인자값
  - 이 배열 요소의 값이 하나라도 바뀌면 calculateValue 함수를 다시 호출. 그렇지 않으면 캐시된 값을 반환
  - 빈 배열 지정시 의존성이 없으므로 매번 캐시된 값을 반환

#### 리턴값
* calculateValue() 함수를 호출한 결과값
* 다음 렌더링 중에는 dependencies가 변경되지 않았으면 캐시된 결과를, 변경되었으면 calculateValue() 함수를 다시 호출한 결과값

## useCallback
* 컴포넌트 내부의 함수를 캐시해서 컴포넌트가 다시 렌더링 되더라도 함수가 다시 생성되지 않음
* 부모가 정의한 이벤트 리스너를 자식에게 props로 전달할때 부모가 리렌더링 되는 경우 자식도 리렌더링 되는데 이때 props가 바뀌지 않으면 자식은 기존 DOM을 재사용 하도록 메모이제이션 할 수 있음.
  - 이벤트 리스너를 그냥 정의하면 부모가 리렌더링 될때 리스너 함수도 새로 생성되므로 자식에 전달하는 props도 바뀌게 되면서 메모이제이션이 되지 않고 자식도 리렌더링이 발생
  - useCallback()을 이용하면 부모 컴포넌트가 재호출 되어도 리스너가 수정되지 않고 유지되므로 자식도 기존 DOM을 재사용해서 성능 좋아짐.

### API
```
const cachedFn = useCallback(fn, dependencies);
```

#### 매개변수
* fn: 캐싱할 함수
* dependencies: 의존 객체(배열)
  - 캐싱된 함수에서 컴포넌트의 변수를 사용할 경우 함수 생성 당시의 값을 참조하고 있기 때문에 이 값이 바뀐다면 함수도 다시 생성해야 한다. 이 값을 의존성으로 지정하면 의존성이 바뀔때마다 캐싱된 함수를 사용하지 않고 새로운 함수를 생성해서 반환함
  - 빈 배열 지정시 의존성이 없으므로 매번 캐시된 함수를 반환함

#### 리턴값
* 최초에는 fn 함수를 반환하고 다음 렌더링부터는 dependencies가 변하지 않았다면 이전에 반환함 함수(캐시된 함수)를, dependencies가 변했다면 새로 생성된 fn 함수를 반환

## Custom Hook
* 개발자가 직접 작성하는 리액트 훅
* 리액트의 내장훅을 이용해 사용자 정의 훅을 만들면 여러 컴포넌트에서 재사용 가능
* useXXX 형태의 이름으로 작성해야 함
  - use로 시작하는 이름이 아닐경우 일반 함수로 인식하고 일반 함수에서는 내장훅을 사용할 수 없음

## 훅 사용시 주의사항
* 클래스 기반 컴포넌트에서는 사용할 수 없음
* 함수 컴포넌트 최상위 코드 영역에서만 호출 할 수 있음
  - 반복문이나 조건문, 중첩 함수의 내부에서는 사용할 수 없음
  - 컴포넌트가 렌더링 될때마다 동일한 순서로 훅이 호출되어야 하는데 반복문이나 조건문, 중첩 함수 등에서 사용하면 경우에 따라서 훅이 호출되는 순서가 바뀌거나 특정 훅이 호출되지 않으면서 문제가 발생할 수 있음

