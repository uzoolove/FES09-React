import BoardDetail from "@pages/BoardDetail";
import BoardList from "@pages/BoardList";
import BoardNew from "@pages/BoardNew";
import BoardResult from "@pages/BoardResult";

function App(){
  return (
    <>
      <BoardList />
      <BoardDetail />
      <BoardNew />
      <BoardResult />
    </>
  );
}

export default App;