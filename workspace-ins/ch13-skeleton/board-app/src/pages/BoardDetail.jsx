import Footer from "@components/layout/Footer";
import Header from "@components/layout/Header";

function BoardDetail(){
  return (
    <>
    
      <Header />

      <div>
        <section>
          <div>작성자 : 김철수</div>
          <div>제목 : useState 훅이란</div>
          <div>
            <span>내용</span>
            <div><textarea rows="15" cols="50" readOnly>상태값(컴포넌트에서 관리하는 데이터)을 추가하기 위한 훅</textarea></div>
            <hr/>
          </div>
          <div>
            <a href="list.html">목록</a>
            <button type="submit">삭제</button>
          </div>
        </section>
        
        <section>

          <div>
            <h4>새로운 댓글을 추가하세요.</h4>
            <form>
              <div>
                <div>
                  <textarea name="comment" rows="3" cols="40" placeholder="내용을 입력하세요."></textarea>
                </div>
              </div>
              <button type="button">댓글 등록</button>
            </form>
          </div>
      
          <h4>댓글 2개</h4>
    
          <div>
            <h5>
              <img width="30px" src="https://i.namu.wiki/i/o0BdyBR_G5rTNZH731sc9aOuq1OYdQKBYWaM-B9d0oRnIhsl2jZ-D7gTTGL_PKCxxaDiJmiGpUxZVVQll2D7-7W2lCpqoSwO-24H5IqeDXmVcbpIHZUNfE7vmQ37phOrvR6vETKkDAWlKVPsoNuZ-g.webp" alt="" />
              <a href="">무지</a>
            </h5>
            <pre>좋은 글 감사합니다.</pre>
            <time dateTime="2024-03-19 12:34:56">2024-03-19 12:34:56</time>
          </div>

          <div>
            <h5>
              <img width="30px" src="https://i.namu.wiki/i/hMfGFgmU4rk14_RweTTrgckKeHC_QoYBLsTFceW9YU4e-lX3GN5Vj6uPsoDjVZhrK5GhpdId3mXv2vYjIYpgPhgb2NshnrPs_1CYA_5jlN5hprQD2FdY6OHddta8D2dyKRcVPyO43PuVtcDHUJa4xQ.webp" alt="" />
              <a href="">라이언</a>
            </h5>
            <pre>퍼가요~~~</pre>
            <time dateTime="2024-03-19 10:34:56">2024-03-19 10:34:56</time>
          </div>
        
        </section>
      </div>
      
      <Footer />

    </>
  );
}

export default BoardDetail;