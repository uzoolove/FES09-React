import BoardDetail from "@pages/board/BoardDetail";
import BoardList from "@pages/board/BoardList";
import BoardNew from "@pages/board/BoardNew";
import BoardResult from "@pages/board/BoardResult";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BoardList />
  },
  {
    path: "/boards",
    element: <BoardList />
  },
  {
    path: "/boards/:_id",
    element: <BoardDetail />
  },
  {
    path: "/boards/new",
    element: <BoardNew />
  },
  {
    path: "/boards/:_id/result",
    element: <BoardResult />
  }
]);

export default router;