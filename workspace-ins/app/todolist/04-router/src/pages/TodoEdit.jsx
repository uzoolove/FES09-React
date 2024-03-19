import useAxiosInstance from "@hooks/useAxiosInstance";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";

function TodoEdit(){
  const { _id } = useParams();
  const navigate = useNavigate(); // 페이지 이동시 사용
  const axios = useAxiosInstance();
  const { register, handleSubmit, reset } = useForm();
  const [item, setItem] = useState();
  // 부모의 Outlet 컴포넌트에 지정한 context 객체 추출
  const { reFetch } = useOutletContext();

  // 상세 정보 조회
  const fetchDetail = async () => {
    const response = await axios.get(`/todolist/${ _id }`);
    setItem(response.data.item);
  };

  useEffect(() => {
    fetchDetail();
  }, []); // 최초 마운트시 한번만 호출

  // reset이 호출되면 컴포넌트가 리렌더링되므로 
  useEffect(() => {
    if(item) reset({
      title: item.title,
      content: item.content,
      done: item.done
    });
  }, [item]); // item이 변경되면 form 값을 item으로 초기화한다.

  // 할일 수정
  const onSubmit = async (formData) => {
    try{
      await axios.patch(`/todolist/${ _id }`, formData);
      alert('할일이 수정 되었습니다.');
      navigate('..', { relative: 'path' }); // 상대경로 사용
      // navigate(`/todolist/${ _id }`);
      reFetch();
    }catch(err){
      console.error(err);
      alert('할일 수정에 실패했습니다.');
    }
  };

  return (
    <>
      <h2>할일 수정</h2>
      { item && (
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
              defaultChecked={ item.done } 
              { ...register('done') }
            />
            <br/>
            <button type="submit">수정</button>
            <button type="reset" onClick={ () => navigate(-1) }>취소</button>
          </form>
        </div>
      ) }
    </>
  );
}

export default TodoEdit;