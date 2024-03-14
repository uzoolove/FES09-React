import { Link } from "react-router-dom";

function TodoList(){
  return (
    <div id="main">
      <h2>할일 목록</h2>
      <div className="todo">
        <Link to="/add">추가</Link>
        <br/>
        <div className="search">
          <input type="text" autoFocus />
          <button type="button">검색</button>
        </div>
        <ul className="todolist">
          <li>
            <span>1</span>
            <Link to="/detail"><s>듄2 보기</s></Link>
            <Link to="/list">삭제</Link>
          </li>
          <li>
            <span>2</span>
            <Link to="/detail">10시간 잠자기</Link>
            <Link to="/ist">삭제</Link>
          </li>
          <li>
            <span>3</span>
            <Link to="/detail">리액트 과제 하기</Link>
            <Link to="/list">삭제</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TodoList;