import { useReducer, useState } from "react";
import Todo from "./Todo";
import TodoReducer from '../../reducers/TodoReducer.mjs';

function TodoContainer(){
  // 샘플 목록
  const sampleItemList = [
    { _id: 1, title: '두부', done: true } ,
    { _id: 2, title: '계란', done: false },
    { _id: 3, title: '라면', done: true },
  ];

  const [nextId, setNextId] = useState(sampleItemList.length + 1);

  // const [itemList, setItemList] = useState(sampleItemList);

  const [itemList, itemListDispatch] = useReducer(TodoReducer, sampleItemList);

  function addItem(item){
    itemListDispatch({ type: 'ADD', item: { ...item, _id: nextId, done: false } });
    setNextId(nextId + 1);
  }

  function toggleDone(_id){
    itemListDispatch({ type: 'TOGGLE', item: { _id }});
    // => TodoReducer(itemList, { type: 'TOGGLE', item: { _id }});
    //    setItemList(newItemList);
  }

  function deleteItem(_id){
    itemListDispatch({ type: 'DELETE', item: { _id }});
  }

  return (
    <Todo itemList={ itemList } addItem={ addItem } toggleDone={ toggleDone } deleteItem={ deleteItem } />
  );
}

export default TodoContainer;