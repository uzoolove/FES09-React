import { useNavigate } from 'react-router-dom';
import { memberState } from "@recoil/user/atoms.mjs";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import Button from '@components/Button';
import Theme from '@components/Theme';

function Header(){
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  const [user, setUser] = useRecoilState(memberState);

  return (
    <header className="min-w-80 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 transition-color duration-500 ease-in-out">
      <nav className="flex flex-wrap justify-center items-center p-4 md:flex-nowrap md:justify-between">
        <div className="w-1/2 order-1 md:w-auto">
          <a className="flex items-center gap-2" href="/">
            <img className="mr-3 h-6 sm:h-9" src="/vite.svg" alt="로고 이미지" />
            <span className="text-xl font-semibold">게시판</span>
          </a>
        </div>
        <div className="w-auto order-2 text-lg mt-4 md:mt-0">
          <ul className="flex items-center gap-6 uppercase">
            <li><Link to="/boards">정보공유</Link></li>
            <li><Link to="/boards">자유게시판</Link></li>
            <li><Link to="/boards">질문게시판</Link></li>
          </ul>
        </div>
        <div className="w-1/2 order-1 flex justify-end items-center md:order-2 md:w-auto">
          { user ? (
            <p className="flex items-center">
              <img className="w-8 rounded-full mr-2" src={`https://market-lion.koyeb.app/api/files/${ user.profile }`}></img>
              { user.name }님 :)
              <Button size="sm" onClick={ handleLogout }>로그아웃</Button>
            </p>
          ) : (
            <div className="flex justify-end">
              <Button size="sm" onClick={ () => navigate('/users/login') }>로그인</Button>
              <Button size="sm" bgColor="gray" onClick={ () => navigate('/users/signup') }>회원가입</Button>
            </div>
          ) }
          <Theme />
        </div>
      </nav>
    </header>
  );
}

export default Header;