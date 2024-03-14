import MyLink from './MyLink';

function Header(){
  return (
    <header>
      <h1>리액트 라우터 - 클라이언트 라우팅 직접 구현</h1>
      <MyLink to="/">home</MyLink>
      <br/>
      <MyLink to="/page1">page1</MyLink>
      <br/>
      <MyLink to="/page2">page2</MyLink>
    </header>
  );
}

export default Header;