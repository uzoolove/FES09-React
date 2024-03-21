import Footer from "@components/layout/Footer";
import Header from "@components/layout/Header";

function BoardResult(){
  return (
    <>
      <Header />

      <div>
        <section>
          <p>등록되었습니다.</p>				
          <hr />
          <div>
            <a href="board/3">글확인</a>
            <a href="board/">목록</a>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default BoardResult;