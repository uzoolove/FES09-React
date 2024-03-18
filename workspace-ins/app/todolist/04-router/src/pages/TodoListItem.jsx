import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

TodoListItem.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.number,
    title: PropTypes.string,
    done: PropTypes.bool
  }),
  handleDelete: PropTypes.func
};

function TodoListItem({ item, handleDelete }){
  return (
    <li>
      <span>{ item._id }</span>
      <Link to={ '/list/' + item._id }>{ item.done ? <s>{ item.title }</s> : item.title }</Link>
      <button type="button" onClick={ () => handleDelete( item._id ) }>삭제</button>
    </li>
  );
}

export default TodoListItem;