import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

class Solution {
    public int[] solution(String[] id_list, String[] report, int k) {

        // id별 응답메일 받은 횟수 
		LinkedHashMap<String, Integer> response_count = new LinkedHashMap<String, Integer>();
        // 초기화
		Arrays.stream(id_list).forEach( s->response_count.put(s,0) );

        
        // id별 신고한 사람 목록 생성
		Map<String, HashSet<String>> warning_list = new HashMap<String, HashSet<String>>();
        // id별 신고한 사람 데이터 축적
		Arrays.stream(report).map( s->s.split(" ")).forEach( s->{
			if( warning_list.get(s[1]) == null ) warning_list.put( s[1] , new HashSet<String>() );
			warning_list.get(s[1]).add(s[0]);
		});

        
        // id별 응답메일 받은 횟수 축적 
		warning_list.values().stream().forEach( s->{
			if( s.size() >= k ) s.forEach( userId->response_count.put(userId,response_count.get(userId)+1) );
		});

        // 반환 자료형으로 변환
		return response_count.values().stream().mapToInt(i -> i).toArray();
        
    }
}
