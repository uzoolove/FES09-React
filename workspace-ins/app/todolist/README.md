# TODO List 앱 - 라우팅 적용
## 1단계
* HTML 코드를 기반으로 리액트 컴포넌트 생성
* 리액트 라우터 적용
* a 태그를 Link로 수정

### 프로젝트 생성
* workspace/app/todolist 폴더로 이동 후 다음 명령 실행
  ```
  npm init vite
  ```
  - 프로젝트 명: 04-router
  - 개발환경 선택: React
  - 개발언어 선택: JavaScript

  ```
  # 생성한 프로젝트 폴더로 이동
  cd 04-router
  # 기본 패키지 설치
  npm i
  # 추가 패키지 설치
  npm i axios immer react-router-dom
  # 개발 서버 실행
  npm run dev
  ```

### UI 컴포넌트 작성
* app/todolist/sample 폴더의 html 코드를 컴포넌트로 이동
  - header 태그는 Header.jsx에서 사용
  - footer 태그는 Footer.jsx에서 사용
  - div id="main" 태그는 각 페이지의 컴포넌트에서 사용
  - JSX 문법에 맞게 수정

#### 공통 컴포넌트
* src/components 폴더 생성
  - Footer.jsx
  - Header.jsx

#### 페이지별 컴포넌트
* src/pages 폴더 생성
  - About.jsx
  - ErrorPage.jsx
  - Home.jsx
  - TodoAdd.jsx
  - TodoDetail.jsx
  - TodoEdit.jsx
  - TodoList.jsx

### vite.config.js에 alias 추가
* 참고: <https://uzoolove.github.io/FES09-React/workspace-ins/ch02-start/#viteconfigjs>

### 레이아웃 컴포넌트 작성
* src/components/Layout.jsx 파일 생성
  ```
  import Footer from "@components/Footer";
  import Header from "@components/Header";
  import { Outlet } from 'react-router-dom';

  const Layout = function(){
    return (
      <div className="todoapp">
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
  };

  export default Layout;
  ```

### 라우터 컴포넌트 작성
* src/routes.jsx 파일 생성
* BrowserRouter 사용
  ```
  import { createBrowserRouter } from "react-router-dom";

  import About from '@pages/About.jsx';
  import Home from '@pages/Home.jsx';
  import TodoAdd from '@pages/TodoAdd.jsx';
  import TodoDetail from '@pages/TodoDetail.jsx';
  import TodoEdit from '@pages/TodoEdit.jsx';
  import TodoList from '@pages/TodoList.jsx';
  import ErrorPage from '@pages/ErrorPage.jsx';
  import Layout from '@components/Layout.jsx';

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        { path: 'home', element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'list', element: <TodoList /> },
        { path: 'detail', element: <TodoDetail /> },
        { path: 'add', element: <TodoAdd /> },
        { path: 'edit', element: <TodoEdit /> },
      ]
    }
  ]);

  export default router;
  ```

### App.jsx 작성
* 리액트 라우터 추가
  ```
  import { RouterProvider } from "react-router-dom";
  import router from "./routes";

  function App() {
    return (
      <RouterProvider router={ router } />
    );
  }

  export default App;
  ```

### 링크 확인
* 링크가 제대로 동작하지 않는 부분 수정
  - a 대신 Link로, href -> to
  - 링크를 라우터에 등록한 URL로 수정
* Header.jsx
  ```
  <Link to="/home">Home</Link>
  <Link to="/about">About</Link>
  <Link to="/list">TodoList</Link>
  ```
