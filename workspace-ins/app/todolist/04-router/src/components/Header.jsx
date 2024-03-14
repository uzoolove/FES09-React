import { Link } from "react-router-dom";

function Header(){
  return (
    <header>
      <h1>Todo List :)</h1>
      <nav>
        <div>
          <ul>
            <li><Link to="home">Home</Link></li>
            <li><Link to="about">About</Link></li>
            <li><Link to="list">TodoList</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;