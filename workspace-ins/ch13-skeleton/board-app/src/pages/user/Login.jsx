import { useForm } from 'react-hook-form';
import useCustomAxios from '@hooks/useCustomAxios.mjs';

const errorStyle = {
  fontSize: '12px',
  color: 'red',
  fontWeight: 'bold'
};

function Login() {
  const axios = useCustomAxios();
  const { register, handleSubmit, formState: { errors }  } = useForm();

  const onSubmit = async (formData) => {
    try {
      const res = await axios.post('/users/login', formData);
      alert(res.data.item.name + '님 로그인 되었습니다.');
    } catch (err) {
      alert(err.response?.data.message);
    }
  };

  return (
    <>
      <h2>로그인</h2>
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

export default Login;
