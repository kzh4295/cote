import java.util.*;

class Solution {
    public String solution(String[] survey, int[] choices) {
        String answer = "";       
		int[] pointChange = { 0 , 3 , 2 , 1 , 0 , 1 , 2, 3 };
		HashMap<String, Integer> map = new HashMap<String,Integer>();

		String[] mbti = { "R" , "T" , "C" , "F" , "J" , "M" , "A" , "N" };
		for (int i = 0; i < mbti.length; i++) {
			map.put(mbti[i],0);
		}

		int length = survey.length;
		for (int i = 0; i < length; i++) {
			if( choices[i]==4 ) continue;

			// MBTI 종류
			int index = ( choices[i]<4 )? 0 : 1;
			String ch = String.valueOf(survey[i].charAt(index));
			
			// 가산점 계산
			int point = ( (map.containsKey(ch))? map.get(ch):0 ) + pointChange[choices[i]];

			// 누적
			map.put(ch,point);
		}	
        
        return (( map.get("R") >= map.get("T") )? "R" : "T")
				+ (( map.get("C") >= map.get("F") )? "C" : "F")
				+ (( map.get("J") >= map.get("M") )? "J" : "M")
				+ (( map.get("A") >= map.get("N") )? "A" : "N");
    }
}
