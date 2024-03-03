# 1장 리액트 빌드업
* 소스 코드(GitHub): <https://github.com/uzoolove/FES09-React/tree/main/workspace-ins/ch01-buildup>
* 코드 실행(GitHub Page): <https://uzoolove.github.io/FES09-React/workspace-ins/index.html#01>

## 1-1 웹 개발의 변천사

### 전통적인 웹 애플리케이션
* JSP, Servlet, ASP, PHP 등으로 개발
* 브라우저는 페이지 단위로 요청을 보내며 웹서버는 완성된 페이지를(HTML) 응답
* 화면(View, UI)를 만드는 역할을 백엔드의 웹서버가 전담
* 브라우저 화면의 일부만 갱신이 필요한 경우에도 페이지 전체를 서버에 요청해서 받아오므로 매번 리플래시 발생해서 UX에 부정적

### 멀티 페이지 애플리케이션
* Ajax, jQuery 등 클라이언트 자바스크립트 API 사용
* 서버에 페이지 단위로 요청하지만 같은 페이지 내에서의 갱신은 Ajax를 이용해서 서버와 통신후 DOM API로 리플래시 없이 화면 갱신
* 전체 화면 리플래시가 줄어들어서 사용자 UX에 긍정적

### 단일 페이지 애플리케이션(SPA, Single Page Application)
* 하나의 HTML 페이지에서 애플리케이션의 모든 화면과 기능 제공
* 단점
  - 모든 기능을 한 페이지에서 다 구현하다 보니 상태(데이터) 관리가 어려움
  - 자바스크립트에서 HTML 코드를 생성해야 하므로 개발 생산성 저하
  - 브라우저의 DOM을 자주 갱신하다보면 성능 저하 발생
* React의 특징
  - 내장된 상태 관리 기능과 서드파티 라이브러리가 많음
  - JSX를 이용해서 HTML 생산성이 높음
  - 가상 DOM을 이용해서 성능 저하 최소

## 1-2 리액트 개발에 자주 사용하는 자바스크립트 문법
* Arrow Function
* 구조 분해 할당
* 전개 연산자
* 삼항 조건 연산자
* module
* Promise, async/await
* 배열 메서드
* 메모이제이션
