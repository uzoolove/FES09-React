/*
  하단에 제공되는 stackblitz 프로젝트를 fork 해서 샘플 앱과 동일하게 동작하는 리액트 앱을 만들고 App.jsx 파일을 업로드해서 제출하세요.

  샘플 앱: https://todo.frontendschool.shop/login.html

  샘플 앱으로 접속하면 테스트 할 수 있습니다.
  샘플 앱은 jQuery를 이용해서 로그인 기능을 구현한 앱 입니다.

  로그인 성공시: 하단의 로그인 가능한 계정으로 로그인을 성공하면 API 서버로 부터 사용자 정보가 반환되고 그중에서 name 속성값을 이용해 
    사용자 이름과 환영 메세지를 alert 함수로 출력합니다.
  로그인 실패시: API 서버로부터 에러 정보가 반환되고 message 값을 alert 함수로 출력합니다.

  fork할 프로젝트: https://stackblitz.com/edit/vitejs-vite-w6c1h8?file=src%2FApp.jsx
  * 프로젝트에 접속 후 코드를 수정하고 저장하면 자동으로 fork 됩니다. (테스트에는 Sign in이 필요 없지만 본인의 프로젝트로 저장하려면 Sign in 필요)

  API 서버 URL: https://market-lion.koyeb.app/api/users/login
  method: post
  바디로 전송할 데이터: email, password
  * postman으로 먼저 테스트 해보세요.

  로그인 가능한 계정 1: u1@market.com / 11111111
  로그인 가능한 계정 2: s1@market.com / 11111111

  배점(100점 만점)
    1. 에러 없이 페이지 로딩(10점)
    2. email, password 입력 양식 작성(10점)
    3. 이벤트 등록(20점)
    4. API 서버 호출(20점)
    5. API 서버 응답 메세지 처리(20점)
    6. 기타(20점)
*/
import { useForm } from 'react-hook-form';
import axios from 'axios';

const errorStyle = {
  fontSize: '12px',
  color: 'red',
  fontWeight: 'bold'
};

function App() {
  const { register, handleSubmit, formState: { errors }  } = useForm();

  // 2. submit 이벤트 등록
  const onSubmit = async (formData) => {
    try {
      // 3. API 서버 호출
      const res = await axios.post('https://market-lion.koyeb.app/api/users/login', formData);
      // 4. 로그인 성공 메세지 출력
      alert(res.data.item.name + '님 로그인 되었습니다.');
    } catch (err) {
      // 5. 로그인 실패 메세지 출력
      alert(err.response?.data.message);
    }
  };

  return (
    // 1. JSX 작성
    <>
      <h1>로그인</h1>
      <form onSubmit={ handleSubmit(onSubmit) }>
        <label htmlFor="email">이메일</label>
        <input type="text" id="email" { ...register('email', {
          required: '이메일을 입력하세요.',
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: '이메일 형식이 아닙니다.'
          } 
        }) } />
        <br />
        { errors && <div style={ errorStyle }>{ errors.email?.message }</div> }
        <label htmlFor="password">비밀번호</label>
        <input type="password" id="password" { ...register('password', {
          required: "비밀번호는 필수 입니다.",
          minLength: 8
        }) } />
        <br />
        { errors && <div style={ errorStyle }>{ errors.password?.message }</div> }
        <button type="submit">로그인</button>
      </form>
    </>
  );
}

export default App;
