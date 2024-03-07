import PropTypes from 'prop-types';

function TodoItem({ item, toggleDone, deleteItem }){
  return (
    <li>
      <span>{ item._id }</span>
      <span onClick={ () => toggleDone(item._id) }>{ item.done ? <s>{ item.title }</s> : item.title }</span>
      <button type="button" onClick={ () => deleteItem(item._id) }>삭제</button>
    </li>
  );
}

TodoItem.propTypes = {
  item: PropTypes.object.isRequired,
  toggleDone: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default TodoItem;