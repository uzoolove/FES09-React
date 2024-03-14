import { Link } from "react-router-dom";
import useAxios from '@hooks/useAxios';
import TodoListItem from "./TodoListItem";

function TodoList(){

  // TODO: 로딩중에 스피너 보여주기
  // TODO: error 있으면 출력하기
  // TODO: index.css에 스타일 추가하기
  
  const { isLoading, data, error } = useAxios({
    url: '/todolist?delay=1000'
  });

  const itemList = data?.items.map(item => <TodoListItem key={ item._id } item={ item } />);

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
          { itemList }
        </ul>
      </div>
    </div>
  );
}

export default TodoList;