function solution(id_list, report, k) {
    let stopArr =[];
    let answer = Array.from({length:id_list.length}, ()=>0);
    let report2 = [... new Set(report)].map((ele)=>{return ele.split(' ')}); 
    let lenList = report2.length;
    // 1계정당 동일한 타인을 연속해서 신고한 것을 1번으로 간주
    //report2 = [["muzi","frodo"],["apeach","frodo"],["frodo","neo"],["muzi","neo"],["apeach","muzi"]]
    
    let obj = id_list.reduce((acc, ele)=>{
        acc[ele] = []
        return acc;
    },{})
    // {"muzi":[],"frodo":[],"apeach":[],"neo":[]}
    
    report2.forEach((ele, idx)=>{
        // console.log(`=============${idx}=================`)
        // console.log("obj[ele[1]]", obj[ele[1]] +  idx)
        // console.log("report2[idx[0]]", report2[idx][0] +idx)
        obj[ele[1]].push(report2[idx][0]) 
    })
    // {"muzi":["apeach"],"frodo":["muzi","apeach"],"apeach":[],"neo":["frodo","muzi"]}
    
    Object.entries(obj).forEach((ele, idx)=>{
        console.log(`=============${idx}=================`)
        console.log("ele[1].length", ele[1].length)
    })
    
      return obj; //{신고 당한자 : 신고한자}
    };    
