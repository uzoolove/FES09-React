import { Link } from "react-router-dom";
import useAxios from '@hooks/useAxios';
import TodoListItem from "./TodoListItem";

function TodoList(){

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