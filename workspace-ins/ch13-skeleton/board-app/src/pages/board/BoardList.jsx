import useCustomAxios from "@hooks/useCustomAxios.mjs";
import BoardListItem from "@pages/board/BoardListItem";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BoardList(){
  const [data, setData] = useState(null);
  const axios = useCustomAxios();

  const fetchBoardList = async () => {
    const response = await axios.get('/posts');
    setData(response.data);
  };

  useEffect(() => {
    fetchBoardList();
  }, []);

  const itemList = data?.item?.map(item => <BoardListItem key={ item._id } item={ item } />);

  return (
    <div>
      <div>
        <Link to="/boards/new">글쓰기</Link>
      </div>
      <section>
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>글쓴이</th>
              <th>조회</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody>
            { itemList }
          </tbody>
        </table>
        <hr/>
        
      </section>
    </div>
  );
}

export default BoardList;