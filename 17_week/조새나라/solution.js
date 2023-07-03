function solution(record) {
    let makelogMsg = record.reduce((acc,ele,idx)=>{
        let logMsgArray = ele.split(' '); // 문자열을 띄어쓰기 기준으로 배열화
        
        // Leave가 아닐 경우 유저의 유니크한 uid를 기준으로 닉네임을 항상 갱신.
        if(logMsgArray[0] !== 'Leave') acc.userListObj[logMsgArray[1]] = logMsgArray[2]; 
        
        // Change가 아닐 경우 msgArray에 메시지 추가. 
        // 얕은 복사를 활용하기 위해 [uid, '님이 xx습니다'] 배열로 생성.
        if(logMsgArray[0] !== 'Change') acc.msgArray.push([logMsgArray[1],`님이 ${logMsgArray[0] === 'Enter'? '들어왔습니다.':'나갔습니다.'}`]);

        return acc;
    },{
        userListObj : {}, // 유니크한 uid를 기준으로 닉네임을 기록하기 위한 obj
        msgArray : [] // 메시지 배열을 저장할 2차원 배열.
    });

    // uid를 현재 닉네임으로 치환하여 로그 메시지를 만든 것을 return.
    return makelogMsg.msgArray.map(ele=>{
        ele[0] = makelogMsg.userListObj[ele[0]];
        return ele.join("");
    });
}
