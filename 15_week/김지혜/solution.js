function solution(msg) {
  let answer = [];
  let wordArr = [];
  let idx = 0;

  // 초기 사전 설정
  for (let i = 0; i < 26; i++) {
    const code = String.fromCharCode(i + 65);
    wordArr.push(code);
  }

  while (msg !== '') {
    let found = false;
    for (let i = msg.length; i >= 0; i--) {
      const w = msg.slice(0, i);

      if (wordArr.includes(w)) {
        answer.push(wordArr.indexOf(w) + 1);

        // 다음 처리할 메시지 갱신
        msg = msg.slice(i, msg.length);

        // 사전에 새로운 항목 추가
        const wc = w + msg[0];
        wordArr.push(wc);
        
        found = true;
        break;
      }
    }

    // 사전에 새로운 단어가 추가되지 않은 경우, 다음 문자 처리
    if (!found) {
      const char = msg[0];
      answer.push(wordArr.indexOf(char) + 1);

      // 다음 처리할 메시지 갱신
      msg = msg.slice(1, msg.length);
    }
  }

  return answer;
}
