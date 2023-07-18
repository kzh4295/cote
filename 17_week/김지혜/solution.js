function solution(record) {
  let answer = [];
  let nicknameDict = {}; // 유저 아이디와 닉네임을 저장할 객체

  // record 배열 순회
  for (let i = 0; i < record.length; i++) {
    let [command, userId, nickname] = record[i].split(' ');

    if (command === 'Enter') {
      nicknameDict[userId] = nickname; // 유저 아이디와 닉네임 저장
      answer.push(`${userId}님이 들어왔습니다.`);
    } else if (command === 'Leave') {
      answer.push(`${userId}님이 나갔습니다.`);
    } else if (command === 'Change') {
      nicknameDict[userId] = nickname; // 닉네임 변경
    }
  }

  // answer 배열의 메시지에 닉네임 적용
  answer = answer.map((message) => {
    let userId = message.split('님이')[0];
    return message.replace(userId, nicknameDict[userId]);
  });

  return answer;
}

