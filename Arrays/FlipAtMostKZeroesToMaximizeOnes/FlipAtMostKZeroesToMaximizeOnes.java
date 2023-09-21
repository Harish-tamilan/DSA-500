package Arrays.FlipAtMostKZeroesToMaximizeOnes;

public class FlipAtMostKZeroesToMaximizeOnes {
    static int left=0, right=0, temp, l=0, r=0, max=0, n;
    public static void moveToNextZeroAndIncrementCount(int[] arr){
        while(left<right && arr[left]==1){
            left++;
        }
        left++;
        temp++;
        right++;
    }

    public static void compareAndReassignMax(){
        if(right-left>max){
            max = right - left;
            l = left;
            r = right;
        }
    }

    public static void moveLeftOrRight(int[] arr){
        if(arr[right]==0){
            temp--;
        }
        if(temp==-1){
            moveToNextZeroAndIncrementCount(arr);
        }else{
            right++;
        }
        compareAndReassignMax();
    }
    public static int flipAtMostKZeroesToMaximizeOnes(int[] arr, int m){
        temp = m;
        n = arr.length;
        while(right<n){
            moveLeftOrRight(arr);
        }
        return r-l;
    }

    public static void main(String[] args) {
        int[] arr = {1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1};
        System.out.println(flipAtMostKZeroesToMaximizeOnes(arr, 2));
    }
}
