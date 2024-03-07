import { useState } from "react";

function App(){
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');  
  // const [cellphone, setCellphone] = useState('010');

  const [user, setUser] = useState({
    name: '',
    email: '',
    cellphone: '010'
  });

  const [errors, setErrors] = useState({});

  // const handleNameChange = e => {
  //   const newUser = {
  //     ...user,
  //     name: e.target.value
  //   };
  //   setUser(newUser);
  // };
  // const handleEmailChange = e => {
  //   const newUser = {
  //     ...user,
  //     email: e.target.value
  //   };
  //   setUser(newUser);
  // };
  // const handleCellphoneChange = e => {
  //   const newUser = {
  //     ...user,
  //     cellphone: e.target.value
  //   };
  //   setUser(newUser);
  // };

  const handleChange = e => {
    const newUser = {
      ...user,
      [e.target.name]: e.target.value
    };
    setUser(newUser);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    let newErrors;

    // 필수 입력 체크
    if(user.name.trim() === ''){
      newErrors = {
        name: { message: '이름을 입력하세요.' }
      };
    }else if(user.name.trim().length < 2){
      newErrors = {
        name: { message: '이름을 2글자 이상 입력하세요.' }
      };
    }else if(user.email.trim() === ''){
      newErrors = {
        email: { message: '이메일을 입력하세요.' }
      };
    }else if(user.cellphone.trim() === ''){
      newErrors = {
        cellphone: { message: '휴대폰 번호를 입력하세요.' }
      };
    }
    
    if(newErrors){  // 검증 실패
      setErrors(newErrors);
    }else{  // 검증 통과
      setErrors({});
      console.log('서버에 전송...', user);
    }
  }

  return (
    <>
      <h1>회원 가입</h1>

      <form onSubmit={ onSubmit }>
        <label htmlFor="name">이름</label>
        <input 
          id="name"
          name="name"
          value={ user.name }
          onChange={ handleChange }
        /><br/>
        <div>{ errors.name?.message }</div>

        <label htmlFor="email">이메일</label>
        <input 
          id="email"
          name="email"
          value={ user.email }
          onChange={ handleChange }
        /><br/>
        <div>{ errors.email?.message }</div>

        <label htmlFor="cellphone">휴대폰</label>
        <input 
          id="cellphone"
          name="cellphone"
          value={ user.cellphone }
          onChange={ handleChange }
        /><br/>
        <div>{ errors.cellphone?.message }</div>

        <button type="submit">가입</button>
      </form>

      <p>
        이름: { user.name } {' '}
        이메일: { user.email } {' '}
        휴대폰: { user.cellphone } {' '}
      </p>
    </>
  );
}

export default App;