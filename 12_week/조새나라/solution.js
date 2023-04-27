function solution(s) {
    // 중복을 제거한 객체 생성
    let dedupeObj = s.replace(/([{}])/g,'').trim().split(',').reduce((acc,ele,idx)=>{
        if(!acc[ele]) acc[ele] = 1;
        else acc[ele] = acc[ele]+1;
        return acc;
    },{});
    
    // 중복이 많이 된 순으로 정렬
    let sortedDedupeArray =  Object.entries(dedupeObj).sort((a,b)=>{
       return b[1] - a[1]; 
    });

    // key 값만 추출하여 튜플 생성
    return sortedDedupeArray.map(ele=>ele[0]*1);
}
