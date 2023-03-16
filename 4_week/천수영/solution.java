class Solution {
    public String solution(String new_id) {		
		String answer = "";
		String special = "~!@#$%^&*()=+[{]}:?,<>/";
		StringBuilder sb = new StringBuilder();

		for (int i = 0; i < new_id.length(); i++) {
			String str = String.valueOf(new_id.charAt(i));
			if( str.equals(".") && 
                 ( answer.length()==0 ||  String.valueOf(answer.charAt(answer.length()-1)).equals(".") ) ) continue;
			if( special.indexOf(str) >= 0 ) continue; // 특수문자인 경우
			str = str.toLowerCase(); // 소문자로 치환
			answer = sb.append(str).toString();
			if( answer.length()>=15 ) break; // 반환 글자수가 15면 종료
		}
		if( answer.equals("") ) answer = "aaa";
		if( answer.charAt(answer.length()-1) == '.' ) answer = answer.substring(0,answer.length()-1);
		if( answer.length() == 1 ) answer += String.valueOf(answer.charAt(answer.length()-1));
		if( answer.length() == 2 ) answer += String.valueOf(answer.charAt(answer.length()-1));
        
        
		return answer;

    }
}
