import './Button.css';

function Button({ children, type="button", color, onClick }){
  return (
    <button type={ type } onClick={ onClick } style={{ backgroundColor: color }} className="rounded-button">{ children }</button>
  );
}

export default Button;