package Arrays.FindDuplicates;

public class FindDuplicates {

    //O(n^2) time
    public static int findDuplicates(int[] arr){
        int i,j,n=arr.length;
        for(i=0;i<n;i++){
            for(j=i+1;j<n;j++){
                if(arr[i]==arr[j]){
                    return arr[i];
                }
            }
        }
        return 0;
    }

    public static int findDuplicates2(int[] arr){
        int i,j,n=arr.length, slow=0, fast=0;
        while(true){
            slow = arr[slow];
            fast = arr[arr[fast]];
            if(slow==fast)
                break;
        }
        slow=0;
        while(slow!=fast){
            slow = arr[slow];
            fast = arr[fast];
        }
        return slow;
    }

    public static void main(String[] args) {
        
        int[] arr = {1,3,4,4,2};
        System.out.println(findDuplicates(arr));
        System.out.println(findDuplicates2(arr));
    }
}
