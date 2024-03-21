import BoardDetail from "@pages/BoardDetail";
import BoardList from "@pages/BoardList";
import BoardNew from "@pages/BoardNew";
import BoardResult from "@pages/BoardResult";
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