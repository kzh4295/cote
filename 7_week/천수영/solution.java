import java.util.*;

class Solution {
    public int[] solution(int N, int[] stages) {
		
		int[] answer = new int[N];
		int[] stageCnt = new int[N+1];
		float[] stagesResult = new float[N];
		int[] rank = new int[N];

		for (int i = 0; i < stages.length; i++) {
			stageCnt[stages[i]-1]++;
		}

		int totalCnt = 0;
		for ( int i = stageCnt.length-1 ; i >= 0 ; i-- ) {
			totalCnt += stageCnt[i];
			if( i == stageCnt.length-1 ) continue;
			if( stageCnt[i]==0 ) continue;
			stagesResult[i] = (float)stageCnt[i] / (float)totalCnt;
		}

		for ( int i = 0; i < stagesResult.length ; i++ ) {
			rank[i]++;
			for (int j = i+1 ; j < stagesResult.length ; j++) {
				if( stagesResult[i]  > stagesResult[j]){
					rank[j]++;
				}else if(stagesResult[i]  < stagesResult[j]){
					rank[i]++;
				}else {
					if(i > j) rank[j]++;
					else rank[j]++;
				}
			}
		}

		for (int i = 0; i < rank.length; i++) {
			answer[rank[i]-1] = i+1;
		}


        return answer;
    }
}
