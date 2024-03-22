function ReplyNew(){
  return (
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
  );
}

export default ReplyNew;