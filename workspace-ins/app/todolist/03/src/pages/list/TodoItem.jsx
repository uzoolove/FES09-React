import PropTypes from 'prop-types';
import { memo, useEffect } from 'react';


// TODO: 1. React.memo로 컴포넌트를 메모이제이션
const TodoItem = memo(function TodoItem({ item, toggleDone, deleteItem }){

  useEffect(() => {
    console.log('++++++ TodoItem 마운트/업데이트');
    return () => console.log('------ TodoItem 언마운트');
  });

  return (
    <li>
      <span>{ item._id }</span>
      <span onClick={ () => toggleDone(item._id) }>{ item.done ? <s>{ item.title }</s> : item.title }</span>
      <button type="button" onClick={ () => deleteItem(item._id) }>삭제</button>
    </li>
  );
});

TodoItem.propTypes = {
  item: PropTypes.object.isRequired,
  toggleDone: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default TodoItem;