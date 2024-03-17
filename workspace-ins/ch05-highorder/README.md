# 5장 고차 함수 (higher-order function)
* 소스 코드(GitHub): <https://github.com/uzoolove/FES09-React/tree/main/workspace-ins/ch05-highorder>
* 코드 실행(GitHub Page): <https://uzoolove.github.io/FES09-React/workspace-ins/index.html#05>

* 함수를 인자로 전달받거나 함수를 반환하는 함수
  - Array.prototype.forEach
  - Array.prototype.map
  - Array.prototype.findIndex
  - Array.prototype.filter
  - ...
* 리액트에서는 컴포넌트(함수)를 인자로 전달하면 해당 컴포넌트에 특정 로직(공통 로직)을 추가해서 반환하는 기능으로 많이 사용
* 컴포넌트마다 구현해야 하는 공통의 로직을 고차함수에서 구현하고 고차함수를 통해서 해당 로직이 추가된 컴포넌트를 반환 받아서 사용

## React.memo 고차 함수
* 리액트에서 기본 제공하는 고차 함수로 메모이제이션을 구현한 함수
* 컴포넌트가 호출 되었을 때(렌더링) 이전 호출과 동일한 속성(props)과 상태(state)를 가지고 있다면 다시 렌더링 하지 않고 이전의 렌더링 값을 반환

### API
```js
const MemoizedComponent = memo(SomeComponent[, arePropsEqual])
```
#### 매개변수
* SomeComponent
* arePropsEqual: 이전 props와 새 props를 전달받아서 props가 변경되지 않았다면 true를 리턴하고() props가 변경되었다면 false를 리턴
  - true가 리턴되면 MemoizedComponent 호출시 SomeComponent가 다시 호출되지 않고 메모리제이션된 값이 반환됨
  - false가 리턴되면 MemoizedComponent 호출시 SomeComponent가 다시 호출되서 새로운 렌더링 값이 반환됨
  - 생략하면 리액트가 자동으로 위의 기능을 수행하므로 보통은 지정하지 않음
#### 반환값
* 기존 컴포넌트에 메모이제이션 기능을 추가해서 반환
