import axios from "axios";

const API_SERVER = 'https://market-lion.koyeb.app/api';

function useCustomAxios(){
  // ajax 통신에 사용할 공통 설정 지정
  const instance = axios.create({
    baseURL: API_SERVER,
    timeout: 1000*5,
    headers: {
      'content-type': 'application/json', // request 데이터 타입
      accept: 'application/json'  // response 데이터 타입
    }
  });

  return instance;
}

export default useCustomAxios;