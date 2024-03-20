import axios from "axios";

const API_SERVER = 'https://todo-api.frontendschool.shop/api';

function useAxiosInstance(){
  const instance = axios.create({
    baseURL: API_SERVER, // 기본 URL
    timeout: 1000*10,
    headers: {
      'content-type': 'application/json', // request의 데이터 타입
      accept: 'application/json'  // response의 데이터 타입
    }
  });

  return instance;
}

export default useAxiosInstance;