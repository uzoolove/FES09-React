var score = [1,2,3,4,5,6,7,8,9,10];

// 배열 모든 요소의 합계
// for
var sum = 0;
for(let i=0; i<score.length; i++){
  sum += score[i];
}
console.log(sum);

// for of
var sum = 0;
for(let num of score){
  sum += num;
}
console.log(sum);

// forEach
var sum = 0;
score.forEach(num => sum += num);
console.log(sum);

// reduce
var sum = score.reduce((sum, num) => {
  console.log(sum, num);
  return sum + num;
}, 0);

console.log(sum);
