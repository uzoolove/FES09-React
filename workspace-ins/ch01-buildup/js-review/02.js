var itemList = [
  { no: 1, todo: '두부', done: true},
  { no: 2, todo: '계란', done: false},
  { no: 3, todo: '라면', done: true},
];

console.log(itemList[0]);
console.log(itemList[1]);

var [ first, second ] = itemList;
console.log(first);
console.log(second);

var item = { no: 2, todo: '계란', done: false};
console.log(item.no, item.todo);

var { no, done: finish, hello: hi='안녕' } = item;
console.log(no, finish, hi);

