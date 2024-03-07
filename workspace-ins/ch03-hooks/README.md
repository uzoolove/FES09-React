# 4장 클래스 컴포넌트와 컴포넌트의 라이프 사이클
* 소스 코드(GitHub): <https://github.com/uzoolove/FES09-React/tree/main/workspace-ins/ch04-class>
* 코드 실행(GitHub Page): <https://uzoolove.github.io/FES09-React/workspace-ins/index.html#04>

## 컴포넌트 생명 주기

* <img src="https://raw.githubusercontent.com/uzoolove/FES09-React/main/images/lifecycle.png" width="300">

### 1 mounting

#### 1-1 constructor()
* 컴포넌트 생성시 호출
* super(props)를 호출하지 않으면 this 사용 못하므로 this.state, this.props 사용 불가
* 생태를 초기화하는 코드 작성
* 상태를 초기화할 필요가 없으면 생성자를 작성할 필요 없음

#### 1-2 static getDerivedStateFromProps()
* 부모 컴포넌트로부터 전달받은 props 속성에 의해 상태가 없데이트 될 때
* props, state가 인자로 전달됨
* props나 statc 값에 의해서 업데이트되는 새로운 state를 리턴하도록 작성
* 일반적으로 부모에게 전달받은 props를 그대로 사용하기 때문에 사용할 일은 거의 없음

#### 1-3 render()
* 가상 DOM 리턴

#### 1-4 componentDidMount()
* 컴포넌트 마운트가 완료되고 브라우저 DOM 트리에 반영된 후 호출됨

### 2 updating

#### 2-1 static getDerivedStateFromProps()
* 1-2와 동일

#### 2-2 shouldComponentUpdate(nextProps, nextState)
* true 리턴시 render(), false 리턴시 render() 호출하지 않음
* 인자로 전달되는 nextProps, nextState와 이전값 this.props, this.state를 비교해서 랜더링 여부를 결정
* Component 대신 PureComponent를 상속 받으면 이 메서드가 이전과 현재의 props, state를 얕은 비교를 통해 바뀌지 않았다면 랜더링 하지 않도록 이미 구현되어 있음

#### 2-3 render()

#### 2-4 getSnapshotBeforeUpdate(prevProps, prevState)
* render() 메서드가 호출되어 가상 DOM으로 쓰기 완료되고 브라우저 DOM에 업데이트 되기 전에 호출
* 이 메서드의 리턴값이 2.5 componentDidUpdate()의 세번째 인자로 전달됨

#### 2-5 componentDidUpdate(prevProps, prevState, snapshot)
* 브라우저 DOM 업데이트 완료 후
* 현재 속성 this.props, this.state와 이전 값 prevProps, prevState가 다르다면 외부 API 호출 등의 작업 수행
* 2-4 에서 리턴한 값이 세번째 인자 snapshot으로 전달되므로 보통 2-4와 같이 사용됨

### 3 unmounting

#### 3-1 componentWillUnmount()
* 컴포넌트가 애플리케이션의 컴포넌트 트리에서 삭제되기 직전에 실행
* 주로 1-4 componentDidMount()와 짝으로 사용
* 웹소켓을 사용할 경우 1-4에서 연결하고 3-1에서 연결 해제
* setTimeout()을 해제하기 위해 clearTimeout() 호출

## 라이프 사이클 메소드가 두번씩 호출되는 이유
* 라이프사이클 메소드 내에서 발생할 수 있는 상태 관련 버그를 체크 할 수 있도록 의도적으로 strict 모드에서 두번씩 호출함
* index.js의 <React.StrictMode>에 의해서 strict 모드로 동작하며 개발 모드에서만 동작
* <https://ko.legacy.reactjs.org/docs/strict-mode.html>
* <https://react-ko.dev/learn/keeping-components-pure#detecting-impure-calculations-with-strict-mode>
