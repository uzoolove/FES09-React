import { useNavigate } from 'react-router-dom';
import { memberState } from "@recoil/user/atoms.mjs";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";

function Header(){
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  const [user, setUser] = useRecoilState(memberState);

  return (
    <header>
      <div>
        <h1>게시판</h1>
        { user && <p>{ user.name }님 안녕하세요 :) <button type="button" onClick={ handleLogout }>로그아웃</button></p> }
        { !user && <Link to="/users/login">로그인</Link> }
      </div>
    </header>
  );
}

export default Header;