
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
      
      int length = dartResult.length();
      for (int i = 0; i < length; i++) {
        char ch = dartResult.charAt(i);
        if(ch=='S') ;
        else if(ch=='D') score.doubleValue();
        else if(ch=='T') score.tripleValue();
        else if(ch=='#') score.minusValue();
        else if(ch=='*') score.multiplyTotalAndValue();
        else if(dartResult.charAt(i+1)=='0'){
          score.appendValue(10);
          i++;
        }
        else score.appendValue(Integer.parseInt(String.valueOf(ch)));
      }
      score.calFinish();
      
      return (int)Math.round(score.getTotal());
        
    }
}



