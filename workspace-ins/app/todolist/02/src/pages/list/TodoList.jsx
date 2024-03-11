import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";

function TodoList({ itemList, toggleDone, deleteItem }){
  const list = itemList.map(item => <TodoItem key={ item._id } item={ item } toggleDone={ toggleDone } deleteItem={ deleteItem } /> );
  return (
    <ul className="todolist">
      { list }
    </ul>
  );
}

TodoList.propTypes = {
  itemList: PropTypes.array.isRequired,
  toggleDone: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired
};

export default TodoList;