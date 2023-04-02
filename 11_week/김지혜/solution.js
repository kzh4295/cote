function solution(cacheSize, cities) {
    let answer = 0;
    const tempCities = cities;
    const cache = [];
    
    // cache배열에 있는 요소가 
    // tempCities의 요소와 같으면 
    // answer값이 1만큼 증가하면서 해당 cache값을 삭제
    // 그렇지 않으면 5만큼 증가 
  
    tempCities.forEach((city) => {
        // 대소문자 구분 없음
        city = city.toLowerCase();
        if(cache.includes(city)) {
            answer++;
            cache.splice(cache.indexOf(city),1);
        } else {
            answer += 5;
        }
        cache.push(city);
        // cacheSize보다 크면 맨앞 요소 제거
        if(cache.length > cacheSize) cache.shift();
    })

    return answer;
}

<팁>
  - parameter를 받아서 변경이 일어나지 않는다면 굳이 tempCities같이 담을 필요가 없음
