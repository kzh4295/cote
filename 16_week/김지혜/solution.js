// n:진법, t:미리 구할 숫자의 갯수, m:게임에 참가하는 인원, p:튜브의 순서
function solution(n, t, m, p) {
  let answer = '';
  
  // 게임 회차별로 진수에 맞게 변환되서 내야할 숫자 범위(참가할 인원 * 튜브의 순서) 구하기
  let gameCount ='';
  for(let i=0; i < m * t; i++){
    gameCount += i.toString(n)
  }

  // 게임 회차에 따라 참여 인원이 내야할 값을 배열로 분류하기
  gameValueArray = [...gameCount]

  // 튜브가 내야할 값만 tubeValue에 담기
  const tubeValue = gameValueArray.reduce((acc, cur, index) => {
      // 나머지 값이 p값과 같으면(튜브의 순서값만) 누적하기
    if((index % m+1) === p) acc += cur;
    return acc;
  },'');
    
  // result에서 t길이 만큼의 값을 구하고 대문자로 변환한 값을 answer에 할당하기
  answer = tubeValue.slice(0, t).toUpperCase();
  return answer
}

