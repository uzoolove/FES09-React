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
    <div className="min-w-80 p-4">
      <div className="text-center py-4">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200">게시물 목록 조회</h2>
      </div>
      <div className="flex justify-end mr-4">
        <Link className="btn btn-primary" to="/boards/new">글쓰기</Link>
      </div>
      <section className="p-4">
        <table className="border-collapse w-full table-fixed">
          <colgroup>
            <col className="w-[10%] sm:w-[10%]" />
            <col className="w-[60%] sm:w-[40%]" />
            <col className="w-[30%] sm:w-[15%]" />
            <col className="w-0 sm:w-[10%]" />
            <col className="w-0 sm:w-[25%]" />
          </colgroup>
          <thead>
            <tr className="border-b border-solid border-gray-200">
              <th className="p-2 whitespace-nowrap">번호</th>
              <th className="p-2 whitespace-nowrap">제목</th>
              <th className="p-2 whitespace-nowrap">글쓴이</th>
              <th className="p-2 whitespace-nowrap hidden sm:table-cell">조회</th>
              <th className="p-2 whitespace-nowrap hidden sm:table-cell">작성일</th>
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