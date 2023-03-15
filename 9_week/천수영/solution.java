import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
class Solution {
    
    public int[] solution(String today, String[] terms, String[] privacies) {
		        
		int monthPerDate = 28;
		ArrayList<Integer> answer = new ArrayList<Integer>();
		// 약관 종류별 유효기간을 Map으로 변환
		Map<String, Integer> termsMap = Arrays.stream(terms).map(s->s.split(" ")).collect(Collectors.toMap( s->s[0]  , s-> Integer.valueOf(s[1]) ));
		// 오늘 날짜를 List로 변환
		Integer[] todayList = dayStringToDayList(today);

		IntStream.range( 0 , privacies.length ).forEach( i ->{
			// 약관 종류로 유효기간 계산
			String termType = privacies[i].split(" ")[1];
			int term = monthPerDate * termsMap.get(termType);

			// 수집일로 부터 몇일 지났는지 계산
			String collectionDay = privacies[i].split(" ")[0];
			int date = calDate( todayList , dayStringToDayList(collectionDay) , monthPerDate );

			// 유효기간과 지난 일자 비교
			if( term <= date ) answer.add(i+1);
		});
        
        return answer.stream().mapToInt(i -> i).toArray();
    }
    
	// 문자열로 된 날짜를 List로 변환
	private Integer[] dayStringToDayList( String dayStr ){
		return Arrays.stream(dayStr.split("\\.")).map(s -> Integer.valueOf(s)).toArray(Integer[]::new);
	}

	// 오늘 날짜와 수집을 입력받아서 몇일 지났는지 계산
	private int calDate( Integer[] todayList , Integer[] collectionDayList , int monthPerDate ) {
		int yearGap = todayList[0]-collectionDayList[0];
		int monthGap = todayList[1]-collectionDayList[1];
		int dayGap = todayList[2]-collectionDayList[2];
		return ( (yearGap * 12) + monthGap ) * monthPerDate + dayGap;
	};


    
}
