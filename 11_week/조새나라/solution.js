function solution(cacheSize, cities) {
    let calcCaching = cities.reduce((acc,ele,idx,originEle)=>{
        if(cacheSize === 0){ //캐시 사이즈가 없을 경우엔 miss만 처리
           acc.runtime += 5; 
        }else{
            //캐싱 성공했는지 찾기.
            //대소문자 구분이 없으므로 indexOf 대신 findIndex.
            let eleIndex = acc.cacheArray.findIndex(element=>element.toLowerCase() === ele.toLowerCase()); 
            if(eleIndex === -1){ //cache miss
                if(acc.cacheArray.length === cacheSize)acc.cacheArray = acc.cacheArray.slice(1); // 캐시가 가득 찼을 경우 비우기
                acc.cacheArray.push(ele);
                acc.runtime += 5;
            }else{ //cache hit
                let hitEle = acc.cacheArray.splice(eleIndex,1).toString();
                acc.cacheArray.push(hitEle);
                acc.runtime += 1;
            }
        }        
        return acc;
    },{
        cacheArray : [],
        runtime : 0
    });
    return calcCaching.runtime;
}
