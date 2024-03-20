# 2장 React 시작하기
* 소스 코드(GitHub): <https://github.com/uzoolove/FES09-React/tree/main/workspace-ins/ch02-start>
* 코드 실행(GitHub Page): <https://uzoolove.github.io/FES09-React/workspace-ins/index.html#02>

## 2-1 리액트란?
* 페이스북에서 만든 웹 UI를 작성하기 위한 자바스크립트 라이브러리

### React의 특징
* SPA의 단점을 보완하는 몇가지 기술을 도입
* SPA의 단점
  - 모든 기능을 한 페이지에서 다 구현하다 보니 상태(데이터) 관리가 어려움
  - 자바스크립트에서 HTML 코드를 생성해야 하므로 개발 생산성 저하
  - 브라우저의 DOM을 자주 갱신하다보면 성능 저하 발생
* SPA의 단점을 보완하는 React의 특징
  - 컴포넌트 별로 상태 관리가 가능하고 전역 수준의 상태 관리를 지원하는 서드파티 라이브러리가 많음
  - JSX를 이용해서 HTML 생산성이 높음
  - 가상 DOM을 이용해서 성능 저하 최소

#### 컴포넌트 기반 개발
  * 화면의 일부 UI를 만드는 컴포넌트 단위로 개발
  * 컴포넌트는 자바스크립트로 개발하며 재사용성이 뛰어남

#### 상태 관리와 단방향 데이터 바인딩
  * 각각의 컴포넌트 내부에서 상태 관리 기능 제공
  * 전역 수준의 상태 관리를 위한 라이브러리(Context API, Redux, MobX, Recoil, Zustand 등)를 사용할 수 있음
  * 상태가 변경되면 뷰(UI, HTML)를 즉시 렌더링
  * 단방향 데이터 바인딩: State -> View, View -> Event Handler -> setState() -> State
    - View의 변경이 직접 State를 변경시키지 않고 Event Handler를 통해서만 변경 가능하게 구현해야 하므로 상태가 변경되는 과정에 대한 예측과 추적이 용이함

#### JSX (Javascript XML)
* HTML 마크업과 비슷한 문법을 사용해서 UI 정의하면 Babel 같은 변환 도구에 의해 자바스크립트 코드로 변환됨
  ```html
  <div class="todolist">
    <ul>
      <li>두부</li>
      <li>계란</li>
      <li>라면</li>
    </ul>
  </div>
  ```
  ```js
  /*#__PURE__*/_jsx("div", {
    class: "todolist",
    children: /*#__PURE__*/_jsxs("ul", {
      children: [/*#__PURE__*/_jsx("li", {
        children: "\uB450\uBD80"
      }), /*#__PURE__*/_jsx("li", {
        children: "\uACC4\uB780"
      }), /*#__PURE__*/_jsx("li", {
        children: "\uB77C\uBA74"
      })]
    })
  });
  ```

#### 가상 DOM (Virtual DOM)
* 상태가 변경되어서 뷰를 렌더링할때 브라우저 DOM에 바로 적용하지 않고 브라우저 DOM과 유사한 트리구조의 가상 DOM(자바스크립트 객체)을 먼저 수정한 후 수정전의 가상 DOM과 수정후의 가상 DOM을 비교해서 바뀐 부분만 브라우저 DOM에 실제 반영
* DOM API를 이용한 화면 갱신 방법
  - 수정된 부분만 찾아서 갱신
    + 장점: 화면 렌더링을 최소화 하기 때문에 성능에 좋음
    + 단점: 기존 데이터와 새로운 데이터를 비교해서 새로운 데이터가 기존 데이터의 어느 부분과 달라졌는지 확인하고 해당 요소를 DOM에서 찾아 갱신해야 하므로 코드가 복잡해짐
  - 관련 영역 전체를 갱신
    + 장점: 기존 요소를 지우고 새로운 데이터로 전체를 교체하면 되므로 기존 데이터와 비교 작업이 필요 없고 수정될 부분만 찾아서 DOM을 갱신할 필요가 없으므로 코드가 간결해짐
    + 단점: 하나만 수정해서 갱신하면 될 것을 관련 영역 전체를 다시 렌더링 하므로 성능 이슈 발생
  - 가상 DOM 이용
    + 새로운 데이터를 가지고 만들어진 가상 DOM과 기존 DOM을 비교해서 바뀐 부분만 찾아서 브라우저 DOM을 갱신하므로 성능에 좋음
    + 바뀐 부분만 찾아서 리렌더링 하는 작업은 리액트가 담당하므로 코드가 간결해짐

## 2-2 리액트 개발 환경 구축
### 툴체인
* 리액트 앱을 개발할 때 필요한 개발 환경을 자동으로 구축 해주는 도구
  - 보일러 플레이트 코드 제공
  - 프로젝트 설정 파일 자동 구성
  - 필요 라이브러리 설치
  - HMR(Hot Module Replacement): 개발시 소스 코드를 수정하면 컴포넌트를 자동으로 리로딩해서 브라우저의 새로고침 없이 곧바로 화면에 적용 가능
  - 프로덕션 배포에 필요한 번들링 기능 제공

#### create-react-app(CRA)
* 리액트 개발팀에서 만든 리액트 전용 툴체인
* workspace/ch02-start 폴더로 이동 후 다음 명령 실행
  - Need to install the following packages 메세지가 나오면 y 입력후 엔터
  ```powershell
  npx create-react-app cra
  # 생성한 프로젝트 폴더로 이동
  cd cra
  # 개발 서버 실행
  npm start
  ```

#### Vite
* 프랑스어로 "빠르다"는 뜻
* Webpack을 번들러로 사용하는 CRA 대비 Esbuild와 Rollup을 번들러로 사용하면서 10~100배 빠른 속도로 개발 서버 구동
* CRA는 리액트만 지원하는 반면 Vite는 Vanilla JS, React, Svelte, Solid 등의 다양한 SPA 개발 환경을 지원
* workspace/ch02-start 폴더로 이동 후 다음 명령 실행
  ```powershell
  npm init vite@latest
  ```
  - 프로젝트 명: vite
  - 개발환경 선택: React
  - 개발언어 선택: JavaScript

  ```powershell
  # 생성한 프로젝트 폴더로 이동
  cd vite
  # 필요 패키지 설치
  npm i
  # 개발 서버 실행
  npm run dev
  ```

* npm init vite에서 vite는 initializer이며 create- 접두사로 시작하는 Node.js 모듈을 이용해 프로젝트의 초기 구성을 해줌
  - npm init vite
    + npx create-vite 실행
  - npm create vite
    + create는 init의 별칭
  - npm init vite == npm create vite == npx create-vite

##### vite.config.js
*  Vite 설정파일
  - 참고: <https://ko.vitejs.dev/config>
* import에서 사용할 alias 추가
  ```js
  import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'

  export default defineConfig({
    plugins: [react()],
    resolve: {
      alias: [
        { find: "@", replacement: "/src" },
        { find: "@components", replacement: "/src/components" },
        { find: "@pages", replacement: "/src/pages" },
        { find: "@hooks", replacement: "/src/hooks" },
      ],
    },
  })
  ```

##### VSCode에서 alias로 import 했을 경우 Ctrl + 클릭시 해당 컴포넌트로 바로 이동하도록 설정
* 프로젝트 루트에 jsconfig.json 파일 생성
  ```json
  {
    "compilerOptions": {
      "baseUrl": "./src",
      "paths": {
        "@/*": ["/*"],
        "@components/*": ["components/*"],
        "@pages/*": ["pages/*"],
        "@hooks/*": ["hooks/*"],
      }
    }
  }
  ```

##### VSCode에서 alias를 기준으로 import 자동 완성 설정
* VSCode > File > Preferences > Settings > Import Module Specifier 검색
  - JavaScript › Preferences: Import Module Specifier 항목의 Preferred path style for auto imports. 값을 non-relative 로 지정
  - User 탭과 Workspace 탭 모두 설정

## 2-3 리액트 애플리케이션 배포
### 프로젝트 빌드
* 프로덕션 배포용 파일 생성
  ```powershell
  npm run build
  ```
* 프로젝트 빌드
  - build(CRA), dist(Vite) 폴더에 프로덕션 배포용 파일 생성
  - JSX 문법을 Javascript 코드로 변환
  - 트랜스파일링: ES6+ 문법을 지원하지 않는 구 버전의 브라우저를 위해 ES5 수준의 코드로 변환
  - 압축: 주석 제거, 변수명 축약, 화이트 스페이스 제거
  - 번들링: 여러 자바스크립트 파일을 하나 또는 몇개의 파일로 묶는 작업 (Webpack, Rollup, Parcel, Esbuild 등)
  - 트리 쉐이킹: 번들링 과정에서 불필요한 코드(사용하지 않는 함수나 모듈)를 식별하고 제거
  - css 파일도 번들링, 압축됨

### 빌드된 파일로 서버 실행
* CRA
  ```powershell
  npx serve -s build
  ```
* Vite
  ```powershell
  npm run preview
  ```
* serve의 -s 옵션: 리액트는 index.html 파일 하나에서 모든 페이지를 서비스하므로 클라이언트가 요청한 모든 URL에 대해서 index.html을 응답함

## 2-4 JSX

### JSX란?
* JSX(JavaScript XML)는 자바스크립트 파일 내에 HTML과 유사한 마크업을 작성할 수 있게 해주는 자바스크립트 확장 구문
* 리액트와 JSX는 별개이기 때문에 리액트에서 JSX 사용이 필수는 아님
  - React.createElement() 직접 사용

### JSX 규칙
1 단일 루트 요소를 반환해야 한다.
* JSX는 자바스크립트 객체로 변환되는데 함수가 여러 객체를 반환 할 수 없으므로 단일 객체를 반환하도록 해야함
* Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>? 에러 발생
  
  ```jsx
  return (
    <h1>Todo List</h1>
    <div>...</div>
  );
  ```

* 루트 요소를 추가
  ```jsx
  return (
    <div>
      <h1>Todo List</h1>
      <div>...</div>
    </div>
  );
  ```

* Fragment 사용
  - 렌더링 결과에는 영향을 미치지 않음

  ```jsx
  return (
    <Fragment>
      <h1>Todo List</h1>
      <div>...</div>
    </Fragment>
  );
  ```

* Fragment의 약어 사용
  ```jsx
  return (
    <>
      <h1>Todo List</h1>
      <div>...</div>
    </>
  );
  ```

2 모든 태그는 닫는다.
* HTML에서는 닫는 태그를 생략 할 수 있지만 JSX는 XML과 유사한 문법이므로 닫는 태그를 항상 작성해야 함
  - HTML 예시
    ```html
    <img src="./logo.png">
    <br>
    <ul>
      <li>두부
      <li>계란
      <li>라면
    </ul>
    ```

  - JSX 예시
    ```html
    <img src="./logo.png" />
    <br />
    <ul>
      <li>두부</li>
      <li>계란</li>
      <li>라면</li>
    </ul>
    ```

3 요소의 속성명은 카멜 표기법(camel case)을 준수해야 한다.
* 속성명은 HTML 표준 속성명이 아닌 DOM API 스펙에 기반을 둠
  - stroke-width -> strokeWidth
  - onclick -> onClick
  - onkeyup -> onKeyUp

* HTML에서 class 속성 추가
  ```html
  <div id="todolist" class="todo"></div>
  ```

* 자바스크립트에서 class 속성 추가
  ```js
  document.querySelector('#todolist').className = 'todo';
  ```

* JSX에서 class 속성 추가
  ```html
  <div id="todolist" className="todo"></div>
  ```

* JSX에서 class 속성을 동적으로 추가
  ```jsx
  const todoClass = 'todo';
  <div id="todolist" className={ todoClass }></div>
  ```

4 보간법{ }을 사용할 때에는 표현식을 사용해야 함
* { } 안에는 변수값, 메서드 리턴값 등 값만 사용 가능
* if문, for 문 등은 사용할 수 없음
  - if문 대신 삼항 연산자 사용
    ```jsx
    (item.done ? <s>두부</s> : '두부')
    ```
  - for 문 대신 forEach(), map() 등 사용
    ```jsx
    {
      for(let i=0; i<itemList.length; i++){
        return item.title;
      }
    }
    ```
    ```jsx
    { itemList.map(item => item.title) }
    ```

5 보간된 HTML 문자열은 인코딩됨
* { } 내부의 값이 HTML 코드가 포함된 문자열인 경우 HTML 태그를 인코딩해서 처리하므로 브라우저에는 태그가 그대로 보여짐
  - XSS (Cross Site Scripting) 같은 공격에 대비하기 위한 규칙

* 예시
  ```jsx
  const App(){
    const msg = '<i>World</i>';
    return <span>Hello { msg }</span>
  }
  만들어지는 문자열: <span>Hello &lt;i&gt;World&lt;/i&gt;</span>
  ```
* 예시 결과
  - <span>Hello &lt;i&gt;World&lt;/i&gt;</span>
* 해결 방법
  1. dangerouslySetInnerHTML 속성을 사용하면 HTML 태그를 인코딩하지 않음

    ```jsx
    const App(){
      // { msg }를 <span dangerouslySetInnerHTML={{ __html: msg }}></span>로 변경
      const msg = '<i>World</i>';
      return <span>Hello <span dangerouslySetInnerHTML={{ __html: msg }}></span></span>
    }
    ```
  2. JSX는 XSS 공격에 안전하므로 JSX를 사용

    ```jsx
    const App(){
      // const msg = '<i>World</i>';
      const msg = <i>World</i>;
      return <span>Hello { msg }</span>
    }
    ```

## 2-5 속성 (Props)
* 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달할 때 사용
  ```jsx
  // ch02-start/todo/03.html
  function App(){
    const title = 'React Props';
    let list = [
      { _id: 1, title: '리그오브 레전드', done: false},
      { _id: 2, title: '영화 보기(집에서)', done: false},
      { _id: 3, title: '던파', done: false},
    ];

    return (
      <div id="app">
        <div>
          <Title title={ title } />
          <TodoList list={ list } />
        </div>
      </div>
    );
  }

  function Title({ title='Default Title' }){
    return (
      <div>
        <h1>Simple Todo List - { title } :()</h1>
        <hr />
      </div>
    );
  }

  function TodoList({ list }){
    const itemList = list.map(item => {
      return (
        <li key={ item._id }>{ item.title }</li>
      );
    });

    return (
      <ul className="todolist">
        { itemList }
      </ul>
    );
  }    
  ```
* 함수에 데이터를 전달할 때 인수를 사용하듯이 컴포넌트에 데이터를 전달할 때 Props를 사용
  - JSX에서 하위 컴포넌트를 HTML 태그처럼 사용할 때 HTML 태그의 속성을 지정하는 것처럼 사용
* 하위 컴포넌트에는 상위 컴포넌트가 전달한 여러 속성이 하나의 Props 객체로 전달되므로 주로 구조 분해 할당을 이용해서 필요한 속성을 바로 꺼내서 사용
* 기본값 매개변수를 사용하면 Props가 전달되지 않거나 undefined가 명시적으로 전달될 때 적용됨
  - null, 0 값은 기본값으로 대체되지 않음
* 자신이 전달받은 Props 전체를 하위 컴포넌트에 전달하고 싶을때는 전개 연산자를 사용
  ```jsx
  function Profile(props) {
    return (
      <div>
        <Avatar { ...props } />
      </div>
    );
  }
  ```
* Props로 객체를 전달 받을 때 자식 컴포넌트가 그 값을 직접 변경하는 것은 지양
  - 리액트의 데이터는 상위 컴포넌트에서 하위 컴포넌트로 전달되는데 하위 컴포넌트에서 상위 컴포넌트의 데이터를 직접 수정하면 데이터의 흐름을 예측하기 어려워서 디버깅하기 어려운 오류를 만들 수 있음

## 2-6 상태 (State)
* 리액트에서는 시간이 지남에 따라 변하는 데이터를 상태라고 함
* 상태가 변경되면 해당 컴포넌트와 하위 컴포넌트가 리렌더링 됨

### React.useState()
* 상태값(컴포넌트에서 관리하는 데이터)을 추가하기 위한 훅(Hook)

#### API
  ```jsx
  const [state, setState] = useState(initialState);
  ```

##### 매개변수
* initialState: 상태값의 초기값(초기 렌더링 후 무시됨)

##### 리턴값
* state: 상태값이 저장된 getter
* setState: 상태값을 변경하는 setter 함수. setter를 통해 상태가 변경되면 해당 컴포넌트는 다시 렌더링됨

#### useState() 특징
* 컴포넌트가 렌더링 되는 동안에만 사용할 수 있는 특별한 함수(훅, Hooks)
* 컴포넌트의 최상위 수준이나 커스텀 훅 내부에서만 사용 가능(조건문, 반복문, 일반 함수 같은 블럭{ } 내부에서는 사용 불가)
* 컴포넌트 내에서 여러번 사용하면 리액트가 관리하는 배열에 저장되므로 컴포넌트가 리렌더링 될때 마다 순서가 정확히 지켜져야 한다.
  - 잘못된 사용 예시
    ```jsx
    const [firstName, setFirstName] = useState('Dragon');
    if(firstName === 'Dragon'){
      const [lastName, setLastName] = useState('Gil');
    }  
    const [age, setAge] = useState(36);
    ```
* state로 만든 변수는 컴포넌트를 여러곳에서 사용해도 각각의 값을 따로 관리
  - 컴포넌트 외부에 선언한 변수는 컴포넌트 리렌더링 되어도 값이 유지되지만 해당 컴포넌트를 여러곳에서 사용할 경우 모든 컴포넌트가 공유하는 값이 되므로 컴포넌트 내부의 상태관리에 적합하지 않음

### 상태 사용시 유의사항
* state가 변경되는 즉시 리렌더링이 되지 않고 이벤트 큐에 리렌더링 작업이 등록되므로 이벤트 핸들러의 모든 코드가 실행될 때까지 기다리게 됨
  - 이벤트 핸들러와 그 안의 코드가 완료될 때까지 UI가 업데이트되지 않는다는 의미
  - 이벤트 핸들러 내에서 상태값을 여러번 바꾼 후 읽어오면 바로 반영되지 않음
* 상태를 객체나 배열로 지정한 경우 상태를 변경하기 위해서 객체나 배열의 내부 속성을 직접 변경해도 참조 주소는 바뀌지 않으므로 리액트가 상태의 변경을 인지하지 못함(얕은 비교). 대신 새로운 객체나 배열을 생성해서 교체해야 리렌더링이 발생

### 상태의 불변성 (immutability)
* 한번 정의한 상태는 그 값이 바뀌지 않도록 한다.
  - 새로운 상태로 바꿀 때 기존 상태값을 수정하지 말고 새로운 상태값으로 교체
  - 기본 데이터타입은 불변성을 가짐
  - 참조형 데이터타입은 불변성을 가지도록 객체나 배열을 복사해서 구현
* 중첩 객체일 경우에는 불변성을 위해 수정될 속성을 포함한 객체와 그 객체를 포함하는 객체를 루트 객체까지 거슬러 올라가면서 전부 교체해야할 수 있음 
  ```json
  {
    "_id": 4,
    "email": "u1@market.com",
    "name": "데이지",
    "phone": "01044445555",
    "address": "서울시 강남구 논현동 222",
    "type": "user",
    "createdAt": "2024.01.25 21:08:14",
    "updatedAt": "2024.02.04 09:38:14",
    "extra": {
      "birthday": "11-30",
      "membershipClass": "MC02",
      "addressBook": [
        {
          "id": 1,
          "name": "회사",
          "value": "서울시 강동구 천호동 123"
        },
        {
          "id": 2,
          "name": "집",
          "value": "서울시 강동구 성내동 234"
        }
      ]
    }
  }
  ```
* 배열의 불변성을 위해 피해야 할 메서드와 추천하는 메서드
  - 추가: push(), unshift() 대신 concat(), [ ...arr ]
  - 삭제: pop(), shift() 대신 filter(), slice()
  - 수정: splice(), arr[i] 대신 map()
  - 정렬: reverse(), sort() 바로 사용하지 말고 배열 복사 후 사용

* 상태의 불변성을 구현할 경우 추후 성능 최적화를 위해 메모이제이션 작업을 수행할 때 Props의 변경 여부를 얕은 비교만으로 확인 할수 있어서 렌더링 최적화에 도움 
* immer 라이브러리
  - 객체를 불변성으로 만들어주는 라이브러리
  - 설치
    ```powershell
    npm i immer
    ```

  - 상태의 불변성을 유지하기 위한 예시
    ```js
    const newAddressBook = user.extra.addressBook.map(address => {
      if(address.id === Number(e.target.name)){
        return { ...address, value: e.target.value };
      }else{
        return address;
      }
    });

    const newState = {
      ...user,
      extra: {
        ...user.extra,
        addressBook: newAddressBook
      }
    };

    setUser(newState);
    ```

  - immer 사용 예시
    ```js
    const newState = produce(user, draft => {
      const address = draft.extra.addressBook.find(address => address.id === Number(e.target.name));
      address.value = e.target.value;
    });

    setUser(newState);
    ```

## 2-7 유효성 검증
### Props의 유효성 검증
* 컴포넌트가 전달받은 Props의 유효성을 검증하는 기능
* 설치
  ```powershell
  npm i prop-types
  ```

* 사용 사례
  ```jsx
  import PropTypes from 'prop-types';
  import TodoItem from "./TodoItem";
  function TodoList(props){
    const list = props.itemList.map(item => <TodoItem key={ item.no } item={ item } toggleDone={ props.toggleDone } deleteItem={ props.deleteItem } />);
    return (
      <ul className="todolist">
        { list }
      </ul>
    );
  }

  TodoList.propTypes = {
    itemList: PropTypes.array.isRequired,
    toggleDone: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
  };

  export default TodoList;
  ```

  ```jsx
  import PropTypes from 'prop-types';
  function TodoItem(props){
    return (
      <li>
        <span>{ props.item.no }</span>
        <span onClick={ () => props.toggleDone(props.item.no) } >{ props.item.done ? <s>{ props.item.title }</s> : props.item.title }</span>
        <button type="button" onClick={ () => props.deleteItem(props.item.no) } >삭제</button>
      </li>
    );
  }

  TodoItem.propTypes = {
    // item: PropTypes.object.isRequired,
    item: PropTypes.shape({
      no: PropTypes.number,
      title: PropTypes.any.isRequired,
      done: PropTypes.bool
    }).isRequired,
    toggleDone: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired
  };

  export default TodoItem;
  ```

* 사용 방법
  ```jsx
  import PropTypes from 'prop-types';

  MyComponent.propTypes = {
    // 특정 JS 타입임을 선언(해당 속성이 전달되지 않아도 됨)
    optionalArray: PropTypes.array,
    optionalBool: PropTypes.bool,
    optionalFunc: PropTypes.func,
    optionalNumber: PropTypes.number,
    optionalObject: PropTypes.object,
    optionalString: PropTypes.string,
    optionalSymbol: PropTypes.symbol,

    // 모든 종류의 자식 요소(리액트 엘리먼트, 문자, 숫자, 배열, 불린, null, undefined 등)
    optionalNode: PropTypes.node,

    // React 엘리먼트
    optionalElement: PropTypes.element,

    // React 동적으로 로딩된 엘리먼트
    optionalElementType: PropTypes.elementType,

    // 특정 클래스의 인스턴스
    // 이 경우 JavaScript의 instanceof 연산자를 사용
    optionalMessage: PropTypes.instanceOf(Message),

    // 열거형(enum)으로 처리하여 prop가 특정 값들로 제한되도록 할 수 있음
    optionalEnum: PropTypes.oneOf(['News', 'Photos']),

    // 여러 종류중 하나
    optionalUnion: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.instanceOf(Message)
    ]),

    // 특정 타입의 배열
    optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

    // 특정 타입의 프로퍼티 값들을 갖는 객체
    optionalObjectOf: PropTypes.objectOf(PropTypes.number),

    // 지정된 타입의 속성을 가지고 있는 객체(다른 속성이 있어도 됨)
    optionalObjectWithShape: PropTypes.shape({
      color: PropTypes.string,
      fontSize: PropTypes.number
    }),

    // 지정된 타입의 속성만 가지고 있는 객체(다른 속성이 있으면 안됨)
    optionalObjectWithStrictShape: PropTypes.exact({
      name: PropTypes.string,
      quantity: PropTypes.number
    }),

    // 위에 있는 모든 구문에 'isRequired'를 연결하면 해당 속성이 필수임을 나타냄
    requiredFunc: PropTypes.func.isRequired,

    // 모든 데이터 타입이 가능한 필수값
    requiredAny: PropTypes.any.isRequired,

    // 사용자 정의 유효성 검사기를 지정
    // 검사 실패 시에는 에러(Error) 객체를 반환해야 함
    customProp: function(props, propName, componentName) {
      if (!/matchme/.test(props[propName])) {
        return new Error(
          `'${componentName}' 컴포넌트의 prop '${propName}' 값 검증 실패.`
        );
      }
    },

    // 'arrayOf' 와 'objectOf'에 사용자 정의 유효성 검사기 지정
    // 검사 실패 시에는 에러(Error) 객체를 반환해야 함
    // 유효성 검사기는 배열(array) 혹은 객체의 각 키(key)에 대하여 호출됨

    // propValue: 현재 검사 중인 prop의 값(배열이나 객체)
    // key: 현재 검사 중인 prop의 키
    // componentName: 현재 검사 중인 컴포넌트의 이름
    // location: prop이 전달된 위치 ("props" 또는 "context" 중 하나)
    // propFullName: prop의 이름
    customArrayProp: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
      if (!/matchme/.test(propValue[key])) {
        return new Error(
          'Invalid prop `' + propFullName + '` supplied to' +
          ' `' + componentName + '`. Validation failed.'
        );
      }
    })
  };
  ```

### Form의 유효성 검증
* Form 태그의 사용자의 입력 데이터를 검증
* react-hook-form 설치
  ```powershell
  npm i react-hook-form
  ```

## 2-8 컴포넌트 구분
### 컨테이너 컴포넌트와 표현 컴포넌트
* 상태와 비즈니스 로직을 처리하는 컨테이너와 UI를 담당하는 컨테이너를 분리해서 설계
* 컴포넌트의 역할이 명확해지고 표현 컴포넌트에서는 상태 관련 로직이 제거되므로 상태 관련 컴포넌트가 줄어들어 상태 추적이 용이하고 디버깅이 쉬워짐

#### 컨테이너 컴포넌트
* UI와 스타일은 담당하지 않고 상태를 정의하고 변경하며 비즈니스 로직을 포함하는 컨테이너
* 하위에 표현 컴포넌트들을 가지고 있으며 표현 컴포넌트에 상태값을 Props로 전달하고 Props를 수정할 수 있는 콜백 함수도 전달

#### 표현 컴포넌트
* 부모 컴포넌트로 부터 Props를 전달받아서 UI를 반환하는 기능만 담당
* 상태를 관리하지 않기 때문에 구현이 단순해짐

