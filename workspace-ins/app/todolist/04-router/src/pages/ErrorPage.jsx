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