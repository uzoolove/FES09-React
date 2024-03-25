import { Button, Submit } from "./components/StyledButton";

function App(){
  return (
    <>
      <h1>Styled Components</h1>
      <Button size="10px" color="black" backgroundColor="gray">일반 버튼</Button>
      <Submit size="24px">submit 버튼</Submit>
    </>
  );
}

export default App;