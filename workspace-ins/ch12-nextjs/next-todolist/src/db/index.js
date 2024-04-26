import _ from 'lodash';
import path from 'node:path';
import { JSONSyncPreset } from 'lowdb/node';
import initData from './initData.js';

// DB 초기화
export const db = await JSONSyncPreset(path.join(process.cwd(), 'src', 'db', 'todolist.json'), _.cloneDeep(initData));
db.write();
