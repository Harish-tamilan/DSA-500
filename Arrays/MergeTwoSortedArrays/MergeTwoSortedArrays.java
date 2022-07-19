package Arrays.MergeTwoSortedArrays;

import java.lang.reflect.Array;
import java.util.*;

public class MergeTwoSortedArrays {

    //O((n+m)log(n+m)) time and O(1) space
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

    public static void mergeTwoSortedArrays2(int[] arr, int[] arr2){
        int n=arr.length, m=arr2.length, i, j, temp;
        int gap = (n+m)/2;
        while(gap>=1){
            i=0;
            j=gap;
            while(j<(m+n)){
                if(j<n && arr[i]>arr[j]){
                    temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
                else if(j>=n && i<n && arr[i]>arr2[j-n]){
                    temp = arr[i];
                    arr[i] = arr2[j-n];
                    arr2[j-n] = temp;
                }
                else if(j>=n && i>=n && arr2[i-n]>arr2[j-n]){
                    temp = arr2[i-n];
                    arr2[i-n] = arr2[j-n];
                    arr2[j-n] = temp;
                }
                i++;
                j++;
            }
            gap = gap/2;
        }
    }

    public static void main(String[] args) {
        int[] arr = { 100, 112, 256, 349, 770 };
        int[] arr2 = { 72, 86, 113, 119, 265, 445, 892 };
        mergeTwoSortedArrays2(arr, arr2);
        System.out.println("Array 1 is ");
        for(int no:arr)
            System.out.print(no+" ");
        System.out.println("\nArray 2 is ");
        for(int no:arr2)
            System.out.print(no+" ");
    }
    
}
