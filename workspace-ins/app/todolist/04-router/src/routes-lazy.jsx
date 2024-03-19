import { Navigate, createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const About = lazy(() => import('@pages/About'));
const Home = lazy(() => import('@pages/Home'));
const TodoAdd = lazy(() => import('@pages/TodoAdd'));
const TodoDetail = lazy(() => import('@pages/TodoDetail'));
const TodoEdit = lazy(() => import('@pages/TodoEdit'));
const TodoList = lazy(() => import('@pages/TodoList'));
const ErrorPage = lazy(() => import('@pages/ErrorPage'));
const Layout = lazy(() => import('@components/Layout'));


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      // { index: true, element: <Home /> },
      { index: true, element: <Navigate to="/home" /> },
      { path: 'home', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'list', element: <TodoList /> },
      { 
        path: 'list/:_id', 
        element: <TodoDetail />,
        children: [
          { path: 'edit', element: <TodoEdit /> }
        ]
      },
      { path: 'add', element: <TodoAdd /> },
    ]
  }
]);

export default router;