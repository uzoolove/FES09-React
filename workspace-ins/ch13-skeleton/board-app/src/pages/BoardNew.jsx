import Footer from "@components/layout/Footer";
import Header from "@components/layout/Header";
import { Link } from "react-router-dom";

function BoardNew(){
  return (
    <>
      <Header />

      <div>
        <section>
          <form action="/boards/3/result">
            <div>
              <label htmlFor="writer">작성자</label>
              <input type="text" id="writer" name="writer" autoFocus />
            </div>
            <div>
              <label htmlFor="title">제목</label>
              <input type="text" id="title" name="title" placeholder="제목을 입력하세요." />
            </div>
            <div>
              <label htmlFor="content">내용</label>
              <div><textarea id="content" name="content" rows="15" cols="50"></textarea></div>
            </div>
            <hr />
            <div>
              <Link to="/boards">취소</Link>
              <button type="submit">등록</button>
            </div>
          </form>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default BoardNew;