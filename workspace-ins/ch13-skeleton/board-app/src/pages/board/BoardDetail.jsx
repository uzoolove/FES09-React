import useCustomAxios from "@hooks/useCustomAxios.mjs";
import { memberState } from "@recoil/user/atoms.mjs";
import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";

function BoardDetail(){
  const axios = useCustomAxios();
  const navigate = useNavigate();
  const { _id } = useParams();
  const [ data, setData ] = useState();
  const user = useRecoilValue(memberState);

  const fetchDetail = async () => {
    const res = await axios.get(`/posts/${ _id }`);
    console.log(res);
    setData(res.data);
  }

  useEffect(() => {
    fetchDetail();
  }, []);

  // 삭제
  const handleDelete = async () => {
    await axios.delete(`/posts/${ _id }`);
    alert('삭제되었습니다.');
    navigate('/boards');
  };

  const item = data?.item;

  return (
    <div>
      { data && (
        <section>
          <div>작성자 : { item.user.name }</div>
          <div>제목 : { item.title }</div>
          <div>
            <span>내용</span>
            <div><textarea rows="15" cols="50" readOnly value={ item.content }></textarea></div>
            <hr/>
          </div>
          <div>
            <Link to="/boards">목록</Link>
            { user?._id === item.user._id && <button type="button" onClick={ handleDelete }>삭제</button> }
          </div>
        </section>
      ) }
      
      <Outlet />
      
    </div>
  );
}

export default BoardDetail;