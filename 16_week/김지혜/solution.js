function solution(n, t, m, p) {
  let answer = '';
  
    // 게임 회차별로 진수에 맞게 변환되서 내야할 숫자 범위(참가할 인원 * 튜브의 순서) 구하기
    // 게임 회차별 출력해야할 값을 순차적으로 구하기
    // 튜브의 순서에 맞게 가위바위보 족보를 출력하기
  let gameCount ='';
  for(let number =0; number < m * t; number++){
    gameCount += number.toString(n);
    const gameValueArray = [...gameCount];
    if((number % m+1) === p) answer += gameValueArray[number];
  }
    answer = answer.slice(0, t).toUpperCase();
  return answer;
}
