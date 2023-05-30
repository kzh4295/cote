import java.util.ArrayList;
import java.util.HashMap;

class Solution {
    
    public int[] solution(String msg) {          
        ArrayList<Integer> result = solution( msg , 1 , makeDic() , new ArrayList<>() );
		return result.stream().mapToInt(Integer::intValue).toArray();       
    }
    
    
    public HashMap<String,Integer> makeDic(){
		HashMap<String,Integer> dic = new HashMap<>();
		for (int i = 1 ; i < 27; i++) {
			char ch = (char)(64+i);
			dic.put( String.valueOf(ch) , i );
		}
		return dic;
	}
    
    
	public ArrayList<Integer> solution( String msg , int maxWordLength , HashMap<String,Integer> dic , ArrayList<Integer> result){

		// 종료 조건
		if( msg.length() <= 0 ) return result;

		for (int i = maxWordLength; i >= 0 ; i--) {
			// 남은 길이보다 자르려는 길이가 길면 넘어가기
			if( msg.length() < i ) continue;
			String temStr = msg.substring(0,i);
			// 사전에 단어가 없으면 넘어가기
			if( !dic.containsKey(temStr) ) continue;
			// 결과값 추가
			result.add(dic.get(temStr));
			// 사전에 단어 추가
			if( msg.length() > i+1 ) dic.put( msg.substring(0,i+1) , dic.size()+1 );
			// 사전 단어 최대길이
			if( maxWordLength < i+1 ) maxWordLength = i+1;
			msg = msg.substring( i ,msg.length());
			break;
		}
		return solution( msg , maxWordLength, dic, result );

	}
    
    
}
