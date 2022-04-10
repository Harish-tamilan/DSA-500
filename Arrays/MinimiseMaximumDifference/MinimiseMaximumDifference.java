package Arrays.MinimiseMaximumDifference;
import java.util.*;
public class MinimiseMaximumDifference {

    public static int minimise(int[] arr, int k){
        Arrays.sort(arr);
        int n = arr.length;
        int tempMax = arr[n-1]-k;
        int tempMin = arr[0]+k;
        int ans = (arr[n-1]+k) - tempMin;
        int max,min;
        for(int i=0;i<n-1;i++){
            if(arr[i]+k>=tempMax){
                max = arr[i]+k;
            }else{
                max = tempMax;
            }
            if(arr[i+1]-k<=tempMin){
                min = arr[i+1]-k;
            }else{
                min = tempMin;
            }
            ans = Math.min(ans, max-min);
        }
        return ans;
    }
    
    public static void main(String[] args) {
        int[] arr = {3, 9, 12, 16, 20};
        int k = 3;
        System.out.println(minimise(arr,k));
    }
}
