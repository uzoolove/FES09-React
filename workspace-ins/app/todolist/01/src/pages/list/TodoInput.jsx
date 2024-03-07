import { useState } from "react";

function TodoInput(props){
  const [nextId, setNextId] = useState(4);
  const [title, setTitle] = useState('');

  const handleAdd = () => {
    if(title.trim() !== ''){
      const item = {_id: nextId, title, done: false};
      setNextId(nextId + 1);
      props.addItem(item);
      setTitle('');
    }
  };

  const handleKeyUp = event => {
    if(event.key === 'Enter') handleAdd();
  };

  return (
    <div className="todoinput">
      <input type="text" value={ title } onChange={ event => setTitle(event.target.value) } onKeyUp={ handleKeyUp } autoFocus />
      <button type="button" onClick={ handleAdd }>추가</button>
    </div>
  );
}

export default TodoInput;