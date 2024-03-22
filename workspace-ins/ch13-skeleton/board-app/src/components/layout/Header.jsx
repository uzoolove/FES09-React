import { userState } from "@recoil/user/atoms.mjs";
import { useRecoilValue } from "recoil";

function Header(){
  const user = useRecoilValue(userState);
  return (
    <header>
      <div>
        <h1>게시판</h1>
        { user && <p>{ user.name }님 안녕하세요 :) <button type="button">로그아웃</button></p> }
      </div>
    </header>
  );
}

export default Header;