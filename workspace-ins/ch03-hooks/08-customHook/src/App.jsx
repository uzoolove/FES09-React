import { useState } from "react";

const API_SERVER = 'https://todo-api.frontendschool.shop/api';

function App(){
  const [data, setData] = useState(null);

  const request = async params => {
    try{
      const res = await fetch(API_SERVER + params.url);
      console.log(res);
      const jsonData = await res.json();
      console.log('jsonData', jsonData);
      if(jsonData.ok){
        // setData(jsonData);
      }else{
        throw new Error(jsonData.error.message);
      }
    }catch(err){
      // 에러 처리
      console.error(err.message);
    }
  };

  const fetchParams = { url: '/todolistsdfgsdfsdsdf' };
  console.log('api 서버 호출', fetchParams);
  request(fetchParams);

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