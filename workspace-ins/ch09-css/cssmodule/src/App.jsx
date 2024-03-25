import './App.css';
import Button from './components/Button';

function App(){
  return(
    <>
      <h1>CSS 모듈 사용</h1>
      <Button>그냥 버튼</Button>
      <Button color="blue" backgroundColor="gray">파란 버튼</Button>
      <Button color="red" backgroundColor="blue">빨간 버튼</Button>
    </>
  );
}

export default App;