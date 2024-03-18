import { Link } from "react-router-dom";
import useAxios from '@hooks/useAxios';
import TodoListItem from "./TodoListItem";
import { ReactCsspin } from 'react-csspin';
import 'react-csspin/dist/style.css';
import useAxiosInstance from "@hooks/useAxiosInstance";

function TodoList(){
  const axios = useAxiosInstance();
  
  const { isLoading, data, error } = useAxios({
    url: '/todolist?delay=1000'
  });

  const handleDelete = async _id => {
    try{
      await axios.delete(`/todolist/${ _id }`);
      alert('할일이 삭제 되었습니다.');
      // API 서버에서 목록 조회
      
    }catch(err){
      console.error(err);
      alert('할일 삭제에 실패했습니다.');
    }
  };

  const itemList = data?.items.map(item => <TodoListItem key={ item._id } item={ item } handleDelete={ handleDelete } />);



  return (
    <div id="main">
      <h2>할일 목록</h2>

      { isLoading &&
        <ReactCsspin message="로딩중..." />
      }

      { error && 
        <p style={{ color: 'red' }}>{ error.message }</p>
      }
      
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