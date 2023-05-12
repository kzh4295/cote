// 소=> 대문자 통일, 문자 제외한 나머지는 제거
// 요소 2개씩 넣은 배열 생성
// 합집합 구하기 => 두배열의 합 - 교집합
// 교집합 구하기 =>countObj를 이용하여 2개이상이면 교집합으로 처리
// result = 교집합.length/합집합.length * 65536

// =============================================

function solution(str1, str2) {
    // solution 함수의 return될 변수
    let answer = 0;
    // str1에 변화를 감지하는 변수
    let tempStr1 = '';
    // str2에 변화를 감지하는 변수
    let tempStr2 = '';
    // 공백, 특수문자는 제거하는 정규식
    let reg = /[^a-z]/gi;
    
    // 2개의 파라미터의 스트링배열 요소를 앞에서부터 2자씩 쌍을 이룬 요소로 변환시키는 변수
    let str1Array = [];
    let str2Array = [];
    let concatArray = [];
    let union;
    let intersection =[];


    // 문자열 대소문자 바꾸고, 공백과 특수 문자는 정규식 이용해서 제거
    tempStr1 = str1.toUpperCase().replace(reg, "")
    tempStr2 = str2.toUpperCase().replace(reg, "")
    console.log(tempStr1, tempStr2)

    // tempStr1, tempStr2은 문자열이니까 배열에 원소 두개씩 넣기
    let tempArr1 = [...tempStr1]
    for(let i = 0; i<tempArr1.length-1; i++){
        str1Array.push(`${tempArr1[i]}${tempArr1[i+1]}`)
    }
    let tempArr2 = [...tempStr2]
    for(let i = 0; i<tempArr2.length-1; i++){
        str2Array.push(`${tempArr2[i]}${tempArr2[i+1]}`)
    }
    
    
    concatArray = [...str1Array, ...str2Array]
    let countObj = concatArray.reduce((acc, ele)=>{
        acc[ele] = (acc[ele] || 0) + 1;
        return acc;
    },{})
    console.log(countObj)
    
    union = Object.keys(countObj)

    intersection = Object.entries(countObj).map((ele)=>{
        if(ele[1]>1){
            return ele[0]
        }
    })

    // answer = 교집합의 크기 / 합집합의 크기 * 65536
    answer = intersection.length / union.length * 65536

    return answer;
}
