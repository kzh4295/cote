import java.util.*;

class Solution {
  public static int[] solution(String s) {
      
		Set<Integer> result = new LinkedHashSet<Integer>();
		s = s.substring(2, s.length()-2);
		String[] strArr = s.split("},\\{");
		Object[] strArr2 = new Object[strArr.length];

		Arrays.stream(strArr).forEach(e->{
			String[] tempStrArr = e.split(",");
			strArr2[tempStrArr.length-1] = tempStrArr;
		});

		Arrays.stream(strArr2).forEach(e->{
			Arrays.stream((String[])e).forEach(e2->{
				result.add(Integer.valueOf(e2));
			});
		});

		return result.stream().mapToInt(Integer::intValue).toArray();
     
    }
}
