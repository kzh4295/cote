function solution(dartResult) {
    // 보너스 map 객체
    let bonusPoint = {
        S : 1,
        D : 2,
        T : 3
    };
    
    let calcDartObj = [...dartResult].reduce((acc,ele,idx, orignArray)=>{
        if(/[SDT]/.test(ele)){ //보너스일 경우 수치에 알맞게 기존 값에 제곱하여 저장.
            acc.recentPoint **= bonusPoint[ele];
        }else if(ele === '*'){ //스타상
            let prevPoint = acc.totalPointArray.pop();
            acc.recentPoint = acc.recentPoint*2;
            if(prevPoint) acc.totalPointArray.push(prevPoint*2); //이전 값이 있을 경우 *2하여 push.
        }else if(ele === '#'){ //아차상
            acc.recentPoint = acc.recentPoint*-1;
        }else{ //그외(숫자)일 경우 그냥 저장.
            if(idx!==0) acc.totalPointArray.push(acc.recentPoint); //직전 포인트 추가.
            if(ele === '0'){ //0일 경우 10점일 수도 있기 때문에 분기를 처리함.
                let prevElement = orignArray[idx-1];
                acc.recentPoint = prevElement==='1'?acc.totalPointArray.pop()+ele:ele*1; //10점이면 직전포인트를 꺼내서 처리.
            }else{
                acc.recentPoint = ele*1;   
            }
        }
        return acc;
    },{
        totalPointArray : [], // 계산한 다트 점수들을 담을 배결
        recentPoint : 0, // 각 차례의 점수를 담을 변수
    });
    return calcDartObj.totalPointArray.reduce((acc,ele)=>acc+ele,0) + calcDartObj.recentPoint;
}
