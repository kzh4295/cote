
class Solution {
    
    // 메인 로직
    public String solution(int n, int t, int m, int p) {
		Tube tube = new Tube( n, t, m, p );
		tube.cal();
		return tube.getAnswer();
    }
    
    
    // 튜브 객체
	class Tube{
		int n;	//진법
        int t;	//미리 구할 숫자 갯수
        int m;	//참가 인원
        int p;  //튜브의 순서
		int num = 0;    //현재 숫자
		int totalNumLength; //지금까지 나온 숫자의 총길이
		int nextTubeIndex;  //다음 튜브의 순서
		String answer = ""; //결과

		public Tube( int n , int t , int m , int p) {
			this.n = n;
			this.t = t;
			this.m = m;
			this.p = p;
            this.num = 0; //숫자 0부터 시작
			this.totalNumLength = 1; //첫번째 숫자 길이 합계
			this.nextTubeIndex = p; // 첫번째 튜브의 순서
		}

		public void cal(){

			while(this.isContinue()){// 미리 구할 갯수 채웠는지 확인
                // 지금까지 나온 숫자 총 길이와 튜브의 순서를 비교 
                // 총길이가 길면 튜브의 숫자 가져오고 다음 튜브의 순서로 넘어감
                // 튜브의 순서가 길면 다음 숫자로 넘어감 
				if( totalNumLength >= nextTubeIndex ){ 
					saveTubeTarget(this.getBaseNum());
					nextTubeTarget();
				}
				if( totalNumLength <= nextTubeIndex ){
					nextBaseNum();
					sumTotalNumLength(this.getBaseNum());
				}
			}

		}

        // 다음 숫자로 넘어가기
		public void nextBaseNum(){
			this.num++;
		}

        // 해당 숫자의 진수값 가져오기
		public String getBaseNum(){
			return Integer.toString(this.num, this.n);
		}

        // 숫자 길이 총합계
		public void sumTotalNumLength(String baseNum){
			this.totalNumLength += baseNum.length();
		}

        // 다음 튜브의 순서
		public void nextTubeTarget(){
			this.nextTubeIndex += m;
		}

        // 튜브의 숫자 저장
		public void saveTubeTarget( String baseNum ){
			int targetIndex = baseNum.length() - ( this.totalNumLength - this.nextTubeIndex +1) ;
			String str = String.valueOf(baseNum.charAt(targetIndex)).toUpperCase();
			this.answer += str;
		}

        // 미리 구할 갯수 채웠는지 확인
		public boolean isContinue(){
			return answer.length() < t;
		}

        // 결과값 반환
		public String getAnswer(){
			return this.answer;
		};

	}
    
}
