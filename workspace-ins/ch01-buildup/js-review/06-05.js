// 06-04.js 복사
function f1(){
  return new Promise((resolve, reject) => {
    console.log(`2. f1 작업 시작.`);
    console.log(`3. f1 작업중...`);
  
    setTimeout(() => {
      // ......
      console.log(`4. f1 작업 종료.`);
      // 정상적으로 작업을 완료하면 resolve(result) 호출하도록 구현
      // 작업 중 오류가 발생하면 reject(error) 호출하도록 구현
      resolve(`f1의 결과물`);
      // reject(new Error('f1 에러'));
    }, 1000);
  });
}

function f2(f1Result){
  return new Promise((resolve, reject) => {
    console.log(`5. ${f1Result}로 f2 작업 시작.`);
    console.log(`6. f2 작업중...`);
    
    setTimeout(() => {
      // ......
      console.log(`7. f2 작업 종료.`);
      resolve(`최종 결과물`);
      // reject(new Error('f2 에러'));
    }, 500);
  });
}

async function f1(){
  console.log(`2. f1 작업 시작.`);
  console.log(`3. f1 작업중...`);
  // ......
  console.log(`4. f1 작업 종료.`);
  return (`f1의 결과물`);
}

async function f2(f1Result){
  console.log(`5. ${f1Result}로 f2 작업 시작.`);
  console.log(`6. f2 작업중...`);
  // ......
  console.log(`7. f2 작업 종료.`);
  return (`최종 결과물`);
}

async function test(){
  // ES2017 async/await
  try{
    const f1Result = await f1(); // 동기함수처럼 동작
    const f2Result = await f2(f1Result);
    console.log('8.', f2Result);
    return 'test 완료.';
  }catch(err){
    console.error(err);
  }
}

console.log('1. 테스트 시작.');

(async () => {
  const result = await test();
  console.log(result);
})();

console.log('9. 테스트 완료.');

