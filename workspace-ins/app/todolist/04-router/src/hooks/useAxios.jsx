import { useEffect, useState } from "react";
import axios from 'axios';

axios.defaults.baseURL = 'https://todo-api.frontendschool.shop/api';
axios.defaults.timeout = 1500;

function useAxios(fetchParams){
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log('api 서버 호출', fetchParams);
    request(fetchParams);
  }, []);  // 마운트때 한번만 호출됨

  const request = async params => {
    try{
      setIsLoading(true);
      const res = await axios(params.url);
      console.log(res);
      setError(null);
      setData(res.data);      
    }catch(err){
      // 에러 처리
      console.error(err.message);
      setData(null);
      setError({ message: '일시적인 문제로 인해 작업에 실패했습니다. 잠시 후 다시 요청해 주시기 바랍니다.' });
    }finally{
      setIsLoading(false);
    }
  };

  return { isLoading, data, error };
}

export default useAxios;