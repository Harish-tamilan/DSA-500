package Arrays.NextPermutation;

import java.util.*;

public class NextPermutation {
    //Traditional permutation method, O(n*n!) time and O(n) space
    public static List<String> nextPermutation(String ques, String ans, List<String> list){
        if(ques.length()==0){
            //System.out.println(ans);
            list.add(ans);
            //return list;
        }

        for(int i=0;i<ques.length();i++){
            char c = ques.charAt(i);
            nextPermutation(ques.substring(0, i) + ques.substring(i+1), ans+c, list);
        }
        return list;
    }

    //Two pointer approach, O(n) time and O(1) space
    public static void nextPermutation(int[] nums) {
        int i=nums.length-2;
        while(i>=0&&nums[i]>=nums[i+1])
            i--;
        int j=nums.length-1;
        if(i>=0){
            while(nums[j]<=nums[i])
                j--;
            swap(nums,i,j);
        }
        i=i+1;
        j=nums.length-1;
        while(i<=j){
            swap(nums,i,j);
            i++;
            j--;
        }
    }

    public static void swap(int[] arr, int i, int j){
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    public static void main(String[] args) {
        int[] arr = {1,3,2};
        // int num = 0;

        // for(int no:arr){
        //     num = num*10+no;
        // }
        // System.out.println(num);
        // String str = "";

        // for(int no:arr)
        //     str+=no;

        // List<String> list = nextPermutation(str, "", new ArrayList<>());
        // Collections.sort(list);
        // int ind = Collections.binarySearch(list, str);
        // if(ind==list.size()-1)
        // {
        //     Arrays.sort(arr);
        //     String ans = "";
        //     for(int no:arr){
        //         ans += no;
        //     }
        //     System.out.println(ans);
        // }
        // else
        //     System.out.println(list.get(ind+1));
        nextPermutation(arr);
        for(int no:arr)
            System.out.print(no+" ");
        
    }
}
