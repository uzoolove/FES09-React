import TodoItem from "./TodoItem";

function TodoList(props){
  const list = props.itemList.map(item => <TodoItem key={ item._id } item={ item } toggleDone={ props.toggleDone } deleteItem={ props.deleteItem } /> );
  return (
    <ul className="todolist">
      { list }
    </ul>
  );
}

export default TodoList;