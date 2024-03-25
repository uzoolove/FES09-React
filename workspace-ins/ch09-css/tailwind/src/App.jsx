import Button from "./components/Button";

function App(){
  return (
    <>
      <h1 className="myTitle">Tailwind CSS</h1>
      <p>Hello Tailwind</p>
      <Button>기본 버튼</Button>
      <Button bgColor="black">검은 버튼</Button>
      <Button bgColor="blue">파란 버튼</Button>
      <Button bgColor="red">빨간 버튼</Button>
    </>
  );
}

export default App;