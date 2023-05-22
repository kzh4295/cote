import java.util.Arrays;


class Solution {
    public int solution(int n, int k) {
        
		int cnt = 0;
		String binaryStr = Integer.toString(n,k);
		String[] binaryStrArr = binaryStr.split("0");
		for (int i = 0; i < binaryStrArr.length ; i++) {
			String e = binaryStrArr[i];
			if( !"".equals(e) && isPrime(Long.valueOf(e)) ) cnt++;
		}

		return cnt;
    }
    
	public boolean isPrime(Long number){
		if( number <= 1 ) return false;
		for (int i = 2; i <= Math.sqrt(number); i++) {
			if (number % i == 0) {
				return false;
			}
		}
		return true;
	}
    
}
