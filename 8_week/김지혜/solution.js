function solution(n,arr1, arr2) {
    let answer =[];
    const conversionOne  = arr1.map(ele=>ele.toString(2) * 1);
    const conversionTwo  = arr2.map(ele=>ele.toString(2) * 1);

    for(let i =  0; i < n; i++){
      if((conversionOne[i]  + conversionTwo[i]).length === n){
        answer[i] = (conversionOne[i]  + conversionTwo[i]) + ''
      } else{
        answer[i] = (conversionOne[i]  + conversionTwo[i]+'').padStart(n, '0')
      }
    }
    answer = answer.map((ele)=>{ return ele.replaceAll('0', ' ').replaceAll('1', '#').replaceAll('2', '#')})

    return answer;
}
