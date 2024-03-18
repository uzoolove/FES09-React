import { Link, useParams } from "react-router-dom";
import useAxios from "@hooks/useAxios";

function TodoDetail(){

  const params = useParams();
  console.log(params._id);

  // 상세 정보 API 서버 호출해서 받은 후 서버에서 받은 실데이터로 보여주기
  const { data } = useAxios({
    url: `/todolist/${params._id}`
  });

  const item = data?.item;

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
          <Link to="edit">수정</Link>
          <Link to="/list">목록</Link>
        </div>
      ) }
    </div>
  );
}

export default TodoDetail;