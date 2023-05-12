import java.util.*;


class Solution {
    public int solution(String str1, String str2) {

		String specialChar = ".*[^a-zA-Z].*";
		Calculator calculator = new Calculator();

        // 첫번째 문자열 저장 및 연산
		str1 = str1.toUpperCase();
		int str1Length = str1.length();
		for (int i = 0; i < str1Length-1; i++) {
			String str = (str1.substring(i, i+2));
			if(str.matches(specialChar)) continue;	// 특수문자 제거
			calculator.setStr1(str);
		}

        // 두번째 문자열 저장 및 연산
		str2 = str2.toUpperCase();
		int str2Length = str2.length();
		for (int i = 0; i < str2Length-1 ; i++) {
			String str = (str2.substring(i, i+2));
			if(str.matches(specialChar)) continue;	// 특수문자 제거
			calculator.setStr2(str);
		}

		int intersectionCnt = calculator.getIntersectionCnt(); // 합집합
		int unionCnt = calculator.getUnionCnt(); // 공집합

		double jaccardSimilarit = ( unionCnt == 0 && intersectionCnt == 0 )? 1 : (double)unionCnt / (double)intersectionCnt ; // 자카드 유사도
		int result = (int) Math.floor( jaccardSimilarit * 65536 );
		
        
        return result;
    }
    
    
	class Calculator {

		HashMap<String,Integer> intersectionMap = new HashMap<>();    // 교집합
		int intersectionCnt = 0;
		HashMap<String,Integer> unionMap = new HashMap<>();   // 합집합
		int unionCnt = 0;

		public void setStr1(String str1){
			this.addIntersectionMap(str1);
			this.addUnionMap(str1);
		}

		public void addIntersectionMap(String str1){
			this.intersectionCnt++; // 합집합 cnt 증가
            // 합집합 map에 저장 , 중복은 개수 증가
			if( this.intersectionMap.get(str1) != null ){
				this.intersectionMap.put(str1, this.intersectionMap.get(str1)+1 );
			}else{
				this.intersectionMap.put(str1, 1 );
			}
		}

		public void addUnionMap(String str1){
            // 공집합 map에 저장 , 중복에는 삼계탕 먹고 쨰양 힘내라! 
			if( this.unionMap.get(str1) != null ){
				this.unionMap.put(str1, this.unionMap.get(str1)+1 );
			}else{
				this.unionMap.put(str1, 1 );
			}
		}

		public void setStr2(String str2){
			this.calIntersection(str2);
			this.calUnion(str2);
		}

		public void calIntersection(String str2){
            // 합집합 map에 없으면 cnt 증가 , 있으면 요소 삭제
			if( this.intersectionMap.get(str2) != null ){
				if( this.intersectionMap.get(str2) > 1 ){ 
					this.intersectionMap.put(str2, this.intersectionMap.get(str2)-1 );
				}else{ 
					this.intersectionMap.remove(str2);
				}
			}else{
				this.intersectionCnt++; 
			}
		}

		public void calUnion(String str2){
            // 공집합 map에 있으면 cnt 증가하고 요소 삭제 , 없으면 아무일도 일어 나지 않는다
			if( this.unionMap.get(str2) != null ){
				this.unionCnt++;
				if( this.unionMap.get(str2) > 1 ){
					this.unionMap.put(str2, this.unionMap.get(str2)-1 );
				}else{
					this.unionMap.remove(str2);
				}
			}
		}


		public int getIntersectionCnt(){
			return this.intersectionCnt;
		};

		public int getUnionCnt(){
			return this.unionCnt;
		};


	}
    
}
