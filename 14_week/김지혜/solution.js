function solution(n, k) {
    // n을 k진수로 변환하고 0을 기준으로 갈른 값을 배열로 구함
    const numbers = n.toString(k).split('0')

    // 소수 판별하는 함수
    const isPrime = (num) => {
        // 공백이거나 숫자 1일 경우 false
        if(!num || num===1) return false;
        // 소수가 아닐 경우 false
        for(let i = 2; i<= Math.sqrt(num); i++){
            if(num % i === 0) return false;
        }
        // 소수일 경우 true
        return true;
    }
    
    // numbers의 현재 값이 true이면 +1씩 연산 
    return numbers.reduce((acc,cur) => acc + (isPrime(+cur) ? 1 : 0),0)
}
