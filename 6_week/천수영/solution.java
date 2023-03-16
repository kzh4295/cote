import java.util.*;

class Solution {
    public int solution(int[][] board, int[] moves) {
        int answer = 0;
        
        
		int boardMax = board.length;
		ArrayList<Integer> basket = new ArrayList<Integer>();
		int[] basketFindIndexs = new int[moves.length];
		int movesLength = moves.length;
		for (int i = 0; i < movesLength ; i++) {
			int point = moves[i]-1;
			while (true) {
				if( basketFindIndexs[point] >= boardMax ) break;
				int doll = board[basketFindIndexs[point]][point];
				basketFindIndexs[point]++;
				if( doll != 0) {
					basket.add(doll);
					break;
				}
			}
		}

		ArrayList<Integer> tempArr = new ArrayList<Integer>();
		for (int i = 0; i < basket.size(); i++) {
			if( i!=0 && !tempArr.isEmpty() && tempArr.get(tempArr.size()-1)==basket.get(i) ){
				answer+=2;
				tempArr.remove(tempArr.size()-1);
				continue;
			}
			tempArr.add(basket.get(i));
		}
        
        
        return answer;
    }
}
