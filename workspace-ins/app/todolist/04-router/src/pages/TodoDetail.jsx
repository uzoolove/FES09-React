import { Link } from "react-router-dom";

function TodoDetail(){
  return (
    <div id="main">
      <h2>할일 상세 보기</h2>
      <div className="todo">
        <div>
          제목 : 듄2 보기
        </div>
        <div>
          내용 : 1편을 유튜브 요약으로 먼저 보기
        </div>
        <div>
          상태 : 미완료
        </div>
        <div>
          작성일 : 2024.03.13 12:23:45
        </div>
        <div>
          수정일 : 2024.03.13 13:45:12
        </div>
        <Link to="/edit">수정</Link>
        <Link to="/list">목록</Link>
      </div>
    </div>
  );
}

export default TodoDetail;