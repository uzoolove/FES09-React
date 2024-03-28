# 13장 프로젝트 준비
* 소스 코드(GitHub): <https://github.com/uzoolove/FES09-React/tree/main/workspace-ins/ch13-skeleton>
* 코드 실행(GitHub Page): <https://uzoolove.github.io/FES09-React/workspace-ins/index.html#13>

* Vite 환경 변수와 모드: <https://ko.vitejs.dev/guide/env-and-mode.html>

## 배포 준비
### .env
* dotenv: DB 접속 정보, API KEY 등의 환경설정 정보를 코드에 직접 작성하지 않고 외부 파일로 만들어서 관리하기 위해 사용하는 nodejs 확장모듈
* 개발, 테스트, 운영 등의 여러 환경에서 각각 다른 값을 사용해야 하는 경우 각 환경 설정 정보를 가진 파일을 여러개 작성해서 적용 가능
* OS의 환경변수로 추가됨

#### 설치
```
npm i dotenv
```
* CRA나 Vite로 프로젝트를 생성했을 경우 따로 설치할 필요 없음
#### 환경 설정 파일
* 프로젝트 루트에 .env 파일 생성
  - CRA로 프로젝트를 생성했을 경우 환경변수는 반드시 REACT_APP_ 접두사로 시작해야 함
  - Vite로 생성했을 경우 환경변수는 반드시 VITE_ 접두사로 시작해야 함
* 예시
  ```sh
  VITE_API_SERVER=https://localhost/api
  VITE_KAKAO_MAP_API_KEY=acd4396a562ece1a9a522481df8561c5
  ```

* .env 파일 수정 후 서버 재시작 필요
* 외부에 노출되면 안되는 중요한 정보를 담고 있을 경우 github의 공개 프로젝트라면 .gitignore에 추가해서 커밋되지 않도록 지정
  ```
  .env.local
  ```

* 이미 .env 파일이 git에서 추적중인 상태라서 추가한 ignore가 적용 안되다면 캐시 삭제
  - 모든 변경사항은 커밋 후 아래 명령어 입력
    ```shell
    git rm -r --cached .
    git add .
    git commit -m "gitignore 다시 적용"
    ```

#### 컴포넌트에서 사용(*.js, *.jsx, *.ts, *.tsx)
* CRA 프로젝트는 process.env 변수를 통해서 사용
* Vite 프로젝트는 import.meta.env 변수를 통해서 사용
* 예시
```js
const res = await axios.get(import.meta.env.VITE_API_SERVER + '/boards');
const res = await axios.get(`${import.meta.env.VITE_API_SERVER}/boards`);
```

#### HTML에서 사용(*.html)
* %% 사이에 환경변수 지정
* 예시
```html
<script type="text/javascript" src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=%VITE_KAKAO_MAP_API_KEY%"></script>
```

#### 환경별 파일 분리
* CRA로 프로젝트를 생성했을 경우 react-scripts 실행 명령에 따라서 각 환경에 맞는 .env 파일이 추가적으로 적용됨
* Vite로 프로젝트를 생성했을 경우 vite 실행 명령에 따라서 각 환경에 맞는 .env 파일이 추가적으로 적용됨
  - npm run dev
    + .env.development 설정이 추가 적용
  - npm run build
    + .env.production 설정이 추가 적용
* 다른 .env 파일과 중복된 환경변수가 있을 경우 이전 환경변수 값을 재정의함

##### 모든 환경
* .env
  - 모든 환경에서 적용되는 기본 설정 파일

##### 개발 환경
* .env.development
  - .env 파일의 환경변수를 재정의
  - npm run dev로 개발 서버 구동시 적용

##### 운영 환경
* .env.production
  - .env 파일의 환경변수를 재정의
  - npm run build로 번들링 할때 적용

##### 로컬 환경(개발자 PC)
* 개발서버, 테스트서버, 운영서버에는 만들 필요 없고 개발자 개인 PC에만 만들어서 적용시키는 파일
* 로컬에 DB나 API 서버등을 직접 구축해서 사용할 경우에 필요
* .env.local
  - 로컬에 개발, 운영 환경이 구분없이 구축되어 있거나 두 환경에서 공통으로 사용할 환경 변수 정의
  - .env, .env.development, .env.production 파일의 환경변수를 재정의
* .env.development.local
  - 로컬에 개발, 운영 환경을 분리해서 구축했을 경우 로컬 개발 환경에서 사용
  - .env, .env.development, .env.local 파일의 환경변수를 재정의
* .env.production.local
  - 로컬에 개발, 운영 환경을 분리해서 구축했을 경우 로컬 운영 환경에서 사용
  - .env, .env.production, .env.local 파일의 환경변수를 재정의

#### .env 파일 적용 우선순위
* .env 파일이 적용되는 순서
* 좌측에서 우측으로 파일이 로딩되며 우측 파일에 좌측 파일과 같은 변수가 있으면 덮어씀

##### npm run dev
* .env -> .env.development -> .env.local -> .env.development.local

##### npm run build
* .env -> .env.production -> .env.local -> .env.production.local

## 배포
### Netlify
* <https://netlify.com>

#### fallback url 추가
  - 클라이언트의 모든 url 요청에 index.html 응답 하도록 설정
  - 프로젝트 루트에 netlify.toml 파일 생성(들여쓰기는 반드시 스페이스 2개를 이용)
```yaml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### .env 파일을 .gitignore에 추가했을 경우 환경 변수 등록
* 배포 설정에서 등록 가능

### Vercel
* <https://vercel.com>