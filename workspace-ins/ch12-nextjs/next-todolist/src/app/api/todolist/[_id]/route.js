import { db } from '@/db';
import _ from 'lodash';
import { NextResponse } from 'next/server';

// DB에서 할일 목록 조회
export async function GET(req, { params: { _id }}){
  const item = _.find(db.data.items, {_id: Number(_id)});
  return NextResponse.json({ item }, { status: 200 });
}

