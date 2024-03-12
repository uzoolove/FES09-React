// 지정한 수가 소수인지 여부를 반환
var isPrime = memo(function(num){
  // 소수 판별 코드
  let prime = true;

  for(let i=2; i<=num/2; i++){
    if(num % i === 0){
      prime = false;
      break;
    }
  }

  if(num === 1){
    prime = false;
  }else if(num === 2){
    prime = true;
  }

  return prime;
});

// 지정한 수가 소수인지 여부를 반환
// var isPrime = function(num){
//   // 캐시를 위한 코드
//   isPrime._cache = isPrime._cache || {};
//   if(isPrime._cache[num] !== undefined){  // 캐시되어있음(hit)
//     return isPrime._cache[num];
//   }else{
//     // 소수 판별 코드
//     let prime = true;

//     for(let i=2; i<=num/2; i++){
//       if(num % i === 0){
//         prime = false;
//         break;
//       }
//     }

//     // 캐시를 위한 코드
//     isPrime._cache[num] = prime;

//     return prime;
//   }
// };

// 지정한 함수에 memoize 기능 추가
function memo(fn){
  return (num) => {
    fn._cache = fn._cache || {};
    if(fn._cache[num] !== undefined){  // 캐시되어있음(hit)
      return fn._cache[num];
    }else{
      return fn._cache[num] = fn(num); // isPrime(num)
    }
  };
}

// var isPrime = memo(isPrime);

console.time('소요시간');
console.log('3 -> ', isPrime(3));
console.log('4 -> ', isPrime(4));
console.log('5 -> ', isPrime(5));
console.log('6 -> ', isPrime(6));
console.log('7 -> ', isPrime(7));
console.log('8 -> ', isPrime(8));
console.log('9 -> ', isPrime(9));
console.log('1000000007 -> ', isPrime(1000000007));
console.log('1000000007 -> ', isPrime(1000000007));
console.log('1000000007 -> ', isPrime(1000000007));
console.timeEnd('소요시간');
