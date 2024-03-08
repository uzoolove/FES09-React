import { produce } from 'immer';
import { useState } from "react";
import Todo from "./Todo";

function TodoContainer(){
  // 샘플 목록
  const [itemList, setItemList] = useState([
    { _id: 1, title: '두부', done: true } ,
    { _id: 2, title: '계란', done: false },
    { _id: 3, title: '라면', done: true },
  ]);

  function addItem(item){
    // 데이터 갱신(상태 변경)
    const newItemList = [ ...itemList, item ];
    setItemList(newItemList);
  }

  function toggleDone(_id){
    // immer
    const newItemList = produce(itemList, (draft) => {
      const item = draft.find(item => item._id === _id);
      item.done = !item.done;
    });    
    setItemList(newItemList);
  }

  function deleteItem(_id){
    // 데이터 갱신(상태 변경)
    const newItemList = itemList.filter(item => item._id !== _id);
    setItemList(newItemList);
  }

  return (
    <Todo itemList={ itemList } addItem={ addItem } toggleDone={ toggleDone } deleteItem={ deleteItem } />
  );
}

export default TodoContainer;