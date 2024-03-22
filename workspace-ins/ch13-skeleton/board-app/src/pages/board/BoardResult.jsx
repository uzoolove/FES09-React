import Footer from "@components/layout/Footer";
import Header from "@components/layout/Header";
import { Link } from "react-router-dom";

function BoardResult(){
  return (
    <>
      <Header />

      <div>
        <section>
          <p>등록되었습니다.</p>				
          <hr />
          <div>
            <Link to="/boards/3">글확인</Link>
            <Link to="/boards">목록</Link>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default BoardResult;