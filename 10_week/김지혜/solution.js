function solution(dartResult) {

    let answer = 0;
    const tempNumber = [0, 0, 0]
    const tempString = [1, 1, 1]
    const tempOption = [1, 1, 1]
    const sumArray = [0, 0, 0]

    for (let i = 0; i < 3; i++) {
        // dartResult에서 정수 시작부를 tempNumber에 하나씩 담기
        tempNumber[i] = parseInt(dartResult)
        console.log(tempNumber[i])
        // 0~10까지 가능하므로 해당 길이 만큼은 slice해줌
        dartResult = dartResult.slice((tempNumber[i]+'').length)

        // tempString의 값을 하나씩 담기
        switch (dartResult[0]) {
            case 'S':
                tempString[i] = 1; 
                break;
            case 'D':
                tempString[i] = 2; 
                break;
            case 'T':
                tempString[i] = 3; 
                break;
        }
        dartResult = dartResult.slice(1)

        // 해당 옵션일 경우 tempOption의 값 담기
        if (dartResult[0] === '*'){
            tempOption[i] = 2;
            dartResult = dartResult.slice(1)
        } else if(dartResult[0] === '#'){
            tempOption[i] = -1; 
            dartResult = dartResult.slice(1)
        }
    }
    
    
//     console.log('tempNumber', tempNumber, 'tempString', tempString, 'tempOption', tempOption)

    // 개별 점수 계산
    for (let i = 0; i < 3; i++) {
        sumArray[i] = Math.pow(tempNumber[i], tempString[i]);
        sumArray[i] = sumArray[i] * tempOption[i];
        if (i > 0 && tempOption[i] == 2) {
            sumArray[i - 1] = sumArray[i - 1] * tempOption[i];
        }
    }

    // 총점 계산
    answer = sumArray.reduce((acc, score) => { return acc + score }, 0)
    return answer;
}


