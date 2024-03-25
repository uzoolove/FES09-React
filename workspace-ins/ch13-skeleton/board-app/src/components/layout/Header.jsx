import { useNavigate } from 'react-router-dom';
import { memberState } from "@recoil/user/atoms.mjs";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import Button from '@components/Button';

function Header(){
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  const [user, setUser] = useRecoilState(memberState);

  return (
    <header>
      <nav>
        <div>
          <a href="/">
            <img src="/vite.svg" alt="로고 이미지" />
            <span>게시판</span>
          </a>
        </div>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/boards">정보 공유</Link></li>
            <li><Link to="/boards">자유 게시판</Link></li>
            <li><Link to="/boards">질문 게시판</Link></li>
          </ul>
        </div>
        <div>
          { user ? (
            <p>
              { user.name }님 :)
              <button type="button" onClick={ handleLogout }>로그아웃</button>
            </p>
          ) : (
            <div>
              <Button onClick={ () => navigate('/users/login') }>로그인</Button>
              <Button bgColor="gray" onClick={ () => navigate('/users/signup') }>회원가입</Button>
            </div>
          ) }
        </div>
      </nav>
    </header>
  );
}

export default Header;