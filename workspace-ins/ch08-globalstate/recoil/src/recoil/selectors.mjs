import { countState } from "@recoil/atoms.mjs";
import { selector } from "recoil";

export const countStateKor = selector({
  key: 'counterKor',
  get: ({ get }) => {
    const count = get(countState);
    return numberToKorean(count);
  }
});

function numberToKorean(number){
  // number를 한국식 발음으로 변환하는 함수
  const koreanNumbers = ['영', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구'];
  const koreanUnits = ['', '십', '백', '천', '만', '억', '조', '경']; // up to 1경 (10^16)
  
  // Function to convert each digit to Korean
  function digitToKorean(digit) {
      return koreanNumbers[digit];
  }

  // Split number into array of digits
  const digits = number.toString().split('').map(Number);

  // Reverse the array to start from the units place
  digits.reverse();

  let koreanString = '';

  // Loop through each digit and its corresponding unit
  digits.forEach((digit, index) => {
      if (digit !== 0) { // Exclude zero digits
          koreanString = digitToKorean(digit) + koreanUnits[index] + koreanString;
      } else if (index === 4) { // Include '만' for units place
          koreanString = koreanUnits[index] + koreanString;
      }
  });

  return koreanString;
}