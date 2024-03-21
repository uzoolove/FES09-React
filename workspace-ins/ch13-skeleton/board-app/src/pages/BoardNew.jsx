import Footer from "@components/layout/Footer";
import Header from "@components/layout/Header";

function BoardNew(){
  return (
    <>
      <Header />

      <div>
        <section>
          <form action="list.html">
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
              <a href="list.html">취소</a>
              <button type="submit" id="regist">등록</button>
            </div>
          </form>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default BoardNew;