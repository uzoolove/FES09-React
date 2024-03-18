import useAxiosInstance from "@hooks/useAxiosInstance";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

function TodoEdit(){
  const { _id } = useParams();
  const axios = useAxiosInstance();
  const { register, handleSubmit } = useForm();
  const [item, setItem] = useState();

  // 상세 정보 조회
  const fetchDetail = async () => {
    const response = await axios.get(`/todolist/${ _id }`);
    setItem(response.data.item);
  };

  useEffect(() => {
    fetchDetail();
  }, []); // 최초 마운트시 한번만 호출

  // 할일 수정
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
      { item && (
        <div className="todo">
          <form onSubmit={ handleSubmit(onSubmit) }>
            <label htmlFor="title">제목 :</label>
            <input 
              type="text" 
              id="title" 
              autoFocus 
              value={ item.title }
              { ...register('title', { required: '제목을 입력하세요.' }) }
            />
            <br/>
            <label htmlFor="content">내용 :</label>
            <textarea 
              id="content" 
              cols="25" 
              rows="8" 
              value={ item.content }
              { ...register('content', { required: '내용을 입력하세요.' }) }
            />
            <br/>
            <label htmlFor="done">완료 :</label>
            <input 
              type="checkbox" 
              id="done" 
              defaultChecked={ item.done } 
              { ...register('done') }
            />
            <br/>
            <button type="submit">수정</button>
            <button type="reset">취소</button>
          </form>
        </div>
      ) }
    </div>
  );
}

export default TodoEdit;