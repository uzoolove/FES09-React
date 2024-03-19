# 6장 컨텍스트 API
* 소스 코드(GitHub): <https://github.com/uzoolove/FES09-React/tree/main/workspace-ins/ch06-contextapi>
* 코드 실행(GitHub Page): <https://uzoolove.github.io/FES09-React/workspace-ins/index.html#06>

* 컴포넌트 트리에서 자식 컴포넌트에 속성을 전달할때 props를 이용하는 방법은 컴포넌트 트리가 깊을 경우 불편함
* Context API를 사용하면 매번 자식에게 속성을 전달하지 않고 컴포넌트에 필요한 데이터 전달이 가능

## 사용 단계
### Context 객체 생성
* React.createContext() 함수로 생성

### Provider 컴포넌트 생성
* 상태와 상태 변경 함수를 관리할 컴포넌트
* Context 객체의 Provider 감싸서 {props.children} 렌더링
  - props.children: TodoProvider 컴포넌트를 렌더링 할 때 지정한 자식 컴포넌트
    ```jsx
    return (
      <TodoContext.Provider value={ values }>
        { props.children }
      </TodoContext.Provider>
    );
    ```
    ```jsx
    <TodoProvider>
      <App />
    </TodoProvider>
    ```

#### 사용 예시
```jsx
const TodoContext = React.createContext(null);

const TodoProvider = function(props){
  const [itemList, setItemList] = useState([]);

  const listTodo = async function(){};
  const addTodo = async function(item){};
  const getTodo = async function(no){};  
  const deleteTodo = async function(no){};
  const updateTodo = async function(no, newItem){};
  const toggleDone = async function(no, done){};

  const values = {
    states: { itemList },
    actions: { addTodo, getTodo, deleteTodo, updateTodo, toggleDone }
  };

  return (
    <TodoContext.Provider value={values}>
      {props.children}
    </TodoContext.Provider>
  );

  export {TodoProvider};
  export default TodoContext;
};
```

### useContext 훅으로 사용
* 자식 컴포넌트에서 useContext 훅으로 사용

#### 사용 예시
```jsx
import TodoContext from '../contexts/TodoContext';
const TodoList = function(){
  const value = useContext(TodoContext);
  const itemList = value.states.itemList;
  ...
};
```
