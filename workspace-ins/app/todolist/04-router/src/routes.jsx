import { createBrowserRouter } from "react-router-dom";

import About from '@pages/About';
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
      { path: 'list/:_id', element: <TodoDetail /> },
      { path: 'add', element: <TodoAdd /> },
      { path: 'list/:_id/edit', element: <TodoEdit /> },
    ]
  }
]);

export default router;