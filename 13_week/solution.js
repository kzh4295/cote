function solution(str1, str2) {
    // 각 문자를 조건에 맞춰 다중집합 만들기.
    let multiset1 = [...str1.toUpperCase()].reduce((acc,ele,idx,thisArr)=>{
        let bubbleEle = ele+thisArr[idx+1];
        if(!/[^A-Z]/g.test(bubbleEle) && thisArr[idx+1]) acc.push(bubbleEle); 
        return acc;
    },[]);
    
    let multiset2 = [...str2.toUpperCase()].reduce((acc,ele,idx,thisArr)=>{
        let bubbleEle = ele+thisArr[idx+1];
        if(!/[^A-Z]/g.test(bubbleEle) && thisArr[idx+1]) acc.push(bubbleEle); 
        return acc;
    },[]);

     
    // 두 다중집합의 교집합 만들기.
    let mergeMultisetArray = multiset1.concat(multiset2); // 다중집합을 단순 머지한 배열.
    let intersectionArray = multiset2.reduce((acc,ele,idx,thisArr)=>{
        if(multiset1.indexOf(ele) !== -1) acc.push(multiset1.splice(multiset1.indexOf(ele),1));
        return acc;
    },[]);
    


    /* 
    * 다중집합은 있지만 교집합이 없는 경우 0, 
    * 그외의 경우 계산한 자카드 유사도 출력. -> 교집합/(단순머지집합-교집합=합집합) * 65536의 정수부만 출력.
    */ 
    if( mergeMultisetArray.length && !intersectionArray.length) return 0;
    else return Math.floor(intersectionArray.length / (mergeMultisetArray.length-intersectionArray.length) * 65536) || 65536;
}
