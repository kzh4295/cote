function solution(n, t, m, p) {
    //n 진법
    //t 구할 숫자
    //m 참가 인원
    //p 내순서
    
    //참가 인원 * 구할 숫자(= 게임 진행 횟수)를 기준으로 루프.
    let nJeansGame = [...Array(m*t)].reduce((acc,ele,idx)=>{
        /* 
        * 각 순서마다 queue 방식으로 n진수 숫자를 제거하며 나의 턴일때 제거한 숫자를 nNumberArray에 추가.
        * queue의 작동 원리를 reverse를 시키고 pop 시키는 것으로 대체.
        */
        
        let myTurn = Boolean(idx % m + 1 === p); // 나의 턴 유무
        if(acc.nNumberArray.length === 0) { // 현재 n진수 숫자가 끝남, 다음 n진수 숫자를 넣는 예
            acc.nowNumber++; // 10진수 숫자 늘리기. 
            acc.nNumberArray = [...acc.nowNumber.toString(n)].reverse();
        }
        
        // 나의 턴일 경우엔 pop()한 값을 족보에 저장, 아닐 경우 그냥 버림.
        if(myTurn){
            acc.myNumberString += acc.nNumberArray.pop();
        }else{
            acc.nNumberArray.pop();
        }
        
        return acc;
    },{
        myNumberString : '', // 나의 게임 족보.
        nowNumber : 0, // 현재 10진수 숫자.
        nNumberArray : [0] // 현재 10진수 숫자를 n진수로 변환한 배열
    });
    return nJeansGame.myNumberString.toUpperCase(); //정답은 대문자 처리 후 반환.
}
