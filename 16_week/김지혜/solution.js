// n:진법, t:미리 구할 숫자의 갯수, m:게임에 참가하는 인원, p:튜브의 순서
function solution(n, t, m, p) {
  let answer = '';

  // tempArray라는 변수에 돌릴 변수 틀 만들고 넣기
  // 배열 요소 개수(t - 1) * m + p 먼저 틀 만들고
  let tempArray =[];
  // 배열의 요소들을 진수 변환해서 PUSH로 넣기
  for(let i=0; i <(t - 1) * m + p; i++){
    tempArray.push(i.toString(n))
  }

   // reduce를 이용하여 1~m명까지 한명씩 차례대로 배열 만들기
  tempArray = [...tempArray.join().replace(/,/g, "")]
  // 배열의 길이 제한
  tempArray.length=m*t;

  // player들이 순서대로 낼 값을 키-값 형태로 저장
  let player = Array.from({length:m},(v, i)=>i+1)
  const result = tempArray.reduce((acc, curr, index) => {
    const currentPlayer = player[index % player.length];
    acc[currentPlayer]+=curr;
    return acc;
  },{});

  // player 키값과 p값이 일치하는 i값의 밸류를 구하기
  let playerLength = Object.keys(result).length;
  for(let i = 0; i<playerLength; i++){
    if(Object.keys(result)[i]*1 === p) {
      answer = Object.values(result)[i]
      break;
    }
    else answer = ''

  }

  // 앞의 undefined를 제거하고 소문자를 대문자로 변환하여 answer값 구함
  return answer.replace('undefined', '').toUpperCase();
}
