import { produce } from 'immer';

// 순수 함수
// state의 불변성 유지헤야 함
function TodoReducer(state, action){
  const targetIndex = state.findIndex(item => item._id === action.item._id);

  switch(action.type){
    case 'ADD':
      return produce(state, draft => {
        draft.push(action.item);
      });
    case 'TOGGLE':
      return produce(state, draft => {
        draft[targetIndex].done = !draft[targetIndex].done;
      });
    case 'DELETE':
      return produce(state, draft => {
        draft.splice(targetIndex, 1);
      });
  }
}

export default TodoReducer;