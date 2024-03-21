import Footer from "@components/layout/Footer";
import Header from "@components/layout/Header";
import { Link } from "react-router-dom";

function BoardList(){

  
  return (
    <>
      
      <Header />

      <div>
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
              <tr>
                <td>2</td>
                <td><Link to="/boards/1">useState 훅이란?</Link></td>
                <td>이영희</td>
                <td>30</td>
                <td>2099-07-27 21:33</td>
              </tr>
              <tr>
                <td>1</td>
                <td><Link to="/boards/2">useEffect 훅이란?</Link></td>
                <td>김철수</td>
                <td>123</td>
                <td>2099-07-20 11:25</td>
              </tr>
            </tbody>
          </table>
          <hr/>
          <div>
            <Link to="/boards/new">글쓰기</Link>
          </div>
        </section>
      </div>
      
      <Footer />
      
    </>
  );
}

export default BoardList;