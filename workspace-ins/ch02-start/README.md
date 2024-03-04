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
  * 상태가 변경되면 뷰(UI, HTML)를 즉시 랜더링
  * 단방향 데이터 바인딩: State -> View, View -> Event Handler -> setState() -> State
    - View의 변경이 직접 State를 변경시키지 않고 Event Handler를 통해서만 변경 가능하게 구현해야 하므로 상태가 변경되는 과정에 대한 예측과 추적이 용이함

#### JSX (Javascript XML)
* HTML 마크업과 비슷한 문법을 사용해서 UI 정의하면 Babel 같은 변환 도구에 의해 자바스크립트 코드로 변환됨
  ```
  <div class="todolist">
    <ul>
      <li>두부</li>
      <li>계란</li>
      <li>라면</li>
    </ul>
  </div>
  ```
  ```
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
* 상태가 변경되어서 뷰를 랜더링할때 브라우저 DOM에 바로 적용하지 않고 브라우저 DOM과 유사한 트리구조의 가상 DOM(자바스크립트 객체)을 먼저 수정한 후 수정전의 가상 DOM과 수정후의 가상 DOM을 비교해서 바뀐 부분만 브라우저 DOM에 실제 반영
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
  ```
  npx create-react-app cra
  # 생성한 프로젝트 폴더로 이동
  cd 01
  # 개발 서버 실행
  npm start
  ```

#### Vite
* 프랑스어로 "빠르다"는 뜻
* Webpack을 번들러로 사용하는 CRA 대비 Esbuild와 Rollup을 번들러로 사용하면서 10~100배 빠른 속도로 개발 서버 구동
* CRA는 리액트만 지원하는 반면 Vite는 Vanilla JS, React, Svelte, Solid 등의 다양한 SPA 개발 환경을 지원
* workspace/ch02-start 폴더로 이동 후 다음 명령 실행
  ```
  npm init vite@latest
  ```
  - 프로젝트 명: vite
  - 개발환경 선택: React
  - 개발언어 선택: JavaScript

  ```
  # 생성한 프로젝트 폴더로 이동
  cd 02
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

## 2-3 리액트 애플리케이션 배포
### 프로젝트 빌드
* 프로덕션 배포용 파일 생성
  ```
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

### 서버 실행
* CRA
  ```
  npx serve -s build
  ```
* Vite
  ```
  npx serve -s dist
  ```
* -s 옵션: 리액트는 index.html 파일 하나에서 모든 페이지를 서비스하므로 클라이언트가 요청한 모든 URL에 대해서 index.html을 응답함

## 2-4 JSX

### JSX란?
* JSX(JavaScript XML)는 자바스크립트 파일 내에 HTML과 유사한 마크업을 작성할 수 있게 해주는 자바스크립트 확장 구문
* 리액트와 JSX는 별개이기 때문에 리액트에서 JSX 사용이 필수는 아님
  - React.createElement() 직접 사용

### JSX 규칙
1 단일 루트 요소를 반환해야 한다.
* JSX는 자바스크립트 객체로 변환되는데 함수가 여러 객체를 반환 할 수 없으므로 단일 객체를 반환하도록 해야함
* Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>? 에러 발생
  
  ```
  return (
    <h1>Todo List</h1>
    <div>...</div>
  );
  ```

* 루트 요소를 추가
  ```
  return (
    <div>
      <h1>Todo List</h1>
      <div>...</div>
    </div>
  );
  ```

* Fragment 사용
  - 렌더링 결과에는 영향을 미치지 않음

  ```
  return (
    <Fragment>
      <h1>Todo List</h1>
      <div>...</div>
    </Fragment>
  );
  ```

* Fragment의 약어 사용
  ```
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
    ```
    <img src="./logo.png">
    <br>
    <ul>
      <li>두부
      <li>계란
      <li>라면
    </ul>
    ```

  - JSX 예시
    ```
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
  ```
  <div id="todolist" class="todo"></div>
  ```

* 자바스크립트에서 class 속성 추가
  ```
  document.querySelector('#todolist').className = 'todo';
  ```

* JSX에서 class 속성 추가
  ```
  <div id="todolist" className="todo"></div>
  ```

* JSX에서 class 속성을 동적으로 추가
  ```
  const todoClass = 'todo';
  <div id="todolist" className={ todoClass }></div>
  ```

4 보간법{ }을 사용할 때에는 표현식을 사용해야 함
* { } 안에는 변수값, 메서드 리턴값 등 값만 사용 가능
* if문, for 문 등은 사용할 수 없음
  - if문 대신 삼항 연산자 사용
    ```
    (item.done ? <s>두부</s> : '두부')
    ```
  - for 문 대신 forEach(), map() 등 사용
    ```
    {
      for(let i=0; i<itemList.length; i++){
        return item.title;
      }
    }
    ```
    ```
    { itemList.map(item => item.title) }
    ```

5 보간된 HTML 문자열은 인코딩됨
* { } 내부의 값이 HTML 코드가 포함된 문자열인 경우 HTML 태그를 인코딩해서 처리하므로 브라우저에는 태그가 그대로 보여짐
  - XSS (Cross Site Scripting) 같은 공격에 대비하기 위한 규칙

* 예시
  ```
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

    ```
    const App(){
      // { msg }를 <span dangerouslySetInnerHTML={{ __html: msg }}></span>로 변경
      const msg = '<i>World</i>';
      return <span>Hello <span dangerouslySetInnerHTML={{ __html: msg }}></span></span>
    }
    ```
  2. JSX는 XSS 공격에 안전하므로 JSX를 사용

    ```
    const App(){
      // const msg = '<i>World</i>';
      const msg = <i>World</i>;
      return <span>Hello { msg }</span>
    }
    ```


