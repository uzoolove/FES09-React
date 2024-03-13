import useFetch from "./hooks/useFetch";

function App(){

  const { data } = useFetch({
    url: '/todolist'
  });
  
  return (
    <>
      <h1>Custom Hook - fetch API 사용</h1>
      <h2>할일 목록</h2>
      { data && (
        <ul>
          { data.items?.map(item => <li key={ item._id }>{ item.title }</li>) }
        </ul>
      ) }
    </>
  );
}

export default App;