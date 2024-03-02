# 멋쟁이 사자처럼 Front-End School 9기: React 프로그래밍
* 소스 코드(GitHub): <https://github.com/uzoolove/FES09-React>
* 코드 실행(GitHub Page): <https://uzoolove.github.io/FES09-React/workspace-ins>

## 주차별 내용(일정은 변동 가능)
### 1주차
* TodoList - vanillaJS 
* Counter 프로그램 - 라이브러리 개발
* TodoList - 라이브러리 이용
* TodoList - React

### 2주차
* 리액트 란? 리액트 역사, 리액트 개발환경 설정, create-react-app, Vite
* 리액트 개발에 필요한 자바스크립트 문법
* JSX, 가상 DOM, 리액트 랜더링
* 리액트 컴포넌트(함수형 컴포넌트, 클래스 컴포넌트)와 라이프 사이클
* 리액트 훅, useState, useEffect

### 3주차
* 리액트 훅, useRef, useReducer
* 리액트 훅, useMemo, useCallback
* 사용자 정의 훅 만들기, 고차 컴포넌트
* Context API

### 4주차
* 리액트 상태관리 라이브러리
* Recoil, Zustand
* 리액트 Router
* HTTP 통신(Fetch API, Axios, React Query)
* CSR과 SSR, Next.js

### 5주차
* 백엔드 개발과 API 서버
* Styled components, Tailwind CSS
* 프로젝트 실습 - 로그인, JWT 토큰 인증
* 프로젝트 실습 - 게시물 관리

<details>
  <summary>클릭하여 접기/펼치기</summary>
  <p>접기와 펼치기를 지원하는 내용입니다.</p>
</details>

<details>
  <summary></summary>
  <h2>수업 목차</h2>
  <h3>1장 리액트 빌드업</h3>
  * https://uzoolove.github.io/FES09-React/workspace-ins/ch01
  ### 2장 리액트 시작하기
  * https://uzoolove.github.io/FES09-React/workspace-ins/ch02
</details>

## 수업 목차
### 1장 리액트 빌드업
* https://uzoolove.github.io/FES09-React/workspace-ins/ch01

### 2장 리액트 시작하기
* https://uzoolove.github.io/FES09-React/workspace-ins/ch02

### 3장 리액트 훅

### 4장 클래스 컴포넌트와 컴포넌트의 라이프 사이클

### 5장 

## 개발환경 구축
### 프로그램 설치
* 본인의 OS에 맞는 버전 다운로드 후 설치
1. Nodejs 설치 <https://nodejs.org/en/download/>
2. Visual Studio Code 설치 <https://code.visualstudio.com/download>
3. Git 설치 <https://git-scm.com/downloads>

### Visual Studio Code 설정
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

### 실습 준비
* sample 폴더 복사
  - sample/01/workspace 폴더를 복사해서 프로젝트 루트에 붙여넣기
* 완성된 강사의 코드는 workspace-ins 폴더에서 확인

### 웹 서버 구동
1. Live Server 설치
	- VS Code Extention에서 live server 검색 후 설치
2. workspace/index.html 파일을 열고 Live Server 실행
	- VS Code 우측 하단의 Go Live 클릭

### 실습 테스트
* 각 예제 클릭해서 테스트
  - DOM, Ajax 관련 실습은 새로운 화면으로 이동 후 테스트
  - Javascript 문법 관련 실습은 브라우저 개발자 도구 > 콘솔 탭에서 결과 확인
  - React 실습은 안내 화면을 참고해서 Node.js 환경에서 테스트

## 소스코드 공유(본인의 소스코드를 강사에게 공유하고 싶을때)
* https://codeshare.io/KW8KVE 접속 후 문제 있는 소스코드를 붙여넣기한 후 채팅창에 알려주세요.

## 팁
* VSCode에서 소스코드 비교
  - 비교할 두개의 파일을 오픈
  - View > Command Palette > File: Compare Active File With... 선택
  - 비교할 대상 파일 선택

## 질문
* 10. 정진욱 — 오늘 오후 4:04 강사님 엔터치면 왜 input의 마지막 글자가 한 번씩 더 추가될까요??
  - Mac 에서는 onkeyup 이벤트로 등록

## 참고 사이트
### 병아리반 자바스크립트 자료
* Github: https://github.com/uzoolove/FES09-Javascript
### 온라인 코드 편집기(HTML, CSS, JS)
* CodePen: https://codepen.io
### React 웹 기반 개발 환경
* Codesandbox: https://codesandbox.io
* Stackblitz: https://stackblitz.com
### 바벨 REPL
* https://babeljs.io/repl
