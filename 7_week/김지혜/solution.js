function solution(N, stages) {
  const result = [];

  const failPeople = {};
  const failPercent = {};
  const sortedStages = stages.sort((a,b)=>a-b); // [1, 2, 2, 2, 3, 3, 4, 6 ]

  const keyArray = Array.from({length:N}, (v,i)=>i+1); 
  const valueArray = [];

  for (let i = 0; i < keyArray.length; i++) {
      valueArray[i] = sortedStages.filter((ele) => ele === keyArray[i]).length;
      failPeople[keyArray[i]] = valueArray[i]
  }
  console.log(failPeople)

  // =========================================================

  let userNum = stages.length;
  for (const [key, val] of Object.entries(failPeople)) {
      const failPer = val/userNum;
      failPercent[key] = failPer;
      userNum -= val;
      if(userNum == 0) userNum=1; 
  }
  console.log('failPer', failPercent)
  console.log(1/8, 3/7, 2/4, 1/2, 0/1 )

  console.log(failPercent)

  let sorted = Object.entries(failPercent).sort((a, b) => b[1] - a[1]);

  for(let element of sorted) {
	  result.push(element[0])
	  console.log(element[0]+ ": " + element[1]);
  }

  console.log(result)
  return result.map((ele)=>ele *1);
}

