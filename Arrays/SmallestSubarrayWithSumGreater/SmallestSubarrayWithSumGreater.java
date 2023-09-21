package Arrays.SmallestSubarrayWithSumGreater;

public class SmallestSubarrayWithSumGreater {
    public static int smallestSubWithSum(int[] arr, int n, int k){
        int sum=arr[0], right=0, left=0, len=Integer.MAX_VALUE, temp=0;
        while(right<n){
            if(sum<=k){
                right++;
                if(right<n)
                    sum += arr[right];
            }
            if(sum>k){
                temp = right-left;
                if(temp<len){
                    len = temp;
                }
                sum-=arr[left];
                left++;
            }
        }
        return len+1;
    }
    public static void main (String[] args) {
        int arr1[] = { 1, 4, 45, 6, 10, 19 };
        int x = 51;
        int n1 = arr1.length;
        int res1 = smallestSubWithSum(arr1, n1, x);
        if (res1 == n1 + 1)
            System.out.println("Not Possible");
        else
            System.out.println(res1);

        int arr2[] = { 1, 10, 5, 2, 7 };
        int n2 = arr2.length;
        x = 9;
        int res2 = smallestSubWithSum(arr2, n2, x);
        if (res2 == n2 + 1)
            System.out.println("Not Possible");
        else
            System.out.println(res2);

        int arr3[]
                = { 1, 11, 100, 1, 0, 200, 3, 2, 1, 250 };
        int n3 = arr3.length;
        x = 280;
        int res3 = smallestSubWithSum(arr3, n3, x);
        if (res3 == n3 + 1)
            System.out.println("Not Possible");
        else
            System.out.println(res3);

    }
}
