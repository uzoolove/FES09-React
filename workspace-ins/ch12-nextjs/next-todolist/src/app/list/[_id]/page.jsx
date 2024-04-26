import Link from "next/link";

async function getTodoList(_id){
  const res = await fetch(`http://localhost:3000/api/todolist/${ _id }`);
  const json = await res.json();
  return json;
}


export default async function TodoDetail({ params: { _id } }){
  const item = await getTodoList(_id);
  return (
    <div id="main">
      <h2>할일 상세 보기</h2>
      <div className="todo">
        <div>
          제목 : 듄2 보기
        </div>
        <div>
          내용 : 1편을 유튜브 요약으로 먼저 보기
        </div>
        <div>
          상태 : 미완료
        </div>
        <div>
          작성일 : 2024.03.13 12:23:45
        </div>
        <div>
          수정일 : 2024.03.13 13:45:12
        </div>
        <Link href={`/list/${ _id }/edit`}>수정</Link>
        <Link href="/list">목록</Link>
      </div>
    </div>
  );
}