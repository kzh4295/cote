import java.util.*;


class Solution {
    public int solution(String str1, String str2) {

		String specialChar = ".*[^a-zA-Z].*";
		Calculator calculator = new Calculator();

		str1 = str1.toUpperCase();
		int str1Length = str1.length();
		for (int i = 0; i < str1Length-1; i++) {
			String str = (str1.substring(i, i+2));
			if(str.matches(specialChar)) continue;			
			calculator.setStr1(str);
		}

		str2 = str2.toUpperCase();
		int str2Length = str2.length();
		for (int i = 0; i < str2Length-1 ; i++) {
			String str = (str2.substring(i, i+2));
			if(str.matches(specialChar)) continue;			
			calculator.setStr2(str);
		}

		int intersectionCnt = calculator.getIntersectionCnt();
		int unionCnt = calculator.getUnionCnt();

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
			this.intersectionCnt++;
			if( this.intersectionMap.get(str1) != null ){
				this.intersectionMap.put(str1, this.intersectionMap.get(str1)+1 );
			}else{
				this.intersectionMap.put(str1, 1 );
			}
		}

		public void addUnionMap(String str1){
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
