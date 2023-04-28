function solution(s) {
    // 중복을 제거한 Map인 dedupeMap을 지닌 객체 생성
    let dedupeMapObj = s.replace(/([{}])/g,'').split(',').reduce((acc,ele,idx)=>{
        if(!acc.dedupeMap.has(ele)) acc.dedupeMap.set(ele,1);
        else acc.dedupeMap.set(ele, acc.dedupeMap.get(ele)+1);
        return acc;
    },{
        dedupeMap : new Map(), // 중복 제거용 Map
    });
    
    // 중복이 많이 된 순으로 정렬
    // map의 순회가능(iterable) 한 속성을 이용하여 전개 연산한 배열로 정렬
    let result = [...dedupeMapObj.dedupeMap].sort((a,b)=>{
       return b[1] - a[1]; 
    });
    
    // key 값만 추출하여 튜플 생성
    return result.map(ele=>ele[0]*1);
}
