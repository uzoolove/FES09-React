function TodoAdd(){
  return (
    <div id="main">
      <h2>할일 추가</h2>
      <div className="todo">
        <form>
          <label htmlFor="title">제목 :</label>
          <input type="text" id="title" autoFocus />
          <br/>
          <label htmlFor="content">내용 :</label>
          <input type="text" id="content" />
          <br/>
          <a href="./tododetail.html">추가</a>
          <a href="./todolist.html">취소</a>
        </form>
      </div>
    </div>
  );
}

export default TodoAdd;