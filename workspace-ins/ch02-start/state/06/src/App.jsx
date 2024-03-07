import { useForm } from 'react-hook-form';

function App(){

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    mode: 'onSubmit', // default
    reValidateMode: 'onChange', // default
    criteriaMode: 'firstError', // default
    defaultValues: {
      name: '',
      email: '',
      cellphone: '010',
    }
  });

  const onSubmit = data => {
    console.log('서버에 전송...', data);
  }

  return (
    <>
      <h1>회원 가입</h1>

      <form onSubmit={ handleSubmit(onSubmit) }>
        <label htmlFor="name">이름</label>
        <input 
          id="name"
          { ...register('name', {
            required: '이름을 입력하세요.',
            minLength: {
              value: 2,
              message: '2글자 이상 입력하세요.'
            }
          }) }
        /><br/>
        <div>{ errors.name?.message }</div>

        <label htmlFor="email">이메일</label>
        <input 
          id="email"
          { ...register('email', {
            required: '이메일을 입력하세요.',
            pattern: {
              value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: '이메일 양식에 맞지 않습니다.'
            }
          }) }
        /><br/>
        <div>{ errors.email?.message }</div>

        <label htmlFor="cellphone">휴대폰</label>
        <input 
          id="cellphone"
          { ...register('cellphone', {
            required: '이메일을 입력하세요.',
            pattern: {
              value: /^(01[016789]{1})[0-9]{3,4}[0-9]{4}$/,
              message: '전화번호 형식에 맞지 않습니다.'
            }
          }) }
        /><br/>
        <div>{ errors.cellphone?.message }</div>

        <button type="submit">가입</button>
      </form>

      <p>
        이름: { watch('name') } {' '}
        이메일: { watch('email') } {' '}
        휴대폰: { watch('cellphone') } {' '}
      </p>
    </>
  );
}

export default App;