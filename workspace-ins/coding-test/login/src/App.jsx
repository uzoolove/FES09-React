import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function App() {
  // 2. submit 이벤트 등록
  const onSubmit = async () => {
    try {
      // 3. API 서버 호출
      // 4. 로그인 성공 메세지 출력
    } catch (err) {
      // 5. 로그인 실패 메세지 출력
    }
  };

  return (
    // 1. JSX 작성
    <>
      <h1>로그인</h1>
      <form></form>
    </>
  );
}

export default App;
