class Solution {
    public String solution(int[] numbers, String hand) {

        
		StringBuilder sb = new StringBuilder();
		int leftHand = 10;
		int rightHand = 11;

		int[][] phone = {  /* 0 */{3,1} , /* 1 */{0,0} , /* 2 */{0,1} , /* 3 */{0,2} , /* 4 */{1,0} , /* 5 */{1,1}
				,  /* 6 */{1,2} , /* 7 */{2,0} , /* 8 */{2,1} , /* 9 */{2,2} , /* *=10 */{3,0} , /* #=11 */{3,2} };


		for (int i = 0; i < numbers.length; i++) {
			int num = numbers[i];
			int rightDist = 0;
			int leftDist = 0;

			if( num == 1 || num == 4 || num == 7 ){
				sb.append("L");
				leftHand = num;
			}else if( num == 3 || num == 6 || num == 9 ){
				sb.append("R");
				rightHand = num;
			}else{

				int[] numCoord = phone[num];
				int[] rightCoord = phone[rightHand];
				int[] leftCoord = phone[leftHand];

				rightDist = Math.abs(numCoord[0]-rightCoord[0]) + Math.abs(numCoord[1]-rightCoord[1]);
				leftDist = Math.abs(numCoord[0]-leftCoord[0]) + Math.abs(numCoord[1]-leftCoord[1]);

				if( rightDist > leftDist || ( rightDist == leftDist && hand.equals("left") )){
					sb.append("L");
					leftHand = num;
				}else if( rightDist < leftDist || ( rightDist == leftDist && hand.equals("right") ) ){
					sb.append("R");
					rightHand = num;
				}

			}
		}

        
        return sb.toString();
    }
}
