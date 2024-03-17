# TODO List 앱 - 라우팅 적용
## 1단계
* HTML 코드를 기반으로 리액트 컴포넌트 생성
* 리액트 라우터 적용
* a 태그를 Link로 수정

### 프로젝트 생성
* workspace/app/todolist 폴더로 이동 후 다음 명령 실행
  ```powershell
  npm init vite
  ```
  - 프로젝트 명: 04-router
  - 개발환경 선택: React
  - 개발언어 선택: JavaScript

  ```powershell
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
  ```jsx
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
  ```jsx
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
  ```jsx
  import { RouterProvider } from "react-router-dom";
  import router from "@/routes";

  function App() {
    return (
      <RouterProvider router={ router } />
    );
  }

  export default App;
  ```

### 링크 확인
* 링크가 제대로 동작하지 않는 부분 수정
  - a 태그 대신 Link로 수정
  - href 속성을 to로 수정
  - 링크를 라우터에 등록한 URL로 수정
* Header.jsx
  ```jsx
  <Link to="/home">Home</Link>
  <Link to="/about">About</Link>
  <Link to="/list">TodoList</Link>
  ```

## 2단계
* axios로 API 서버 호출

### useAxios 커스텀 훅 작성
* hooks/useAxios.jsx 작성
  ```jsx
  import { useEffect, useState } from "react";
  import axios from 'axios';

  axios.defaults.baseURL = 'https://todo-api.frontendschool.shop/api';
  axios.defaults.timeout = 3000;

  function useAxios(fetchParams){
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      request(fetchParams);
    }, []);  // 마운트때 한번만 호출됨

    const request = async params => {
      try{
        setIsLoading(true);
        const res = await axios(params.url);
        console.log(res);
        setError(null);
        setData(res.data);      
      }catch(err){
        // 에러 처리
        console.error(err.message);
        setData(null);
        setError({ message: '일시적인 문제로 인해 작업에 실패했습니다. 잠시 후 다시 요청해 주시기 바랍니다.' });
      }finally{
        setIsLoading(false);
      }
    };

    return { isLoading, data, error };
  }

  export default useAxios;
  ```

### TodoList 컴포넌트 분리
* TodoListItem.jsx 작성
  ```jsx
  import { Link } from "react-router-dom";
  import PropTypes from 'prop-types';

  TodoListItem.propTypes = {
    item: PropTypes.shape({
      _id: PropTypes.number,
      title: PropTypes.string,
      done: PropTypes.bool
    })
  };

  function TodoListItem({ item }){
    return (
      <li>
        <span>{ item._id }</span>
        <Link to={ '/list/' + item._id }>{ item.done ? <s>{ item.title }</s> : item.title }</Link>
        <Link to="/list">삭제</Link>
      </li>
    );
  }

  export default TodoListItem;
  ```

### API 서버 호출
#### 할일 목록 조회
* TodoList.jsx 수정
* API 서버 호출
* 할일 목록 구성
* 할일 목록 출력
  ```jsx
  import useAxios from "../hooks/useAxios";
  import TodoListItem from "./TodoListItem";

  function TodoList(){
    // API 서버 호출
    const { data } = useAxios({
      url: '/todolist'
    });
    // 할일 목록 구성
    const itemList = data?.items.map(item => <TodoListItem key={ item._id } item={ item } />);

    return (
      <div id="main">
        <h2>할일 목록</h2>
        <div className="todo">
          <a href="./add">추가</a>
          <br/>
          <div className="search">
            <input type="text" autoFocus />
            <button type="button">검색</button>
          </div>
          <ul className="todolist">
            {/* 할일 목록 출력 */}
            { itemList }
          </ul>
        </div>
      </div>
    );
  }

  export default TodoList;
  ```

#### 할일 상세 보기
* routes.jsx의 TodoDetail 라우팅 경로 수정
  ```jsx
  { path: 'list/:_id', element: <TodoDetail /> }
  ```

* TodoDetail.jsx 수정
  ```jsx
  import { Link, useParams } from "react-router-dom";
  import useAxios from "../hooks/useAxios";

  function TodoDetail(){
    // URL의 파라미터 추출
    // 라우터에 'list/:_id'로 등록된 컴포넌트가 호출되는 경우
    // URL이 list/3일 때 params는 { _id: 3 }이 된다.
    const params = useParams();
    // API 서버 호출
    const { data } = useAxios({
      url: `/todolist/${params._id}`
    });

    // API 서버의 응답 데이터
    const item = data?.item;

    return (
      <div id="main">
        <h2>할일 상세 보기</h2>
        { item && ( // 조건부 출력
          <div className="todo">
            <div>
              제목 : { item.title }
            </div>
            <div>
              내용 : { item.content }
            </div>
            <div>
              상태 : { item.done ? '완료' : '미완료' }
            </div>
            <div>
              작성일 : { item.createdAt }
            </div>
            <div>
              수정일 : { item.updatedAt }
            </div>
            <Link to="/edit">수정</Link>
            <Link to="/list">목록</Link>
          </div>
        ) }
      </div>
    );
  }

  export default TodoDetail;
  ```

#### 할일 등록
* 등록 버튼 클릭 시 호출되는 이벤트 핸들러 안에서 기존 useAxios 커스텀 훅은 사용 불가
  - 리액트 훅은 컴포넌트 루트에서만 사용 가능하므로
  - useAxios 커스텀 훅을 대체할 useAxiosInstance 커스텀 훅 작성
* hooks/useAxiosInstance.jsx 작성
  ```jsx
  import axios from 'axios';
  const API_SERVER = 'https://todo-api.frontendschool.shop/api';

  function useAxiosInstance(){
    // axios 공통 설정을 추가한 axios 인스턴스를 생성해서 반환한다.
    const instance = axios.create({
      baseURL: API_SERVER,  // 기본 URL
      timeout: 1000*5,  // 지정한 시간이 지나도록 응답이 완료되지 않으면 timeout 에러 발생
      headers: {
        'content-type': 'application/json', // request의 데이터 타입
        accept: 'application/json'  // response의 데이터 타입
      },
    });
    
    return instance;
  }

  export default useAxiosInstance;
  ```

* TodoAdd.jsx 수정
  - react-hook-form으로 form 요소 관리
    ```jsx
    import { useForm } from "react-hook-form";
    ```

    ```jsx
    const { register, handleSubmit, reset, setFocus } = useForm({
      title: '',
      content: ''
    });
    ```

    ```jsx
    <form>
      <label htmlFor="title">제목</label>
      <input type="text" id="title" autoFocus { ...register('title', {
          required: '제목을 입력하세요.',
        }) } />
      <br/>
      <label htmlFor="content">내용</label>
      <textarea id="content" cols="23" rows="5" { ...register('content', {
          required: '내용을 입력하세요.',
        }) } />
      <br/>
      <button type="submit">추가</button>
      {/* 이전 페이지로 이동 */}
      <button type="reset" onClick={ () => navigate(-1) }>취소</button>
    </form>
    ```

  - submit 이벤트 추가
    ```jsx
    <form onSubmit={ handleSubmit(onSubmit) }>
    ```

    ```jsx
    // submit 이벤트가 발생하면 react-hook-form에 의해 입력 값 검증이 완료된 후 호출됨
    const onSubmit = async formData => {
      try{
        await axios.post('/todolist', formData);
        alert('할일이 추가 되었습니다.');
        setFocus('title');
        reset();
      }catch(err){
        console.error(err);
        alert('할일 추가에 실패했습니다.');
      }
    };
    ```


#### 할일 수정
* routes.jsx의 TodoEdit 라우팅 경로 수정
  ```jsx
  { path: 'list/:_id/edit', element: <TodoEdit /> }
  ```

* TodoDetail.jsx의 Link 경로 수정
  ```jsx
  <Link to="edit">수정</Link>
  ```

* TodoEdit.jsx 수정
  - 할일 상세 정보 조회
    ```jsx
    import { useState, useEffect } from "react";
    import { useParams, useNavigate } from "react-router-dom";
    import useAxiosInstance from "@hooks/useAxiosInstance";
    ```

    ```jsx
    const { _id } = useParams();
    const [item, setItem] = useState(null);
    const axios = useAxiosInstance();
    const navigate = useNavigate();    

    // API 서버로부터 상세 정보 조회
    const fetchDetail = async () => {
      const response = await axios.get(`/todolist/${_id}`);
      setItem(response.data.item);
    }

    useEffect(() => {
      // useEffect의 setup 함수를 async로 만들면 의존성이 변경될 때 함수의 흐름을 제어하기 힘들어 디버깅이 이려워질 수 있어서 권장하지 않음.
      fetchDetail();
    }, []);
    ```

  - react-hook-form으로 form 요소 관리
    ```jsx
    import { useForm } from "react-hook-form";
    ```

    ```jsx
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
      // item이 변경되면 form 값을 변경된 item으로 초기화 한다.
      if(item) reset({
        title: item.title,
        content: item.content,
        done: item.done
      });
    }, [item]);
    ```

  - form에 react-hook-form 적용
    ```jsx
    { item && (
      <div className="todo">
        <form>
          <label htmlFor="title">제목 :</label>
          <input type="text" id="title" autoFocus { ...register('title', {
              required: '제목을 입력하세요.',
            }) } />
          <br/>
          <label htmlFor="content">내용 :</label>
          <textarea rows="5" cols="23" id="content" { ...register('content', {
            required: '내용을 입력하세요.',
          }) } />
          <br/>
          <label htmlFor="done">완료 :</label>
          <input type="checkbox" id="done" defaultChecked={ item.done } { ...register('done') } />
          <br/>
          <button type="submit">수정</button>
          <button type="reset" onClick={ () => navigate(-1) }>취소</button>
        </form>
      </div>
    ) }
    ```

  - submit 이벤트 추가
    ```jsx
    <form onSubmit={ handleSubmit(onSubmit) }>
    ```

    ```jsx
    const onSubmit = async formData => {
      await axios.patch(`/todolist/${_id}`, formData);
      navigate(`/list/${_id}`); // 페이지 이동
    };
    ```

#### 할일 삭제
* TodoList.jsx 수정
  - 삭제 버튼 클릭 시 이벤트 핸들러 안에서 기존 useAxios 커스텀 훅은 사용 불가
    + 리액트 훅은 컴포넌트 루트에서만 사용 가능
  - useAxios 커스텀 훅을 useAxiosInstance 커스텀 훅으로 변경
  - 다음 코드 삭제
    ```jsx
    const { data } = useAxios({
      url: '/todolist'
    });
    ```

  - 다음 코드로 변경
    ```jsx
    const [items, setItems] = useState();
    const fetchList = async () => {
      const response = await axios.get('/todolist');
      setItems(response.data.items);
    }

    useEffect(() => {
      fetchList();
    }, []);
    ```

  - 삭제 이벤트 추가
    ```jsx
    const handleDelete = async _id => {
      try{
        await axios.delete(`/todolist/${_id}`);
        alert('할일이 삭제 되었습니다.');
        fetchList();
      }catch(err){
        console.error(err);
        alert('할일 삭제에 실패했습니다.');
      }
    }
    ```

    ```jsx
    const itemList = items?.map(item => <TodoListItem key={ item._id } item={ item } handleDelete={ handleDelete }/>);
    ```

* TodoListItem.jsx 수정
  - Link를 button으로 바꾸고 클릭 이벤트 추가
    ```jsx
    <button type="button" onClick={ () => handleDelete(item._id) } >삭제</button>
    ```

## 3단계
* NavLink 추가
* 동적 세그먼트로 리액트 라우터 수정
* 이벤트 추가
* axios로 API 서버 호출

### NavLink 추가
* index.css 파일에 메뉴 관련 스타일 추가
  ```css
  .menu {
    background-color: white;
  }

  .menu-dark {
    background-color: gray;
  }
  ```

* Header.jsx에 NavLink 추가
  ```jsx
  <NavLink className={ ({ isActive }) => isActive ? 'menu-dark' : 'menu' } to="/home">Home</NavLink>
  <NavLink className={ ({ isActive }) => isActive ? 'menu-dark' : 'menu' } to="/about">About</NavLink>
  <NavLink className={ ({ isActive }) => isActive ? 'menu-dark' : 'menu' } to="/list">TodoList</NavLink>
  ```

### Navigate 컴포넌트 사용
* routes.jsx 파일에 추가
```jsx
{ path: '/', element: <Navigate to="/home" /> }
```

### 중첩 라우트
* 할일 상세 보기 화면에서 수정 버튼을 누르면 수정화면이 아래에 나오도록 변경
* routes.jsx
  - TodoEdit를 TodoDetail 하위로 이동
    ```jsx
    { 
      path: 'list/:_id',
      element: <TodoDetail />,
      children: [
        { path: 'edit', element: <TodoEdit /> }
      ]
    },
  ```

* TodoDetail.jsx에 Outlet 컴포넌트 추가
  ```jsx
  <div id="main">
    <h2>할일 상세 보기</h2>
    { item && (
      ......
    ) }
    <Outlet />
  </div>
  ```

#### 할일 수정 후 상세보기 정보가 갱신되지 않는 문제
* /list/:_id/edit에서 /list/:_id로 이동 될 때 중첩 라우트로 구성되지 않았을 때는 URL이 변경 되면서 매칭되는 컴포넌트가 마운트 되면 API 서버를 호출하고 상세 정보를 다시 출력
  - useAxios.jsx
    ```jsx
    useEffect(() => {
      request(fetchParams);
    }, []);  // 마운트때 한번만 호출됨
    ```

* /list/:_id/edit를 /list/:_id의 자식으로 라우팅 구성을 하면 URL이 변경되더라도 이미 마운트 된 부모 컴포넌트는 리렌더링만 되므로 기존의 상태값(data)이 바뀌지 않았다면 화면도 바뀌지 않음

##### 해결 방법 1
* data를 변경하는 함수를 useAxios에서 -> TodoDetail -> TodoEdit로 전달 하고 TodoEdit에서 전달 받은 함수를 이용해서 상태 변경
* useAxios.jsx
  ```jsx
  return { isLoading, data, error, setData };
  ```

* TodoEdit.jsx에서 useOutletContext 훅 사용
  - TodoDetail에서 TodoEdit는 Outlet 컴포넌트로 지정한 자식 컴포넌트이고 이때는 자식 컴포넌트에 데이터를 전달할때 props 대신 context 속성을 사용하고 자식 컴포넌트는 useOutletContext 훅을 이용해서 꺼낼 수 있음
  - TodoDetail.jsx
    ```jsx
    const { data, setData } = useAxios({
      url: `/todolist/${params._id}`
    });

    <Outlet context={ setData } />
    ```

  - TodoEdit.jsx
    ```jsx
    import { useParams, useNavigate, useOutletContext } from "react-router-dom";
    ```
    ```jsx
    const setData = useOutletContext();
    ```
    ```jsx
    alert('할일을 수정했습니다.');
    setData({ item: { ...item, ...formData }});
    ```

* 사용자가 입력한 제목, 내용, 완료 여부는 상세 보기 화면에 반영이 되지만 수정일은 서버에서 생성되는 데이터이므로 갱신되지 않음

#### 해결 방법 2
* TodoDetail에서 API 서버 재호출
  - 다음 코드 제거
    ```jsx
    import useAxios from "../hooks/useAxios";
    ```
    ```jsx
    const { data, setData } = useAxios({
      url: `/todolist/${params._id}`
    });
    ```
    ```jsx
    const item = data?.item;
    ```

  - 다음 코드 추가
    ```jsx
    import useAxiosInstance from "@hooks/useAxiosInstance";
    ```
    ```jsx
    const axios = useAxiosInstance();
    const [item, setItem] = useState();

    const fetchDetail = async () => {
      const response = await axios.get(`/todolist/${params._id}`);
      setItem(response.data.item);
    }

    useEffect(() => {
      fetchDetail();
    }, []);
    ```
    ```jsx
    <Outlet context={{ reFetch: fetchDetail }} />
    ```

* TodoEdit.jsx에서 useOutletContext 훅 사용
  - TodoDetail에서 TodoEdit는 Outlet 컴포넌트로 지정한 자식 컴포넌트이고 이때는 자식 컴포넌트에 데이터를 전달할때 props 대신 context 속성을 사용하고 자식 컴포넌트는 useOutletContext 훅을 이용해서 꺼낼 수 있음
  - TodoEdit.jsx
    ```jsx
    import { useParams, useNavigate, useOutletContext } from "react-router-dom";
    ```
    ```jsx
    const { reFetch } = useOutletContext();
    ```
    ```jsx
    alert('할일을 수정했습니다.');
    reFetch();
    ```

### useRouteError 훅 사용
#### ErrorPage.jsx
```jsx
import { useRouteError } from "react-router-dom";

function ErrorPage(){
  const err = useRouteError();
  const message = err.status === 404 ? '존재하지 않는 페이지입니다.' : '예상하지 못한 에러가 발생했습니다.';
  return (
    <div id="main">
      <div className="todo">
        <h2>에러 발생</h2>
        <p>{ message }</p>
      </div>
    </div>
  );
}

export default ErrorPage;
```

### 레이지 로딩 적용
* routes.jsx
  ```jsx
  import { lazy } from 'react';
  ```
  ```jsx
  const Layout = lazy(() => import('@components/Layout.jsx'));
  const About = lazy(() => import('@pages/About.jsx'));
  const Home = lazy(() => import('@pages/Home.jsx'));
  const TodoAdd = lazy(() => import('@pages/TodoAdd.jsx'));
  const TodoDetail = lazy(() => import('@pages/TodoDetail.jsx'));
  const TodoEdit = lazy(() => import('@pages/TodoEdit.jsx'));
  const TodoList = lazy(() => import('@pages/TodoList.jsx'));
  const ErrorPage = lazy(() => import('@pages/ErrorPage.jsx'));
  ```

### Suspense 컴포넌트 사용
* App.jsx
  ```jsx
  import { Suspense } from "react";
  ```
  ```jsx
  <Suspense fallback={ <div>Loading...</div> }>
    <RouterProvider router={ router } />
  </Suspense>
  ```

## 4단계
* 검색
* Pagination
