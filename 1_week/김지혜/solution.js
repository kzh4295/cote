function solution(ingredient){    
    let answer = 0;    
    let str = ingredient.join('');    
    let idx = str.indexOf('1231');        
    console.log(idx)
    if(idx === 0){
        console.log("str-0-1:", str)
        str = str.slice(0, idx) + str.slice(idx+5)
        console.log("str-0-2:", str)
        answer++        
    } else if(idx > 0){
        console.log("str-1-1:", str)
        str = str.slice(0, idx) + str.slice(idx+5)
        console.log("str-1-2:", str)
        answer++
    } 
  return answer    
}

