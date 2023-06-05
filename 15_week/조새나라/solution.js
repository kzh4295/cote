function solution(msg) {
    let compressObj = [...msg].reduce((acc,ele,idx,originArr)=>{
        if(idx !== acc.lastIdx) { // 현재 인덱스와 마지막으로 합성 단어를 검색한 인덱스가 같지 않을 경우 스킵.
            return acc;
        }
        
        let nowWordIndex = acc.dictArr.indexOf(ele); // 현재 한 글자의 사전 상의 인덱스 추출.
        let combineWordIndex = recursiveCombineWord(acc, originArr, idx, ele); // 현재 글자를 시작으로 사전에 있는 합성 단어의 인덱스 추출, 못찾았을 경우 현재 글자의 인덱스임. 
        

        if(combineWordIndex > -1 && nowWordIndex !== combineWordIndex){ // 합성 단어가 사전에 있는 경우
            acc.indexArr.push(combineWordIndex+1); // 색인 배열(indexArr)에 결합된 단어 추가
        } else if(nowWordIndex > -1){ // 결합된 단어가 아닐 경우 기본 한 글자 추가 케이스.
            acc.indexArr.push(nowWordIndex+1); 
        }
        return acc;
    },{
        lastIdx : 0, // 마지막으로 합성 단어를 탐색한 index
        dictArr : [
            "A","B","C","D","E","F","G",
            "H","I","J","K","L","M","N",
            "O","P","Q","R","S","T","U",
            "V","W","X","Y","Z"
        ], // 기본 알파벳을 등록한 사전 배열
        indexArr : [] // 최종 색인 배열
    });
    return compressObj.indexArr;
}


/* 사전에 추가할 합성 단어를 찾는 재귀함수
* 사전에서 합성 단어를 찾을 경우 찾은 단어의 인덱스를, 못찾았을 경우 현재 한 글자 단어의 인덱스를 반환함. 
*/
let recursiveCombineWord = (acc, originArr, idx, word)=>{
    if(acc.dictArr.indexOf(word+originArr[idx+1]) > -1) { // 합성 단어가 없을때까지 탐색
        return recursiveCombineWord(acc, originArr, idx+1, word+originArr[idx+1]);
    }
    else { // 마지막으로 찾은 합성 단어의 index 값을 반환하고, 못찾은 합성 단어를 사전 배열에 추가함.
        let findIndex = acc.dictArr.indexOf(word); // 찾은 단어의 index
        acc.lastIdx = idx+1; // 마지막으로 탐색한 index를 저장, 얕은 복사에 따라 원본 acc에도 반영.
        acc.dictArr.push(word+originArr[idx+1]); // 못찾은 단어를 사전 배열에 추가, 얕은 복사에 따라 원본 acc에도 반영.
        return findIndex;
    }
};
