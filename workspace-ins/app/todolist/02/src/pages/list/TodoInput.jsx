import { useRef, useState } from "react";
import PropTypes from 'prop-types';

function TodoInput({ addItem }){
  const [title, setTitle] = useState('');
  const titleElem = useRef();

  const handleAdd = () => {
    if(title.trim() !== ''){
      const item = { title };
      
      addItem(item);
      setTitle('');
      titleElem.current.focus();
    }
  };

  const handleKeyUp = event => {
    if(event.key === 'Enter') handleAdd();
  };

  return (
    <div className="todoinput">
      <input ref={ titleElem } type="text" value={ title } onChange={ event => setTitle(event.target.value) } onKeyUp={ handleKeyUp } autoFocus />
      <button type="button" onClick={ handleAdd }>추가</button>
    </div>
  );
}

TodoInput.propTypes = {
  addItem: PropTypes.func
};

export default TodoInput;