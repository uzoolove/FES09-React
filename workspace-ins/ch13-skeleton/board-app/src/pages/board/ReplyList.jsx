import ReplyItem from "@pages/board/ReplyItem";
import ReplyNew from "@pages/board/ReplyNew";

function ReplyList(){
  return (
    <section>

      <ReplyNew />
  
      <h4>댓글 2개</h4>

      <ReplyItem />
    
    </section>
  );
}

export default ReplyList;