import useFetch from "./hooks/useFetch";

function App(){

  const { isLoading, data, error } = useFetch({
    url: '/todolist?delay=2000'
  });
  
  return (
    <>
      <h1>Custom Hook - useFetch 커스텀 훅 사용</h1>
      <h2>할일 목록</h2>

      { isLoading &&
        <p>로딩중...</p>
      }

      { error && 
        <p style={{ color: 'red' }}>{ error.message }</p>
      }

      { data && (
        <ul>
          { data.items?.map(item => <li key={ item._id }>{ item.title }</li>) }
        </ul>
      ) }
    </>
  );
}

export default App;