const LEFT_HAND_INIT_POSITION = 10;
const RIGHT_HAND_INIT_POSITION = 12;

const LEFT_HAND = 'L';
const RIGHT_HAND = 'R';

const 왼손으로누를숫자 = [1, 4, 7];
const 오른손으로누를숫자 = [3, 6, 9];

const getTouchHandByDistance = (number, leftHandPosition, rightHandPosition) => {
  // 거리 체크하는 함수
  // 의도 => 행의 이동 거리 + 열의 이동 거리
  // 행의 이동거리 => leftHandPosition 혹은 rightHandPosition와 매개변수(누른 키패드 값)의 차이에 3을 나눈 몫만큼 이동
  // 열의 이동거리 => leftHandPosition 혹은 rightHandPosition와 매개변수(누른 키패드 값)의 차이에 3을 나눈 나머지만큼 이동

  console.log('number =', number);
  console.log('leftHand =', leftHandPosition);
  console.log('rightHand =', rightHandPosition);

  const leftHandDistance =
    Math.abs(Math.trunc((leftHandPosition - number) / 3)) + Math.abs((leftHandPosition - number) % 3);

  const rightHandDistance =
    Math.abs(Math.trunc((rightHandPosition - number) / 3)) + Math.abs((rightHandPosition - number) % 3);

  if (leftHandDistance === rightHandDistance) return 'SAME';
  if (leftHandDistance > rightHandDistance) return RIGHT_HAND;
  if (leftHandDistance < rightHandDistance) return LEFT_HAND;
};

const 배열중숫자0은11로변환 = (array) =>
  array.map((elem) => {
    if (elem === 0) return 11;

    return elem;
  });

const getTouchHand = (number) => {
  if (왼손으로누를숫자.includes(number)) return LEFT_HAND;

  return RIGHT_HAND;
};

function solution(numbers, hand) {
  let answer = ''; //solution함수를 return 하고자 하는 값

  const convertedNumbers = 배열중숫자0은11로변환(numbers);

  let leftHandPosition = LEFT_HAND_INIT_POSITION;
  let rightHandPosition = RIGHT_HAND_INIT_POSITION;

  const touchHandRecord = convertedNumbers.map((number) => {
    switch (number) {
      case 1:
      case 3:
      case 4:
      case 6:
      case 7:
      case 9:
        const touchHand = getTouchHand(number);

        if (touchHand === LEFT_HAND) leftHandPosition = number;
        if (touchHand === RIGHT_HAND) rightHandPosition = number;

        return touchHand;

      case 2:
      case 5:
      case 8:
      case 11:
        const touchHandByDistance = getTouchHandByDistance(number, leftHandPosition, rightHandPosition);

        if (touchHandByDistance === 'SAME') {
          const upperCaseHand = hand[0].toUpperCase();

          if (upperCaseHand === LEFT_HAND) leftHandPosition = number;
          if (upperCaseHand === RIGHT_HAND) rightHandPosition = number;

          return upperCaseHand;
        }

        if (touchHandByDistance === LEFT_HAND) {
          leftHandPosition = number;

          return LEFT_HAND;
        }

        if (touchHandByDistance === RIGHT_HAND) {
          rightHandPosition = number;

          return RIGHT_HAND;
        }
    }
  });

  answer = touchHandRecord.join('');
  return answer;
}

const result = solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left');
console.log(result);
// 기대값:              LRLLRRLLLRR
