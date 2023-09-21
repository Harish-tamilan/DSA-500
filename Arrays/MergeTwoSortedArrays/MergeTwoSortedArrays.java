package Arrays.MergeTwoSortedArrays;

import java.lang.reflect.Array;
import java.util.*;

public class MergeTwoSortedArrays {
    public static void mergeTwoSortedArrays(int[] arr, int[] arr2){
        int i=0,j=0,k=arr.length-1,temp;
        while(i<=k && j<arr2.length){
            if(arr[i]<arr2[j])
                i++;
            else{
                temp = arr2[j];
                arr2[j] = arr[k];
                arr[k] = temp;
                k--;
                j++;
            }
        }
        Arrays.sort(arr);
        Arrays.sort(arr2);
    }


    public static void main(String[] args) {
        String s = "6 7 7 15 21";
        String s2 = "5 7 9 17";
        String[] sarr = s.split(" ");
        String[] sarr2 = s2.split(" ");
        int[] arr = new int[sarr.length];
        int[] arr2 = new int[sarr2.length];
        for(int i=0;i<sarr.length;i++){
            arr[i] = Integer.parseInt(sarr[i]);
        }
        for(int i=0;i<sarr2.length;i++){
            arr2[i] = Integer.parseInt(sarr2[i]);
        }
        mergeTwoSortedArrays(arr, arr2);
//        mergeTwoSortedArrays3(arr, arr2);
        System.out.println("Array 1 is ");
        for(int no:arr)
            System.out.print(no+" ");
        System.out.println("\nArray 2 is ");
        for(int no:arr2)
            System.out.print(no+" ");
    }
}
