package Arrays.Reverse;

import java.util.*;

public class Reverse {

    //O(n) time & space solution
    public static int[] reverse1(int[] arr){
        int i, n=arr.length, j=0;
        int[] temp = new int[n];
        for(i=n-1;i>=0;i--){
            temp[j++] = arr[i];
        }
        return temp;
    }

    //O(n/2) time & O(1) space solution
    public static void reverse2(int[] arr){
        int i=0, j=arr.length-1,temp;
        while(i<=j){
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
    }

    public static void main(String[] args){
        int[] arr = {1,2,3,4,5};
        //arr = reverse1(arr);
        reverse2(arr);
        for(int no: arr){
            System.out.print(no+" ");
        }
    }
}
