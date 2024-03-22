import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

function BoardResult(){
  const { _id } = useParams();

  return (
    <div>
      <section>
        <p>등록되었습니다.</p>				
        <hr />
        <div>
          <Link to={`/boards/${ _id }`}>글확인</Link>
          <Link to="/boards">목록</Link>
        </div>
      </section>
    </div>
  );
}

export default BoardResult;