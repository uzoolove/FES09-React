import { Link } from 'react-router-dom';

function Header(){
  return (
    <header>
      <h1>리액트 라우터 - 버전 6.4 이후</h1>
      <Link to="/">home</Link>
      <br/>
      <Link to="/page1">page1</Link>
      <br/>
      <Link to="/page2">page2</Link>
    </header>
  );
}

export default Header;