import useAxiosInstance from "@hooks/useAxiosInstance";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

function TodoEdit(){
  const { _id } = useParams();
  const axios = useAxiosInstance();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (formData) => {
    try{
      await axios.patch(`/todolist/${ _id }`, formData);
      alert('할일이 수정 되었습니다.');
    }catch(err){
      console.error(err);
      alert('할일 수정에 실패했습니다.');
    }
  };

  return (
    <div id="main">
      <h2>할일 수정</h2>
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
          <label htmlFor="done">완료 :</label>
          <input 
            type="checkbox" 
            id="done" 
            checked 
            { ...register('done') }
          />
          <br/>
          <button type="submit">수정</button>
          <button type="reset">취소</button>
        </form>
      </div>
    </div>
  );
}

export default TodoEdit;