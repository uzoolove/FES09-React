import { saveIPState } from "@recoil/atoms.mjs";
import { NavLink } from "react-router-dom";
import { useRecoilState } from "recoil";

function Header(){

  const [saveip, setSaveip] = useRecoilState(saveIPState);

  return (
    <header>
      <h1>Todo List :)</h1>
      <nav>
        <div>
          <ul>
            <li><NavLink className={ ({ isActive }) => isActive ? 'menu-selected' : 'memu' } to="home">Home</NavLink></li>
            <li><NavLink className={ ({ isActive }) => isActive ? 'menu-selected' : 'memu' } to="about">About</NavLink></li>
            <li><NavLink className={ ({ isActive }) => isActive ? 'menu-selected' : 'memu' } to="list">TodoList</NavLink></li>
          </ul>
        </div>
      </nav>
      <div>
        <label htmlFor="saveip">IP 공개</label>
        <input type="checkbox" id="saveip" checked={ saveip } onChange={ () => setSaveip(!saveip) } />
      </div>
    </header>
  );
}

export default Header;