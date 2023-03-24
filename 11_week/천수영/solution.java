import java.util.*;


public class Cache {

    private final int HIT = 1;
    private final int MISS = 5;
    final HashMap<String, Integer> cache = new LinkedHashMap<>();
    int cacheSize = 0;
    int excuteTime = 0; // 총실행시간

    public Cache(int cacheSize) {
        this.cacheSize = cacheSize;
    }
    
    // 캐싱 작업
    public void caching(String str) {
        if(cacheSize<=0) this.increaseMissTime(); // 캐싱사이즈가 없는 경우
        else if( this.hasCacheData(str) ) this.hitCaching(str); // 캐시 데이터가 있는 경우
        else this.missCaching(str); // 캐시 데이터가 없는 경우
    }

    private boolean hasCacheData(String str){
        return cache.get(str) != null;
    }

    private void hitCaching(String str){
        this.cache.remove(str);
        this.cache.put(str, 0);
        this.increaseHitTime();
    }

    private void increaseHitTime(){
        this.excuteTime += this.HIT;
    }

    private void increaseMissTime(){
        this.excuteTime += this.MISS;
    }

    private void missCaching(String str){
        if(this.isFullCache()) this.removeLRU(); // 캐시가 가득찬 경우 1개 삭제 
        this.cache.put(str,0);
        this.increaseMissTime();
    }

    private boolean isFullCache(){
        return this.cache.size() >= this.cacheSize;
    };

    private void removeLRU(){
        // map의 첫번째 요소를 삭제 , linked hash map은 순서가 있다. 
        String firstStr = this.cache.keySet().iterator().next();
        this.cache.remove(firstStr);
    }

    public int excuteTime(){
        return this.excuteTime;
    }

}

class Solution {
    public int solution(int cacheSize, String[] cities) {
  		  Cache cache = new Cache(cacheSize);
	  	  Arrays.stream(cities).forEach( e->cache.caching(e.toLowerCase()) );
        return cache.excuteTime();
    }
}
