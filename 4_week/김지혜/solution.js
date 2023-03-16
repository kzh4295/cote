function solution(new_id) {
    let answer = '';
    
		// 1단계
    answer = new_id.toLowerCase();

		// 2단계
    answer = answer.replace(/[^\w-_.]+/g,'')

	  // 3단계
   	answer = answer.replace(/\.{2,}/g, '.') 
    
		// 4단계
    if(answer.at(0) === '.'){
       answer = answer.slice(1); 
    }
    if(answer.at(-1) === '.'){
       answer = answer.slice(0,-1)
    }    
    
		// 5단계
    if(answer.length === 0){
        answer = 'a';
    } 
    
		// 6단계
    if(answer.length >= 16){
        answer = answer.slice(0,15);
    } 

    if(answer.at(-1) === '.'){
       answer = answer.slice(0,-1);
    }
    
	  // 7단계
    while(answer.length <= 2){
        answer = answer + answer.at(-1);
    }
    
    
    return answer;
}
