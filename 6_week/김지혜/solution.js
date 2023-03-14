function solution(board, moves){
    let answer = 0;
    let lenBoard = board[0].length;
    const tempBoard = [];
    const tempStack =[];
    
    for(let i = 0; i < lenBoard ; i++){ //배열의 행 길이만큼 반복한다 
        const tmp = [];
        board.forEach((row, idx) => {  
            if(row[i] !== 0){
                tmp.push(row[i])
            }                           //배열의 행에서 선택한 0이 아닌 값을 열의 값으로 추출
        });
        tempBoard.push(tmp);            //추출한 값을 저장 =>tempBoard
    }
    
     for(let x of moves){
        if(tempBoard[x-1][0]){                // tempBoard에 인형이 있을 경우
            tempStack.push(tempBoard[x-1][0]) // tempStack에 추가 =>tempStack
            tempBoard[x-1].shift();
        }
    }
    const lenStack = tempStack.length;
    for(let i=0; i<lenStack; i++){
        if(tempStack[i] === tempStack[i+1]){
            answer += 2;
            tempStack.splice(i,2);
            i=-1;
    }
}
    
    
    return answer;
}
