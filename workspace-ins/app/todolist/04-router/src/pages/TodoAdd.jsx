import useAxios from "@hooks/useAxios";

function TodoAdd(){

  const onSubmit = () => {
    
  };






  return (
    <div id="main">
      <h2>할일 추가</h2>
      <div className="todo">
        <form onSubmit={ onSubmit }>
          <label htmlFor="title">제목 :</label>
          <input type="text" id="title" autoFocus />
          <br/>
          <label htmlFor="content">내용 :</label>
          <textarea id="content" cols="25" rows="8" />
          <br/>
          <button type="submit">추가</button>
          <button type="reset">취소</button>
        </form>
      </div>
    </div>
  );
}

export default TodoAdd;