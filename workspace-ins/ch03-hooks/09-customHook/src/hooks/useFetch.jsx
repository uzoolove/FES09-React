import { useEffect, useState } from "react";

const API_SERVER = 'https://todo-api.frontendschool.shop/api';

function useFetch(fetchParams){
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log('api 서버 호출', fetchParams);
    request(fetchParams);
  }, []);  // 마운트때 한번만 호출됨

  const request = async params => {
    try{
      const res = await fetch(API_SERVER + params.url);
      console.log(res);
      const jsonData = await res.json();
      console.log('jsonData', jsonData);
      if(jsonData.ok){
        setData(jsonData);
      }else{
        throw new Error(jsonData.error.message);
      }
    }catch(err){
      // 에러 처리
      console.error(err.message);
    }
  };

  return { data };
}

export default useFetch;