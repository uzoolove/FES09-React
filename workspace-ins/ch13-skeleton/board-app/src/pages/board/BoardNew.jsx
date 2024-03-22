import useCustomAxios from "@hooks/useCustomAxios.mjs";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom"

function BoardNew(){
  const { register, handleSubmit } = useForm();
  const axios = useCustomAxios();
  const navigate = useNavigate();

  const onSubmit = async formData => {
    const res = await axios.post('/posts', formData);
    console.log(res);
    navigate(`/boards/${res.data.item._id}/result`);
  };

  return (
    <div>
      <section>
        <form onSubmit={ handleSubmit(onSubmit) }>
          <div>
            <label htmlFor="title">제목</label>
            <input type="text" id="title" placeholder="제목을 입력하세요." { ...register('title') } />
          </div>
          <div>
            <label htmlFor="content">내용</label>
            <div><textarea id="content" rows="15" cols="50" { ...register('content') }></textarea></div>
          </div>
          <hr />
          <div>
            <Link to="/boards">취소</Link>
            <button type="submit">등록</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default BoardNew;