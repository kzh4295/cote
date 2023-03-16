import java.util.*;

class Solution {
    public int solution(int[] ingredient) {
        int answer = 0;
        
        		ArrayList<Integer> kitchen = new ArrayList<Integer>();
		int length = ingredient.length;
		for (int i = 0; i < length ; i++) {
			kitchen.add(ingredient[i]);
			int size = kitchen.size();
			if( size>=4 
               && kitchen.get(size-1)==1 
               && kitchen.get(size-2)==3 
               && kitchen.get(size-3)==2 
               && kitchen.get(size-4)==1 ){
				answer++;
				kitchen.remove(size-1);
				kitchen.remove(size-2);
				kitchen.remove(size-3);
				kitchen.remove(size-4);
			}
		}
        
        
        return answer;
    }
}
