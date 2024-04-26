import TodoListItem from "@/app/list/TodoListItem";

async function getTodoList(){
  const res = await fetch('http://localhost:3000/api/todolist');
  const json = await res.json();
  return json;
}

export default async function TodoList(){

  const data = await getTodoList();
  
  const itemList = data.items.map((item) => <TodoListItem key={ item._id } item={item} />);

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
          { itemList }
        </ul>
      </div>
    </div>
  );
}