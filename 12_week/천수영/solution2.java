import java.util.*;

class Solution {
  public static int[] solution(String s) {
      
		Set<Integer> set = new LinkedHashSet<>();
		s = s.substring(2, s.length()-2);
		String[] strArr = s.split("},\\{");
		Arrays.stream(strArr)
				.sorted(Comparator.comparing(String::length))
				.forEach( str ->{
					Arrays.stream(str.split(",")).forEach(e->set.add(Integer.valueOf(e)));
				});

		return set.stream().mapToInt(Integer::intValue).toArray();
     
    }
}
