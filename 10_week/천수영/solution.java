import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Score {

    private double total = 0;
    double beforeValue = 0;
    double currentValue = 0;

    public void appendValue(int num ) {
        this.total += this.beforeValue;
        this.beforeValue = this.currentValue;
        this.currentValue = num;
    }

    public void doubleValue(){
        this.currentValue = Math.pow( this.currentValue , 2 );
    }

    public void tripleValue(){
        this.currentValue = Math.pow( this.currentValue , 3 );
    }

    public void multiplyTotalAndValue(){
        this.multiplyBeforeValue();
        this.multiplyCurrentValue();
    }

    public void multiplyBeforeValue(){
        this.beforeValue = this.beforeValue * 2;
    }

    public void multiplyCurrentValue(){ this.currentValue = this.currentValue * 2; }

    public void minusValue(){
        this.currentValue = -this.currentValue;
    }

    public void calFinish(){
        this.total += this.beforeValue + this.currentValue;
        this.beforeValue = 0;
        this.currentValue = 0;
    }

    public double getTotal(){
        return this.total;
    }

}



class Solution {
    public int solution(String dartResult) {
        
		Score score = new Score();
		Pattern pattern = Pattern.compile("(10)|[a-zA-Z0-9#/*]");
		Matcher matcher = pattern.matcher(dartResult);
		while(matcher.find()){
			String str = matcher.group();
			if(str.equals("S")) ;
			else if(str.equals("D")) score.doubleValue();
			else if(str.equals("T")) score.tripleValue();
			else if(str.equals("#")) score.minusValue();
			else if(str.equals("*")) score.multiplyTotalAndValue();
			else score.appendValue(Integer.parseInt(str));
		}
		score.calFinish();
        
        return (int)Math.round(score.getTotal());
        
    }
}



