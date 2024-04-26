'use server';

import { db } from '@/db';
import moment from 'moment';
import _ from 'lodash';
import { revalidatePath } from 'next/cache';

// 할일 등록
export async function create(todo){
  const nextId = ++db.data.nextId.items;
  let createdAt = moment().format('YYYY.MM.DD HH:mm:ss');
  const newTodo = {
    _id: nextId,
    ...todo,
    done: false,
    createdAt,
    updatedAt: createdAt,
  };
  db.data.items.push(newTodo);
  db.write();
  revalidatePath('/list');
  return newTodo;
}

// 할일 수정
export async function update(_id, todo){
  const index = _.findLastIndex(db.data.items, { _id });
  if(index < 0){
    return;
  }
  const oldTodo = db.data.items[index];
  const updatedAt = moment().format('YYYY.MM.DD HH:mm:ss');
  const newTodo = {...oldTodo, ...todo, updatedAt};
  db.data.items.splice(index, 1, newTodo);
  return newTodo;
}

// 할일 삭제
export async function remove(_id){
  const result = _.remove(db.data.items, todo => todo._id == _id);
  db.write();
  return result.length;
}