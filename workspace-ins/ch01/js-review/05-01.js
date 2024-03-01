function f1(){
  console.log(`f1 작업 시작.`);
  console.log(`f1 작업중...`);
  // ......
  console.log(`f1 작업 종료.`);
  return (`f1의 결과물`);
}

function f2(f1Result){
  console.log(`${f1Result}로 f2 작업 시작.`);
  console.log(`f2 작업중...`);
  // ......
  console.log(`f2 작업 종료.`);
  return (`최종 결과물`);
}

function test(){
  
}

console.log('1. 테스트 시작.');
test();
console.log('테스트 완료.');