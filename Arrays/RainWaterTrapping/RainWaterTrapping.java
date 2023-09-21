package Arrays.RainWaterTrapping;

public class RainWaterTrapping {
    public static void prefixSum1(int[] arr, int max, int n,int[] prev){
        for(int i=1;i<n-1;i++){
            if(arr[i]<max) {
                prev[i] = max;
            }else{
                max = arr[i];
            }
        }
    }

    public static void suffixSum1(int[] arr, int max, int n, int[] suff){
        for(int i=n-2;i>=0;i--){
            if(arr[i]<max) {
                suff[i] = max;
            }else{
                max = arr[i];
            }
        }
    }

    public static long calculateSum(int[] arr, int[] prev, int[] suff, int n){
        long sum=0;
        for(int i=1;i<n-1;i++){
            int temp = Math.min(prev[i], suff[i]);
            if(temp>0){
                sum += temp-arr[i];
            }
        }
        return sum;
    }
    public static long rainWaterTrapping(int[] arr, int n){
        int[] prev = new int[n];
        int[] suff = new int[n];
        prev[0] = 0;
        prefixSum1(arr, arr[0], n, prev);
        suff[n-1] = 0;
        suffixSum1(arr, arr[n-1], n, suff);
        return calculateSum(arr, prev, suff, n);
    }


    public static long rainWaterTrapping3(int[] arr, int n){
//        int[] prev = new int[n];
//        prev[0] = 0;
        int max = arr[0], i, max2;
        long sum=0;
        for(i=1;i<n-1;i++){
            if(arr[i]<max) {
                sum+= max-arr[i];
            }else{
                max = arr[i];
            }
        }
        max2 = arr[n-1];
        for(i=n-2;i>=0;i--){
            max2 = Math.max(arr[i], max2);
            if(max2<max) {
                sum = sum-(max-max2);
            }
        }
        return sum;
    }

    public static void main(String[] args) {
//        int[] arr = {8, 8, 2, 4, 5, 5, 1};
        int[] arr = {0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1};
        System.out.println(rainWaterTrapping(arr, arr.length));
        System.out.println(rainWaterTrapping(arr, arr.length));
    }
}
