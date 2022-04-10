package Arrays.LargestSumContinous;

public class LargestSumContinous {

    public static int largestSumContinous(int[] arr){
        int sum=Integer.MIN_VALUE,temp=0;
        for(int no:arr){
            if(temp+no<0){
                temp=0;
                sum = Math.max(sum, no);
            }else{
                temp += no;
                sum = Math.max(sum, temp);
            }
        }
        return sum;
    }
    
    public static void main(String[] args){
        int[] arr = {-1,-2,-3,-4};
        System.out.println(largestSumContinous(arr));
    }
}
