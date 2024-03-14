function TodoList(){
  return (
    <div id="main">
      <h2>할일 목록</h2>
      <div className="todo">
        <a href="./todoadd.html">추가</a>
        <br/>
        <div className="search">
          <input type="text" autoFocus />
          <button type="button">검색</button>
        </div>
        <ul className="todolist">
          <li>
            <span>1</span>
            <a href="./tododetail.html"><s>듄2 보기</s></a>
            <a href="./todolist.html">삭제</a>
          </li>
          <li>
            <span>2</span>
            <a href="./tododetail.html">10시간 잠자기</a>
            <a href="./todolist.html">삭제</a>
          </li>
          <li>
            <span>3</span>
            <a href="./tododetail.html">리액트 과제 하기</a>
            <a href="./todolist.html">삭제</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TodoList;