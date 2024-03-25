# 9장 리액트에서 CSS 사용
* 소스 코드(GitHub): <https://github.com/uzoolove/FES09-React/tree/main/workspace-ins/ch09-css>
* 코드 실행(GitHub Page): <https://uzoolove.github.io/FES09-React/workspace-ins/index.html#09>


## 9-1 CSS 모듈
* 프로젝트 규모가 커지면서 여러개의 CSS 파일을 사용하다 보면 동일한 이름의 클래스가 중복 정의될 수 있음.
* 이때, 중복된 클래스가 적용된 리액트 엘리먼트는 여러 클래스에서 정의한 스타일이 다 적용되면서 원치 않는 스타일을 가질 수 있음.
* 각 CSS 파일의 클래스 값을 중복되지 않는 고유한 이름으로 만들어 주기 때문에 클래스명의 중복을 방지할 수 있음.

### 장점
* 동일한 클래스를 중복되게 작성해서 발생하는 스타일의 불일치 방지
* 클래스명을 모듈 내에서만 중복되지 않게 작성하면 되므로 클래스명 네이밍 고민이 줄어듬
* 보통 컴포넌트당 CSS 모듈을 작성하므로 스타일을 유지보수하기 편해짐

### 사용 방법
* css 파일 확장자 앞부분에 .module을 추가
  ```
  main.module.css
  ```

## 9-2 Styled components
* 대표적인 CSS-in-JS 라이브러리
* CSS-in-JS: 자바스크립트 코드로 CSS 스타일을 작성

### 장점
* CSS 클래스명 중복을 고려할 필요가 없음
  - 고유한 클래스 이름을 자동으로 생성
* JS 코드의 변수 값을 CSS 스타일링에 사용할 수 있기 때문에 동적으로 스타일링 가능
  - props, state 등을 이용해서 스타일링
* 컴포넌트와 스타일이 결합되어 있기 때문에 컴포넌트 단위로 스타일을 수정하기 용이함
* vender prefix가 자동으로 추가됨

### 사용 방법
* 설치
  ```
  npm i styled-components
  ```

### 사용 예시
* StyledButton.jsx
  ```jsx
  import styled from 'styled-components';

  const ButtonStyle = styled.button`
    background-color: ${ props => props['backgroundColor'] || 'white' };
    border: none;
    color: ${ props => props.color || 'black' };
    padding: 6px 18px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 6px;
  `;

  function StyledButton({ children, ...rest }){
    return <ButtonStyle type="button" { ...rest }>{ children }</ButtonStyle>
  }

  export default StyledButton;
  ```

## Tainwind CSS

### Tainwind CSS란?
* utility-first CSS framework
* 미리 정의된 CSS 클래스를 이용해서 스타일링을 할 수 있는 프레임워크
* CSS 파일을 따로 만들 필요 없이 제공되는 클래스를 HTML 태그에 직접 지정

### 장점
* 개발 생산성: 개발자가 CSS 클래스를 정의할 필요 없이 미리 정의된 클래스를 사용하기 때문에 개발 속도와 생산성을 높일 수 있음
* 재사용성: 재사용 가능한 클래스가 제공되므로 동일한 클래스를 여러 엘리먼트에 사용해서 일관된 디자인 구축
* 유연성: 많은 유틸리티 클래스를 제공하고 커스터마이징이 가능
* 가독성: 클래스 이름이 직관적이라서 가독성이 높음
* 파일 크기: 사용하는 클래스만 포함하여 최적화된 CSS 생성

### 사용 방법
#### 설치
```powershell
npm install -D tailwindcss postcss autoprefixer
```
##### PostCSS
* CSS를 변환하는 도구로, 다양한 CSS 전처리기, 후처리기 및 CSS 확장을 사용할 수 있도록 도와줌
* PostCSS를 사용하여 CSS를 처리하고 변경할 수 있음
* 플러그인 생태계: 다양한 플러그인을 사용하여 CSS를 확장하고 향상시킬 수 있음
  - autoprefixer 플러그인: vender prefix를 자동으로 추가
  - tailwindcss 플러그인: tailwindcss 사용
* 성능 개선: PostCSS는 CSS를 효율적으로 처리하고 최적화
* 모던 CSS 사용: PostCSS는 최신 CSS 스펙을 지원하지 않는 브라우저에서도 최신 CSS 사용이 가능하도록 해줌
* 자동화 도구와 통합하여 CSS 작업을 자동화하고 효율적으로 관리

#### 설정 파일 생성
* tailwind.config.js
* postcss.config.js(-p 옵션으로 생성)
  ```powershell
  npx tailwindcss init -p
  ```

#### 설정 파일 수정
* tailwind.config.js
  - tailwindcss를 적용할 대상 확장자 지정
    ```js
    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: ["./src/**/*.{js,jsx}"],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```
* postcss.config.js
  - PostCSS의 플러그인 설정 파일
  - 기본으로 tailwindscss와 autoprefixer 플러그인이 추가되어 있음
    ```
    export default {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    }
    ```
    
#### tailwindcss 지시어 추가
* index.css
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

  - 지시어 경고 수정
    + VSCode는 @tailwind 키워드를 인식할 수 없어서 경고 발생
    + VScode 설정에서 unknown at rules 검색 후 CSS > Lint: Unknown At Rules를 Ignore로 변경
    
#### VSCode 플러그인
* Tailwind CSS IntelliSense
  - VSCode에서 tainwindcss 관련 자동 완성, 구문 강조, 린팅 같은 기능 제공
  - 마우스 오버시 실제 적용되는 CSS가 툴팁으로 표시

### 사용 예시
```jsx
function Button({ children, type="button", color='blue', size='md', ...rest }){
  let btnColor = {
    gray: `bg-gray-500`,
    blue: `bg-blue-500`,
    red: `bg-red-500`,
  };
  let btnSize = {
    sm: `py-1 px-2 text-sm`,
    md: `py-2 px-4 text-base`,
    lg: `py-2 px-6 text-lg`
  };

  return <button type={ type } className={`${ btnColor[color] } ml-2 hover:bg-blue-600 text-white font-bold ${btnSize[size]} rounded`} { ...rest }>{ children }</button>;
}

export default Button;
```


