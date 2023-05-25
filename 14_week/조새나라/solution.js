function solution(n, k) {
    //주어진 수 n을 k진수로 변환 후 0을 기준으로 자른 배열을 만들고 소수의 수를 카운팅.
    let specialPrimeNumberCount = n.toString(k).split(0).reduce((acc,ele,idx,originArr)=>{
        if(isPrimeNumber(ele*1)) acc++;
        return acc;
    },0);

    return specialPrimeNumberCount;
}

// 소수를 구하는 함수.
const isPrimeNumber = (num) => {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  const sqrt = Math.sqrt(num); // 메모리 효율 상으론 ** 연산을 통해 제곱을 구해서 사용하는 것이 더 좋긴 함.
  for (let i = 3; i <= sqrt; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

// *번외* 소수 판별 꼬리 재귀함수, 꼬리 재귀지만 큰 수에 대해선 콜 스택 메모리 초과가 일어난다.
// const isPrimeNumber = (num, divisor = 2) => {
//   if (num < 2) return false;
//   if (num === divisor) return true;
//   if (num % divisor === 0) return false;

//   return isPrimeNumber(num, divisor + 1);
// };

