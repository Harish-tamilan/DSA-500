package Arrays.Union;
import java.util.*;
public class Union {
    
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
        System.out.println(union2(arr, arr2));
    }
    
}
