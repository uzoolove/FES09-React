import { Link } from "react-router-dom";

function TodoEdit(){
  return (
    <div id="main">
      <h2>할일 수정</h2>
      <div className="todo">
        <form>
          <label htmlFor="title">제목 :</label>
          <input type="text" id="title" value="할일1" autoFocus />
          <br/>
          <label htmlFor="content">내용 :</label>
          <input type="text" id="content" value="내용1" />
          <br/>
          <label htmlFor="done">완료 :</label>
          <input type="checkbox" id="done" checked />
          <br/>
          <Link to="/detail">수정</Link>
          <Link to="/detail">취소</Link>
        </form>
      </div>
    </div>
  );
}

export default TodoEdit;