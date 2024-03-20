import { Link, Outlet, useParams } from "react-router-dom";
import useAxiosInstance from "@hooks/useAxiosInstance";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { saveIPState } from "@recoil/atoms.mjs";

function TodoDetail(){
  const saveip = useRecoilValue(saveIPState);

  // 라우터에 list/:_id/:action 정의했고 URI가 list/3/edit 일 경우
  // params = { _id: 3, action: 'edit' } 객체가 된다.
  const params = useParams();
  console.log(params._id);

  const axios = useAxiosInstance();
  const [item, setItem] = useState();

  // 상세 정보 조회
  const fetchDetail = async () => {
    const response = await axios.get(`/todolist/${ params._id }`);
    setItem(response.data.item);
  };

  useEffect(() => {
    fetchDetail();
  }, []); // 최초 마운트시 한번만 호출

  return (
    <div id="main">
      <h2>할일 상세 보기</h2>
      { item && ( // 조건부 출력
        <div className="todo">
          <div>
            제목 : { item.title }
          </div>
          <div>
            내용 : { item.content }
          </div>
          <div>
            상태 : { item.done ? '완료' : '미완료' }
          </div>
          <div>
            작성일 : { item.createdAt }
          </div>
          <div>
            수정일 : { item.updatedAt }
          </div>

          { saveip && item.ip && (
            <div>
              IP : { item.ip }
            </div>
          ) }

          <Link to="edit">수정</Link>
          <Link to="/list">목록</Link>
        </div>
      ) }
      <Outlet context={{ reFetch: fetchDetail }} />
    </div>
  );
}

export default TodoDetail;