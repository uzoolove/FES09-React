import Button from "./components/Button";

function App(){
  return (
    <>
      <h1 className="myTitle">Tailwind CSS</h1>
      <p>Hello Tailwind</p>
      <Button>기본 버튼</Button>
      <Button bgColor="gray" size="sm">회색 버튼</Button>
      <Button bgColor="blue" size="md">파란 버튼</Button>
      <Button type="submit" bgColor="red" size="lg" onClick={ () => alert('삭제하시겠습니까?') }>빨간 버튼</Button>
      <button className={`bg-gray-500 text-white font-semibold px-2 py-1 ml-2 text-base hover:bg-blue-600 rounded`}>컴포넌트 아님</button>
      <button className="btn btn-primary">등록</button>
      <button className="btn btn-warn">삭제</button>
    </>
  );
}

export default App;