import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.stream.Collectors;

class Solution {
    public String[] solution(String[] record) {
        HashMap<String, String> nameMap = new HashMap<String,String>();
		return Arrays.stream(record)
				.map((element)->{
					String[] currentRecord = element.split(" ");
					String action = currentRecord[0];
					String uid = currentRecord[1];
					String name = (currentRecord.length >= 3) ? currentRecord[2] : "";

					if ( !"".equals(name) ) nameMap.put(uid, name); // 별명사전 등록
					return ("Change".equals(action))? null : new Msg(nameMap, uid, action); // 메시지 객체 생성해서 배열에 추가
				})
				.filter((element)->{
					// 메시지 객체가 없으면 제거.
					return element != null;
				})
				.collect(Collectors.toList()).stream()
				.map((element)->{
					// 메시지 객체에서 메시지 추출
					return element.getMessage();
				})
				.toArray(String[]::new);

    }
    
    
    
    
	class Msg {
		HashMap<String, String> nameMap = new HashMap<String,String>(); // 별명사전
		String uid; 
		String action; 

		public Msg(HashMap<String, String> nameMap, String uid , String action) {
			this.nameMap = nameMap;
			this.uid = uid;
			this.action = action;
		}

		public String getMessage(){
      // 메시지 추출
			StringBuilder sb = new StringBuilder();
			return new StringBuilder()
					.append(this.nameMap.get(this.uid))
					.append(("Enter".equals(this.action)) ? "님이 들어왔습니다." : "님이 나갔습니다.")
					.toString();
		}

	}
    
}
