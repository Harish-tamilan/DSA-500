package Arrays.BuyAndSellStock;

public class BestTimeToBuySellStock {

    //O(n^2) time and O(1) space
    public static int bestTimeToBuySellStock(int[] arr){
        int i,j,max=0,n=arr.length, temp;
        for(i=0;i<n;i++){
            for(j=i+1;j<n;j++){
                temp = arr[j]-arr[i];
                max = Math.max(temp, max);
            }
        }
        return max;
    }

    //O(n) time and O(1) space
    public static int maxProfit(int[] arr){
        int i=0,j=1,max=0,n=arr.length;
        while(j<n){
            if(arr[j]<arr[i]){
                i=j;
            }
            else{
                max = Math.max(max, arr[j]-arr[i]);
            }
            j++;
        }
        return max;
    }

    public static void main(String[] args) {
        int[] arr = {7,1,5,3,6,4};
        System.out.println(maxProfit(arr));
        System.out.println(bestTimeToBuySellStock(arr));
    }
}
