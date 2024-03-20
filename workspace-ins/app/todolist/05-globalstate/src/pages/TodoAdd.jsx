import useAxiosInstance from "@hooks/useAxiosInstance";
import { saveIPState } from "@recoil/atoms.mjs";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

function TodoAdd(){
  const saveip = useRecoilValue(saveIPState);
  const navigate = useNavigate();
  const axios = useAxiosInstance();
  const { register, handleSubmit, reset, setFocus } = useForm();

  // submit 이벤트가 발생하면 react-hook-form의 handlerSubmit 함수가 호출되고 입력값 검증을 통과한 경우
  // onSubmit 함수가 호출됨
  // 이때 인자값으로 사용자가 입력한 입력요소가 객체로 전달됨
  const onSubmit = async (formData) => {
    try{
      formData.saveIP = saveip;
      await axios.post('/todolist', formData);
      alert('할일이 추가 되었습니다.');
      setFocus('title');
      reset();
    }catch(err){
      console.error(err);
      alert('할일 추가에 실패했습니다.');
    }
  };

  return (
    <div id="main">
      <h2>할일 추가</h2>
      <div className="todo">
        <form onSubmit={ handleSubmit(onSubmit) }>
          <label htmlFor="title">제목 :</label>
          <input 
            type="text" 
            id="title" 
            autoFocus 
            { ...register('title', { required: '제목을 입력하세요.' }) }
          />
          <br/>
          <label htmlFor="content">내용 :</label>
          <textarea 
            id="content" 
            cols="25" 
            rows="8" 
            { ...register('content', { required: '내용을 입력하세요.' }) }
          />
          <br/>
          { saveip && <span>IP가 저장됩니다.</span> } <br/>
          <button type="submit">추가</button>
          <button type="reset" onClick={ () => navigate(-1) }>취소</button>
        </form>
      </div>
    </div>
  );
}

export default TodoAdd;