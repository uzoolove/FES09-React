# 13장 프로젝트 준비
* 소스 코드(GitHub): <https://github.com/uzoolove/FES09-React/tree/main/workspace-ins/ch13-skeleton>
* 코드 실행(GitHub Page): <https://uzoolove.github.io/FES09-React/workspace-ins/index.html#13>

## 프로젝트 생성
### Github organizations 접속
* <https://github.com/organizations/FRONTENDSCHOOL9>

### 프로젝트 생성

## 프로젝트 세팅
### 저장소 설정
#### Collaborators 추가
* Private으로 만들었을 경우
  - Settings > Collaborators > Add people
  - 팀원 초대
  - 강사 초대(uzoolove@gmail.com)
  - 멘토 초대

#### 이슈 마일스톤 생성
* 이슈 마일스톤: 유사한 이슈들을 하나로 모아서 관리
* 개발 목표를 마일스톤으로 만들고 관련 이슈들을 미리 생성하면 이슈들의 Open, Close 상태를 한눈에 관리
* Issues > Milestones > Create a Milestone
* 마일스톤 예시
  - 피그마 시안 작성(완료기간 2024.04.04)
  - 게시물 목록 조회(완료기간 2024.04.09)
    + 목록 하나당 3줄만 표시되도록 CSS나 JS에서 처리 필요
    + 페이징 처리
    + 검색 기능 추가
  - 게시물 상세 조회(완료기간 2024.04.12)
    + 댓글에 추가 댓글 기능 필요한지 확인
    + 댓글 간격 조정
  - 게시물 댓글 추가(완료기간 2024.04.16)
    + 페이지네이션 또는 무한 스크롤 적용
    + 댓글 검색 기능 필요
  - 전체 기능(완료기간 2024.04.23)
    + 네이버 로그인 OAuth 인증 구현
    + 로그인 상태 저장 Session이나 JWT로 구현
    + 카카오 지도 연동
    + 실시간 버스 위치 조회(데이터 포털)
  
  

#### 이슈 템플릿 작성
* 이슈 작성시 버그 리포트 같은 경우 버그 현상, 재현 시나리오 등 이슈에 포함되어야 하는 내용을 입력 할수 있도록 템플릿 제공 필요
* Settings > Features, Issues, Set up templates
  ```
  Issue: Feature request 
  Suggest an idea for this project

  Is your feature request related to a problem? Please describe.
  A clear and concise description of what the problem is. Ex. I'm always frustrated when [...]

  Describe the solution you'd like
  A clear and concise description of what you want to happen.

  Describe alternatives you've considered
  A clear and concise description of any alternative solutions or features you've considered.

  Additional context
  Add any other context or screenshots about the feature request here.

  Optional additional items
  Issue default title:
  Assignees:
  Labels:
  ```

#### 이슈 작성
* 프로젝트를 진행하면서 발생하는 다양한 이벤트(버그, 추가해야 할 기능, 아이디어, 질문 등)를 등록하고 관리하는 기능
* 팀원과 협업에 필요

#### 이슈 관리
* 커밋할 때 이슈 메세지 추가
  - 커밋 메세지 입력 시 이슈 번호 지정
    ```
    feat: 카카오 연동 완료

    #123 
    ```
* 커밋할 때 이슈 종료
  - 커밋 메세지 입력 시 이슈 번호와 다음 키워드 같이 사용
    ```
    close
    closes
    closed
    fix
    fixes
    fixed
    resolve
    resolves
    resolved
    ```
    ```
    feat: 카카오 연동 오류 수정
    
    fix #123
    ```

## 코드 컨벤션
* 가독성이 좋고 유지보수가 쉬운 코드를 작성하기 위한 코딩 스타일 규약
* 개발자간 서로 다른 코딩 스타일 예시

```js
if(a==100) return true;

if(a == 100) {
  return true;
}

const App = function(){
  return (
    <h1>Hello</h1>
  );
};

const App = () => <h1>Hello</h1>;
```

### 다양한 코드 컨벤션 가이드
* [Airbnb JavsScript Style Guide](https://github.com/airbnb/javascript)
* [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)
* [JavaScript Standard Style](https://standardjs.com/readme-kokr.html)
* [Idiomatic JavaScript Style Guide](https://github.com/rwaldron/idiomatic.js/tree/master/translations/ko_KR)
* [Google Style Guide](https://google.github.io/styleguide/jsguide.html)

### ESLint 컨벤션

#### ESLint
* 정적 문법 검사 및 코딩 스타일 등을 점검해서 런타임 오류나 코드의 가독성을 높이기 위해 사용하는 도구
* 규칙 예시
  - const로 선언한 변수에 값을 재할당하면 경고
  - 변수를 선언하지 않고 사용하면 경고
  - 선언후 사용안되는 변수가 있으면 경고
  - 들여쓰기를 스페이스 2개, 4개 또는 탭으로 할지 여부를 지정해서 규칙을 지키지 않으면 경고
* 사전에 정의한 규칙을 지키지 않는다면 경고나 에러를 띄워서 문법 오류나 코딩 스타일을 유지할 수 있게 도와줌
* CRA나 Vite로 생성한 프로젝트에는 기본으로 내장되어 있고 npm start나 npm run dev로 서버 구동시 동작
  - 터미널에서 ESLint 경고/에러 확인 가능

#### React 프로젝트의 ESLint 설정
* 설정 파일 작성 방법: <https://eslint.org/docs/latest/use/configure/configuration-files>
* 프로젝트 루트에서 다음 명령 실행후 프로젝트 환경 질문에 답변하면 .eslintrc.js 파일 생성됨
  ```shell
  npm init @eslint/config
  또는
  npx eslint --init

  * How would you like to use ESLint?
    - To check syntax and find problems
  * What type of modules does your project use?
    - JavaScript modules (import/export)
  * Which framework does your project use?
    - React
  * Does your project use TypeScript?
    - No
  * Where does your code run?
    - browser
  * What format do you want your config file to be in?
    - JavaScript
  * eslint-plugin-react@latest eslint@latest. Would you like to install them now?
    - Yes
  * Which package manager do you want to use?
    - npm
  ```

* .eslintrc.js
  ```js
  module.exports = {
    "env": {
      "browser": true,
      "es2021": true
    },
    "extends": [
      "eslint:recommended", // eslint
      "plugin:react/recommended"  // eslint-plugin-react
    ],
    "overrides": [
      {
        "env": {
          "node": true
        },
        "files": [
          ".eslintrc.{js,cjs}"
        ],
        "parserOptions": {
          "sourceType": "script"
        }
      }
    ],
    "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module"
    },
    "plugins": [
      "react" // eslint-plugin-react
    ],
    "rules": {
    }
  }
  ```

* env: 자바스크립트가 실행되는 환경 지정
  - browser를 지정할 경우 document, alert() 등을 window 객체의 속성으로 인식해서 경고/에러 표시하지 않음
  - commonjs를 지정할 경우 module 등을 nodejs의 모듈 객체로 인식해서 경고/에러 표시하지 않음
* plugins: 규칙, 환경, 구성 등을 정의한 서드 파티 플러그인 등록
  - 플러그인에 정의된 rule set을 사용하고 기본은 모든 rule이 off 상태이므로 직접 rule을 정의해야 함 
  - 플러그인이 config file을 제공한다면 extends에 "plugin:" 접두사를 붙여서 추가하고 해당 config가 제공하는 모든 rule이 적용됨
    + plugins 설정에 해당 플러그인을 지정할 필요 없음
  - 플러그인 이름의 접두사 "eslint-plugin-" 생략 가능
* extends: eslint-config-airbnb 같은 Shareable Config 모듈을 지정하면 rules, plugins 등 규칙 세트와 스타일을 상속받을 수 있음
  - 지정한 모듈이 제공하는 config file을 이용해서 자동으로 rule이 추가됨
  - Shareable Config 모듈 이름의 접두사 "eslint-config-" 생략 가능
* rules: 사용자 정의 규칙 지정
  - plugins, extends에서 정의된 규칙보다 우선함
  - 'off' 또는 0
  - 'warn' 또는 1
  - 'error' 또는 2

#### 커스텀 규칙 설정
* 필요에 따라 .eslintrc.js 파일의 rules에 커스텀 룰 추가
* 작성 방법: https://eslint.org/docs/latest/rules
  ```js
  module.exports = {
    ......
    "rules": {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": 0
    }
  }
  ```

#### ESLint 실행
* 현재 폴더내의 모든 파일 검사
  ```shell
  npx eslint .
  ```

* 지정한 폴더내의 모든 파일 검사
  ```shell
  npx eslint ./src
  ```

* 지정한 파일 검사
  ```shell
  npx eslint ./src/App.js
  ```

#### VSCode ESLint 플러그인 설치
* VSCode 편집창에서 바로 ESLint 경고/에러 확인 가능
* VSCode > Extensions > ESLint 검색, 설치
  - VSCode에서 오픈한 작업폴더에 설치된 eslint 모듈이나 글로벌로 설치된 eslint 모듈을 사용하므로 eslint 모듈이 설치되어 있어야 함(CRA나 Vite로 프로젝트 생성시 기본으로 설치됨)
    ```shell
    npm i eslint
    npm i -g eslint
    ```

### Prettier 컨벤션

#### Prettier
* 자바스크립트 Code Formatting 도구(코드 정렬, 정리 등 코드 스타일 통일에 사용)

#### 프로젝트에 Prettier 설정
* Prettier 설치
  ```shell
  npm i prettier
  ```
* 설정 파일 작성 방법: <https://prettier.io/docs/en/configuration.html>
* 설정 옵션: <https://prettier.io/docs/en/options>
* 프로젝트 루트에 .prettierrc.js 파일 작성
* .prettierrc.js 예시
  ```js
  module.exports = {
    // 문자열에 single quote 사용(기본값 true)
    singleQuote: true,  
    // 코드 마지막에 세미콜론 추가(기본값 true)
    semi: true,
    // 들여쓰기를 탭으로 지정할지 여부(기본값 false)
    useTabs: false,
    // 들여쓰기 너비 2칸(기본값 2)
    tabWidth: 2,
    // 여러 줄의 쉼표로 구분된 구문 구조에서 후행 쉼표를 추가(none: 설정 안함, es5: 객체,배열에 설정, all(기본값): 함수 정의나 호출 등 가능한 모든 곳에 설정)
    trailingComma: 'all',
    // 한줄에 80 글자가 넘어가면 줄바꿈(기본값 80)
    printWidth: 80,
    // 화살표 함수의 매개변수가 하나만 지정될 때 괄호 생략(always: 항상 괄호 명시, avoid: 가능하면 생략)
    arrowParens: 'avoid',
    // windows에 뜨는 'Delete cr' 에러 해결
    endOfLine: "auto"
  };
  ```

#### Prettier 실행
* 현재 폴더내의 모든 파일을 포맷에 맞춰서 변환
  ```shell
  npx prettier --write .
  ```

* 지정한 폴더내의 모든 파일을 포맷에 맞춰서 변환
  ```shell
  npx prettier --write ./src
  ```

* 지정한 파일을 포맷에 맞춰서 변환
  ```shell
  npx prettier --write ./src/App.js
  ```

#### ESLint와 충돌
* ESLint는 코드 품질 규칙뿐만 아니라 스타일 규칙도 포함됨
* 일반적으로 코드 품질 문제는 ESLint를 사용하고 스타일 규칙은 Prettier를 사용
* eslint-config-prettier: 불필요하거나 Prettier와 충돌할 수 있는 모든 규칙을 비활성화시키는 Shareable Config 모듈
* eslint-config-prettier 설치
  ```shell
  npm i -D eslint-config-prettier
  ```

* 다른 구성을 재정의하기 위해 .eslintrc 파일 extends의 마지막에 추가
  ```json
  {
    "extends": [
      ......
      "prettier"
    ]
  }
  ```

#### VSCode에 Prettier Extention 추가
* Extentions > Prettier - Code formatter 설치
* File > Preferences > Settings > Workspace
  - "Editor: Format On Save" 체크 (파일 저장시 자동으로 포맷팅)
  - "Editor: Default Formatter"에 "Prettier - Code formatter" 선택 (기본 JavaScript formatter 대신 Prettier를 formatter로 지정)

## Git 커밋 메세지 컨벤션
* 커밋 메세지의 일관성을 위해 작성

### Udacity Git Commit Message Style Guide
* 메세지 구조
  ```
  type: Subject

  body

  footer
  ```

* type의 유형
  - feat: 새로운 기능
  - fix: 버그 수정
  - docs: 문서 변경 사항(readme.md, json 파일 등)
  - style: 코드 포맷 변경, 세미콜론 수정 등. 기능 변경 없음
  - refactor: 코드 리팩토링
  - test: 테스트 코드. 기능 변경 없음
  - chore: 빌드 작업 수정, 패키지 매니저 수정 등. 기능 변경 없음
* subject(제목) 규칙
  - 영문자 기준 50자 이내, 대문자로 시작, 마침표로 끝나지 않음
  - 과거 시제를 사용하지 않고 간결하게 기술. "수정했음", "수정함" 대신 "수정"
* body(본문) 규칙
  - 일반적으로 제목만 있으면 되지만 추가 설명이 필요할때 선택적으로 기입
  - 어떻게 변경되었는지가(어떻게는 코드를 보면 되므로) 아니라 무엇을, 왜 변경하는지를 설명
* footer(꼬리말)
  - 이슈 ID 등의 부가 정보 제공시 선택적으로 기입

* 사용 예시
  ```
  refactor: 사용자 인증을 세션에서 토큰 방식으로 변경

  추후 이중화 등의 확장을 용이하게 하기 위해 변경

  Resolves: #123
  See also: #456, #789
  ```

### Gitmoji
* Git + Emoji
* Git 커밋 메세지의 type을 텍스트 대신 Emoji로 지정해서 한눈에 어떤 작업을 했는지 식별

#### Gitmoji 설치
* Extentions > Gitmoji 설치

#### Gitmoji 설정
* File > Preferences > Settings > Workspace
  - "Gitmoji: Add Custom Emoji" > Edit in settings.json 클릭 후 Git 커밋 메세지 컨벤션에 맞춰서 커스텀 이모지 추가
  - 예시
    ```json
    {
      "gitmoji.addCustomEmoji": [
        {
          "emoji": "✨",
          "code": ":feat:",
          "description": "새로운 기능 추가"
        },
        {
          "emoji": "👔",
          "code": ":logic:",
          "description": "비즈니스 로직 수정"
        },
        {
          "emoji": "🚧",
          "code": ":cont:",
          "description": "진행중인 작업"
        },
        {
          "emoji": "♻️",
          "code": ":refactor:",
          "description": "코드 리팩토링"
        },
        {
          "emoji": "🔥",
          "code": ":remove:",
          "description": "파일 삭제"
        },
        {
          "emoji": "🚚",
          "code": ":rename:",
          "description": "파일명 수정/이동"
        },
        {
          "emoji": "⚰️",
          "code": ":cleanup:",
          "description": "코드 정리"
        },
        {
          "emoji": "💄",
          "code": ":style:",
          "description": "UI/Style 추가/수정"
        },
        {
          "emoji": "🐛",
          "code": ":fix:",
          "description": "버그 수정"
        },
        {
          "emoji": "📝",
          "code": ":docs:",
          "description": "문서 추가/수정"
        },
        {
          "emoji": "➕",
          "code": ":adddep:",
          "description": "의존성 추가"
        },
        {
          "emoji": "➖",
          "code": ":remdep:",
          "description": "의존성 삭제"
        },
        {
          "emoji": "🔧",
          "code": ":conf:",
          "description": "설정파일 추가/수정"
        }
      ],
      "gitmoji.onlyUseCustomEmoji": true,
    }
    ```

#### Gitmoji 사용
* VSCode > Source Control 커밋 메세지 입력시 Choose Gitmoji 아이콘 선택해서 사용

## 컴포넌트 설계
### UI를 계층구조로 나누기
* 컴포넌트를 계층 구조로 설계
* 단일 책임 원칙: 컴포넌트는 한가지 작업만 수행하도록 구성
  - 컴포넌트가 많은 작업을 수행하다면 더 작은 하위 컴포넌트로 분할
  
### 정적 버전으로 개발
* state는 사용하지 않고 props를 이용해서 하위 컴포넌트에 데이터 전달
* 하향식
  - 상위 컴포넌트 먼저 구축하고 하위 컴포넌트 구축
  - 소규모 프로젝트에 적합
* 상향식
  - 하위 컴포넌트 먼저 구축하고 상위 컴포넌트 구축
  - 대규모 프로젝트에 적합

### state 식별
* 시간이 지나도 변함 없이 유지되는가?
* props를 통해 부모로부터 전달되는가?
* 기존 state나 props 기반으로 계산할 수 있는 값인가?
* 그렇다면 state가 아님
* 나머지 값이 state일 수 있음

### 상태 관리를 해야 하는 컴포넌트 식별
* 해당 상태를 기반으로 렌더링하는 모든 컴포넌트 확인
* 가장 가까운 공통 상위 컴포넌트 확인
* 공통 상위 컴포넌트 또는 공통 상위 컴포넌트의 상위 컴포넌트에 상태 저장
* 적합한 컴포넌트가 없다면 컨테이너 컴포넌트를 만들어서 상태 저장도 고려

## 배포 준비
* Vite 환경 변수와 모드: <https://ko.vitejs.dev/guide/env-and-mode.html>

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
  ```
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