import './Button.css';

function Button({ children, type="button", color, onClick: handleClick=100 }){
  return (
    <button type={ type } onClick={ handleClick } style={{ backgroundColor: color }} className="rounded-button">{ children }</button>
  );
}

export default Button;