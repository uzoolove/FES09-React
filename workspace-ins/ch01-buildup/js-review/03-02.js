var item = { no: 1, todo: '두부', done: true };
item.done = false;

var newItem = item;

var newItem = { no: item.no, todo: item.todo, done: item.done };

// assign(target, source): target 객체에 source 객체의 속성을 추가함
var newItem = Object.assign(item, { delete: true });

var newItem = { ...item, delete: true };
var newItem = { ...item, done: false };
// newItem.delete = true;

newItem.done = false;

console.log(item, newItem);
console.log(item === newItem);