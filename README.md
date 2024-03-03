# 멋쟁이 사자처럼 Front-End School 9기: React 프로그래밍
* GitHub Page에서 보기: <https://uzoolove.github.io/FES09-React>
* 소스 코드(GitHub): <https://github.com/uzoolove/FES09-React>
* 예제 테스트(GitHub Page): <https://uzoolove.github.io/FES09-React/workspace-ins>

# 수업 스케쥴 (일정은 변동 가능)
- <img src="https://raw.githubusercontent.com/uzoolove/FES09-React/main/images/FES_back.png" witdh="100">
## 1주차 (2024.02.26 ~ 2024.02.29, 4일)
* TodoList - vanillaJS 
* Counter 프로그램 - 라이브러리 개발
* TodoList - 라이브러리 이용
* TodoList - React

![title](https://raw.githubusercontent.com/uzoolove/FES09-React/main/images/FES_back.png)
![title](/images/FES_back.png){: width="100"}

## 2주차 (2024.03.04 ~ 2024.03.08, 5일)
* 리액트 란? 리액트 역사, 리액트 개발환경 설정, create-react-app, Vite
* 리액트 개발에 자주 사용하는 자바스크립트 문법
* JSX, 가상 DOM, 리액트 랜더링
* 리액트 컴포넌트(함수형 컴포넌트, 클래스 컴포넌트)와 라이프 사이클
* 리액트 훅, useState, useEffect

## 3주차 (2024.03.11 ~ 2024.03.14, 4일)
* 리액트 훅, useRef, useReducer
* 리액트 훅, useMemo, useCallback
* 사용자 정의 훅 만들기, 고차 컴포넌트
* Context API

## 4주차 (2024.03.18 ~ 2024.03.22, 5일)
* 리액트 Router
* 리액트 상태관리 라이브러리
* Recoil, Zustand
* HTTP 통신(Fetch API, Axios, React Query)
* CSR과 SSR, Next.js

## 5주차 (2024.03.25 ~ 2024.03.28, 4일)
* 백엔드 개발과 API 서버
* Styled components, Tailwind CSS
* 프로젝트 실습 - 로그인, JWT 토큰 인증
* 프로젝트 실습 - 게시물 관리

## 목차

### 1장 리액트 빌드업
* <https://uzoolove.github.io/FES09-React/workspace-ins/ch01-buildup>

### 2장 리액트 시작하기
* <https://uzoolove.github.io/FES09-React/workspace-ins/ch02-start>

### 3장 리액트 훅
* <https://uzoolove.github.io/FES09-React/workspace-ins/ch03-hooks>

### 4장 클래스 컴포넌트와 컴포넌트의 라이프 사이클
* <https://uzoolove.github.io/FES09-React/workspace-ins/ch04-class>

### 5장 고차 함수
* <https://uzoolove.github.io/FES09-React/workspace-ins/ch05-highorder>

### 6장 컨텍스트 API
* <https://uzoolove.github.io/FES09-React/workspace-ins/ch06-contextapi>

### 7장 리액트 라우터
* <https://uzoolove.github.io/FES09-React/workspace-ins/ch07-router>

### 8장 상태 관리 라이브러리
* <https://uzoolove.github.io/FES09-React/workspace-ins/ch08-globalstate>

### 9장 리액트에서 CSS 사용
* <https://uzoolove.github.io/FES09-React/workspace-ins/ch09-css>

### 10장 HTTP 통신과 Ajax
* <https://uzoolove.github.io/FES09-React/workspace-ins/ch10-ajax>

### 11장 백엔드 개발과 API 서버
* <https://uzoolove.github.io/FES09-React/workspace-ins/ch11-api>

### 12장 Next.js
* <https://uzoolove.github.io/FES09-React/workspace-ins/ch12-nextjs>

### 13장 프로젝트 준비
* <https://uzoolove.github.io/FES09-React/workspace-ins/ch13-skeleton>

# 개발환경 구축

## 프로그램 설치
* 본인의 OS에 맞는 버전 다운로드 후 설치
  - Nodejs 설치 <https://nodejs.org/en/download/>
  - Visual Studio Code 설치 <https://code.visualstudio.com/download>
  - Git 설치 <https://git-scm.com/downloads>

## Visual Studio Code 설정
1. VSCode 실행
  * 이미 실행중이면 File > New Window 메뉴로 새로운 VS Code 실행
2. File > Preferences > Settings
	* "Files: Auto Save": onFocusChange
	* "Editor: Font Size": 각자 맞춰서 조절
	* "Editor: Tab Size": 2
	* "Editor: Detect Indentation": 체크 해제
	* "Files: Readonly Include"
		- Add Pattern > workspace-ins/** 입력한 후 OK 선택
		- Add Pattern > sample/** 입력한 후 OK 선택
		- Readonly Include가 보이지 않을 경우 VSCode를 최신 버전(1.79 이상)으로 업데이트
3. Github 레퍼지토리 복사
	* View > Source Control > Clone Repository 선택
	* <nohyper>https</nohyper>://github.com/uzoolove/FES09-React.git 입력
	* 복사할 적당한 폴더 선택 후 Select as Repository Destination 선택
	* Open 선택

## React 개발용 웹브라우저 플러그인

### React Developer Tools
* 리액트 컴포넌트 트리를 확인하고 컴포넌트 내부 데이터를 한눈에 볼 수 있어서 디버깅에 도움
* Chrome: 크롬 웹스토어에서 React developer tools로 검색 후 설치
  - https://chromewebstore.google.com/search/react%20developer%20tools
* 설치하면 크롬 개발자 도구에 Components 탭이 추가됨

### Redux DevTools
* 리덕스 애플리케이션의 상태 변경을 추적하고 상태와 액션 정보들을 시각화 할 수 있는 개발, 디버깅 도구
* Chrome: 크롬 웹스토어에서 Redux DevTools로 검색 후 설치
  - https://chromewebstore.google.com/search/Redux%20DevTools
* 설치하면 크롬 개발자 도구에 Redux 탭이 추가됨

## 실습 준비
* sample 폴더 복사
  - sample/01/workspace 폴더를 복사해서 프로젝트 루트에 붙여넣기
* 완성된 강사의 코드는 workspace-ins 폴더에서 확인

## 웹 서버 구동
1. Live Server 설치
	- VS Code Extention에서 live server 검색 후 설치
2. workspace/index.html 파일을 열고 Live Server 실행
	- VS Code 우측 하단의 Go Live 클릭

## 실습 테스트
* 각 예제 클릭해서 테스트
  - DOM, Ajax 관련 실습은 새로운 화면으로 이동 후 테스트
  - Javascript 문법 관련 실습은 브라우저 개발자 도구 > 콘솔 탭에서 결과 확인
  - React 실습은 안내 화면을 참고해서 Node.js 환경에서 테스트

# 소스코드 공유
* 본인의 소스코드를 강사에게 공유하고 싶을때
* https://codeshare.io/KW8KVE 접속 후 문제 있는 소스코드를 붙여넣기한 후 채팅창에 알려주세요.

# 팁
* VSCode에서 소스코드 비교
  - 비교할 두개의 파일을 오픈
  - View > Command Palette > File: Compare Active File With... 선택
  - 비교할 대상 파일 선택

# 질문
* 10. 정진욱 — 오늘 오후 4:04 강사님 엔터치면 왜 input의 마지막 글자가 한 번씩 더 추가될까요??
  - Mac 에서는 onkeyup 이벤트로 등록

# 참고 사이트

## 병아리반 자바스크립트 자료
* Github: https://github.com/uzoolove/FES09-Javascript

## 온라인 코드 편집기(HTML, CSS, JS)
* CodePen: https://codepen.io

## React 웹 기반 개발 환경
* Codesandbox: https://codesandbox.io
* Stackblitz: https://stackblitz.com

## 바벨 REPL
* https://babeljs.io/repl
