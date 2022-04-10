package Arrays.Union;
import java.util.*;
public class Union {

    //O(m+n) space and time
    public static List<Integer> union(int[] arr, int[] arr2){
        List<Integer> list = new ArrayList<>();
        int i=0,j=0,n=arr.length,n2=arr2.length;
        while(i<n&&j<n2){
            while(i<n-1 && arr[i]==arr[i+1]){
                i++;
            }
            while(j<n2-1 && arr2[j]==arr2[j+1]){
                j++;
            }
            if(arr[i]<arr2[j]){
                list.add(arr[i]);
                i++;
            }
            else if(arr[i]>arr2[j]){
                list.add(arr2[j]);
                j++;
            }
            else {
                list.add(arr[i]);
                i++;
                j++;
            }
        }
        while(i<n){
            list.add(arr[i++]);
        }
        while(j<n2){
            list.add(arr2[j++]);
        }
        return list;
    }

    //O((m+n)log((m+n))) space and time
    public static Set union2(int[] arr, int[] arr2){
        Set<Integer> set = new TreeSet<>();
        for(int no:arr){
            set.add(no);
        }
        for(int no:arr2){
            set.add(no);
        }
        return set;
    }

    public static void main(String[] args) {
        int[] arr = {1, 3, 4, 5, 7};
        int[] arr2 = {2, 3, 5, 6};
        System.out.println(union(arr, arr2));
        System.out.println(union2(arr, arr2));
    }
    
}
