import { useForm } from 'react-hook-form';
import useCustomAxios from '@hooks/useCustomAxios.mjs';
import { memberState } from '@recoil/user/atoms.mjs';
import { useSetRecoilState } from 'recoil';
import { Link, useNavigate } from 'react-router-dom';
import Submit from '@components/Submit';

function Login() {
  // recoil setter 반환
  const setUser = useSetRecoilState(memberState);
  const axios = useCustomAxios();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }  } = useForm({
    values: {
      email: 'aa@bb.cc',
      password: '********'
    }
  });

  const onSubmit = async (formData) => {
    try {
      const res = await axios.post('/users/login', formData);
      // 사용자 정보를 recoil에 저장
      setUser({
        _id: res.data.item._id,
        name: res.data.item.name,
        token: res.data.item.token,
      });
      alert(res.data.item.name + '님 로그인 되었습니다.');
      navigate('/'); // 메인페이지로 이동
    } catch (err) {
      alert(err.response?.data.message);
    }
  };

  return (
    <div>
      <div>
        <div>
          <h2>로그인</h2>
        </div>
        <form onSubmit={ handleSubmit(onSubmit) }>
          <div>
            <label htmlFor="email">이메일</label>
            <input 
              type="email" 
              id="email" 
              placeholder="이메일을 입력하세요"       
              { ...register('email', {
                required: '이메일을 입력하세요.',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: '이메일 형식이 아닙니다.'
                } 
              })}
            />
            { errors.email && <p>{ errors.email.message }</p>}
          </div>
          <div>
            <label htmlFor="password">비밀번호</label>
            <input 
              type="password" 
              id="password" 
              placeholder="비밀번호를 입력하세요" 
              { ...register('password', {
                required: "비밀번호를 입력하세요."
              })} 
            />
            { errors.password && <p>{ errors.password.message }</p>}
            <Link to="#">비밀번호를 잊으셨나요?</Link>
          </div>
          <div>
            <Submit>로그인</Submit>
            <Link to="/users/signup">회원가입</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
