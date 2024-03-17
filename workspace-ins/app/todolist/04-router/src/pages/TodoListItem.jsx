import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

TodoListItem.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.number,
    title: PropTypes.string,
    done: PropTypes.bool
  })
};

function TodoListItem({ item }){
  return (
    <li>
      <span>{ item._id }</span>
      <Link to={ '/list/' + item._id }>{ item.done ? <s>{ item.title }</s> : item.title }</Link>
      <Link to="/list">삭제</Link>
    </li>
  );
}

export default TodoListItem;