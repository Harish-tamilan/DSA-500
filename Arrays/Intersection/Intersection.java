package Arrays.Intersection;

import java.util.*;

public class Intersection {
    
    public static List<Integer> intersection(int[] arr, int[] arr2){
        List<Integer> list = new ArrayList<>();
        int i=0,j=0,n=arr.length,n2=arr2.length;
        while(i<n&&j<n2){
            if(arr[i]==arr2[j]){
                list.add(arr[i]);
                i++;
                j++;
            }
            else if(arr[i]>arr2[j]){
                j++;
            }
            else{
                i++;
            }
        }
        return list;
    }

    public static void main(String[] args) {
        int[] arr = {4,5,9};
        int[] arr2 = {4,4,8,8,9};
        Arrays.sort(arr);
        Arrays.sort(arr2);
        System.out.print(intersection(arr, arr2));
    }
}
