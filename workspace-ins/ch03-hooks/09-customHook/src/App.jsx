import { ReactCsspin } from 'react-csspin';
// import useFetch from "./hooks/useFetch";
import useAxios from './hooks/useAxios';

import 'react-csspin/dist/style.css';

function App(){

  const { isLoading, data, error } = useAxios({
    url: '/todolist?delay=1000'
  });
  
  return (
    <>
      <h1>Custom Hook - useFetch 커스텀 훅 사용</h1>
      <h2>할일 목록</h2>

      { isLoading &&
        <ReactCsspin message="로딩중..." />
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