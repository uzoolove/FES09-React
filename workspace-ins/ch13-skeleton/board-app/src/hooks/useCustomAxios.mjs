import axios from "axios";

const API_SERVER = 'https://market-lion.koyeb.app/api';

function useCustomAxios(){
  // ajax 통신에 사용할 공통 설정 지정
  const instance = axios.create({
    baseURL: API_SERVER,
    timeout: 1000*5,
    headers: {
      'content-type': 'application/json', // request 데이터 타입
      accept: 'application/json',  // response 데이터 타입
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsInR5cGUiOiJ1c2VyIiwibmFtZSI6IuuNsOydtOyngCIsImlhdCI6MTcxMTA3MTkzMSwiZXhwIjoxNzExMDc5MTMxLCJpc3MiOiJGRVNQMDEifQ.rZqI7uUUigHWDhA-NQ4QnHVjU_BCIwFS1bHtaAsOtOI`
    }
  });

  return instance;
}

export default useCustomAxios;