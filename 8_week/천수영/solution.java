class Solution {
    public String[] solution(int n, int[] arr1, int[] arr2) {
		String[] answer = new String[n];


		for (int i = 0; i < n ; i++) {
			// n자리수인 2진수 만들기
			String str1 = numToBinary(arr1[i],n);
			String str2 = numToBinary(arr2[i],n);

			// 지도 색칠하기
			StringBuilder sb = new StringBuilder();
			for (int j = 0; j < n ; j++) {
				String str = ( str1.charAt(j)=='1' || str2.charAt(j)=='1' )? "#":" ";
				sb.append(str);
			}
			answer[i] = sb.toString();
		}
        return answer;
    }
    
    
	private String numToBinary(int num , int n ){
		// 2진수 n자리 포멧
		StringBuilder sb = new StringBuilder();
		String format = sb.append("%0").append(n).append("d").toString();
		// n자리수인 2진수 만들기
		String str = Long.toBinaryString(num); // n자리 미만 n자리 만들기
		str = String.format( format , Long.parseLong(str) ); // n자리 이상 자르기
		return str.substring( str.length()-n,str.length());
	}
    
}
