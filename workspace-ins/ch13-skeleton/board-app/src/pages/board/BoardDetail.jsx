import Footer from "@components/layout/Footer";
import Header from "@components/layout/Header";
import useCustomAxios from "@hooks/useCustomAxios.mjs";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function BoardDetail(){
  const axios = useCustomAxios();
  const { _id } = useParams();
  const [ data, setData ] = useState();

  const fetchDetail = async () => {
    const res = await axios.get(`/posts/${ _id }`);
    console.log(res);
    setData(res.data);
  }

  useEffect(() => {
    fetchDetail();
  }, []);

  const item = data?.item;

  return (
    <>    
      <Header />
      <div>
        { data && (
          <section>
            <div>작성자 : { item.user.name }</div>
            <div>제목 : { item.title }</div>
            <div>
              <span>내용</span>
              <div><textarea rows="15" cols="50" readOnly value={ item.content }></textarea></div>
              <hr/>
            </div>
            <div>
              <Link to="/boards">목록</Link>
              <button type="button">삭제</button>
            </div>
          </section>
        ) }
        
        <section>

          <div>
            <h4>새로운 댓글을 추가하세요.</h4>
            <form>
              <div>
                <div>
                  <textarea name="comment" rows="3" cols="40" placeholder="내용을 입력하세요."></textarea>
                </div>
              </div>
              <button type="submit">댓글 등록</button>
            </form>
          </div>
      
          <h4>댓글 2개</h4>

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