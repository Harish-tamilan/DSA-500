package Arrays.MinimumSwapsRequired;

public class MinimumSwapsRequired {

    public static int findGoodOnes(int[] arr, int k){
        int count = 0;
        for(int no : arr){
            if(no<=k)
                count++;
        }
        return count;
    }

    public static int findBadOnes(int[] arr, int k, int n){
        int count=0;
        for(int i=0;i<n;i++){
            if(arr[i]>k)
                count++;
        }
        return count;
    }
    public static int minSwap (int arr[], int n, int k) {
        //Complete the function
        int lesserThanOrEqToK = findGoodOnes(arr, k),  greaterThanK = findBadOnes(arr, k, lesserThanOrEqToK);
        int i=1,j=lesserThanOrEqToK, ans = greaterThanK;
        while(j<n){
            if(arr[i-1]>k){
                greaterThanK--;
            }
            if(arr[j]>k){
                greaterThanK++;
            }
            ans = Math.min(ans, greaterThanK);
            i++;
            j++;
        }
        return ans;
    }

    public static void main(String[] args) {
        String s = "10 12 20 20 5 19 19 12 1 20 1";
        String[] arr = s.split(" ");
        int[] arr2 = new int[arr.length];
        for(int i=0;i<arr2.length;i++){
            arr2[i] = Integer.parseInt(arr[i]);
        }
        System.out.println(minSwap(arr2, arr2.length, 1));
    }
}
