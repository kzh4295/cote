function solution(s) {
  let answer = [];

  // string 형태의 s를 배열 형태로 변환
  let changeS = (param) => param.replaceAll('{', '').replaceAll('}', '').split(',');

  // changeS배열을 reduce 돌려서 요소 중에서 제일 개수가 많은 값의 개수를 세기
  const tempObj = changeS(s).reduce((acc, ele) => {
    acc[ele] = (acc[ele] || 0) + 1;
    return acc;
  }, {});

  // object의 value(개수)가 많은 수를 먼저 answer에 push
  answer = Object.entries(tempObj)
    .sort((a, b) => {
      return b[1] - a[1];
    })
    .map((ele) => {
      return ele[0] * 1;
    });

  return answer;
}
