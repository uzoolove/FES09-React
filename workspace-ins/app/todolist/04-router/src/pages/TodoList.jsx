import { Link } from "react-router-dom";
import TodoListItem from "@pages/TodoListItem";
import useAxiosInstance from "@hooks/useAxiosInstance";
import { useEffect, useState } from "react";

function TodoList(){
  const axios = useAxiosInstance();
  // 할일 목록
  const [data, setData] = useState();
  
  const fetchList = async () => {
    const response = await axios.get('/todolist');
    setData(response.data);
  };

  // 마운트 되면 최초 한번 목록 조회
  useEffect(() => {
    fetchList();
  }, []);

  const handleDelete = async _id => {
    try{
      await axios.delete(`/todolist/${ _id }`);
      alert('할일이 삭제 되었습니다.');
      // API 서버에서 목록 조회
      fetchList();
    }catch(err){
      console.error(err);
      alert('할일 삭제에 실패했습니다.');
    }
  };

  const itemList = data?.items.map(item => <TodoListItem key={ item._id } item={ item } handleDelete={ handleDelete } />);

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