# 10장 HTTP 통신과 Ajax
* 소스 코드(GitHub): <https://github.com/uzoolove/FES09-React/tree/main/workspace-ins/ch10-ajax>
* 코드 실행(GitHub Page): <https://uzoolove.github.io/FES09-React/workspace-ins/index.html#10>

## HTTP란?
* HTTP(HyperText Transfer Protocol)는 웹 브라우저와 웹 서버를 위해 만들어진 텍스트 기반의 데이터 송수신 프로토콜
* TCP 프로토콜 기반
  - 클라이언트와 서버가 연결을 수립한 이후 메세지 교환
  - 패킷 단위로 보낸 메세지는 수신측에서 검증 후 잘 받았다는 응답이나 누락된 데이터가 있으면 재전송을 요청하므로 신뢰성이 높음
  - HTTP, FTP, SMTP 등 신뢰성이 필요한 통신에 주로 사용
* 클라이언트(주로 웹 브라우저)가 요청(request)를 보내면 서버는 요청을 분석해서 응답에 필요한 작업(파일 시스템에서 필요한 파일을 읽거나 DB, 외부 시스템 연동)을 수행한 후 응답 메세지를 만들고 응답(response)를 보냄
* 웹 브라우저는 서버의 응답 데이터를 받아서 파싱한 후 화면에 출력
* 서버의 응답을 받고 나면 클라이언트와 서버는 연결을 해제

### HTTP의 특징
#### 비연결성(Connectionless)
* 클라이언트가 요청을 보내고 서버가 응답하면 상호 연결을 해제함
* 서버는 클라이언트가 누구인지 신경쓰지 않고 오직 요청정보를 분석해서 적절한 응답을 만드는 데만 신경쓰면 되므로 서버 구현이 간단해서 웹의 발전에 큰 역할을 함

#### 무상태(Stateless)
* 서버는 클라이언트의 요청정보만 가지고 응답을 만들기 때문에 요청한 사용자가 누구인지, 이전에 어떤 작업을 요청 했었는지를 관리하지 않음(클라이언트의 상태를 기억하지 않음)
* 하지만 웹이 발전하면서 클라이언트의 정보를 저장하기 위한 방법이 필요했고 이를 구현하기 위해 Cookie, Session, Local Storage 등의 저장 방식이 생겨남

### HTTP 주요 메소드
#### GET
* 서버로부터 자원을 가져올 때 사용
  - 할일 목록 조회
  - 할일 상세 조회
  - 회원 정보 조회

#### POST
* 서버로 데이터를 보낼 때 사용
  - 할일 등록
  - 회원 등록

#### PUT
* 서버의 데이터 한건을 전체 항목을 수정할 때 사용
  - 특정 할일의 모든 항목 수정
  - 특정 회원의 회원 정보 전체 수정

#### PATCH
* 서버의 데이터 한건을 일부 항목을 수정할 때 사용
  - 특정 할일의 완료 여부 수정
  - 특정 회원의 비밀번호 수정

#### DELETE
* 서버의 데이터 한건을 삭제할 때 사용
  - 할일 삭제
  - 회원 삭제

## Ajax란?
* AJAX(Asynchronous Javascript + XML)란 웹 어플리케이션 개발시에 클라이언트와 서버의 통신방법에 대한 형태로 자바스크립트와 XML에 기반한 비동기 통신기법을 사용함
* 자바스크립트로 HTTP 요청을 보내고 XML로 응답을 받아서 처리하는 개발 방식
  - XML 보다 JSON을 더 선호함
* 페이지 이동이나 새로고침 없이 서버에 HTTP 요청을 보내고 DOM API를 이용해 응답 데이터로 화면을 갱신

### XMLHttpRequest 객체
* 서버에 HTTP 요청 정보를 만들어서 요청을 보내는 자바스크립트 객체
* 웹의 초창기부터 사용되어서 구버전의 브라우저에서도 사용 가능

#### 사용 예시
```js
function getTodoList(callback){
  const xhr = new XMLHttpRequest();
  xhr.onload = () => {
    const data = xhr.responseText;
    const jsonData = JSON.parse(data);
    callback(jsonData);
  };
  xhr.open('GET', 'http://example.com/todolist', true);
  xhr.send();
}
```

### fetch API
* ECMAScript 6에서 추가
* 콜백 기반인 XMLHttpRequest 와 달리 Promise 기반으로 설계된 HTTP 클라이언트
* XMLHttpRequest를 대체해서 사용할 수 있는 표준 API
* XMLHttpRequest보다는 나은 선택이지만 응답 객체에서 본문을 바로 꺼내지 못하고 JSON이나 다른 데이터 타입으로 파싱해야하고 네트워크 에러를 제외한 HTTP 응답 에러에 대해서 오류가 발생하지 않으므로 따로 체크를 해야 하는 등 axios 라이브러리 대비 사용이 불편
  
#### 사용 예시
```js
async function getTodoList() {
  try{
    const response = await fetch('http://example.com/todolist');
    if (response.ok) {
      const jsonData = await response.json();
      return jsonData;
    }else{
      // 404 같은 HTTP 응답 오류에 대한 처리
    }
  }catch(err){
    // 네트워크 에러에 대한 처리
  }
}
```

### axios 라이브러리
* Node.js와 브라우저를 위한 Promise 기반 HTTP 클라이언트
* XMLHttpRequest 객체를 기반으로 동작하므로 Fetch API 보다 호환성 좋음
* 요청 및 응답 인터셉트
* JSON 형식의 응답 데이터를 객체로 자동 파싱
* timeout 설정

#### 사용 예시
```js
async function getTodoList(){
  try{
    const response = await axios.get('http://example.com/todolist');
    return response.data;
  }catch(err){
    // 네트워크 에러나 HTTP 응답 에러 처리
  }
}
```

#### 설치
```powershell
npm i axios
```

#### API
##### axios(url, config?), axios(config), axios.request(config)
* 지정한 url로 HTTP 요청을 보낸다.(기본 GET 방식)

* 사용 사례
  ```js
  const itemList = await axios('https://todo-api.frontendschool.shop/api/todolist'); 
  ```

  ```js
  const itemList = await axios('https://todo-api.frontendschool.shop/api/todolist', {
    method: 'post',
    data: {
      title: '할일 1',
      content: '내용 1'
    }
  }); 
  ```

  ```js
  const itemList = await axios({
    url: 'https://todo-api.frontendschool.shop/api/todolist/1',
    method: 'patch',
    data: {
      title: '할일 1 수정',
      content: '내용 1 수정'
    }
  }); 
  ```

  ```js
  const itemList = await axios.request({
    url: 'https://todo-api.frontendschool.shop/api/todolist/1',
    method: 'delete'
  });
  ```

* config 객체의 주요 속성(url만 필수)
  ```js
  {
    // 요청에 사용될 서버 URL
    url: '/todolist',

    // 요청을 생성할때 사용되는 메소드
    method: 'get', // 기본값

    // `url`이 절대값이 아닌 경우 `baseURL`이 url 앞에 붙음
    baseURL: 'https://todo-api.frontendschool.shop/api',
    
    // 사용자 지정 헤더입니다.
    headers: {'X-Requested-With': 'XMLHttpRequest'},

    // `params`은 요청과 함께 전송되는 URL 파라미터
    // 반드시 일반 객체나 URLSearchParams 객체여야 함
    // 참고: null이나 undefined는 URL에 렌더링되지 않음
    params: {
      page: 3,
      limit: 10
    },

    // 요청 바디로 전송될 데이터입니다.  
    // 'PUT', 'POST', 'PATCH', 'DELETE' 메소드에서만 적용 가능
    // 기본은 경우 다음 타입 중 하나여야 함
    // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
    // - 브라우저 전용: FormData, File, Blob
    data: {
      title: '10시간 푹자기',
      content: '이번 주말에 도전해야지'
    },

    // 응답이 `timeout(밀리초)`보다 오래 걸리면 요청이 중단되고 timeout 에러 발생
    timeout: 1000, // 기본값은 `0` (타임아웃 없음)

    // 자격 증명을 사용하여 사이트 간 액세스 제어 요청을 해야 하는지 여부 지정
    withCredentials: false, // 기본값
  }
  ```

##### HTTP 메소드별로 제공되는 함수
* axios.get(url, config?)
  ```js
  const response = await axios.get('/todolist');
  setItems(response.data.items);
  ```

* axios.post(url, data, config?)
  ```js
  try{
    await axios.post('/todolist', {
      title: '할일 1',
      content: '내용 1'
    });
    alert('할일이 추가 되었습니다.');
  }catch(err){
    console.error(err);
    alert('할일 추가에 실패했습니다.');
  }
  ```

* axios.delete(url, config?)
  ```js
  try{
    await axios.delete(`/todolist/${_id}`);
    alert('할일이 삭제 되었습니다.');
  }catch(err){
    console.error(err);
    alert('할일 삭제에 실패했습니다.');
  }
  ```

* axios.patch(url, data, config?)
  ```js
  try{
    await axios.patch(`/todolist/${_id}`, {
      content: '수정된 내용'
    });
    alert('할일을 수정했습니다.');
  }catch(err){
    console.error(err);
    alert('할일 수정에 실패했습니다.');
  }
  ```

* axios.put(url, data, config?)
* axios.head(url, config?)
* axios.options(url, config?)

#### Axios 인스턴스
* 지정한 config 정보로 새로운 Axios 인스턴스 생성

##### 사용 예시
```js
const instance = axios.create({
  baseURL: 'https://todo-api.frontendschool.shop/api', // 기본 URL
  timeout: 3000, // 지정한 시간이 지나도록 응답이 완료되지 않으면 timeout 에러 발생
  headers: {
    'content-type': 'application/json', // request의 데이터 타입
    accept: 'application/json'  // response의 데이터 타입
  },
});

instance.get('/list', {
  params: {
    page: 3,
    limit: 10
  },
});
```

#### 인터셉터
* axios로 서버에 HTTP 요청을 보내기 직전이나 응답이 도착해서 리턴되기 전에 요청과 응답을 가로채서 추가적인 작업 수행 가능

##### 사용 사례
```js
// 요청 인터셉터 추가하기
axios.interceptors.request.use((config) => {
  // 요청이 전달되기 전에 필요한 공통 작업 수행

  return config;
}, (error) => {
  // 공통 에러 처리

  return Promise.reject(error);
});

// 응답 인터셉터 추가하기
axios.interceptors.response.use((response) => {
  // 2xx 범위에 있는 상태 코드는 이 함수가 호출됨
  // 응답 데이터를 이용해서 필요한 공통 작업 수행

  return response;
}, (error) => {
  // 2xx 외의 범위에 있는 상태 코드는 이 함수가 호출됨
  // 공통 에러 처리

  return Promise.reject(error);
});
```